// Read-only browser evidence for audit findings, not a design-change implementation.
import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser=await chromium.launch({channel:'msedge',headless:true});
await mkdir('artifacts/phase13',{recursive:true});
const report={base,backgrounds:[],focus:[],ctas:[],performance:[],errors:[]};
try{
 const context=await browser.newContext({reducedMotion:'reduce',viewport:{width:1440,height:900}}),page=await context.newPage();
 page.on('pageerror',e=>report.errors.push(e.message));
 for(const theme of ['light','dark']){
  await page.goto(base+'/');await page.evaluate(t=>document.documentElement.dataset.theme=t,theme);await page.evaluate(()=>document.fonts.ready);
  report.backgrounds.push({theme,sections:await page.locator('main>section').evaluateAll(sections=>sections.map(el=>({id:el.id,class:el.className,color:getComputedStyle(el).backgroundColor,image:getComputedStyle(el).backgroundImage})))});
  await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Home',exact:true}).click();
  await page.waitForFunction(()=>document.activeElement===document.querySelector('#home h1'));
  const pointer=await page.locator('#home h1').evaluate(el=>({focused:el===document.activeElement,focusVisible:el.matches(':focus-visible'),outlineStyle:getComputedStyle(el).outlineStyle,outlineWidth:getComputedStyle(el).outlineWidth}));
  assert.equal(pointer.focused,true);await page.screenshot({path:`artifacts/phase13/home-pointer-focus-${theme}.png`});
  await page.reload();await page.evaluate(t=>document.documentElement.dataset.theme=t,theme);
  const link=page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Products',exact:true});
  await link.focus();await page.keyboard.press('Enter');await page.waitForFunction(()=>document.activeElement===document.querySelector('#products h2'));
  const keyboard=await page.locator('#products h2').evaluate(el=>({focusVisible:el.matches(':focus-visible'),outlineStyle:getComputedStyle(el).outlineStyle,outlineWidth:getComputedStyle(el).outlineWidth}));
  report.focus.push({theme,pointer,keyboard});
 }
 for(const route of ['/','/offers/','/articles/','/contact/','/privacy/','/404.html']){
  await page.goto(base+route);await page.evaluate(()=>document.fonts.ready);
  report.ctas.push({route,actions:await page.locator('a.button,a.text-link,a.header-cta,a.nav-mobile-cta').evaluateAll(links=>links.map(a=>({text:a.textContent.trim().replace(/\s+/g,' '),href:a.getAttribute('href'),section:a.dataset.section||null,class:a.className,visible:!!a.getClientRects().length,color:getComputedStyle(a).color,background:getComputedStyle(a).backgroundColor})))});
 }
 await context.close();
 for(const route of ['/','/offers/','/articles/']){
  const context=await browser.newContext({reducedMotion:'reduce',viewport:{width:1440,height:900}}),p=await context.newPage();
  await p.addInitScript(()=>{window.__auditCLS=0;new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)window.__auditCLS+=e.value}).observe({type:'layout-shift',buffered:true})});
  await p.goto(base+route);await p.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async img=>{img.loading='eager';await img.decode()}))});
  await p.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
  const evidence=await p.evaluate(()=>({navigation:performance.getEntriesByType('navigation').map(e=>({domContentLoadedMs:e.domContentLoadedEventEnd,loadMs:e.loadEventEnd})),observedCLS:window.__auditCLS,resources:performance.getEntriesByType('resource').map(e=>({name:e.name,bytes:e.encodedBodySize,transferBytes:e.transferSize,type:e.initiatorType})),images:[...document.images].map(img=>({source:img.currentSrc,loaded:img.complete&&img.naturalWidth>0,width:img.naturalWidth,height:img.naturalHeight})),fonts:[...document.fonts].map(font=>({family:font.family,status:font.status}))}));
  assert.ok(evidence.images.every(img=>img.loaded));report.performance.push({route,method:'Single cold local unthrottled Edge context; not field Core Web Vitals or Lighthouse',...evidence});await context.close();
 }
 assert.deepEqual(report.errors,[]);await writeFile('artifacts/phase13/browser-evidence.json',JSON.stringify(report,null,2));
 console.log(JSON.stringify({focusCases:report.focus,backgroundThemes:report.backgrounds.length,ctaRoutes:report.ctas.length,performanceRoutes:report.performance.length,errors:report.errors}));
}finally{await browser.close()}
