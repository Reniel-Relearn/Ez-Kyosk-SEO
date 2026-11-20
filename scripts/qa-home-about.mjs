import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { assertPhase2Preservation } from './phase2-preservation.mjs';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const source = (await readFile('src/components/HomeAbout.astro', 'utf8')).replaceAll('\r\n', '\n');
assert.equal(createHash('sha256').update(source).digest('hex'),
  'eece6d7ca292432e1a6ff6da6cdcebfd45283171bb1ff1d15211fab348363160', 'all approved About content/markup/links unchanged');
const introduction = [...source.matchAll(/<p>([^<{}]+)<\/p>/g)].map(match => match[1]);
assert.equal(introduction.length, 4, 'four literal introduction paragraphs; exclude template expressions');
const titles = ['Simplicity', 'Hospitality', 'Adaptability', 'Clarity'];
const layouts = [], accessibility = [], errors = [];
await mkdir('artifacts/phase9', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const mainContext = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await mainContext.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  for (const width of [320, 390, 720, 721, 768, 1024, 1180, 1181, 1366, 1440, 1920]) for (const theme of ['light', 'dark']) {
    await page.setViewportSize({ width, height: 1000 }); await page.goto(`${base}/`);
    await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
    await page.evaluate(() => document.fonts.ready);
    const section = page.locator('#about-us');
    assert.deepEqual(await section.locator('div.home-about-intro > p').allTextContents(), introduction);
    assert.deepEqual(await section.locator('.value-grid h3').allTextContents(), titles);
    const state = await section.evaluate(section => {
      const style = getComputedStyle(section), rect = section.getBoundingClientRect();
      const intro = section.querySelector('.home-about-intro'), introRect = intro.getBoundingClientRect();
      const hero = getComputedStyle(document.querySelector('.home-hero'));
      return { top: parseFloat(style.paddingTop), bottom: parseFloat(style.paddingBottom),
        left: parseFloat(style.paddingLeft), right: parseFloat(style.paddingRight), heroLeft: parseFloat(hero.paddingLeft),
        introCenter: introRect.left + introRect.width / 2, center: rect.left + rect.width / 2,
        introAlign: getComputedStyle(intro).textAlign,
        overflow: document.documentElement.scrollWidth > innerWidth,
        clipped: [...section.querySelectorAll('h2,h3,p,a')].filter(el => el.scrollWidth > el.clientWidth + 1 && /hidden|clip/.test(getComputedStyle(el).overflowX)).length,
        cards: [...section.querySelectorAll('.value-grid article')].map(card => {
          const rect = card.getBoundingClientRect();
          return { top: rect.top, bottom: rect.bottom, headingAlign: getComputedStyle(card.querySelector('h3')).textAlign,
            descriptionAlign: getComputedStyle(card.querySelector('p')).textAlign };
        }) };
    });
    assert.ok(Math.abs(state.top - Math.min(56, Math.max(32, width * .04))) < .1);
    assert.equal(state.top, state.bottom); assert.equal(state.left, state.right);
    assert.ok(Math.abs(state.left - state.heroLeft) < .1);
    assert.ok(Math.abs(state.introCenter - state.center) < 1);
    assert.equal(state.introAlign, 'center'); assert.equal(state.overflow, false); assert.equal(state.clipped, 0);
    const rows = [];
    for (const card of state.cards) {
      assert.equal(card.headingAlign, 'center'); assert.equal(card.descriptionAlign, 'left');
      let row = rows.find(row => Math.abs(row[0].top - card.top) < 1);
      if (!row) rows.push(row = []); row.push(card);
    }
    assert.equal(rows.length, width <= 720 ? 4 : width <= 980 ? 2 : 1, `${width}: preserve existing About breakpoints`);
    for (const row of rows) assert.ok(Math.max(...row.map(c => c.bottom)) - Math.min(...row.map(c => c.bottom)) < 1);
    const link = section.getByRole('link', { name: 'Discuss your requirements' });
    assert.equal(await link.getAttribute('href'), new URL(`${base}/contact/`).pathname);
    await link.focus(); await page.keyboard.press('Tab'); await page.keyboard.press('Shift+Tab');
    assert.equal(await link.evaluate(el => el.matches(':focus-visible') && getComputedStyle(el).outlineStyle === 'solid'), true);
    assert.ok((await link.boundingBox()).height >= 44);
    if ([390, 1440].includes(width)) {
      const scan = await new AxeBuilder({ page }).include('#about-us').analyze(); assert.deepEqual(scan.violations, []);
      accessibility.push({ width, theme, violations: [] });
      await section.screenshot({ path: `artifacts/phase9/about-${width}-${theme}.png`, style: '.site-header, .skip-link { visibility: hidden !important; }' });
    }
    layouts.push({ width, theme, state });
  }
  await mainContext.close();
  for (const width of [390, 1440]) {
    const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width, height: 900 } });
    const page = await context.newPage(); await page.goto(`${base}/`);
    assert.deepEqual(await page.locator('#about-us .value-grid h3').allTextContents(), titles);
    await page.locator('#about-us .text-link').focus(); await page.keyboard.press('Enter');
    await page.waitForURL(`${base}/contact/`); assert.equal(await page.locator('form[data-live="false"]').count(), 1);
    await context.close();
  }
  const preservation = await assertPhase2Preservation(); assert.deepEqual(errors, []);
  await writeFile('artifacts/phase9/about-report.json', JSON.stringify({ layouts, accessibility, preservation, noJavaScriptContact: 'passed', errors }, null, 2));
  console.log(JSON.stringify({ layouts: layouts.length, cardChecks: layouts.length * 4, accessibilityScans: accessibility.length, preservation, noJavaScriptContact: 'passed', errors }));
} finally { await browser.close(); }
