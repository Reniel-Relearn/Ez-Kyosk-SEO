import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [];
const labels = ['Discuss Self-Ordering', 'Discuss POS & Checkout', 'Discuss Inventory', 'Discuss Reports & Analytics', 'Discuss Customer Tools'];
await mkdir('artifacts/phase13/ctas', { recursive: true });
try {
  for (const width of [320, 390, 768, 1440, 1920]) for (const theme of ['light', 'dark']) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    for (const route of ['/', '/offers/', '/articles/', '/contact/', '/privacy/', '/404.html']) {
      await page.goto(base + route);
      await page.evaluate(async theme => { document.documentElement.dataset.theme = theme; await document.fonts.ready; }, theme);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${route} ${width}: no overflow`);
      const footer = page.locator('.site-footer').getByRole('link', { name: 'Explore Ez Kyosk' });
      assert.equal(await footer.getAttribute('href'), 'https://reniel-relearn.github.io/EZ-Kyosk/');
      assert.ok((await footer.getAttribute('class')).includes('button-secondary'));
      if (route === '/') {
        assert.deepEqual(await page.locator('.product-panel-copy>.text-link').evaluateAll(els => els.map(el => el.textContent.replace('↗', '').trim())), labels);
        assert.equal(await page.locator('#home').getByRole('link', { name: 'Explore Ez Kyosk', exact: true }).count(), 1);
        assert.equal(await page.locator('#home').getByRole('link', { name: 'Request a Demo' }).count(), 1);
        const payments = await page.locator('.payment-copy').evaluateAll(els => els.map(el => {
          const s = getComputedStyle(el), link = el.querySelector('a'), r = el.getBoundingClientRect(), a = link.getBoundingClientRect();
          return { align: s.textAlign, delta: a.left - r.left - parseFloat(s.paddingLeft), height: a.height, width: a.width, available: r.width - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight) };
        }));
        payments.forEach(p => { assert.equal(p.align, 'left'); assert.ok(Math.abs(p.delta) < 2); assert.ok(p.width <= p.available + 1); assert.ok(p.height >= 44); });
      }
      if (route === '/offers/') {
        assert.deepEqual(await page.locator('.offer-action').allTextContents(), ['Request a Free Demo', 'Request a Starter Quote', 'Request a Complete Quote']);
        assert.equal(await page.getByRole('link', { name: 'Request a Free Demo', exact: true }).count(), 2);
        assert.ok((await page.getByRole('link', { name: 'Ask about YourAI' }).getAttribute('class')).includes('text-link'));
        assert.ok((await page.locator('.offer-future').textContent()).includes('optional future upgrade'));
      }
      if (route === '/contact/') {
        assert.equal(await page.locator('form').getAttribute('data-live'), 'false');
        assert.equal(await page.getByRole('button', { name: 'Preview inquiry' }).count(), 1);
        assert.equal(await page.locator('.form-privacy').getByRole('link', { name: 'privacy notice' }).getAttribute('href'), new URL(base + '/privacy/').pathname);
      }
      if (route === '/404.html') assert.equal(await page.getByRole('link', { name: 'View Products' }).getAttribute('data-section'), 'products');
      const badDestinations = await page.locator('a.button,a.text-link').evaluateAll(els => els.filter(a => !a.getAttribute('href') || a.getAttribute('href') === '#').map(a => a.textContent));
      assert.deepEqual(badDestinations, []);
      const primary = page.locator('main .button:not(.button-secondary):not(.button-ghost-light):not(.button-light)').first();
      if (await primary.count()) {
        await primary.hover();
        await primary.focus();
        const state = await primary.evaluate(el => ({ focus: el.matches(':focus-visible'), outline: getComputedStyle(el).outlineStyle, height: el.getBoundingClientRect().height }));
        // Enter keyboard modality before checking the keyboard-only focus ring.
        await page.keyboard.press('Shift');
        assert.equal(await primary.evaluate(el => getComputedStyle(el).outlineStyle), 'solid');
        assert.ok(state.height >= 44);
      }
      results.push({ width, theme, route });
    }
    await context.close();
  }
  await writeFile('artifacts/phase13/ctas/results.json', JSON.stringify(results, null, 2));
  console.log(`PASS: ${results.length} route/theme/width CTA checks, approved labels, destinations, payment alignment and primary keyboard focus.`);
} finally { await browser.close(); }
