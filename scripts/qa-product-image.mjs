import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4322/Ez-Kyosk-SEO';
const prefix = process.env.QA_SCREENSHOT_PREFIX || 'product-self-ordering';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [], accessibility = [], errors = [];
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
      const panel = page.locator('#panel-self-ordering');
      const image = panel.locator('.product-panel-image');
      await image.scrollIntoViewIfNeeded();
      await image.evaluate(image => image.decode());
      assert.equal(await page.locator('.product-panel-image').count(), 1);
      assert.equal(await page.locator('.product-explorer .ui-window').count(), 4);
      assert.equal(await page.locator('.platform-image').count(), 5);
      assert.equal(await panel.locator('h3').innerText(), 'Every choice, clear from the first tap.');
      assert.equal(await panel.locator('.product-panel-copy > p').innerText(), 'Give customers a focused touchscreen journey for exploring the menu, choosing products, adjusting their order, and confirming with confidence.');
      assert.equal(await panel.locator('.check-list li').count(), 5);
      assert.ok((await image.getAttribute('alt')).startsWith('Illustrative Ez Kyosk'));
      assert.equal(await image.getAttribute('loading'), 'lazy');
      assert.equal(await image.getAttribute('decoding'), 'async');
      assert.equal(await panel.locator('.product-panel-visual').getAttribute('aria-hidden'), null);
      for (const theme of ['light', 'dark']) {
        await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
        const geometry = await image.evaluate(image => {
          const box = image.getBoundingClientRect(), frame = image.parentElement;
          return { ratio: box.width / box.height, naturalRatio: image.naturalWidth / image.naturalHeight,
            source: image.currentSrc, fit: getComputedStyle(image).objectFit,
            padding: getComputedStyle(frame).padding, backdrop: getComputedStyle(frame, '::before').display,
            noOverflow: document.documentElement.scrollWidth <= innerWidth && frame.scrollWidth <= frame.clientWidth };
        });
        assert.ok(Math.abs(geometry.ratio - 4 / 3) < .01);
        assert.ok(Math.abs(geometry.naturalRatio - 4 / 3) < .01);
        assert.equal(geometry.fit, 'contain');
        assert.equal(geometry.padding, '0px');
        assert.equal(geometry.backdrop, 'none');
        assert.equal(geometry.noOverflow, true);
        assert.ok(geometry.source.includes('product-self-ordering-v1-'));
        const visible = await page.locator('.product-panel:visible').count();
        assert.equal(visible, width <= 720 ? 5 : 1);
        if (width > 720) {
          const tab = page.locator('#tab-self-ordering');
          await tab.focus();
          await page.keyboard.press('ArrowRight');
          assert.equal(await page.locator('#tab-pos-checkout').getAttribute('aria-selected'), 'true');
          assert.equal(await panel.isVisible(), false);
          await page.keyboard.press('Home');
          assert.equal(await tab.getAttribute('aria-selected'), 'true');
          assert.equal(await panel.isVisible(), true);
        }
        if (deviceScaleFactor === 1 && [390, 1440].includes(width)) {
          const scan = await new AxeBuilder({ page }).include('.product-section').analyze();
          assert.deepEqual(scan.violations, []);
          accessibility.push({ width, theme, violations: scan.violations });
          await panel.screenshot({ path: `artifacts/${prefix}-${width}-${theme}.png` });
        }
        results.push({ width, theme, deviceScaleFactor, ...geometry });
      }
    }
    await context.close();
  }
  assert.deepEqual(errors, []);
  await writeFile(`artifacts/${prefix}-report.json`, JSON.stringify({ results, accessibility, errors }, null, 2));
  console.log(JSON.stringify({ responsiveThemeChecks: results.length, accessibilityScans: accessibility.length, errors }));
} finally { await browser.close(); }
