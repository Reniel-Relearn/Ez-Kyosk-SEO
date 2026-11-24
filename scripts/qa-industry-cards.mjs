import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { assertPhase2Preservation } from './phase2-preservation.mjs';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const prefix = process.env.QA_SCREENSHOT_PREFIX || 'industry-complete-integrated';
const ids = ['hospitality', 'retail', 'wellness', 'services'];
const titles = ['Hospitality & food', 'Retail & shops', 'Wellness & beauty', 'Services & B2B'];
const descriptions = [
  'Cafés, bakeries, restaurants, and quick-service teams can create a clearer ordering path.',
  'Bring product discovery, selection, payment, and stock visibility into one guided touchpoint.',
  'Present services and add-ons with a simple path from selection to checkout.',
  'Configure a customer-facing flow around the products, services, and approvals your operation needs.',
];
const errors = [], layouts = [], accessibility = [];
for (const [file, expected] of [
  ['src/components/IndustryCard.astro', '8e4fbeebb70b4fc3d2801f6bd153c8dde1be831f2942a653bdfbfab62c498645'],
  ['src/components/IndustryIcon.astro', '7887736637f1a214684c1ede02ecf8ebed529975438657ef54e15ace8a05102e'],
]) {
  let source = (await readFile(file, 'utf8')).replaceAll('\r\n', '\n');
  // Only the audited accessible-name correction may differ from the original card.
  if (file.endsWith('IndustryCard.astro')) source = source.replace(
    'data-section-target href={sitePath(\'/contact/\')}>',
    'data-section-target href={sitePath(\'/contact/\')} aria-label={`Discuss ${title} requirements`}>',
  );
  assert.equal(createHash('sha256').update(source).digest('hex'), expected, `${file} preserved except explicit accessible-name correction`);
}
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
        await Promise.all([...document.querySelectorAll('.industry-image')].map(async image => {
          image.loading = 'eager'; await image.decode();
        }));
      });
      assert.deepEqual(await page.locator('.industry-card h3').allTextContents(), titles);
      assert.deepEqual(await page.locator('.industry-card p').allTextContents(), descriptions);
      assert.equal(await page.locator('.industry-card a, .industry-card button, .industry-card details, .industry-symbol').count(), 0);
      assert.equal(await page.locator('.industry-image-placeholder').count(), 0);
      assert.equal(await page.locator('.industry-image').count(), 4);
      assert.equal(await page.locator('.industry-card-badge svg[aria-hidden="true"]').count(), 4);
      for (const [index, stem] of ['industry-hospitality-v3-', 'industry-retail-v3-', 'industry-wellness-v2-', 'industry-services-v7-'].entries()) {
        const image = page.locator('.industry-image').nth(index);
        assert.ok((await image.evaluate(image => image.currentSrc)).includes(stem));
        assert.equal(await image.evaluate(image => image.complete && image.naturalWidth > 0), true);
      }
      for (const theme of ['light', 'dark']) {
        await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
        for (const [index, link] of (await page.locator('.industry-card').all()).entries()) {
          assert.equal(await link.getAttribute('href'), new URL(`${base}/contact/`).pathname);
          assert.equal(await link.getAttribute('aria-label'), null);
          assert.equal(await link.getAttribute('aria-labelledby'), null);
          await link.focus(); await page.keyboard.press('Tab'); await page.keyboard.press('Shift+Tab');
          assert.equal(await link.evaluate(element => element.matches(':focus-visible')), true);
          assert.equal(await link.evaluate(element => getComputedStyle(element).outlineStyle), 'solid');
        }
        const geometry = await page.locator('.industry-card').evaluateAll(cards => cards.map(card => {
          const rect = node => { const box = node.getBoundingClientRect(); return { top: box.top, bottom: box.bottom, left: box.left, right: box.right, width: box.width, height: box.height }; };
          const image = card.querySelector('.industry-card-media'), badge = card.querySelector('.industry-card-badge');
          return { card: rect(card), image: rect(image), badge: rect(badge), heading: rect(card.querySelector('h3')),
            description: rect(card.querySelector('p')), cta: rect(card.querySelector('.industry-card-cta')),
            imageVisible: card.querySelector('img') ? card.querySelector('img').complete : null,
            overflow: card.scrollWidth > card.clientWidth || document.documentElement.scrollWidth > innerWidth };
        }));
        const rows = [];
        const presentation = await page.locator('#industries').evaluate(section => {
          const style = getComputedStyle(section), rect = section.getBoundingClientRect();
          const heading = section.querySelector('.section-heading'), intro = heading.querySelector(':scope > p');
          const center = element => { const box = element.getBoundingClientRect(); return box.left + box.width / 2; };
          const hero = document.querySelector('.home-hero');
          return { top: parseFloat(style.paddingTop), bottom: parseFloat(style.paddingBottom),
            left: parseFloat(style.paddingLeft), right: parseFloat(style.paddingRight),
            heroLeft: parseFloat(getComputedStyle(hero).paddingLeft),
            center: rect.left + rect.width / 2, introCenter: center(intro),
            headingAlign: getComputedStyle(heading).textAlign,
            cardHeadings: [...section.querySelectorAll('.industry-card h3')].map(h3 => getComputedStyle(h3).textAlign) };
        });
        assert.ok(Math.abs(presentation.top - Math.min(56, Math.max(32, width * .04))) < .1);
        assert.equal(presentation.top, presentation.bottom);
        assert.equal(presentation.left, presentation.right);
        assert.ok(Math.abs(presentation.left - presentation.heroLeft) < .1, 'hero-aligned side margins');
        assert.ok(Math.abs(presentation.introCenter - presentation.center) < 1);
        assert.equal(presentation.headingAlign, 'center');
        assert.deepEqual(presentation.cardHeadings, ['center', 'center', 'center', 'center']);
        for (const item of geometry) {
          assert.equal(item.overflow, false);
          assert.ok(Math.abs(item.image.width / item.image.height - 4 / 3) < .01, 'uniform landscape frame');
          assert.ok(Math.abs(item.image.left - item.card.left - 1) < .1 && Math.abs(item.image.top - item.card.top - 1) < .1, 'photo flush with inner border');
          assert.ok(item.badge.top < item.image.bottom && item.badge.bottom > item.image.bottom, 'icon overlaps photo/body boundary');
          assert.ok(item.heading.top > item.badge.bottom, 'heading clears badge');
          assert.ok(item.description.top > item.heading.bottom, 'description below heading');
          assert.ok(item.cta.top > item.description.bottom, 'Contact action clears description');
          let row = rows.find(row => Math.abs(row[0].card.top - item.card.top) < 1);
          if (!row) rows.push(row = []);
          row.push(item);
        }
        for (const row of rows) for (const [box, edge] of [['card', 'bottom'], ['image', 'bottom'], ['heading', 'top'], ['description', 'top'], ['cta', 'top']]) {
          assert.ok(Math.max(...row.map(item => item[box][edge])) - Math.min(...row.map(item => item[box][edge])) < 1, `${box} ${edge} aligns per row`);
        }
        assert.equal(rows.length, width <= 720 ? 4 : width <= 1180 ? 2 : 1);
        if (density === 1 && [390, 1024, 1440].includes(width)) {
          const scan = await new AxeBuilder({ page }).include('.industries-section').analyze();
          assert.deepEqual(scan.violations, []);
          accessibility.push({ width, theme, violations: scan.violations });
          // Tall element captures stitch viewports; hide fixed UI only during capture.
          // Geometry, focus and accessibility assertions above use the unmodified page.
          await page.locator('.industry-grid').screenshot({
            path: `artifacts/${prefix}-${width}-${theme}.png`,
            style: '.site-header, .skip-link { visibility: hidden !important; }',
          });
        }
        layouts.push({ width, density, theme, geometry });
      }
    }
    await context.close();
  }
  const noJs = await browser.newContext({ javaScriptEnabled: false, reducedMotion: 'reduce', viewport: { width: 1440, height: 1000 } });
  const page = await noJs.newPage();
  for (const [index] of ids.entries()) {
    await page.goto(`${base}/`);
    const link = page.locator('.industry-card').nth(index);
    await link.focus();
    if (index === 0) await page.keyboard.press('Enter'); else await link.click();
    await page.waitForURL(`${base}/contact/`);
    assert.equal(await page.locator('form[data-live="false"]').count(), 1);
  }
  await noJs.close();
  const preservation = await assertPhase2Preservation();
  assert.deepEqual(errors, []);
  await writeFile(`artifacts/${prefix}-report.json`, JSON.stringify({ layouts, accessibility, errors, preservation, linksWithoutJavaScript: 'passed' }, null, 2));
  console.log(JSON.stringify({ layouts: layouts.length, cardChecks: layouts.length * 4, accessibilityScans: accessibility.length, errors, preservation, linksWithoutJavaScript: 'passed' }));
} finally { await browser.close(); }
