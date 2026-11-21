import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const originalSource=execFileSync('git',['show','2d64928:src/pages/offers.astro'],{encoding:'utf8'});
const currentSource=await readFile('src/pages/offers.astro','utf8');
const copy=source=>source.match(/<div class="offers-intro"><span class="eyebrow">Want your kiosk[\s\S]*?<\/div>/)?.[0];
assert.ok(copy(originalSource));assert.equal(copy(currentSource),copy(originalSource),'YourAI copy and future disclosure unchanged');
const otherSections=source=>source.match(/<section class="offers-section section-shell"[\s\S]*?<\/section>/g);
assert.deepEqual(otherSections(currentSource),otherSections(originalSource),'pricing and final CTA untouched');
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser=await chromium.launch({channel:'msedge',headless:true});
const results=[],scans=[],errors=[];
await mkdir('artifacts/yourai-visual',{recursive:true});
try{
 for(const javaScriptEnabled of [true,false]){
  const context=await browser.newContext({javaScriptEnabled,reducedMotion:'reduce'}),page=await context.newPage();
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
  for(const width of [320,390,720,768,1024,1181,1440,1920])for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:1200});await page.goto(base+'/offers/');
   await page.evaluate(async t=>{document.documentElement.dataset.theme=t;await document.fonts.ready;},theme);
   const section=page.locator('.offer-upgrade'),image=section.locator('img');
   assert.equal(await image.count(),1);await image.scrollIntoViewIfNeeded();await image.evaluate(i=>i.decode());
   assert.match(await image.getAttribute('alt'),/planned YourAI upgrade/);
   assert.equal(await image.getAttribute('loading'),'lazy');assert.equal(await image.getAttribute('decoding'),'async');
   assert.equal(await section.locator('button,form,audio,video,iframe').count(),0,'no simulated live voice features');
   assert.ok((await section.innerText()).includes('Pricing and availability are not yet finalized.'));
   const state=await section.evaluate(el=>{const i=el.querySelector('img'),r=i.getBoundingClientRect(),c=el.querySelector('.offers-intro').getBoundingClientRect(),s=getComputedStyle(i);return{width:r.width,height:r.height,ratio:r.width/r.height,naturalRatio:i.naturalWidth/i.naturalHeight,beside:r.left>=c.right,below:r.top>=c.bottom,filter:s.filter,transform:s.transform,animation:s.animationName,overflow:document.documentElement.scrollWidth>innerWidth,source:i.currentSrc,headerPadding:getComputedStyle(document.querySelector('.site-header')).paddingLeft,sectionPadding:getComputedStyle(el).paddingLeft};});
   assert.ok(Math.abs(state.ratio-2/3)<.001);assert.ok(Math.abs(state.naturalRatio-2/3)<.001);
   assert.ok(state.width<=(width<=720?240:width<=1024?300:360)+1);
   assert.equal(state.overflow,false);assert.equal(state.filter,'none');assert.equal(state.transform,'none');assert.equal(state.animation,'none');
   assert.equal(width<=720?state.below:state.beside,true);
   const pagePadding=await page.locator('.offers-section').first().evaluate(e=>getComputedStyle(e).paddingLeft);
   assert.equal(pagePadding,state.sectionPadding,'existing Offers section gutters preserved');
   results.push({width,theme,javaScriptEnabled,...state});
   if(javaScriptEnabled&&[390,1440].includes(width)){
    const scan=await new AxeBuilder({page}).include('.offer-upgrade').analyze();assert.deepEqual(scan.violations,[]);scans.push({width,theme});
    await section.screenshot({path:`artifacts/yourai-visual/${width}-${theme}.png`});
   }
  }
  await context.close();
 }
 const context=await browser.newContext({reducedMotion:'no-preference',viewport:{width:1440,height:1000}}),page=await context.newPage();
 await page.goto(base+'/offers/');const figure=page.locator('.yourai-visual');await figure.scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelector('.yourai-visual').classList.contains('is-visible'));await page.waitForTimeout(750);
 assert.equal(await figure.evaluate(e=>getComputedStyle(e).transform),'none','one-time entrance settles without perpetual motion');await context.close();
 assert.deepEqual(errors,[]);
 const sourceHash=createHash('sha256').update(await readFile('assets/Interactive Virtual Receptionist Kiosk.png')).digest('hex');
 await writeFile('artifacts/yourai-visual/report.json',JSON.stringify({results,scans,errors,normalMotion:'entrance settles',sourceHash},null,2));
 console.log(JSON.stringify({layouts:results.length,accessibilityScans:scans.length,normalMotion:'passed',errors,sourceHash}));
}finally{await browser.close();}
