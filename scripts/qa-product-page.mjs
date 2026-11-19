import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { coreCapabilities, configurableAdditions, productPageMeta } from '../src/data/productPage.ts';
import { assertPhase1Preservation } from './phase1-preservation.mjs';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const layouts = [], accessibility = [], anchors = [], stickyNavigation = [], noJavaScript = [], errors = [];
// Browser-scheduled callbacks do not run in JavaScript-disabled contexts.
const settle = page => page.waitForTimeout(100);
async function assertStickyNavigation(page, details) {
  await page.locator('#product-areas').evaluate(el => scrollTo({ top: el.offsetTop + 200, behavior: 'instant' }));
  await settle(page);
  const header = await page.locator('.site-header').boundingBox();
  const nav = await page.locator('.product-section-nav').boundingBox();
  assert.ok(Math.abs(nav.y - (header.y + header.height)) <= 1, 'Product subnav sticks directly below the primary header');
  assert.equal(await page.locator('.product-section-nav').evaluate(el => el.scrollWidth > el.clientWidth), false);
  const appearance = await page.locator('.product-section-nav').evaluate(el => {
    const navStyle = getComputedStyle(el);
    const headerStyle = getComputedStyle(document.querySelector('.site-header'));
    return { background: navStyle.backgroundImage, headerBackground: headerStyle.backgroundImage,
      opacity: navStyle.opacity, backdropFilter: navStyle.backdropFilter,
      linkOpacities: [...el.querySelectorAll('a')].map(a => getComputedStyle(a).opacity) };
  });
  assert.equal(appearance.background, appearance.headerBackground, 'subnav matches the theme-aware primary header gradient');
  assert.equal((appearance.background.match(/rgba\([^)]*, 0\.5\)/g) || []).length, 2, 'both gradient stops use 50% alpha');
  assert.equal(appearance.opacity, '1', 'only the background is translucent');
  assert.deepEqual(appearance.linkOpacities, ['1', '1', '1', '1', '1']);
  assert.equal(appearance.backdropFilter, 'none', 'no background blur');
  stickyNavigation.push({ ...details, navTop: nav.y, navHeight: nav.height });
}
async function assertAnchorClear(page, href) {
  await settle(page);
  const target = await page.locator(href).boundingBox();
  const nav = await page.locator('.product-section-nav').boundingBox();
  const header = await page.locator('.site-header').boundingBox();
  assert.ok(target.y >= header.y + header.height + nav.height + 14, `${href}: section clears both navigation heights`);
  const heading = await page.locator(href).locator('h2,h3').first().boundingBox();
  assert.ok(heading.y >= nav.y + nav.height, `${href}: visible heading is below the subnav`);
  return { href, targetTop: target.y, navigationBottom: nav.y + nav.height };
}
const hash = value => createHash('sha256').update(value).digest('hex');
await mkdir('artifacts', { recursive: true });
// The original complete freeze remains applicable until the explicitly approved Phase 1 marker exists.
const frozenHome = JSON.parse(await readFile(new URL('./fixtures/home-freeze.json', import.meta.url), 'utf8'));
const currentHome = await readFile('dist/index.html');
const phase1Home = currentHome.includes('data-home-hero="true"');
const phase1Preservation = phase1Home ? await assertPhase1Preservation() : undefined;
if (!phase1Home) assert.equal(hash(currentHome), frozenHome.htmlSha256, 'frozen Home HTML byte-identical to approved5e9adf9');
for (const [relative, expectedHash] of Object.entries(frozenHome.assets)) {
  assert.equal(hash(await readFile(`dist/${relative}`)), expectedHash, 'frozen Home asset byte-preserved');
}
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  for (const density of [1, 2]) {
    const context = await browser.newContext({ deviceScaleFactor: density, reducedMotion: 'reduce' });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    const widths = density === 1 ? [320, 390, 720, 721, 768, 980, 981, 1024, 1440, 1920] : [390, 1440];
    for (const width of widths) for (const theme of ['light', 'dark']) {
      await page.setViewportSize({ width, height: 1000 });
      assert.equal((await page.goto(`${base}/features/`)).status(), 200);
      await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.title(), productPageMeta.title);
      assert.equal(await page.locator('meta[name="description"]').getAttribute('content'), productPageMeta.description);
      assert.equal(await page.locator('h1').count(), 1);
      assert.equal(await page.locator('.product-page > section').count(), 7);
      assert.equal(await page.locator('.product-page img').count(), 0, 'visuals intentionally remain placeholders');
      assert.equal(await page.locator('[data-product-placeholder]').count(), 9);
      assert.equal(await page.locator('.payment-terminal-image,.payment-online-image,.feature-art').count(), 0);
      assert.equal(await page.locator('#main-navigation [aria-current="page"]').innerText(), 'Product');
      for (const item of [...coreCapabilities, ...configurableAdditions]) {
        const section = page.locator(`#${item.id}`);
        assert.equal(await section.locator('h3').innerText(), item.title);
        assert.equal(await section.locator('p').first().innerText(), item.body);
      }
      const bad = await page.locator('.product-page h1,.product-page h2,.product-page h3,.product-page p,.product-page li,[data-product-placeholder]').evaluateAll(items => items.filter(el => {
        const r = el.getBoundingClientRect(); return r.left < -1 || r.right > innerWidth + 1 || el.scrollWidth > el.clientWidth + 1;
      }).map(el => el.textContent.slice(0, 90)));
      assert.deepEqual(bad, [], `${width}/${theme}: no text/placeholder overflow`);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      for (const slot of await page.locator('[data-product-placeholder]').all()) {
        assert.equal(await slot.getAttribute('aria-hidden'), 'true');
        const size = await slot.boundingBox(); assert.ok(size.width > 100 && size.height > 100);
      }
      await assertStickyNavigation(page, { width, theme, density, javaScript: true });
      await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
      if (density === 1 && [390, 1440].includes(width)) {
        const scan = await new AxeBuilder({ page }).include('.product-page').analyze();
        assert.deepEqual(scan.violations, []); accessibility.push({ width, theme, violations: [] });
        await page.screenshot({ path: `artifacts/product-page-${width}-${theme}.png`, fullPage: true });
        for (const href of ['#product-areas', '#configurable-additions', '#payments', '#purchase-options', '#compatibility']) {
          await page.locator(`.product-section-nav a[href="${href}"]`).click();
          anchors.push({ width, theme, ...await assertAnchorClear(page, href) });
        }
        await page.screenshot({ path: `artifacts/product-page-${width}-${theme}-sticky.png` });
        if (width === 390) {
          await page.locator('.menu-toggle').click();
          const mobileMenu = page.locator('#main-navigation');
          assert.equal(await mobileMenu.isVisible(), true);
          assert.equal(await mobileMenu.locator('a').first().evaluate(el => {
            const r = el.getBoundingClientRect(); return el.contains(document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2));
          }), true, 'mobile primary menu remains above sticky Product navigation');
          await page.keyboard.press('Escape');
        }
        await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
        await page.screenshot({ path: `artifacts/product-page-${width}-${theme}-hero.png` });
        for (const [selector, name] of [['.product-addition-card', 'addition'], ['.product-payment-note', 'payment-note'], ['.product-purchase-card', 'purchase']]) {
          const target = page.locator(selector).first();
          await target.evaluate(el => scrollTo({ top: el.getBoundingClientRect().top + scrollY - document.querySelector('.site-header').getBoundingClientRect().height - document.querySelector('.product-section-nav').getBoundingClientRect().height - 24, behavior: 'instant' }));
          await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
          await target.screenshot({ path: `artifacts/product-page-${width}-${theme}-${name}.png` });
        }
      }
      layouts.push({ width, theme, density, placeholders: 9, sections: 7, overflow: false });
    }
    await context.close();
  }
  for (const width of [390, 1440]) for (const theme of ['light', 'dark']) {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage(); await page.goto(`${base}/features/`);
    await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
    await page.evaluate(() => document.fonts.ready);
    await assertStickyNavigation(page, { width, theme, javaScript: false });
    for (const id of ['self-ordering', 'pos-checkout', 'inventory', 'reports', 'customers']) {
      const target = page.locator(`#${id}`); assert.equal(await target.isVisible(), true, 'legacy Home destination is visible without JavaScript');
    }
    const link = page.locator('.product-section-nav a[href="#payments"]');
    await link.focus(); await page.keyboard.press('Enter');
    assert.equal(new URL(page.url()).hash, '#payments');
    await assertAnchorClear(page, '#payments');
    const contact = page.locator('.product-final-cta a.button');
    await contact.focus(); await page.keyboard.press('Enter'); await page.waitForURL(`${base}/contact/`);
    noJavaScript.push({ width, theme, legacyAnchors: 5, keyboardContactLink: 'passed' });
    await context.close();
  }
  assert.deepEqual(errors, []);
  await writeFile('artifacts/product-page-report.json', JSON.stringify({ base, layouts, accessibility, anchors, stickyNavigation, noJavaScript,
    homeSha256: hash(currentHome), homeHeroChangedByApprovedPhase1: phase1Home, phase1Preservation,
    homeOutsideApprovedScopeUnchanged: true, errors }, null, 2));
  console.log(JSON.stringify({ layoutThemeDensityChecks: layouts.length, sectionAccessibilityScans: accessibility.length,
    anchorChecks: anchors.length, stickyNavigationChecks: stickyNavigation.length, noJavaScriptChecks: noJavaScript.length,
    homeHeroChangedByApprovedPhase1: phase1Home, homeOutsideApprovedScopeUnchanged: true, errors }));
} finally { await browser.close(); }
