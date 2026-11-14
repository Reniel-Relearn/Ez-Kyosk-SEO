import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4322/Ez-Kyosk-SEO';
const prefix = process.env.QA_SCREENSHOT_PREFIX || 'platform-card-layout';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const errors = [], results = [], accessibility = [];
const cards = [
  { id: 'platform-ordering', title: 'Self-Ordering Experience', stem: 'platform-self-ordering-v3', body: 'Let customers browse, select, adjust, review, and confirm from one focused touchscreen.' },
  { id: 'platform-checkout', title: 'POS and checkout', stem: 'platform-pos-checkout-v1', body: 'Connect confirmed orders to checkout, queueing, and the operational flow defined for your business.' },
  { id: 'platform-payments', title: 'Payments with AltPayNet', stem: 'platform-payments-v1', body: 'Support approved card, QR, GCash, Maya, and e-wallet payment paths.' },
  { id: 'platform-inventory', title: 'Inventory and order tracking', stem: 'platform-inventory-tracking-v1', body: 'Keep inventory visibility and order progress connected to the experience.' },
  { id: 'platform-extensions', title: 'Configurable extensions', stem: 'platform-configurable-extensions-v1', body: 'Scope reports, customers, loyalty, promotions, and other needs around your operation.' },
];
await mkdir('artifacts', { recursive: true });
try {
  for (const deviceScaleFactor of [1, 2]) {
    const context = await browser.newContext({ reducedMotion: 'reduce', deviceScaleFactor });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    for (const width of deviceScaleFactor === 1 ? [320, 390, 768, 1024, 1440, 1920] : [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`${base}/`);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator('.platform-card--expandable').count(), 5);
      assert.deepEqual(await page.locator('.platform-grid > article:not(.platform-card--expandable) > span').allTextContents(), []);
      assert.deepEqual(await page.locator('.platform-grid > article:not(.platform-card--expandable) h3').allTextContents(), []);
      assert.equal(await page.locator('.platform-icon').count(), 0);
      for (const expected of cards) {
        const card = page.locator(`[aria-labelledby="${expected.id}-title"]`);
        const details = card.locator('details');
        const summary = details.locator('summary');
        const description = details.locator('p');
        await card.scrollIntoViewIfNeeded();
        await card.locator('img').evaluate(image => image.decode());
        assert.equal(await card.locator('h3').count(), 1);
        assert.equal(await card.locator('h3').innerText(), expected.title);
        assert.equal(await card.locator(':scope > span').count(), 0);
        assert.equal(await summary.getAttribute('aria-label'), `About ${expected.title}`);
        assert.equal(await description.textContent(), expected.body);
        for (const theme of ['light', 'dark']) {
          await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
          assert.equal(await description.isVisible(), false);
          await summary.focus();
          await page.keyboard.press('Tab');
          await page.keyboard.press('Shift+Tab');
          assert.equal(await summary.evaluate(element => element.matches(':focus-visible')), true, 'visible keyboard focus');
          for (const open of [false, true]) {
            if (open) await page.keyboard.press('Enter');
            assert.equal(await details.evaluate(element => element.open), open);
            assert.equal(await description.isVisible(), open);
            const geometry = await card.evaluate(card => {
              const image = card.querySelector('img'), heading = card.querySelector('h3'), summary = card.querySelector('summary');
              const box = card.getBoundingClientRect(), img = image.getBoundingClientRect(), title = heading.getBoundingClientRect(), toggle = summary.getBoundingClientRect();
              return {
                edgeLeft: img.left - box.left, edgeRight: box.right - img.right, edgeTop: img.top - box.top,
                imageRatio: img.width / img.height, headingBelow: title.top >= img.bottom,
                toggleWidth: toggle.width, toggleHeight: toggle.height, source: image.currentSrc,
                plusVertical: getComputedStyle(summary.querySelector('span'), '::after').display,
                noOverflow: document.documentElement.scrollWidth <= innerWidth && card.scrollWidth <= card.clientWidth,
              };
            });
            assert.ok(Math.abs(geometry.edgeLeft - 1) < .1 && Math.abs(geometry.edgeRight - 1) < .1 && Math.abs(geometry.edgeTop - 1) < .1, 'image flush with the inside card border');
            assert.ok(Math.abs(geometry.imageRatio - 4 / 3) < .01);
            assert.equal(geometry.headingBelow, true); assert.equal(geometry.noOverflow, true);
            assert.ok(geometry.toggleWidth >= 44 && geometry.toggleHeight >= 44);
            assert.equal(geometry.plusVertical === 'none', open, 'plus becomes minus when expanded');
            assert.ok(geometry.source.includes(`${expected.stem}-`));
            if (deviceScaleFactor === 1 && [390, 1440].includes(width)) {
              const scan = await new AxeBuilder({ page }).include('.platform-section').analyze();
              assert.deepEqual(scan.violations, []);
              accessibility.push({ card: expected.id, width, theme, open, violations: scan.violations });
              await card.screenshot({ path: `artifacts/${prefix}-${expected.id}-${width}-${theme}-${open ? 'open' : 'closed'}.png` });
            }
            results.push({ card: expected.id, width, theme, deviceScaleFactor, open, ...geometry });
          }
          await page.keyboard.press('Space');
          assert.equal(await description.isVisible(), false, 'Space collapses description');
          await summary.click(); assert.equal(await description.isVisible(), true, 'pointer expands description');
          await summary.click(); assert.equal(await description.isVisible(), false, 'pointer collapses description');
        }
      }
    }
    await context.close();
  }
  const noJs = await browser.newContext({ javaScriptEnabled: false, reducedMotion: 'reduce' });
  const page = await noJs.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${base}/`);
  for (const details of await page.locator('.platform-card-details').all()) {
    assert.equal(await details.locator('p').isVisible(), false);
    await details.locator('summary').click(); assert.equal(await details.locator('p').isVisible(), true);
    await page.keyboard.press('Space'); assert.equal(await details.locator('p').isVisible(), false);
  }
  await noJs.close();
  assert.deepEqual(errors, []);
  await writeFile(`artifacts/${prefix}-report.json`, JSON.stringify({ results, accessibility, errors, withoutJavaScript: 'passed' }, null, 2));
  console.log(JSON.stringify({ stateChecks: results.length, accessibilityScans: accessibility.length, errors, withoutJavaScript: 'passed' }));
} finally { await browser.close(); }
