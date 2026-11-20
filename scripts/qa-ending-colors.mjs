import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [];
await mkdir('artifacts/phase13/ending-colors', { recursive: true });
async function footerColors(page) {
  return page.locator('.site-footer').evaluate(el => {
    const values = node => { const s = getComputedStyle(node); return { color: s.color, background: s.backgroundColor, border: s.borderTopColor }; };
    return { footer: values(el), parts: [...el.querySelectorAll('p,.footer-label,.footer-links a,.footer-bottom,.button')].map(values), logo: getComputedStyle(el.querySelector('.brand-mark-adaptive'), '::after').backgroundColor };
  });
}
try {
  for (const width of [320, 390, 768, 1440, 1920]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    for (const route of ['/', '/offers/', '/articles/', '/contact/', '/privacy/', '/404.html']) {
      await page.goto(base + route);
      await page.evaluate(() => document.fonts.ready);
      const states = [];
      for (const theme of ['light', 'dark']) {
        await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
        await page.locator('.site-footer').scrollIntoViewIfNeeded(); await page.mouse.move(0, 0);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
        const normal = await footerColors(page);
        assert.equal(normal.footer.background, 'rgb(8, 13, 22)');
        assert.equal(normal.footer.color, 'rgb(248, 250, 252)');
        assert.equal(normal.logo, 'rgb(248, 250, 252)');
        const button = page.locator('.site-footer .button');
        await button.hover(); await page.waitForTimeout(250);
        const hover = await footerColors(page);
        await page.mouse.down(); await page.waitForTimeout(250);
        const pressed = await footerColors(page);
        await page.mouse.move(0, 0); await page.mouse.up();
        await button.focus(); await page.keyboard.press('Shift');
        const focus = await button.evaluate(el => ({ outline: getComputedStyle(el).outlineStyle, color: getComputedStyle(el).outlineColor }));
        assert.equal(focus.outline, 'solid'); assert.equal(focus.color, 'rgb(34, 211, 238)');
        states.push({ normal, hover, pressed, focus });
        if ([390, 1440].includes(width)) {
          const axe = await new AxeBuilder({ page }).include('.site-footer').analyze();
          assert.deepEqual(axe.violations, [], `${route} ${theme} ${width}: footer accessibility`);
        }
        if (route === '/') {
          const ending = page.locator('.final-cta');
          const colors = await ending.evaluate(el => ({ background: getComputedStyle(el).backgroundColor, gradient: getComputedStyle(el).backgroundImage, color: getComputedStyle(el).color }));
          if (theme === 'light') { assert.equal(colors.background, 'rgb(245, 245, 245)'); assert.equal(colors.gradient, 'none'); assert.equal(colors.color, 'rgb(15, 23, 42)'); }
          else assert.ok(colors.gradient.includes('linear-gradient'));
          if ([390, 1440].includes(width)) {
            const axe = await new AxeBuilder({ page }).include('.final-cta').analyze(); assert.deepEqual(axe.violations, []);
            await ending.screenshot({ path: `artifacts/phase13/ending-colors/cta-${theme}-${width}.png` });
            await page.locator('.site-footer').screenshot({ path: `artifacts/phase13/ending-colors/footer-${theme}-${width}.png` });
          }
        }
      }
      assert.deepEqual(states[0], states[1], `${route} ${width}: footer rest/hover/pressed/focus/logo identical across themes`);
      results.push({ route, width, states });
    }
    await context.close();
  }
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 1000 } });
  const page = await context.newPage();
  for (const route of ['/', '/privacy/']) { await page.goto(base + route); assert.equal((await footerColors(page)).footer.background, 'rgb(8, 13, 22)'); }
  await context.close();
  await writeFile('artifacts/phase13/ending-colors/results.json', JSON.stringify(results, null, 2));
  console.log('PASS: 30 route/width pairs in both themes; identical footer states/logo, 24 footer axe scans, four CTA axe scans and two no-JavaScript cases.');
} finally { await browser.close(); }
