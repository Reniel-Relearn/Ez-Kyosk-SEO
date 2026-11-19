import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { assertPhase2Preservation } from './phase2-preservation.mjs';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const preservation = await assertPhase2Preservation();
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [], errors = [];
await mkdir('artifacts/phase1', { recursive: true });
try {
  for (const javaScriptEnabled of [true, false]) {
    const context = await browser.newContext({ javaScriptEnabled, reducedMotion: 'reduce' });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    for (const [width, height] of [[320,740],[390,844],[720,900],[721,900],[768,1024],[980,900],[981,900],[1024,768],[1366,768],[1440,900],[1920,1080]]) {
      for (const theme of ['light', 'dark']) {
        await page.setViewportSize({ width, height });
        await page.goto(`${base}/`);
        await page.evaluate(theme => { document.documentElement.dataset.theme = theme; }, theme);
        await page.evaluate(() => document.fonts.ready);
        const state = await page.evaluate(() => {
          const hero = document.querySelector('.home-hero');
          const header = document.querySelector('.site-header');
          const rect = selector => { const r = hero.querySelector(selector).getBoundingClientRect(); return { top:r.top,bottom:r.bottom,left:r.left,right:r.right }; };
          const style = getComputedStyle(header);
          const heroStyle = getComputedStyle(hero);
          const logo = header.querySelector('.logo').getBoundingClientRect();
          const headerCta = header.querySelector('.header-cta').getBoundingClientRect();
          return { overflow:document.documentElement.scrollWidth > innerWidth, heading:hero.querySelector('h1').textContent,
            leftMargin:parseFloat(heroStyle.paddingLeft),rightMargin:parseFloat(heroStyle.paddingRight),
            headerLeft:parseFloat(style.paddingLeft),headerRight:parseFloat(style.paddingRight),logoLeft:logo.left,headerCtaRight:headerCta.right,
            cta:rect('.button:not(.button-secondary)'), image:rect('img'), headerHeight:header.getBoundingClientRect().height,
            gradientTop:parseFloat(getComputedStyle(hero,'::before').top), background:style.backgroundImage,
            opacity:style.opacity, blur:style.backdropFilter, font:parseFloat(getComputedStyle(hero.querySelector('h1')).fontSize) };
        });
        assert.equal(state.overflow,false,`${width}/${theme}: no horizontal overflow`);
        assert.ok(Math.abs(state.leftMargin-state.rightMargin)<1,'equal hero side margins');
        assert.ok(Math.abs(state.leftMargin-state.headerLeft)<1 && Math.abs(state.rightMargin-state.headerRight)<1,'header and hero share content boundaries');
        assert.ok(Math.abs(state.logoLeft-state.leftMargin)<1,'logo aligns with hero left edge');
        assert.ok(Math.abs(width-state.leftMargin-state.rightMargin-Math.min(1200,width-40))<1,'centered content is at most 1200px wide');
        if(width>1180) assert.ok(Math.abs(state.headerCtaRight-(width-state.rightMargin))<1,'desktop header CTA aligns with content right edge');
        assert.equal(state.heading,'Self-OrderingMade Easyfor Your Business.');
        assert.equal(state.opacity,'1');
        assert.equal(state.blur,'none');
        assert.equal((state.background.match(/rgba\([^)]*, 0\.5\)/g)||[]).length,2);
        if(javaScriptEnabled || width>1180) assert.equal(state.gradientTop,-state.headerHeight,'gradient extends behind header');
        assert.equal(await page.locator('.hero-note,.hero-product figcaption').count(),0);
        assert.ok(await page.locator('.hero-product img').getAttribute('alt'));
        assert.equal(await page.locator('.hero-actions a').first().getAttribute('href'),'https://reniel-relearn.github.io/EZ-Kyosk/');
        assert.equal(await page.locator('.hero-actions a').last().getAttribute('href'),`${new URL(base).pathname}/contact/`);
        if ([390,1366,1440].includes(width)) assert.ok(state.cta.bottom <= height,'primary CTA visible in first screen');
        if (width <= 720) assert.ok(state.cta.bottom < state.image.top,'phone CTA precedes artwork');
        await page.evaluate(() => scrollTo(0,1000));
        assert.ok(Math.abs((await page.locator('.site-header').boundingBox()).y)<=1,'header remains sticky');
        if (javaScriptEnabled && width===390) {
          await page.locator('.menu-toggle').click();
          assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');
          await page.keyboard.press('Escape');
          assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
          assert.equal(await page.locator('.menu-toggle').evaluate(el=>el===document.activeElement),true);
          await page.locator('.hero-actions a').last().focus();
          assert.equal(await page.locator('.hero-actions a').last().evaluate(el=>el===document.activeElement),true);
        }
        results.push({width,height,theme,javaScriptEnabled,...state});
      }
    }
    await context.close();
  }
  assert.deepEqual(errors,[]);
  await writeFile('artifacts/phase1/qa-report.json',JSON.stringify({preservation,layouts:results,errors},null,2));
  console.log(JSON.stringify({passed:true,layouts:results.length,preservation,errors}));
} finally { await browser.close(); }
