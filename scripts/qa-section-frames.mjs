import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {assertPhase2Preservation} from './phase2-preservation.mjs';
const base=process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser=await chromium.launch({channel:'msedge',headless:true});
const results=[],errors=[];
await mkdir('artifacts/phase2/frames',{recursive:true});
const measure=(id)=>{
  const el=document.getElementById(id),style=getComputedStyle(el),r=el.getBoundingClientRect();
  const top=r.top+parseFloat(style.paddingTop),bottom=r.bottom-parseFloat(style.paddingBottom);
  const header=document.querySelector('.site-header').getBoundingClientRect().bottom;
  return {id,top,bottom,height:bottom-top,header,available:innerHeight-header,
    centered:Math.abs((top+bottom)/2-(header+innerHeight)/2)<4,
    overflow:document.documentElement.scrollWidth>innerWidth,
    // Visible font ink may exceed its line box; only hidden/clipped overflow cuts text.
    clipped:[...el.querySelectorAll('h2,h3,p,.check-list,.text-link')].filter(n=>n.getClientRects().length && n.scrollHeight>n.clientHeight+2 && /hidden|clip/.test(getComputedStyle(n).overflowY)).map(n=>({tag:n.tagName,class:n.className,scroll:n.scrollHeight,client:n.clientHeight,overflow:getComputedStyle(n).overflowY}))};
};
try{
 const page=await browser.newPage({reducedMotion:'reduce'});
 page.on('pageerror',e=>errors.push(e.message));
 for(const [width,height] of [[1181,768],[1366,768],[1440,900],[1920,1080]]) for(const theme of ['light','dark']){
  await page.setViewportSize({width,height});await page.goto(base+'/');
  await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);await page.evaluate(()=>document.fonts.ready);
  for(const [label,id] of [['Products','products'],['How It Works','how-it-works'],['Industries','industries'],['About Us','about-us']]){
   const tabs=id==='products'?[0,1,2,3,4]:[null];
   for(const tab of tabs){
    if(tab!==null) await page.getByRole('tab').nth(tab).evaluate(el=>el.click());
    await page.getByRole('navigation').getByRole('link',{name:label,exact:true}).click();
    await page.waitForFunction(id=>{
      const el=document.getElementById(id),r=el.getBoundingClientRect(),s=getComputedStyle(el),header=document.querySelector('.site-header').getBoundingClientRect().bottom;
      return Math.abs((r.top+parseFloat(s.paddingTop)+r.bottom-parseFloat(s.paddingBottom))/2-(header+innerHeight)/2)<4;
    },id);
    await page.locator('#'+id).evaluate(async el=>{await Promise.all([...el.querySelectorAll('img')].filter(img=>img.getClientRects().length).map(async img=>{img.loading='eager';await img.decode();}));});
    const state=await page.evaluate(measure,id);
    assert.ok(state.height<=state.available-32,`${width}/${id}/${tab}: entire frame fits`);
    assert.ok(state.top>=state.header+15 && state.bottom<=height-15,'full content visible below header');
    assert.equal(state.centered,true);assert.equal(state.overflow,false);assert.deepEqual(state.clipped,[],`${width}/${id}/${tab}: ${JSON.stringify(state.clipped)}`);
    assert.equal(new URL(page.url()).hash,'');
    assert.equal(await page.locator('#main-navigation > a[aria-current]').innerText(),label,'active item follows centered frame');
    results.push({width,height,theme,tab,...state});
    if(tab===0 || tab===null) await page.screenshot({path:`artifacts/phase2/frames/${id}-${width}-${theme}.png`});
   }
  }
 }
 // Narrow/zoomed-layout fallback is readable scrolling, never a transform or page zoom.
 for(const width of [320,390,720,1024]){
  await page.setViewportSize({width,height:844});await page.goto(base+'/');
  await page.locator('.menu-toggle').click();
  await page.getByRole('navigation').getByRole('link',{name:'Products',exact:true}).click();
  await page.waitForTimeout(150);
  const state=await page.evaluate(measure,'products');
  assert.equal(state.overflow,false);
  assert.ok(Math.abs(state.top-state.header-16)<4,'tall frames begin below header and scroll naturally');
  assert.equal(await page.locator('#products').evaluate(el=>getComputedStyle(el).zoom),'1');
  results.push({width,fallback:true,...state});
 }
 assert.deepEqual(errors,[]);
 const preservation=await assertPhase2Preservation();
 await writeFile('artifacts/phase2/frames/report.json',JSON.stringify({checks:results,preservation,errors},null,2));
 console.log(JSON.stringify({checks:results.length,preservation,errors}));
}finally{await browser.close();}
