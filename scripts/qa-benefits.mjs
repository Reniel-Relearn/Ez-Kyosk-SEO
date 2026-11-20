import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import {mkdir, writeFile} from 'node:fs/promises';
import {assertPhase2Preservation} from './phase2-preservation.mjs';

const base=process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const titles=['Faster Ordering Experience','More Order Capacity','Better Service Flow'];
const browser=await chromium.launch({channel:'msedge',headless:true});
const results=[],errors=[];
const iconContrast=async section=>section.evaluate(el=>{
  const luminance=color=>{
    const channels=color.match(/[\d.]+/g).slice(0,3).map(v=>{const c=Number(v)/255;return c<=.04045?c/12.92:((c+.055)/1.055)**2.4;});
    return channels[0]*.2126+channels[1]*.7152+channels[2]*.0722;
  };
  return [...el.querySelectorAll('.benefit-icon svg, .benefit-icon svg [stroke]')].map(n=>{
    let parent=n.closest('article');
    while(parent && getComputedStyle(parent).backgroundColor==='rgba(0, 0, 0, 0)') parent=parent.parentElement;
    const a=luminance(getComputedStyle(n).stroke),b=luminance(getComputedStyle(parent).backgroundColor);
    return (Math.max(a,b)+.05)/(Math.min(a,b)+.05);
  });
});
await mkdir('artifacts/phase3',{recursive:true});
try {
  for(const javaScriptEnabled of [true,false]) {
    const context=await browser.newContext({javaScriptEnabled,reducedMotion:'reduce'});
    const page=await context.newPage();
    page.on('pageerror',error=>errors.push(error.message));
    for(const width of [320,390,720,980,981,1181,1440,1920]) for(const theme of ['light','dark']) {
      await page.setViewportSize({width,height:900});
      await page.goto(base+'/');
      await page.evaluate(async theme=>{document.documentElement.dataset.theme=theme;await document.fonts.ready;},theme);
      const section=page.locator('.benefits-section');
      await section.scrollIntoViewIfNeeded();
      assert.deepEqual(await section.locator('h3').allTextContents(),titles);
      const state=await section.evaluate(el=>{
        const box=n=>{const r=n.getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height};};
        const cards=[...el.querySelectorAll('article')];
        return {
          paddingTop:parseFloat(getComputedStyle(el).paddingTop),
          paddingBottom:parseFloat(getComputedStyle(el).paddingBottom),
          overflow:document.documentElement.scrollWidth>innerWidth,
          headingCentered:getComputedStyle(el.querySelector('.section-heading')).textAlign==='center',
          introCentered:Math.abs(el.querySelector('.section-heading>p').getBoundingClientRect().left+el.querySelector('.section-heading>p').getBoundingClientRect().width/2-innerWidth/2)<2,
          cards:cards.map(card=>({box:box(card),icon:box(card.querySelector('.benefit-icon')),heading:box(card.querySelector('h3')),paragraph:box(card.querySelector('p')),decorative:card.querySelector('.benefit-icon').getAttribute('aria-hidden'),centered:getComputedStyle(card).textAlign==='center',clipped:[...card.querySelectorAll('h3,p')].some(n=>n.scrollHeight>n.clientHeight+2&&/hidden|clip/.test(getComputedStyle(n).overflowY))}))
        };
      });
      assert.equal(state.overflow,false);
      const expectedPadding=Math.min(56,Math.max(32,width*.04));
      assert.ok(Math.abs(state.paddingTop-expectedPadding)<.1,'compact top spacing');
      assert.ok(Math.abs(state.paddingBottom-expectedPadding)<.1,'compact bottom spacing');
      assert.equal(state.headingCentered,true);
      assert.equal(state.introCentered,true);
      assert.ok((await iconContrast(section)).every(ratio=>ratio>=3),'icon strokes contrast >= 3:1');
      for(const card of state.cards){
        assert.equal(card.centered,true);assert.equal(card.clipped,false);assert.equal(card.decorative,'true');
        assert.equal(card.icon.width,64);assert.equal(card.icon.height,64);
        assert.ok(Math.abs(card.icon.x+32-card.box.x-card.box.width/2)<2,'icon centered');
      }
      if(width>980){
        for(const field of ['y']) assert.ok(Math.max(...state.cards.map(c=>c.heading[field]))-Math.min(...state.cards.map(c=>c.heading[field]))<2,'heading starts aligned');
        assert.ok(Math.max(...state.cards.map(c=>c.paragraph.y))-Math.min(...state.cards.map(c=>c.paragraph.y))<2,'paragraph starts aligned');
      }else assert.ok(state.cards[1].box.y>=state.cards[0].box.y+state.cards[0].box.height-1,'stacked cards');
      // Check actual rendered section only, not the separately documented header.
      if(javaScriptEnabled && [390,1440].includes(width)) {
        const axe=await new AxeBuilder({page}).include('.benefits-section').analyze();
        assert.deepEqual(axe.violations,[],JSON.stringify(axe.violations));
        // Hide fixed overlays only during this full-section capture, not during checks.
        await section.screenshot({path:`artifacts/phase3/benefits-${width}-${theme}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'});
        await section.locator('article').first().hover();
        await page.waitForTimeout(300);
        assert.ok((await iconContrast(section)).every(ratio=>ratio>=3),'hover icon contrast >= 3:1');
        const hovered=await new AxeBuilder({page}).include('.benefits-section').analyze();
        assert.deepEqual(hovered.violations,[],JSON.stringify(hovered.violations));
      }
      results.push({width,theme,javaScriptEnabled,...state});
    }
    await context.close();
  }
  assert.deepEqual(errors,[]);
  const preservation=await assertPhase2Preservation();
  await writeFile('artifacts/phase3/qa-benefits.json',JSON.stringify({results,preservation,errors},null,2));
  console.log(`PASS: ${results.length} benefits layouts, light/dark, JavaScript/no-JavaScript, 320px reflow, scoped accessibility/rest/hover and Phase 2 preservation.`);
} finally {await browser.close();}
