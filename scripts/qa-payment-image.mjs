import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const prefix = process.env.QA_SCREENSHOT_PREFIX || 'payment-terminal';
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
      for (const route of ['/', '/features/']) {
        await page.goto(`${base}${route}`);
        await page.evaluate(() => document.fonts.ready);
        const section = page.locator('.payments-section');
        const card = section.locator('.payment-card').first();
        const image = card.locator('.payment-terminal-image');
        await image.scrollIntoViewIfNeeded();
        await image.evaluate(image => image.decode());
        assert.equal(await section.locator('.payment-card').count(), 2);
        assert.equal(await section.locator('.payment-terminal-image').count(), 1);
        assert.equal(await section.locator('.mini-kiosk').count(), 0);
        assert.equal(await section.locator('.phone-art .phone').count(), 1);
        assert.equal(await section.locator('.phone-art .qr i').count(), 9);
        assert.equal(await card.locator('h3').innerText(), 'Terminal integration');
        assert.equal(await card.locator('.payment-copy > p').innerText(), 'Connect a secure payment terminal to the kiosk checkout flow for supported card and in-store payment requirements.');
        const link = card.locator('a');
        assert.ok((await link.innerText()).startsWith('Discuss terminal requirements'));
        assert.ok((await link.getAttribute('href')).endsWith('/contact/'));
        assert.equal(await section.locator('.payment-card').nth(1).locator('h3').innerText(), 'QR and e-wallet checkout');
        assert.equal(await image.getAttribute('loading'), 'lazy');
        assert.equal(await image.getAttribute('decoding'), 'async');
        assert.ok((await image.getAttribute('alt')).startsWith('Illustrative Ez Kyosk countertop kiosk'));
        assert.equal(await image.evaluate(image => image.closest('[aria-hidden="true"]')), null);
        for (const theme of ['light', 'dark']) {
          await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
          const geometry = await image.evaluate(image => {
            const box = image.getBoundingClientRect(), frame = image.parentElement, card = frame.parentElement;
            const cardBox = card.getBoundingClientRect(), copy = card.querySelector('.payment-copy').getBoundingClientRect();
            const style = getComputedStyle(image);
            return { ratio: box.width / box.height, naturalRatio: image.naturalWidth / image.naturalHeight,
              source: image.currentSrc, fit: style.objectFit, filter: style.filter,
              backdrop: getComputedStyle(frame).backgroundImage,
              contained: box.left >= cardBox.left && box.right <= cardBox.right + 1 && box.bottom <= cardBox.bottom + 1,
              besideCopy: box.left >= copy.right - 1,
              noOverflow: document.documentElement.scrollWidth <= innerWidth && card.scrollWidth <= card.clientWidth };
          });
          assert.ok(Math.abs(geometry.ratio - 3 / 4) < .01);
          assert.ok(Math.abs(geometry.naturalRatio - 3 / 4) < .01);
          assert.equal(geometry.fit, 'contain');
          assert.equal(geometry.filter, 'none');
          assert.equal(geometry.backdrop, 'none');
          assert.equal(geometry.contained, true);
          assert.equal(geometry.noOverflow, true);
          if (width > 1180) assert.equal(geometry.besideCopy, true, 'devices sit to the right of HTML copy');
          assert.ok(geometry.source.includes('payment-terminal-v1-'));
          await link.focus();
          assert.equal(await link.evaluate(link => link === document.activeElement), true);
          await link.evaluate(link => link.blur());
          if (deviceScaleFactor === 1 && [390, 1440].includes(width)) {
            const scan = await new AxeBuilder({ page }).include('.payments-section').analyze();
            assert.deepEqual(scan.violations, []);
            accessibility.push({ route, width, theme, violations: scan.violations });
            await card.screenshot({ path: `artifacts/${prefix}-${route === '/' ? 'home' : 'product'}-${width}-${theme}.png` });
            if (width === 1440) await section.screenshot({ path: `artifacts/${prefix}-${route === '/' ? 'home' : 'product'}-section-${theme}.png` });
          }
          results.push({ route, width, theme, deviceScaleFactor, ...geometry });
        }
      }
    }
    await context.close();
  }
  assert.deepEqual(errors, []);
  await writeFile(`artifacts/${prefix}-report.json`, JSON.stringify({ results, accessibility, errors }, null, 2));
  console.log(JSON.stringify({ responsiveThemeChecks: results.length, accessibilityScans: accessibility.length, errors }));
} finally { await browser.close(); }
