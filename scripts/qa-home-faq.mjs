import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { faqs } from '../src/data/product.ts';
import { assertPhase2Preservation } from './phase2-preservation.mjs';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const layouts = [], accessibility = [], noJavaScript = [], errors = [];
assert.equal(createHash('sha256').update((await readFile('src/data/product.ts', 'utf8')).replaceAll('\r\n', '\n')).digest('hex'),
  '2263b404755ccf6fdf954c8e47413f68e8768dec9f97007f2c4c3662d543f2a1', 'all approved FAQ and product data unchanged');
async function assertAlignment(section, width) {
  const state = await section.evaluate(section => {
    const style = getComputedStyle(section), rect = section.getBoundingClientRect();
    const intro = section.querySelector('.faq-intro'), list = section.querySelector('.faq-list');
    const action = list.querySelector('.faq-actions .text-link');
    const about = document.getElementById('about-us'), aboutStyle = getComputedStyle(about);
    const box = node => node.getBoundingClientRect();
    const center = node => box(node).left + box(node).width / 2;
    return { top: parseFloat(style.paddingTop), bottom: parseFloat(style.paddingBottom),
      left: parseFloat(style.paddingLeft), right: parseFloat(style.paddingRight),
      heroLeft: parseFloat(getComputedStyle(document.querySelector('.home-hero')).paddingLeft),
      introAlign: getComputedStyle(intro).textAlign, introPosition: getComputedStyle(intro).position,
      introCenter: center(intro), listCenter: center(list), center: rect.left + rect.width / 2,
      stacked: box(list).top >= box(intro).bottom,
      actionTop: box(action).top, finalQuestionBottom: box(list.querySelector('details:last-of-type')).bottom,
      actionLeft: box(action).left, listLeft: box(list).left,
      introLinks: intro.querySelectorAll('a').length,
      trailingSpace: rect.bottom - box(list).bottom,
      adjacentGap: box(about.querySelector('.home-about-intro')).top - box(list).bottom,
      aboutPadding: parseFloat(aboutStyle.paddingTop),
      items: [...list.querySelectorAll('details')].map(item => {
        const summary = item.querySelector('summary'), answer = item.querySelector('p'), icon = summary.querySelector('span');
        const text = document.createRange(); text.selectNodeContents(summary.firstChild);
        return { questionAlign: getComputedStyle(summary).textAlign, answerAlign: getComputedStyle(answer).textAlign,
          minTarget: box(summary).height, iconRight: box(icon).right, rowRight: box(summary).right,
          questionLeft: text.getBoundingClientRect().left, rowLeft: box(summary).left,
          answerLeft: item.open ? box(answer).left : null };
      }) };
  });
  assert.ok(Math.abs(state.top - Math.min(56, Math.max(32, width * .04))) < .1);
  assert.equal(state.top, state.bottom);
  assert.equal(state.left, state.right);
  assert.ok(Math.abs(state.left - state.heroLeft) < .1);
  assert.equal(state.introAlign, 'center');
  assert.equal(state.introPosition, 'static');
  assert.ok(Math.abs(state.introCenter - state.center) < 1 && Math.abs(state.listCenter - state.center) < 1);
  assert.equal(state.stacked, true, 'single column below introduction');
  assert.equal(state.introLinks, 0);
  assert.ok(state.actionTop >= state.finalQuestionBottom + 23, 'Contact action below every question');
  assert.ok(Math.abs(state.actionLeft - state.listLeft) < 1, 'Contact action flush left with questions');
  assert.ok(Math.abs(state.trailingSpace - state.bottom) < 1, 'no redundant trailing space');
  assert.ok(Math.abs(state.adjacentGap - state.bottom - state.aboutPadding) < 1, 'FAQ/About gap is exactly the approved section padding in every expansion state');
  for (const item of state.items) {
    assert.equal(item.questionAlign, 'left'); assert.equal(item.answerAlign, 'left');
    assert.ok(item.minTarget >= 44);
    assert.ok(Math.abs(item.iconRight - item.rowRight) < 1, 'icons share right edge');
    assert.ok(Math.abs(item.questionLeft - item.rowLeft) < 1, 'questions flush left');
    if (item.answerLeft !== null) assert.ok(Math.abs(item.answerLeft - item.rowLeft) < 1, 'answers share left edge');
  }
}
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  assert.equal(faqs.length, 10);
  for (const width of [320, 390, 720, 721, 768, 980, 1024, 1180, 1181, 1366, 1440, 1920]) for (const theme of ['light', 'dark']) {
    await page.setViewportSize({ width, height: 1000 });
    const response = await page.goto(`${base}/`);
    assert.equal(response.status(), 200);
    await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
    await page.evaluate(() => document.fonts.ready);
    const section = page.locator('.faq-section');
    const details = section.locator('details');
    assert.equal(await details.count(), 10);
    assert.equal(await section.locator('h2').innerText(), 'What businesses ask before a demo.');
    await assertAlignment(section, width);
    assert.equal(await section.locator('.text-link').getAttribute('href'), new URL(`${base}/contact/`).pathname);
    for (const [index, [question, answer]] of faqs.entries()) {
      const item = details.nth(index), summary = item.locator('summary'), paragraph = item.locator('p');
      assert.equal(await summary.evaluate(el => el.firstChild.textContent.trim()), question);
      assert.equal(await paragraph.textContent(), answer, 'exact owner-approved answer');
      assert.equal(await item.evaluate(el => el.open), false, 'starts closed');
      assert.equal(await paragraph.isVisible(), false);
      await summary.focus(); await page.keyboard.press('Enter');
      assert.equal(await summary.evaluate(el => el.matches(':focus-visible') && getComputedStyle(el).outlineStyle === 'solid'), true);
      assert.equal(await paragraph.isVisible(), true, 'Enter opens answer');
      await page.keyboard.press('Space');
      assert.equal(await paragraph.isVisible(), false, 'Space closes answer');
    }
    await details.first().locator('summary').click();
    assert.equal(await details.first().evaluate(el => el.open), true, 'pointer opens answer');
    assert.equal(await details.locator('p:visible').count(), 1, 'other answers remain closed');
    await details.first().locator('summary').click();
    const row = details.nth(1).locator('summary');
    await row.click({ position: { x: (await row.boundingBox()).width / 2, y: 10 } });
    assert.equal(await details.nth(1).evaluate(item => item.open), true, 'whole question row clickable, not just icon');
    await details.nth(3).locator('summary').click();
    assert.equal(await details.locator('p:visible').count(), 2, 'mixed independent state');
    await assertAlignment(section, width);
    await details.evaluateAll(items => items.forEach(item => item.open = false));
    if ([390, 1440].includes(width)) await section.screenshot({ path: `artifacts/faq-${width}-${theme}-closed.png` });
    await details.evaluateAll(items => items.forEach(item => item.open = true));
    assert.equal(await details.locator('p:visible').count(), 10, 'all answers can remain open independently');
    await assertAlignment(section, width);
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
    await assertAlignment(page.locator('.faq-section'), width);
    noJavaScript.push({ width, theme, accessibleAnswers: 10 });
    await context.close();
  }
  assert.deepEqual(errors, []);
  const preservation = await assertPhase2Preservation();
  const report = { base, layouts, accessibility, noJavaScript, errors, preservation };
  await writeFile('artifacts/faq-report.json', JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ layoutThemeChecks: layouts.length, exactAnswerChecks: layouts.length * faqs.length,
    keyboardToggles: layouts.length * 20, accessibilityScans: accessibility.length, noJavaScriptChecks: noJavaScript.length, errors }));
} finally { await browser.close(); }
