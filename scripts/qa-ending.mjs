import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { assertPhase2Preservation } from './phase2-preservation.mjs';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const layouts = [], scans = [], errors = [];
await mkdir('artifacts/phase10', { recursive: true });
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', e => errors.push(e.message));
  page.on('response', r => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
  for (const route of ['/', '/contact/', '/privacy/', '/offers/', '/articles/']) {
    for (const width of route === '/' ? [320,390,720,768,1024,1180,1440,1920] : [390,1440]) for (const theme of ['light','dark']) {
      await page.setViewportSize({ width, height: 1000 }); await page.goto(base + route);
      await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme); await page.evaluate(() => document.fonts.ready);
      const state = await page.locator('.site-footer').evaluate(footer => {
        const style = getComputedStyle(footer);
        return { top: parseFloat(style.paddingTop), bottom: parseFloat(style.paddingBottom), overflow: document.documentElement.scrollWidth > innerWidth,
          links: [...footer.querySelectorAll('a')].map(a => ({ href:a.getAttribute('href'), section:a.dataset.section })) };
      });
      assert.ok(Math.abs(state.top - Math.min(56, Math.max(32, width * .04))) < .1);
      assert.equal(state.top, state.bottom); assert.equal(state.overflow, false);
      for (const {href,section} of state.links) {
        assert.ok(href && href !== '#');
        if (section) assert.equal(href, new URL(base + '/').pathname);
        else if (!href.startsWith('https:')) assert.ok(['/','/offers/','/articles/','/contact/','/privacy/'].some(path => new URL(base+path).pathname === href));
      }
      assert.equal(await page.locator('.site-footer a[href$="/privacy/"]').count(), 1);
      if (route === '/') {
        const cta = page.locator('.final-cta');
        assert.equal(await cta.locator('h2').textContent(), 'Ready to make ordering feel simpler?');
        assert.equal(await cta.locator('a').first().getAttribute('href'), new URL(base+'/contact/').pathname);
        assert.equal(await cta.locator('a').last().getAttribute('href'), 'https://reniel-relearn.github.io/EZ-Kyosk/');
        const style = await cta.evaluate(el => ({align:getComputedStyle(el).textAlign, top:parseFloat(getComputedStyle(el).paddingTop),bottom:parseFloat(getComputedStyle(el).paddingBottom)}));
        assert.equal(style.align, 'center'); assert.equal(style.top, state.top); assert.equal(style.bottom, style.top);
        for (const link of await cta.locator('a').all()) { await link.focus(); assert.ok((await link.boundingBox()).height >=44); }
        if ([390,1440].includes(width)) {
          const scan = await new AxeBuilder({page}).include('.final-cta').include('.site-footer').analyze(); assert.deepEqual(scan.violations,[]); scans.push({width,theme});
          await cta.screenshot({path:`artifacts/phase10/ending-${width}-${theme}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'});
        }
      }
      layouts.push({route,width,theme});
    }
  }
  const demo = await context.request.get('https://reniel-relearn.github.io/EZ-Kyosk/'); assert.equal(demo.status(),200,'existing external demo reachable');
  await context.close(); assert.deepEqual(errors,[]);
  const preservation = await assertPhase2Preservation();
  await writeFile('artifacts/phase10/report.json',JSON.stringify({layouts,scans,preservation,errors},null,2));
  console.log(JSON.stringify({layouts:layouts.length,accessibilityScans:scans.length,externalDemo:200,preservation,errors}));
} finally {await browser.close();}
