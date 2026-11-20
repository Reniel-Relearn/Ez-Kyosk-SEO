import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {assertPhase2Preservation} from './phase2-preservation.mjs';
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser=await chromium.launch({channel:'msedge',headless:true});
const results=[],errors=[];
await mkdir('artifacts/phase3/margins',{recursive:true});
try {
 for(const javaScriptEnabled of [true,false]) {
  const context=await browser.newContext({javaScriptEnabled,reducedMotion:'reduce'});
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  for(const width of [320,390,720,980,1180,1181,1366,1440,1920,2560]) for(const theme of ['light','dark']) {
   await page.setViewportSize({width,height:900});await page.goto(base+'/');
   await page.evaluate(async theme=>{document.documentElement.dataset.theme=theme;await document.fonts.ready;},theme);
   // Check all-open cards as the most demanding text layout; preserve native independent expansion.
   await page.locator('.platform-card-details').evaluateAll(nodes=>nodes.forEach(n=>n.open=true));
   const state=await page.evaluate(()=>{
    const hero=document.querySelector('.home-hero'),hs=getComputedStyle(hero),left=parseFloat(hs.paddingLeft),right=innerWidth-parseFloat(hs.paddingRight);
    const sections=[...document.querySelectorAll('main > section,.site-footer')].map(el=>{
     const r=el.getBoundingClientRect(),s=getComputedStyle(el);
     return {name:el.id||el.className,left:r.left+parseFloat(s.paddingLeft),right:r.right-parseFloat(s.paddingRight)};
    });
    const overflow=[...document.querySelectorAll('main > section h2,main > section h3,main > section p,main > section button,main > section summary,.product-tabs,.product-panel:not([hidden]),.payment-card,.platform-card--expandable,.industry-card,.customer-journey-card,.footer-grid')].filter(n=>n.getClientRects().length).filter(n=>{
     const r=n.getBoundingClientRect();return r.left<left-2||r.right>right+2||n.scrollWidth>n.clientWidth+3;
    }).map(n=>({tag:n.tagName,class:n.className,text:n.textContent.slice(0,45),scroll:n.scrollWidth,client:n.clientWidth}));
    return {left,right,sections,overflow,documentOverflow:document.documentElement.scrollWidth>innerWidth};
   });
   for(const section of state.sections){assert.ok(Math.abs(section.left-state.left)<2,`${width}: ${section.name} left`);assert.ok(Math.abs(section.right-state.right)<2,`${width}: ${section.name} right`);}
   assert.equal(state.documentOverflow,false);assert.deepEqual(state.overflow,[],`${width}/${theme}: ${JSON.stringify(state.overflow)}`);
   results.push({width,theme,javaScriptEnabled,...state});
   if(javaScriptEnabled&&theme==='light'&&[390,1440,1920].includes(width)) for(const selector of ['.benefits-section','.platform-section','#products','#payments','#how-it-works','#industries']) {
    const section=page.locator(selector);await section.scrollIntoViewIfNeeded();
    await section.locator('img').evaluateAll(async nodes=>{await Promise.all(nodes.map(async n=>{n.loading='eager';await n.decode();}));});
    await section.screenshot({path:`artifacts/phase3/margins/${selector.replace(/[.#]/g,'')}-${width}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'});
   }
  }
  await context.close();
 }
 assert.deepEqual(errors,[]);const preservation=await assertPhase2Preservation();
 await writeFile('artifacts/phase3/margins/report.json',JSON.stringify({results,errors,preservation},null,2));
 console.log(JSON.stringify({layouts:results.length,errors,preservation}));
}finally{await browser.close();}
