import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {productCategories} from '../src/data/product.ts';
import {assertPhase2Preservation} from './phase2-preservation.mjs';

const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
// Phase 4 source baseline: protect exact content, original icons and tab implementation.
for(const [file,expected] of [
 ['src/components/ProductExplorer.astro','4e265cb498558537dd0fb1df47dc923f5972575a3029527e3b61a66cf6800610'],
 ['src/components/ProductTabIcon.astro','3f946e446d094e23e3247cfdc48e209b3863bd71e6c63783eda52ef0a8118adf'],
 ['src/data/product.ts','e35f434877e7886c9b58f7cf0de97202ff95ebd6914eb9b021b949bb5019234c']
]) assert.equal(createHash('sha256').update((await readFile(file,'utf8')).replaceAll('\r\n','\n')).digest('hex'),expected,file+' unchanged');
const browser=await chromium.launch({channel:'msedge',headless:true});
const layouts=[],panels=[],detailLinks=[],errors=[];
await mkdir('artifacts/phase5',{recursive:true});
try {
 for(const javaScriptEnabled of [true,false]) {
  const context=await browser.newContext({javaScriptEnabled,reducedMotion:'reduce'}),page=await context.newPage();
  page.on('pageerror',e=>errors.push(e.message));
  for(const width of [320,390,720,721,980,981,1181,1440,1920]) for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:900});await page.goto(base+'/');
   await page.evaluate(async theme=>{document.documentElement.dataset.theme=theme;await document.fonts.ready;},theme);
   const section=page.locator('#products');
   const geometry=await section.evaluate(el=>{
    const style=getComputedStyle(el),hero=getComputedStyle(document.querySelector('.home-hero')),intro=el.querySelector('.section-heading>p').getBoundingClientRect();
    return {paddingTop:parseFloat(style.paddingTop),paddingBottom:parseFloat(style.paddingBottom),sameMargins:style.paddingLeft===hero.paddingLeft&&style.paddingRight===hero.paddingRight,
     centered:getComputedStyle(el.querySelector('.section-heading')).textAlign==='center',introCentered:Math.abs(intro.left+intro.width/2-innerWidth/2)<2,
     overflow:document.documentElement.scrollWidth>innerWidth};
   });
   const expectedPadding=Math.min(56,Math.max(32,width*.04));
   assert.ok(Math.abs(geometry.paddingTop-expectedPadding)<.1&&Math.abs(geometry.paddingBottom-expectedPadding)<.1);
   assert.equal(geometry.sameMargins,true);assert.equal(geometry.centered,true);assert.equal(geometry.introCentered,true);assert.equal(geometry.overflow,false);
   assert.deepEqual(await section.locator('[role=tab]').allTextContents(),productCategories.map(c=>c.label));
   assert.equal(await section.locator('.product-panel:visible').count(),!javaScriptEnabled||width<=720?5:1);
   for(const category of productCategories){
    if(javaScriptEnabled&&width>720) await page.locator('#tab-'+category.id).click();
    const panel=page.locator('#panel-'+category.id);
    assert.equal(await panel.isVisible(),true);
    assert.equal(await panel.locator('h3').innerText(),category.title);
    assert.equal(await panel.locator('.product-panel-copy>p').innerText(),category.body);
    assert.deepEqual(await panel.locator('.check-list li').allTextContents(),category.items);
    assert.equal(await panel.locator('.text-link').getAttribute('href'),new URL(base+'/contact/').pathname);
    const state=await panel.evaluate(el=>{
     const copy=el.querySelector('.product-panel-copy'),title=copy.querySelector('h3'),body=copy.querySelector('p'),link=copy.querySelector('a'),r=copy.getBoundingClientRect(),a=link.getBoundingClientRect();
     return {titleCentered:getComputedStyle(title).textAlign==='center',bodyCentered:getComputedStyle(body).textAlign==='center',listsReadable:getComputedStyle(copy.querySelector('ul')).textAlign==='left',
      linkCentered:Math.abs(a.left+a.width/2-r.left-r.width/2)<2,overflow:el.scrollWidth>el.clientWidth,
      clipped:[...el.querySelectorAll('h3,p,li,a')].some(n=>n.scrollHeight>n.clientHeight+2&&/hidden|clip/.test(getComputedStyle(n).overflowY))};
    });
    assert.deepEqual(state,{titleCentered:true,bodyCentered:true,listsReadable:true,linkCentered:true,overflow:false,clipped:false});
    panels.push({width,theme,javaScriptEnabled,category:category.id,...state});
   }
   layouts.push({width,theme,javaScriptEnabled,...geometry});
   if(javaScriptEnabled&&[390,1440].includes(width)){
    if(width>720) await page.locator('#tab-self-ordering').click();
    await section.scrollIntoViewIfNeeded();
    await section.locator('img:visible').evaluateAll(async images=>{await Promise.all(images.map(async img=>{img.loading='eager';await img.decode();}));});
    await section.screenshot({path:`artifacts/phase5/products-${width}-${theme}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'});
   }
  }
  await context.close();
 }
 // Old detail links must expose the requested panel, not merely select an offscreen mobile panel.
 const context=await browser.newContext({reducedMotion:'reduce'}),page=await context.newPage();
 for(const width of [390,1440]) for(const category of productCategories){
  await page.setViewportSize({width,height:900});await page.goto(`${base}/features/#${category.id}`);
  await page.waitForURL(base+'/');
  await page.waitForFunction(id=>document.querySelector('#tab-'+id)?.getAttribute('aria-selected')==='true',category.id);
  const panel=page.locator('#panel-'+category.id);
  assert.equal(await panel.evaluate(el=>el.contains(document.activeElement)),true,'detail focus follows requested panel');
  const position=await panel.locator('h3').evaluate(el=>({top:el.getBoundingClientRect().top,bottom:el.getBoundingClientRect().bottom,header:document.querySelector('.site-header').getBoundingClientRect().bottom,height:innerHeight}));
  detailLinks.push({width,id:category.id,...position});
  assert.ok(position.top>=position.header-2&&position.bottom<=position.height,`${width}/${category.id}: requested panel heading visible below header: ${JSON.stringify(position)}`);
 }
 await context.close();assert.deepEqual(errors,[]);
 const preservation=await assertPhase2Preservation();
 await writeFile('artifacts/phase5/products-report.json',JSON.stringify({layouts,panels,detailLinks,errors,preservation},null,2));
 console.log(JSON.stringify({layouts:layouts.length,panelChecks:panels.length,detailLinks:detailLinks.length,errors,preservation}));
}finally{await browser.close();}
