import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const prefix = process.env.QA_SCREENSHOT_PREFIX || 'payment-images';
const imageCards = [
  { selector: '.payment-terminal-image', name: 'terminal', ratio: 3 / 4, source: 'payment-terminal-v1-', alt: 'Illustrative Ez Kyosk countertop kiosk' },
  { selector: '.payment-online-image', name: 'online', ratio: 1371 / 1148, source: 'Hand%20Holding%20AltPayNet%20Payment%20Phone%20and%20Cards', alt: 'Owner-supplied illustration' },
];
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [], accessibility = [], errors = [];
await mkdir('artifacts', { recursive: true });
try {
  for (const deviceScaleFactor of [1, 2]) {
    const context = await browser.newContext({ reducedMotion: 'reduce', deviceScaleFactor });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    for (const width of deviceScaleFactor === 1 ? [320, 390, 720, 721, 768, 1024, 1180, 1181, 1400, 1401, 1440, 1920] : [390, 1440]) {
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
        assert.equal(await section.locator('.payment-online-image').count(), 1);
        assert.equal(await section.locator('.phone-art .phone').count(), 0);
        assert.equal(await section.locator('.phone-art .qr').count(), 0);
        assert.equal(await card.locator('h3').innerText(), 'Terminal integration');
        assert.equal(await card.locator('.payment-copy > p').innerText(), 'Connect a secure payment terminal to the kiosk checkout flow for supported card and in-store payment requirements.');
        const link = card.locator('a');
        assert.ok((await link.innerText()).startsWith('Discuss terminal requirements'));
        assert.ok((await link.getAttribute('href')).endsWith('/contact/'));
        const onlineCard = section.locator('.payment-card').nth(1);
        assert.equal(await onlineCard.locator('h3').innerText(), 'QR and e-wallet checkout');
        assert.equal(await onlineCard.locator('.payment-copy > p').innerText(), 'Let customers use supported QR, GCash, Maya, card, and e-wallet payment paths from a mobile device.');
        assert.ok((await onlineCard.locator('a').innerText()).startsWith('Discuss online payments'));
        assert.ok((await onlineCard.locator('a').getAttribute('href')).endsWith('/contact/'));
        assert.equal(await image.getAttribute('loading'), 'lazy');
        assert.equal(await image.getAttribute('decoding'), 'async');
        assert.ok((await image.getAttribute('alt')).startsWith('Illustrative Ez Kyosk countertop kiosk'));
        assert.equal(await image.evaluate(image => image.closest('[aria-hidden="true"]')), null);
        for (const theme of ['light', 'dark']) {
          await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
          for (const expected of imageCards) {
            const currentImage = section.locator(expected.selector);
            await currentImage.scrollIntoViewIfNeeded();
            await currentImage.evaluate(image => image.decode());
            assert.equal(await currentImage.getAttribute('loading'), 'lazy');
            assert.equal(await currentImage.getAttribute('decoding'), 'async');
            assert.ok((await currentImage.getAttribute('alt')).startsWith(expected.alt));
            assert.equal(await currentImage.evaluate(image => image.closest('[aria-hidden="true"]')), null);
            const geometry = await currentImage.evaluate(image => {
              const box = image.getBoundingClientRect(), frame = image.parentElement, card = frame.parentElement;
              const cardBox = card.getBoundingClientRect(), frameBox = frame.getBoundingClientRect(), copy = card.querySelector('.payment-copy').getBoundingClientRect();
              const style = getComputedStyle(image);
              return { ratio: box.width / box.height, naturalRatio: image.naturalWidth / image.naturalHeight,
                source: image.currentSrc, fit: style.objectFit, filter: style.filter,
                transform: style.transform, opacity: style.opacity,
                backdrop: getComputedStyle(frame).backgroundImage,
                verticalCenterDelta: Math.abs((box.top + box.bottom) / 2 - (frameBox.top + frameBox.bottom) / 2),
                topBreathingRoom: box.top - frameBox.top,
                bottomBreathingRoom: frameBox.bottom - box.bottom,
                cardBottomGap: cardBox.bottom - box.bottom,
                framePaddingTop: getComputedStyle(frame).paddingTop,
                framePaddingBottom: getComputedStyle(frame).paddingBottom,
                cardHeight: cardBox.height,
                contained: box.left >= cardBox.left && box.right <= cardBox.right + 1 && box.bottom <= cardBox.bottom + 1,
                besideCopy: box.left >= copy.right - 1,
                noOverflow: document.documentElement.scrollWidth <= innerWidth && card.scrollWidth <= card.clientWidth };
            });
            assert.ok(Math.abs(geometry.ratio - expected.ratio) < .01);
            assert.ok(Math.abs(geometry.naturalRatio - expected.ratio) < .01);
            assert.equal(geometry.fit, 'contain');
            assert.equal(geometry.filter, 'none');
            assert.equal(geometry.transform, 'none');
            assert.equal(geometry.opacity, '1');
            assert.equal(geometry.backdrop, 'none');
            assert.equal(geometry.contained, true);
            assert.equal(geometry.noOverflow, true);
            assert.ok(geometry.verticalCenterDelta < 1, 'image centered vertically in its frame');
            assert.equal(geometry.framePaddingTop, '0px', 'no added image padding at top');
            assert.equal(geometry.framePaddingBottom, '0px', 'no added image padding at bottom');
            assert.ok(geometry.cardHeight < (width <= 720 ? 650 : 480), 'compact card, no old 500px minimum');
            assert.ok(geometry.topBreathingRoom < 16, `${route} ${width} ${expected.name}: no large top gap (${geometry.topBreathingRoom}px in ${geometry.cardHeight}px card)`);
            assert.ok(geometry.bottomBreathingRoom < 16, `${route} ${width} ${expected.name}: no large bottom gap (${geometry.bottomBreathingRoom}px)`);
            if (width > 720) assert.equal(geometry.besideCopy, true, 'devices sit to the right of HTML copy');
            assert.ok(geometry.source.includes(expected.source), `correct ${expected.name} artwork: ${geometry.source}`);
            if (expected.name === 'online') assert.ok(geometry.source.endsWith('.png'), 'supplied PNG, no re-encoding');
            if (deviceScaleFactor === 1 && [390, 1440].includes(width)) {
              await currentImage.locator('..').locator('..').screenshot({ path: `artifacts/${prefix}-${route === '/' ? 'home' : 'product'}-${expected.name}-${width}-${theme}.png` });
            }
            results.push({ route, image: expected.name, width, theme, deviceScaleFactor, ...geometry });
          }
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
        }
      }
    }
    await context.close();
  }
  assert.deepEqual(errors, []);
  await writeFile(`artifacts/${prefix}-report.json`, JSON.stringify({ results, accessibility, errors }, null, 2));
  console.log(JSON.stringify({ responsiveThemeChecks: results.length, accessibilityScans: accessibility.length, errors }));
} finally { await browser.close(); }
