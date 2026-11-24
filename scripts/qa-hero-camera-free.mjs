import sharp from 'sharp';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {verifyHeroImage} from './verify-hero-image.mjs';
import {assertPhase2Preservation} from './phase2-preservation.mjs';
const folder='artifacts/hero-hardware-v6';await mkdir(folder,{recursive:true});
const decode=path=>sharp(path).ensureAlpha().raw().toBuffer({resolveWithObject:true});
const old=await decode('assets/hero-kiosk-hardware-v4.webp'),current=await decode('assets/hero-kiosk-hardware-v6.webp');
assert.equal(current.info.width,old.info.width);assert.equal(current.info.height,old.info.height);
const solidWidth=image=>{let count=0;const y=Math.round(image.info.height*.8);for(let x=0;x<image.info.width;x++)if(image.data[(y*image.info.width+x)*4+3]>=250)count++;return count;};
const pedestal={old:solidWidth(old),current:solidWidth(current)};
assert.ok(pedestal.current<pedestal.old*.8,'pedestal materially slimmer at same canvas scale');
const alpha=await verifyHeroImage('assets/hero-kiosk-hardware-v6.webp');
const topPixel=(Math.round(current.info.height*.012)*current.info.width+Math.round(current.info.width*.52))*4;
assert.equal(current.data[topPixel+3],0,'former top-camera position clear');
let turquoise=0;
for(let y=Math.round(current.info.height*.65);y<current.info.height*.9;y++)for(let x=Math.round(current.info.width*.4);x<current.info.width*.55;x++){
 const i=(y*current.info.width+x)*4;const [r,g,b,a]=current.data.subarray(i,i+4);
 if(a>240&&g>100&&b>90&&g>r*1.7&&b>r*1.7)turquoise++;
}
assert.equal(turquoise,0,'no turquoise pedestal logo in previous branding area');
let headerTurquoise=0;
for(let y=Math.round(current.info.height*.06);y<current.info.height*.105;y++)for(let x=Math.round(current.info.width*.34);x<current.info.width*.58;x++){
 const i=(y*current.info.width+x)*4;const [r,g,b,a]=current.data.subarray(i,i+4);
 if(a>240&&g>100&&b>90&&g>r*1.7&&b>r*1.7)headerTurquoise++;
}
assert.equal(headerTurquoise,0,'former screen-header branding area no longer turquoise');
const browser=await chromium.launch({channel:'msedge',headless:true});
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const layouts=[],accessibility=[],errors=[];
try{
 for(const javaScriptEnabled of [true,false]){
  const context=await browser.newContext({javaScriptEnabled,reducedMotion:'reduce'}),page=await context.newPage();
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
  for(const width of [320,390,720,768,1024,1440,1920,2560])for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:1000});await page.goto(base+'/');
   await page.evaluate(async theme=>{document.documentElement.dataset.theme=theme;await document.fonts.ready;await document.querySelector('.hero-product img').decode();},theme);
   const state=await page.locator('.hero-product img').evaluate(i=>{const s=getComputedStyle(i),b=i.getBoundingClientRect();return{src:i.currentSrc,ratio:b.width/b.height,filter:s.filter,transform:s.transform,opacity:s.opacity,loading:i.loading,priority:i.fetchPriority,overflow:document.documentElement.scrollWidth>innerWidth};});
   assert.ok(state.src.includes('hero-kiosk-hardware-v6.'));assert.ok(Math.abs(state.ratio-2/3)<.001);
   assert.equal(state.filter,'none');assert.equal(state.transform,'none');assert.equal(state.opacity,'1');
   assert.equal(state.loading,'eager');assert.equal(state.priority,'high');assert.equal(state.overflow,false);
   assert.equal(await page.locator('.home-hero .hero-orbit').count(),1);
   if(javaScriptEnabled&&[390,1440].includes(width)){
    const scan=await new AxeBuilder({page}).include('.home-hero').analyze();assert.deepEqual(scan.violations,[]);accessibility.push({width,theme});
    await page.locator('.home-hero').screenshot({path:`${folder}/${width}-${theme}.png`});
   }
   layouts.push({width,theme,javaScriptEnabled,...state});
  }await context.close();
 }
 assert.deepEqual(errors,[]);const preservation=await assertPhase2Preservation();
 await writeFile(`${folder}/report.json`,JSON.stringify({pedestal,alpha,turquoise,headerTurquoise,layouts,accessibility,errors,preservation},null,2));
 console.log(JSON.stringify({pedestal,alpha,layouts:layouts.length,accessibilityScans:accessibility.length,errors,preservation}));
}finally{await browser.close();}
