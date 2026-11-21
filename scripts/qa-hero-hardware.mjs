import sharp from 'sharp';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {verifyHeroImage} from './verify-hero-image.mjs';
import {assertPhase2Preservation} from './phase2-preservation.mjs';
const original=await sharp('assets/hero-kiosk-transparent-v3.webp').ensureAlpha().raw().toBuffer({resolveWithObject:true});
const revised=await sharp('assets/hero-kiosk-hardware-v4.webp').ensureAlpha().raw().toBuffer({resolveWithObject:true});
assert.equal(revised.info.width,original.info.width);
assert.equal(revised.info.height,original.info.height);
let intersection=0,union=0;
for(let i=3;i<original.data.length;i+=4){
 const a=original.data[i]>=250,b=revised.data[i]>=250;
 if(a&&b)intersection++;
 if(a||b)union++;
}
const silhouetteIoU=intersection/union;
// A coarse silhouette guard, NOT proof of exact screen-corner/pixel identity.
assert.ok(silhouetteIoU>.95,'original composition/silhouette substantially retained');
const alpha=await verifyHeroImage('assets/hero-kiosk-hardware-v4.webp');
const preservation=await assertPhase2Preservation();
const browser=await chromium.launch({channel:'msedge',headless:true});
const results=[],accessibility=[],errors=[];
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
await mkdir('artifacts/hero-hardware-v4',{recursive:true});
try{
 for(const javaScriptEnabled of [true,false]){
  const context=await browser.newContext({javaScriptEnabled,reducedMotion:'reduce'}),page=await context.newPage();
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
  for(const width of [320,390,720,768,1024,1440,1920,2560])for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:1000});await page.goto(base+'/');
   await page.evaluate(async t=>{document.documentElement.dataset.theme=t;await document.fonts.ready;},theme);
   const hero=page.locator('.home-hero'),image=hero.locator('.hero-product img');
   await image.evaluate(i=>i.decode());
   const state=await image.evaluate(i=>{const s=getComputedStyle(i),b=i.getBoundingClientRect();return{src:i.currentSrc,ratio:b.width/b.height,filter:s.filter,transform:s.transform,opacity:s.opacity,loading:i.loading,priority:i.fetchPriority,overflow:document.documentElement.scrollWidth>innerWidth};});
   assert.ok(state.src.includes('hero-kiosk-hardware-v4.'));
   assert.ok(Math.abs(state.ratio-2/3)<.001);
   assert.equal(state.filter,'none');assert.equal(state.transform,'none');assert.equal(state.opacity,'1');
   assert.equal(state.loading,'eager');assert.equal(state.priority,'high');assert.equal(state.overflow,false);
   assert.equal(await hero.locator('.hero-orbit').count(),1);
   results.push({width,theme,javaScriptEnabled,...state});
   if(javaScriptEnabled&&[390,1440].includes(width)){
    const scan=await new AxeBuilder({page}).include('.home-hero').analyze();
    assert.deepEqual(scan.violations,[]);accessibility.push({width,theme,violations:[]});
    await hero.screenshot({path:`artifacts/hero-hardware-v4/${width}-${theme}.png`});
   }
  }
  await context.close();
 }
 assert.deepEqual(errors,[]);
 await writeFile('artifacts/hero-hardware-v4/report.json',JSON.stringify({silhouetteIoU,alpha,preservation,results,accessibility,errors},null,2));
 console.log(JSON.stringify({silhouetteIoU,layouts:results.length,accessibilityScans:accessibility.length,errors}));
}finally{await browser.close();}
