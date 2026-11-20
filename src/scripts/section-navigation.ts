const home = document.body.dataset.homeUrl!;
const intentKey = `ez-kyosk-section:${home}`;
const homePath = new URL(home, location.origin).pathname;
const isHome = location.pathname.replace(/\/$/,'') === homePath.replace(/\/$/,'');
const header = document.querySelector<HTMLElement>('[data-site-header]');
const links = [...document.querySelectorAll<HTMLAnchorElement>('#main-navigation > a:not(.nav-mobile-cta)')];
type Intent = { section: string; detail?: string; at: number; pointer?: boolean };

function storeIntent(section: string, detail?: string, pointer = false) {
  try { sessionStorage.setItem(intentKey, JSON.stringify({ section, detail, at: Date.now(), pointer })); } catch { /* Clean Home fallback remains usable. */ }
}
function closeMenu() {
  header?.classList.remove('nav-open');
  document.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');
}
let jumpVersion = 0;
let titleGlow: Animation | undefined;
let pointerHeading: HTMLElement | undefined;

// Observe actual scroll settling, including no-op jumps, instead of guessing a scroll duration.
async function glowAfterScroll(title: HTMLElement, version: number) {
  const started = performance.now();
  let lastY = scrollY, stableSince = started;
  const settled = await new Promise<boolean>(resolve => {
    function sample(now: number) {
      if (version !== jumpVersion || !title.isConnected) { resolve(false); return; }
      if (Math.abs(scrollY - lastY) > .5) stableSince = now;
      lastY = scrollY;
      if (now - started >= 150 && now - stableSince >= 120) { resolve(true); return; }
      if (now - started > 3000) { resolve(false); return; }
      requestAnimationFrame(sample);
    }
    requestAnimationFrame(sample);
  });
  if (!settled || version !== jumpVersion) return;
  const halo = '0 0 5px rgba(37,99,235,.65), 0 0 14px rgba(6,182,212,.45)';
  const rest = getComputedStyle(title).textShadow;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  titleGlow = title.animate(reduced ? [
    { textShadow: halo, offset: 0 }, { textShadow: halo, offset: .7 }, { textShadow: rest, offset: 1 },
  ] : [
    { textShadow: rest, offset: 0 }, { textShadow: halo, offset: .22 },
    { textShadow: rest, offset: .48 }, { textShadow: halo, offset: .72 },
    { textShadow: rest, offset: 1 },
  ], { duration: reduced ? 650 : 1800, easing: 'ease-in-out' });
}

async function jump(section: string, detail?: string, pointer = false) {
  const version = ++jumpVersion;
  titleGlow?.cancel();
  pointerHeading?.classList.remove('section-pointer-focus');
  await document.fonts.ready;
  await new Promise(requestAnimationFrame);
  if (version !== jumpVersion) return;
  const target = document.getElementById(section);
  if (!target) return;
  if (detail) document.getElementById(`tab-${detail}`)?.click();
  const requestedPanel = section === 'products' && detail ? document.getElementById(`panel-${detail}`) : null;
  // On phones all five panels are stacked. Detail links must reveal that panel,
  // not just the beginning of the entire Products section. Normal nav stays unchanged.
  const stackedPanels = [...target.querySelectorAll<HTMLElement>('[role="tabpanel"]')].filter(panel => panel.getClientRects().length > 0).length > 1;
  const frameTarget = requestedPanel && stackedPanels ? requestedPanel : target;
  const focusTarget = requestedPanel || target;
  const focus = focusTarget.querySelector<HTMLElement>('h1,h2,h3') || focusTarget;
  pointerHeading = pointer ? focus : undefined;
  focus.classList.toggle('section-pointer-focus', pointer);
  focus.setAttribute('tabindex','-1');
  focus.focus({ preventScroll:true });
  const headerHeight = header?.getBoundingClientRect().height || 92;
  // Layout coordinates exclude the existing reveal animation's temporary translateY.
  let targetTop = 0;
  for (let node: HTMLElement | null = frameTarget; node; node = node.offsetParent as HTMLElement | null) targetTop += node.offsetTop;
  const style = getComputedStyle(frameTarget);
  const paddingTop = parseFloat(style.paddingTop) || 0;
  const paddingBottom = parseFloat(style.paddingBottom) || 0;
  const frameHeight = frameTarget.offsetHeight - paddingTop - paddingBottom;
  const available = innerHeight - headerHeight;
  // Center the complete content frame, not the section's decorative outer padding.
  // Taller frames keep a readable start position and ordinary vertical scrolling.
  const inset = frameHeight <= available - 32 ? (available - frameHeight) / 2 : 16;
  window.scrollTo({ top:section === 'home' ? 0 : targetTop + paddingTop - headerHeight - inset,
    behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  links.forEach(link => { link.removeAttribute('aria-current'); if (link.dataset.section === section) link.setAttribute('aria-current','location'); });
  if (pointer) void glowAfterScroll(focus, version);
}

// A later keyboard interaction must not inherit pointer-only outline suppression.
document.addEventListener('keydown', () => {
  pointerHeading?.classList.remove('section-pointer-focus');
  pointerHeading = undefined;
  titleGlow?.cancel();
  ++jumpVersion;
});

document.addEventListener('click', event => {
  if (!(event.target instanceof Element) || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest<HTMLAnchorElement>('a[data-section]');
  if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
  const section = link.dataset.section!;
  if (isHome && document.getElementById(section)) {
    event.preventDefault();
    if (location.hash) history.replaceState(history.state,'',location.pathname+location.search);
    closeMenu(); void jump(section, undefined, event.detail > 0);
  } else storeIntent(section, undefined, event.detail > 0);
});

const legacy = document.querySelector<HTMLElement>('[data-legacy-section]');
if (legacy) {
  let section = legacy.dataset.legacySection!;
  let detail: string | undefined;
  let fragment = '';
  try { fragment = decodeURIComponent(location.hash.slice(1)); } catch { /* Malformed legacy fragments use the route fallback. */ }
  const products = ['self-ordering','pos-checkout','inventory','reports','customers'];
  const industry = ['hospitality','retail','wellness','services'];
  if (products.includes(fragment)) { section='products'; detail=fragment; }
  else if (industry.includes(fragment)) section=`industry-${fragment}`;
  else if (fragment === 'payments') section='payments';
  storeIntent(section,detail);
  location.replace(home);
} else if (isHome) {
  try {
    const raw = sessionStorage.getItem(intentKey);
    sessionStorage.removeItem(intentKey);
    const intent: Intent | null = raw ? JSON.parse(raw) : null;
    if (intent && Date.now()-intent.at < 120000 && Date.now() >= intent.at) {
      // Wait for fonts/images above the destination to reserve their final layout.
      Promise.all([document.fonts.ready, new Promise(resolve => {
        if (document.readyState === 'complete') resolve(null);
        else window.addEventListener('load',resolve,{once:true});
      })]).then(() => requestAnimationFrame(() => jump(intent.section,intent.detail,intent.pointer === true)));
    }
  } catch { /* Blocked storage or invalid data falls back to the complete Home page. */ }
  let scheduled = false;
  addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled=true;
    requestAnimationFrame(() => {
      scheduled=false;
      const headerHeight=header?.getBoundingClientRect().height || 92;
      const threshold=headerHeight+(innerHeight-headerHeight)/2;
      const positions=links.filter(link=>link.dataset.section).map(link=>({link,target:document.getElementById(link.dataset.section!)}));
      const current=positions.filter(item=>item.target && item.target.getBoundingClientRect().top<=threshold).sort((a,b)=>b.target!.getBoundingClientRect().top-a.target!.getBoundingClientRect().top)[0];
      if (current) links.forEach(link=> { link.removeAttribute('aria-current'); if(link===current.link) link.setAttribute('aria-current','location'); });
    });
  },{passive:true});
}

// Enhance the native skip link without disabling its no-JavaScript fallback.
document.querySelector<HTMLAnchorElement>('.skip-link')?.addEventListener('click', event=> {
  event.preventDefault(); document.getElementById('main')?.focus({preventScroll:true});
  scrollTo({top:0,behavior:'instant'});
});
