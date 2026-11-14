import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4322';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const errors = [], failedRequests = [], layouts = [], accessibility = [];
const routes = ['/', '/features/', '/how-it-works/', '/solutions/', '/about/', '/contact/', '/privacy/', '/404.html'];
page.on('pageerror', error => errors.push(error.message));
page.on('response', response => { if (response.status() >= 400) failedRequests.push({ url: response.url(), status: response.status() }); });
await mkdir('artifacts', { recursive: true });

try {
  for (const width of [320, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      const response = await page.goto(`${base}${route}`);
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(async () => { await Promise.all([...document.images].map(async image => { image.loading = 'eager'; try { await image.decode(); } catch {} })); });
      const state = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        wrongBrandCase: [...document.body.innerText.matchAll(/\bez\s+kyosk\b/gi)].map(match => match[0]).filter(name => name !== 'Ez Kyosk'),
        brandSources: [...document.querySelectorAll('.brand-mark img')].map(image => image.currentSrc),
        brandAlts: [...document.querySelectorAll('.brand-mark img')].map(image => image.alt),
        headings: document.querySelectorAll('h1').length,
        logos: [...document.querySelectorAll('.logo img')].map(img => {
          const rect = img.getBoundingClientRect();
          return { loaded: img.complete && img.naturalWidth > 0, ratio: rect.width / rect.height, original: img.naturalWidth / img.naturalHeight };
        }),
        brokenImages: [...document.images].filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src),
      }));
      assert.equal(response.status(), 200, `${route} ${width}: HTTP`);
      assert.equal(state.overflow, false, `${route} ${width}: no overflow`);
      assert.deepEqual(state.wrongBrandCase, [], `${route} ${width}: rendered brand case`);
      assert.ok(state.brandSources.length >= 2 && state.brandSources.every(source => source === state.brandSources[0] && source.includes('ez-kyosk-lockup.')), `${route}: original shared logo`);
      assert.ok(state.brandAlts.every(alt => alt === 'Ez Kyosk'), `${route}: consistent logo alt text`);
      assert.equal(state.headings, 1);
      assert.equal(state.brokenImages.length, 0, `${route}: images`);
      if (route === '/') {
        assert.equal(await page.locator('.product-panel-image').count(), 1, 'only the first product panel has its new image');
        assert.equal(await page.locator('.product-explorer .ui-window').count(), 4, 'other product placeholders retained');
        const productImage = await page.locator('#panel-self-ordering .product-panel-image').evaluate(image => ({ source: image.currentSrc, alt: image.alt, ratio: image.getBoundingClientRect().width / image.getBoundingClientRect().height }));
        assert.ok(productImage.source.includes('product-self-ordering-v1-'));
        assert.ok(productImage.alt.startsWith('Illustrative Ez Kyosk'));
        assert.ok(Math.abs(productImage.ratio - 4 / 3) < .01, 'landscape product image is not stretched');
        const hero = await page.locator('.hero-product img').evaluate(image => ({ source: image.currentSrc, filter: getComputedStyle(image).filter }));
        assert.ok(hero.source.includes('hero-kiosk-transparent-v3.'), 'corrected transparent hero is loaded');
        assert.equal(hero.filter, 'none', 'no broad CSS blur/drop-shadow around the cutout');
        const platformImage = page.locator('.platform-grid .platform-image');
        assert.equal(await platformImage.count(), 5, 'all five platform cards have imagery');
        assert.equal(await page.locator('.platform-grid .platform-icon').count(), 0, 'all platform placeholders are replaced');
        assert.ok((await platformImage.nth(0).evaluate(image => image.currentSrc)).includes('platform-self-ordering-v3-'), 'corrected first card is retained');
        assert.ok((await platformImage.nth(1).evaluate(image => image.currentSrc)).includes('platform-pos-checkout-v1-'), 'new checkout image is loaded');
        assert.ok((await platformImage.nth(2).evaluate(image => image.currentSrc)).includes('platform-payments-v1-'), 'payment image is loaded');
        assert.ok((await platformImage.nth(3).evaluate(image => image.currentSrc)).includes('platform-inventory-tracking-v1-'), 'inventory image is loaded');
        assert.ok((await platformImage.nth(4).evaluate(image => image.currentSrc)).includes('platform-configurable-extensions-v1-'), 'extensions image is loaded');
        assert.equal(await page.locator('.platform-card--expandable').count(), 5, 'all five cards use the shared layout');
        assert.equal(await page.locator('.platform-card--expandable > span').count(), 0, 'all five card numbers removed');
        for (const description of await page.locator('.platform-card-details p').all()) {
          assert.equal(await description.isVisible(), false, 'descriptions start collapsed');
        }
      }
      assert.equal(state.logos.length, 2);
      assert.ok(state.logos.every(logo => logo.loaded && Math.abs(logo.ratio - logo.original) < .03), `${route}: undistorted logos`);
      layouts.push({ route, width, ...state });
      if (width === 390 || width === 1440) await page.screenshot({ path: `artifacts/${route === '/' ? 'home' : route.split('/')[1]}-${width}.png`, fullPage: true });
      await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }));
      const headerTop = await page.locator('.site-header').evaluate(header => header.getBoundingClientRect().top);
      assert.ok(Math.abs(headerTop) < 1, `${route} ${width}: header remains pinned while scrolling`);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  await page.evaluate(() => window.scrollTo({ top: 900, behavior: 'instant' }));
  const menu = page.getByRole('button', { name: 'Toggle navigation' });
  await menu.focus(); await page.keyboard.press('Enter');
  assert.equal(await menu.getAttribute('aria-expanded'), 'true');
  await page.keyboard.press('Escape');
  assert.equal(await menu.getAttribute('aria-expanded'), 'false');
  assert.equal(await menu.evaluate(element => element === document.activeElement), true);
  await menu.click();
  await page.getByRole('navigation').getByRole('link', { name: 'Product', exact: true }).click();
  await page.waitForURL('**/features/');

  await page.goto(base);
  for (const details of await page.locator('.platform-card-details').all()) {
    await details.locator('summary').focus();
    await page.keyboard.press('Enter');
    assert.equal(await details.locator('p').isVisible(), true, 'Enter expands card description');
    await page.keyboard.press('Space');
    assert.equal(await details.locator('p').isVisible(), false, 'Space collapses card description');
  }
  const faq = page.locator('summary').filter({ hasText: 'Can it accept card, QR, GCash, or Maya payments?' });
  await faq.focus(); await page.keyboard.press('Enter');
  assert.equal(await faq.evaluate(el => el.parentElement.open), true);
  assert.equal(await page.locator('.faq-list details').count(), 9);
  assert.equal(await page.locator('[role="tabpanel"]:visible').count(), 5, 'mobile product panels stack visibly');
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base);
  const primaryNav = page.locator('#main-navigation > a:not(.nav-mobile-cta)');
  assert.deepEqual(await primaryNav.allTextContents(), ['Home', 'Product', 'How It Works', 'Solutions', 'About']);
  assert.equal(await page.locator('#main-navigation > a[aria-current="page"]').innerText(), 'Home');
  assert.equal(await page.locator('#main-navigation > a', { hasText: 'Industries' }).count(), 0, 'Industries is grouped under Solutions, not duplicated in primary navigation');
  assert.match(await page.locator('.hero-copy h1').innerText(), /Self-Ordering\s+Made Easy\s+for Your Business\./);
  await page.getByText('Give customers the freedom to explore your menu, select their favorites, and review their orders, all from one touchscreen.', { exact: true }).waitFor();
  await page.getByText('For cafés, bakeries, restaurants & quick-service businesses.', { exact: true }).waitFor();
  await page.getByText('Your Menu. Their Order. One Simple Screen.', { exact: true }).first().waitFor();
  await page.getByText('Core capabilities include POS checkout, AltPayNet payments, real-time inventory, and order tracking.', { exact: false }).waitFor();
  const pageIdentities = [
    ['/', 'Home', '.hero-product'],
    ['/features/', 'Product', '.product-system-map'],
    ['/how-it-works/', 'How It Works', '.journey-map'],
    ['/solutions/', 'Solutions', '.solution-orbit'],
    ['/about/', 'About', '.about-logo-panel'],
  ];
  for (const [route, label, visual] of pageIdentities) {
    await page.goto(`${base}${route}`);
    const current = page.locator('#main-navigation > a[aria-current="page"]');
    assert.equal(await current.count(), 1, `${route}: exactly one active navigation item`);
    assert.equal(await current.innerText(), label, `${route}: correct active navigation item`);
    assert.equal(await page.locator(visual).count(), 1, `${route}: distinct page identity`);
    if (route !== '/') assert.equal(await page.locator('.hero-product').count(), 0, `${route}: homepage kiosk hero is not reused`);
  }
  await page.goto(`${base}/features/`);
  assert.match(await page.locator('.page-hero h1').innerText(), /Five product areas\.\s+One connected system\./);
  assert.equal(await page.locator('.product-system-links > a').count(), 5);
  await page.goto(base);
  const themeToggle = page.locator('.theme-toggle');
  assert.equal(await themeToggle.getAttribute('aria-label'), 'Switch to dark mode');
  await themeToggle.click();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  assert.equal(await themeToggle.getAttribute('aria-pressed'), 'true');
  await page.reload();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark', 'theme persists after reload');
  await page.getByRole('button', { name: 'Switch to light mode' }).click();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'light');
  const tabs = page.getByRole('tab');
  assert.equal(await tabs.count(), 5);
  await tabs.nth(0).focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await tabs.nth(1).getAttribute('aria-selected'), 'true');
  assert.equal(await page.getByRole('tabpanel', { name: 'POS & Checkout' }).isVisible(), true);
  const favicon = await context.request.get(`${base}/favicon.png`);
  assert.equal(favicon.status(), 200);
  assert.ok(favicon.headers()['content-type'].includes('image/png'));

  const fillForm = async () => {
    await page.locator('[name=name]').fill('Design reviewer');
    await page.locator('[name=email]').fill('review@example.com');
    await page.locator('select').selectOption({ label: 'Restaurant / Quick service' });
    await page.locator('textarea').fill('Automated test; no real submission.');
  };
  await page.goto(`${base}/contact/`);
  let previewPosts = 0;
  const watchPost = request => { if (request.method() === 'POST') previewPosts++; };
  page.on('request', watchPost);
  await page.getByRole('button', { name: 'Preview inquiry' }).click();
  assert.equal(await page.locator('input:invalid').count() > 0, true);
  await fillForm();
  await page.getByRole('button', { name: 'Preview inquiry' }).click();
  await page.getByRole('status').filter({ hasText: 'Nothing was sent or saved' }).waitFor();
  assert.equal(previewPosts, 0);
  page.off('request', watchPost);

  // Simulate configured mode with an intercepted endpoint; never contact a live service.
  const mockEndpoint = `${base}/__mock-inquiry`;
  await page.locator('form').evaluate((form, url) => { form.dataset.live = 'true'; form.action = url; }, mockEndpoint);
  await page.route(mockEndpoint, route => route.fulfill({ status: 200, contentType: 'application/json', body: '{}' }));
  await page.getByRole('button', { name: 'Preview inquiry' }).click();
  await page.getByRole('status').filter({ hasText: 'accepted by the form service' }).waitFor();
  assert.equal(await page.locator('[name=name]').inputValue(), '');
  await page.unroute(mockEndpoint);
  await page.route(mockEndpoint, route => route.abort());
  await fillForm();
  await page.getByRole('button', { name: 'Preview inquiry' }).click();
  await page.getByRole('status').filter({ hasText: 'could not be sent' }).waitFor();
  assert.equal(await page.getByRole('button', { name: 'Preview inquiry' }).isEnabled(), true);
  assert.equal(await page.locator('[name=name]').inputValue(), 'Design reviewer');

  for (const theme of ['light', 'dark']) {
    await page.goto(base);
    await page.evaluate(value => localStorage.setItem('ez-kyosk-theme', value), theme);
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of routes) {
        await page.goto(`${base}${route}`);
        assert.equal(await page.locator('html').getAttribute('data-theme'), theme);
        const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
        accessibility.push({ theme, route, width, violations: result.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })) });
        if (route === '/') await page.screenshot({ path: `artifacts/home-${theme}-${width}.png`, fullPage: true });
      }
    }
  }
  const report = { layouts, accessibility, errors, failedRequests, previewPosts, managedForm: 'mocked success and failure passed', keyboard: 'menu, Escape, focus return, FAQ, product tabs, and theme toggle passed' };
  await writeFile('artifacts/qa-report.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ layoutChecks: layouts.length, accessibility, errors, failedRequests, previewPosts, managedForm: report.managedForm, keyboard: report.keyboard }, null, 2));
  assert.ok(accessibility.every(result => result.violations.length === 0), 'Accessibility violations');
  assert.equal(errors.length, 0, 'Browser errors');
  assert.equal(failedRequests.length, 0, 'Failed assets/pages');
} finally { await browser.close(); }
