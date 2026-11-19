import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { journeyImages } from '../src/data/journeyImages.mjs';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const prefix = process.env.QA_SCREENSHOT_PREFIX || 'journey-start-integrated';
const expectedImages = Number(process.env.JOURNEY_EXPECTED_IMAGES || 6);
assert.equal(Object.keys(journeyImages).length, expectedImages);
const titles = ['Start & Select', 'Review & Edit Order', 'Choose How to Pay', 'Scan Your Tracking QR', 'Track Your Queue Status', 'Collect Your Order'];
const bodies = [
  'Tap to begin, browse the menu and choose products.',
  'Check items, edit quantities or selections, and review the total.',
  'Pay by card or e-wallet, or choose cash payment at the cashier.',
  'Scan the order-tracking QR to open order tracking.',
  'Follow the queue and see when your order is ready for pickup.',
  'Collect your prepared order when it is ready.',
];
const layouts = [], accessibility = [], errors = [];
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  for (const density of [1, 2]) {
    const context = await browser.newContext({ deviceScaleFactor: density, reducedMotion: 'reduce' });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    for (const width of density === 1 ? [320, 390, 720, 721, 768, 1024, 1180, 1181, 1440, 1920] : [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`${base}/`);
      await page.evaluate(async () => {
        await document.fonts.ready;
        await Promise.all([...document.querySelectorAll('.customer-journey-image')].map(async image => {
          image.loading = 'eager'; await image.decode();
        }));
      });
      assert.deepEqual(await page.locator('.customer-journey-card h3').allTextContents(), titles);
      assert.deepEqual(await page.locator('.customer-journey-card p').allTextContents(), bodies);
      assert.equal(await page.locator('ol.customer-journey-grid[role="list"] > li').count(), 6);
      assert.equal(await page.locator('.customer-journey-image').count(), expectedImages);
      assert.equal(await page.locator('.customer-journey-pending').count(), 6 - expectedImages);
      assert.equal(await page.locator('.customer-journey-card a, .customer-journey-card button, .customer-journey-card details').count(), 0);
      for (const [id, { stem, alt }] of Object.entries(journeyImages)) {
        const image = page.locator(`#journey-${id} .customer-journey-image`);
        assert.ok((await image.evaluate(image => image.currentSrc)).includes(`${stem}-`));
        assert.equal(await image.getAttribute('alt'), alt);
        assert.ok(await image.evaluate(image => image.complete && image.naturalWidth > 0));
        assert.equal(await image.evaluate(image => getComputedStyle(image).objectFit), 'contain');
      }
      for (const theme of ['light', 'dark']) {
        await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
        const geometry = await page.locator('.customer-journey-card').evaluateAll(cards => cards.map(card => {
          const rect = node => { const r = node.getBoundingClientRect(); return { top: r.top, bottom: r.bottom, left: r.left, width: r.width, height: r.height }; };
          return { card: rect(card), media: rect(card.querySelector('.customer-journey-media')),
            heading: rect(card.querySelector('h3')), body: rect(card.querySelector('p')),
            overflow: card.scrollWidth > card.clientWidth || document.documentElement.scrollWidth > innerWidth };
        }));
        const rows = [];
        const grid = await page.locator('.customer-journey-grid').boundingBox();
        for (const item of geometry) {
          assert.equal(item.overflow, false);
          assert.ok(Math.abs(item.media.width / item.media.height - 4 / 3) < .01, 'full landscape frame');
          assert.ok(Math.abs(item.media.left - item.card.left - 1) < .1 && Math.abs(item.media.top - item.card.top - 1) < .1, 'image flush with inner border');
          assert.ok(item.heading.top >= item.media.bottom && item.body.top >= item.heading.bottom, 'text follows image in sequence');
          assert.ok(item.card.top >= grid.y - 1 && item.card.bottom <= grid.y + grid.height + 1, 'card contained vertically by grid');
          assert.ok(item.body.bottom <= item.card.bottom, 'body contained by card');
          let row = rows.find(row => Math.abs(row[0].card.top - item.card.top) < 1);
          if (!row) rows.push(row = []);
          row.push(item);
        }
        assert.equal(rows.length, width <= 720 ? 6 : width <= 1180 ? 3 : 1);
        for (const row of rows) for (const [box, edge] of [['card', 'bottom'], ['media', 'bottom'], ['heading', 'top'], ['body', 'top']]) {
          assert.ok(Math.max(...row.map(item => item[box][edge])) - Math.min(...row.map(item => item[box][edge])) < 1, `${box} ${edge} aligns per row`);
        }
        if (density === 1 && [390, 1024, 1440].includes(width)) {
          const scan = await new AxeBuilder({ page }).include('#how-it-works').analyze();
          assert.deepEqual(scan.violations, []);
          accessibility.push({ width, theme, violations: [] });
          await page.locator('.customer-journey-grid').screenshot({ path: `artifacts/${prefix}-${width}-${theme}.png`, style: '.site-header, .skip-link { visibility: hidden !important; }' });
          if (width === 1440 && theme === 'light') for (const id of Object.keys(journeyImages)) {
            await page.locator(`#journey-${id}`).screenshot({ path: `artifacts/${prefix}-${id}.png`, style: '.site-header, .skip-link { visibility: hidden !important; }' });
          }
        }
        layouts.push({ width, density, theme, geometry });
      }
    }
    await context.close();
  }
  for (const width of [390, 1024, 1440]) {
    const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: 'reduce', viewport: { width, height: 1000 } });
    const page = await context.newPage();
    await page.goto(`${base}/`);
    assert.deepEqual(await page.locator('.customer-journey-card h3').allTextContents(), titles);
    for (const card of await page.locator('.customer-journey-card').all()) assert.equal(await card.isVisible(), true);
    assert.equal(await page.locator('#how-it-works > a').count(),0,'retired detailed guide is not duplicated');
    await context.close();
  }
  assert.deepEqual(errors, []);
  await writeFile(`artifacts/${prefix}-report.json`, JSON.stringify({ layouts, accessibility, errors, noJavaScriptReading: 'passed at 390/1024/1440' }, null, 2));
  console.log(JSON.stringify({ layouts: layouts.length, cardChecks: layouts.length * 6, accessibilityScans: accessibility.length, errors, noJavaScriptReading: 'passed' }));
} finally { await browser.close(); }
