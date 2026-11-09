import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4322';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const report = [];
const viewports = [[1024,600],[1280,720],[1366,768],[1440,900],[1920,1080],[2560,1440],[320,740],[390,844],[768,1024]];
await mkdir('artifacts', { recursive: true });
try {
  for (const theme of ['dark','light']) {
    for (const [width,height] of viewports) {
      await page.setViewportSize({width,height});
      await page.goto(base);
      await page.evaluate(t => { localStorage.setItem('ez-kyosk-theme',t); document.documentElement.dataset.theme=t; }, theme);
      await page.evaluate(async () => { await document.fonts.ready; await document.querySelector('.hero-product img').decode(); });
      const layout = await page.evaluate(() => {
        const box = selector => { const r=document.querySelector(selector).getBoundingClientRect(); return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height}; };
        return {
          hero:box('.hero-reference'), copy:box('.hero-copy'), product:box('.hero-product'), image:box('.hero-product img'), caption:box('.hero-product figcaption'), header:box('.header'),
          logoBackground:getComputedStyle(document.querySelector('.header .logo')).backgroundColor,
          overflow:document.documentElement.scrollWidth>innerWidth,
        };
      });
      assert.equal(layout.overflow,false,`${theme} ${width} overflow`);
      assert.ok(Math.abs(layout.hero.left)<1 && Math.abs(layout.hero.right-width)<1,`${width}: full width`);
      assert.equal(layout.logoBackground,'rgba(0, 0, 0, 0)','No logo plate');
      assert.ok(layout.image.top>=layout.hero.top && layout.caption.bottom<=layout.hero.bottom,`${width}: image/caption inside hero`);
      if(width>=1024){
        assert.ok(Math.abs(layout.hero.bottom-height)<2,`${width}x${height}: hero fits viewport`);
        assert.ok(layout.copy.top>=layout.header.bottom && layout.copy.bottom<=layout.hero.bottom,`${width}: text inside hero`);
        assert.ok(layout.copy.right<=layout.product.left,`${width}: no text/product overlap`);
      }
      const violations=(await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}));
      report.push({theme,width,height,...layout,violations});
      if([1366,1920,390].includes(width))await page.screenshot({path:`artifacts/hero-fit-${theme}-${width}.png`,fullPage:width===390});
    }
  }
  await writeFile('artifacts/hero-fit-report.json',JSON.stringify({report,errors},null,2));
  console.log(JSON.stringify({checks:report.length,failures:report.filter(r=>r.violations.length),errors},null,2));
  assert.ok(report.every(r=>r.violations.length===0));
  assert.equal(errors.length,0);
} finally { await browser.close(); }
