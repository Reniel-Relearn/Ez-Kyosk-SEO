import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import sharp from 'sharp';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const routes = ['/', '/offers/', '/articles/', '/contact/', '/privacy/', '/404.html'];
const widths = [320, 390, 720, 768, 980, 981, 1024, 1180, 1181, 1440, 1920];
const layouts = [], contrastChecks = [], accessibility = [], errors = [];
const readabilityFailures = [];
const rgba = value => {
  const channels = value.match(/[\d.]+/g).map(Number);
  return [...channels.slice(0, 3), channels[3] ?? 1];
};
const luminance = rgb => rgb.slice(0, 3).map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4)
  .reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
const ratio = (first, second) => {
  const light = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (light[0] + .05) / (light[1] + .05);
};
const state = page => page.locator('.site-header').evaluate(header => {
  const s = getComputedStyle(header), rect = header.getBoundingClientRect();
  const stops = s.backgroundImage.match(/rgba?\([^)]+\)/g) || [];
  return { background: s.backgroundColor, gradient: s.backgroundImage,
    gradientStart: stops[0], gradientEnd: stops[1],
    opacity: s.opacity, position: s.position,
    top: rect.top, height: rect.height, width: rect.width, filter: s.backdropFilter,
    prefixedFilter: s.webkitBackdropFilter, transition: s.transitionDuration,
    logoWidth: header.querySelector('.logo img').getBoundingClientRect().width,
    overflow: document.documentElement.scrollWidth > innerWidth,
    opaqueChildren: [...header.querySelectorAll('a,button,img')].every(el => getComputedStyle(el).opacity === '1') };
});
const theme = (page, value) => page.evaluate(value => document.documentElement.dataset.theme = value, value);
// CSS 120deg gradient projects each point onto its gradient line; second stop is at65%.
const compositeAt = (header, behind, x, y) => {
  const dx = Math.sin(2 * Math.PI / 3), dy = -Math.cos(2 * Math.PI / 3);
  const length = header.width * dx + header.height * dy;
  const t = Math.max(0, Math.min(1, ((x - header.width / 2) * dx + (y - header.height / 2) * dy + length / 2) / (length * .65)));
  const start = rgba(header.gradientStart), end = rgba(header.gradientEnd);
  return start.slice(0, 3).map((v, i) => (v + (end[i] - v) * t) * .5 + behind[i] * .5);
};
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  for (const route of routes) {
    await page.goto(`${base}${route}`);
    await page.evaluate(() => document.fonts.ready);
    for (const width of widths) {
      await page.setViewportSize({ width, height: 1000 });
      for (const appearance of ['light', 'dark']) {
        await theme(page, appearance);
        for (const scroll of [0, 600]) {
          await page.evaluate(y => scrollTo({ top: y, behavior: 'instant' }), scroll);
          const header = await state(page);
          assert.equal(header.position, 'sticky');
          assert.ok(Math.abs(header.top) < 1);
          assert.equal(header.height, width <= 980 ? 82 : 92);
          assert.equal(header.logoWidth, width <= 720 ? 118 : width <= 1180 ? 132 : 142);
          assert.equal(header.opacity, '1');
          assert.equal(header.opaqueChildren, true);
          assert.equal(header.overflow, false);
          assert.equal(header.filter, 'none');
          assert.ok(!header.prefixedFilter || header.prefixedFilter === 'none');
          assert.ok(header.gradient.startsWith('linear-gradient(120deg,'));
          assert.ok(Math.abs(rgba(header.gradientStart)[3] - .5) < .001);
          assert.ok(Math.abs(rgba(header.gradientEnd)[3] - .5) < .001);
          assert.equal(rgba(header.background)[3], 0, 'no extra opaque fill beneath gradient');
          layouts.push({ route, width, theme: appearance, scroll, ...header });
        }
        if (width <= 1180) {
          const menu = page.locator('.menu-toggle');
          await menu.focus(); await page.keyboard.press('Enter');
          assert.equal(await menu.getAttribute('aria-expanded'), 'true', `${route}/${width}/${appearance}: keyboard menu opens`);
          const panel = await page.locator('#main-navigation').evaluate(el => {
            const s = getComputedStyle(el); return { background: s.backgroundColor, opacity: s.opacity };
          });
          assert.equal(rgba(panel.background)[3], 1, 'expanded mobile menu stays solid');
          assert.equal(panel.opacity, '1');
          await page.keyboard.press('Escape');
          assert.equal(await menu.getAttribute('aria-expanded'), 'false');
          assert.ok(await menu.evaluate(el => el === document.activeElement));
        }
      }
    }
    for (const width of [390, 1440]) for (const appearance of ['light', 'dark']) {
      await page.setViewportSize({ width, height: 1000 }); await theme(page, appearance);
      const result = await new AxeBuilder({ page }).include('.site-header').analyze();
      accessibility.push({ route, width, theme: appearance, violations: result.violations });
      if (result.violations.length) readabilityFailures.push({ type: 'axe', route, width, theme: appearance, violations: result.violations });
    }
  }

  // Uniform worst-case backdrops test actual rendered alpha plus text/control contrast.
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(`${base}/`);
  for (const appearance of ['light', 'dark']) for (const underlay of ['rgb(0, 0, 0)', 'rgb(255, 255, 255)']) {
    await theme(page, appearance);
    await page.evaluate(color => {
      document.getElementById('header-qa-backdrop')?.remove();
      const el = document.createElement('div'); el.id = 'header-qa-backdrop'; el.setAttribute('aria-hidden', 'true');
      Object.assign(el.style, { position: 'fixed', inset: '0', zIndex: '49', background: color, pointerEvents: 'none' });
      document.body.append(el); scrollTo({ top: 600, behavior: 'instant' });
    }, underlay);
    const header = await state(page), behind = rgba(underlay), pixels = [];
    for (const x of [5, 700, 1435]) {
      const background = compositeAt(header, behind, x + .5, 5.5);
      const sample = await page.screenshot({ clip: { x, y: 5, width: 1, height: 1 } });
      const { data } = await sharp(sample).removeAlpha().raw().toBuffer({ resolveWithObject: true });
      assert.ok(background.every((value, i) => Math.abs(value - data[i]) <= 2), 'pixels show50% gradient compositing without opaque fill');
      pixels.push({ x, expected: background, actual: [...data] });
    }
    const checks = [];
    for (const link of await page.locator('#main-navigation > a:not(.nav-mobile-cta)').all()) {
      for (const interaction of ['rest', 'hover']) {
        if (interaction === 'hover') await link.hover(); else await page.mouse.move(0, 300);
        await page.waitForTimeout(230);
        const color = rgba(await link.evaluate(el => getComputedStyle(el).color));
        const box = await link.boundingBox();
        const background = compositeAt(header, behind, box.x + box.width / 2, box.y + box.height / 2);
        const contrast = ratio(color, background);
        if (contrast < 4.5) readabilityFailures.push({ type: 'navigation', appearance, underlay, interaction, text: await link.innerText(), color, background, contrast, required: 4.5 });
        checks.push({ type: 'text', interaction, contrast });
      }
    }
    const cta = page.locator('.header-cta');
    for (const interaction of ['rest', 'hover', 'pressed']) {
      if (interaction === 'rest') await page.mouse.move(0, 300); else await cta.hover();
      if (interaction === 'pressed') await page.mouse.down();
      await page.waitForTimeout(230);
      const colors = await cta.evaluate(el => { const s = getComputedStyle(el); return [s.color, s.backgroundColor]; });
      const contrast = ratio(rgba(colors[0]), rgba(colors[1]));
      assert.ok(contrast >= 4.5, 'opaque CTA text contrast');
      checks.push({ type: 'cta', interaction, contrast });
      if (interaction === 'pressed') { await page.mouse.move(0, 300); await page.mouse.up(); }
    }
    const toggle = page.locator('.theme-toggle');
    await toggle.focus();
    await page.keyboard.press('Tab'); await page.keyboard.press('Shift+Tab');
    assert.ok(await toggle.evaluate(el => el === document.activeElement));
    const focus = await toggle.evaluate(el => { const s = getComputedStyle(el); return { color: s.color, border: s.borderTopColor,
      outline: s.outlineColor, outlineStyle: s.outlineStyle, outlineWidth: s.outlineWidth }; });
    assert.notEqual(focus.outlineStyle, 'none');
    assert.ok(parseFloat(focus.outlineWidth) >= 2);
    const toggleBox = await toggle.boundingBox();
    const background = compositeAt(header, behind, toggleBox.x + toggleBox.width / 2, toggleBox.y + toggleBox.height / 2);
    for (const [part, color] of Object.entries({ icon: focus.color, border: focus.border, outline: focus.outline })) {
      const contrast = ratio(rgba(color), background);
      if (contrast < 3) readabilityFailures.push({ type: 'control', part, appearance, underlay, contrast, required: 3 });
    }
    contrastChecks.push({ theme: appearance, underlay, pixels, checks, focus });
  }

  // No backdrop-filter dependency or feature-query fallback is needed for a plain gradient.

  // Final visual captures with real section content beneath the glass, no QA underlay.
  await page.goto(`${base}/`);
  for (const width of [390, 1440]) for (const appearance of ['light', 'dark']) {
    await page.setViewportSize({ width, height: 1000 }); await theme(page, appearance);
    await page.evaluate(async () => {
      await Promise.all([...document.querySelectorAll('.customer-journey-image')].map(async image => { image.loading = 'eager'; await image.decode(); }));
      const image = document.querySelector('.customer-journey-image');
      scrollTo({ top: image.getBoundingClientRect().top + scrollY + 120, behavior: 'instant' });
    });
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    assert.ok(Math.abs((await state(page)).top) < 1, 'header remains pinned over deep-page photographs');
    await page.screenshot({ path: `artifacts/header-glass-${width}-${appearance}.png` });
    if (width === 390) {
      await page.locator('.menu-toggle').click();
      await page.screenshot({ path: `artifacts/header-glass-menu-${appearance}.png` });
      await page.keyboard.press('Escape');
    }
  }
  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 1000 } });
  const staticPage = await noJs.newPage(); await staticPage.goto(`${base}/`);
  await staticPage.evaluate(() => scrollTo({ top: 600, behavior: 'instant' }));
  assert.equal((await state(staticPage)).filter, 'none');
  await staticPage.locator('#main-navigation a[data-section="products"]').focus();
  await staticPage.keyboard.press('Enter'); await staticPage.waitForURL(`${base}/`); await noJs.close();
  assert.deepEqual(errors, []);
  await writeFile('artifacts/header-glass-report.json', JSON.stringify({ layouts, accessibility, contrastChecks, noJavaScriptDesktop: 'passed', readabilityFailures, errors }, null, 2));
  console.log(JSON.stringify({ layoutScrollChecks: layouts.length, headerAccessibilityScans: accessibility.length,
    worstCaseBackdropTests: contrastChecks.length, noJavaScriptDesktop: 'passed', readabilityFailures: readabilityFailures.length, errors }));
  // A requested visual trial may fail contrast; retain WCAG thresholds and report a failing exit code.
  if (readabilityFailures.length) process.exitCode = 1;
} finally { await browser.close(); }
