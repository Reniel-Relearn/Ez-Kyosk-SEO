import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const rows = [], accessibility = [];
await mkdir('artifacts/phase13/surfaces', { recursive: true });
try {
  for (const width of [320, 390, 768, 1024, 1440, 1920]) for (const theme of ['light', 'dark']) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    await page.goto(base + '/');
    await page.evaluate(async theme => { document.documentElement.dataset.theme = theme; await document.fonts.ready; }, theme);
    const state = await page.evaluate(() => {
      const selectors = ['.benefits-section', '.platform-section', '#products', '#payments', '#how-it-works', '#industries', '.faq-section', '#about-us'];
      return { overflow: document.documentElement.scrollWidth > innerWidth, sections: selectors.map(selector => ({ selector, color: getComputedStyle(document.querySelector(selector)).backgroundColor })),
        cards: [...document.querySelectorAll('.benefit-grid,.platform-card--expandable,.product-panel,.payment-card,.customer-journey-card,.industry-card,#about-us .value-grid article')].map(el => getComputedStyle(el).backgroundColor),
        inverseTitles: [...document.querySelectorAll('#products .section-heading h2,#how-it-works .section-heading h2')].map(el => getComputedStyle(el).color),
        hero: getComputedStyle(document.querySelector('#home'), '::before').backgroundImage,
        ending: getComputedStyle(document.querySelector('.final-cta')).backgroundImage,
        endingColor: getComputedStyle(document.querySelector('.final-cta')).backgroundColor,
        header: getComputedStyle(document.querySelector('.site-header')).backdropFilter };
    });
    const baseColor = theme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(8, 13, 22)';
    const alt = theme === 'light' ? 'rgb(245, 245, 245)' : 'rgb(17, 24, 39)';
    state.sections.forEach((s, i) => assert.equal(s.color, i % 2 === 0 ? alt : baseColor, `${theme} ${s.selector}`));
    assert.ok(state.cards.every(c => c === (theme === 'light' ? baseColor : 'rgb(23, 32, 51)')));
    assert.ok(state.inverseTitles.every(c => c === (theme === 'light' ? 'rgb(15, 23, 42)' : 'rgb(248, 250, 252)')));
    assert.equal(state.overflow, false);
    assert.ok(state.hero.includes('linear-gradient'));
    if (theme === 'light') { assert.equal(state.ending, 'none'); assert.equal(state.endingColor, alt); }
    else assert.ok(state.ending.includes('linear-gradient'));
    assert.equal(state.header, 'none');
    const secondTab = page.locator('#tab-pos-checkout');
    if (width > 720) {
      await secondTab.hover();
      assert.equal(await secondTab.locator('svg').evaluate(el => getComputedStyle(el).color), theme === 'light' ? 'rgb(255, 255, 255)' : 'rgb(15, 23, 42)');
    } else {
      assert.equal(await secondTab.isVisible(), false, 'approved mobile layout stacks panels without tabs');
    }
    if ([390, 1440].includes(width)) {
      await page.mouse.move(0, 0);
      const axe = await new AxeBuilder({ page }).include('main').analyze();
      assert.deepEqual(axe.violations, [], `${theme} ${width} main accessibility`);
      accessibility.push({ theme, width, violations: axe.violations });
      await page.locator('#products').screenshot({ path: `artifacts/phase13/surfaces/products-${theme}-${width}.png` });
    }
    rows.push({ theme, width, ...state });
    await context.close();
  }
  for (const theme of ['light', 'dark']) {
    const page = await browser.newPage({ javaScriptEnabled: false, colorScheme: theme });
    await page.goto(base + '/');
    assert.equal(await page.locator('.product-panel').evaluateAll(els => els.every(el => el.getClientRects().length > 0)), true);
    await page.close();
  }
  await writeFile('artifacts/phase13/surfaces/results.json', JSON.stringify({ rows, accessibility }, null, 2));
  console.log(`PASS: ${rows.length} surface layouts, ${accessibility.length} scoped axe checks, hover icon colors and two no-JavaScript checks.`);
} finally { await browser.close(); }
