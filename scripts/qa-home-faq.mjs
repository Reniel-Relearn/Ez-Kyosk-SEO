import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { faqs } from '../src/data/product.ts';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const layouts = [], accessibility = [], noJavaScript = [], errors = [];
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  assert.equal(faqs.length, 10);
  for (const width of [320, 390, 768, 980, 1440, 1920]) for (const theme of ['light', 'dark']) {
    await page.setViewportSize({ width, height: 1000 });
    const response = await page.goto(`${base}/`);
    assert.equal(response.status(), 200);
    await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
    await page.evaluate(() => document.fonts.ready);
    const section = page.locator('.faq-section');
    const details = section.locator('details');
    assert.equal(await details.count(), 10);
    assert.equal(await section.locator('h2').innerText(), 'What businesses ask before a demo.');
    for (const [index, [question, answer]] of faqs.entries()) {
      const item = details.nth(index), summary = item.locator('summary'), paragraph = item.locator('p');
      assert.equal(await summary.evaluate(el => el.firstChild.textContent.trim()), question);
      assert.equal(await paragraph.textContent(), answer, 'exact owner-approved answer');
      assert.equal(await item.evaluate(el => el.open), false, 'starts closed');
      assert.equal(await paragraph.isVisible(), false);
      await summary.focus(); await page.keyboard.press('Enter');
      assert.equal(await paragraph.isVisible(), true, 'Enter opens answer');
      await page.keyboard.press('Space');
      assert.equal(await paragraph.isVisible(), false, 'Space closes answer');
    }
    await details.first().locator('summary').click();
    assert.equal(await details.first().evaluate(el => el.open), true, 'pointer opens answer');
    assert.equal(await details.locator('p:visible').count(), 1, 'other answers remain closed');
    await details.first().locator('summary').click();
    if ([390, 1440].includes(width)) await section.screenshot({ path: `artifacts/faq-${width}-${theme}-closed.png` });
    await details.evaluateAll(items => items.forEach(item => item.open = true));
    assert.equal(await details.locator('p:visible').count(), 10, 'all answers can remain open independently');
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    const overflow = await section.locator('summary,p').evaluateAll(items => items.filter(item => {
      const rect = item.getBoundingClientRect(); return rect.left < -1 || rect.right > innerWidth + 1 || item.scrollWidth > item.clientWidth + 1;
    }).map(item => item.textContent));
    assert.deepEqual(overflow, [], 'questions/answers fit viewport');
    if ([390, 1440].includes(width)) {
      const result = await new AxeBuilder({ page }).include('.faq-section').analyze();
      assert.deepEqual(result.violations, []);
      accessibility.push({ width, theme, violations: [] });
      await section.screenshot({ path: `artifacts/faq-${width}-${theme}-open.png` });
    }
    await details.first().locator('summary').focus(); await page.keyboard.press('Enter');
    assert.equal(await details.locator('p:visible').count(), 9, 'closing one does not close neighbours');
    layouts.push({ width, theme, exactAnswers: 10, keyboardToggles: 20, independentExpansion: true, overflow: false });
  }
  await context.close();
  for (const width of [390, 1440]) for (const theme of ['light', 'dark']) {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width, height: 1000 }, colorScheme: theme });
    const page = await context.newPage(); await page.goto(`${base}/`);
    // Theme assignment is QA-only; native disclosure behavior is tested with site JS disabled.
    await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
    const items = page.locator('.faq-list details');
    assert.equal(await items.count(), 10);
    for (const item of await items.all()) {
      await item.locator('summary').focus(); await page.keyboard.press('Enter');
      assert.equal(await item.locator('p').isVisible(), true);
    }
    noJavaScript.push({ width, theme, accessibleAnswers: 10 });
    await context.close();
  }
  assert.deepEqual(errors, []);
  const report = { base, layouts, accessibility, noJavaScript, errors };
  await writeFile('artifacts/faq-report.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ layoutThemeChecks: layouts.length, exactAnswerChecks: layouts.length * faqs.length,
    keyboardToggles: layouts.length * 20, accessibilityScans: accessibility.length, noJavaScriptChecks: noJavaScript.length, errors }));
} finally { await browser.close(); }
