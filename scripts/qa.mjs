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
        headings: document.querySelectorAll('h1').length,
        logos: [...document.querySelectorAll('.logo img')].map(img => {
          const rect = img.getBoundingClientRect();
          return { loaded: img.complete && img.naturalWidth > 0, ratio: rect.width / rect.height, original: img.naturalWidth / img.naturalHeight };
        }),
        brokenImages: [...document.images].filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src),
      }));
      assert.equal(response.status(), 200, `${route} ${width}: HTTP`);
      assert.equal(state.overflow, false, `${route} ${width}: no overflow`);
      assert.equal(state.headings, 1);
      assert.equal(state.brokenImages.length, 0, `${route}: images`);
      assert.equal(state.logos.length, 2);
      assert.ok(state.logos.every(logo => logo.loaded && Math.abs(logo.ratio - logo.original) < .03), `${route}: undistorted logos`);
      layouts.push({ route, width, ...state });
      if (width === 390 || width === 1440) await page.screenshot({ path: `artifacts/${route === '/' ? 'home' : route.split('/')[1]}-${width}.png`, fullPage: true });
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
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
  const faq = page.locator('summary').filter({ hasText: 'Can it accept card, QR, GCash, or Maya payments?' });
  await faq.focus(); await page.keyboard.press('Enter');
  assert.equal(await faq.evaluate(el => el.parentElement.open), true);
  assert.equal(await page.locator('.faq-list details').count(), 9);
  assert.equal(await page.locator('[role="tabpanel"]:visible').count(), 5, 'mobile product panels stack visibly');
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base);
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

  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(`${base}${route}`);
      const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      accessibility.push({ route, width, violations: result.violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })) });
    }
  }
  const report = { layouts, accessibility, errors, failedRequests, previewPosts, managedForm: 'mocked success and failure passed', keyboard: 'menu, Escape, focus return, FAQ passed' };
  await writeFile('artifacts/qa-report.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ layoutChecks: layouts.length, accessibility, errors, failedRequests, previewPosts, managedForm: report.managedForm, keyboard: report.keyboard }, null, 2));
  assert.ok(accessibility.every(result => result.violations.length === 0), 'Accessibility violations');
  assert.equal(errors.length, 0, 'Browser errors');
  assert.equal(failedRequests.length, 0, 'Failed assets/pages');
} finally { await browser.close(); }
