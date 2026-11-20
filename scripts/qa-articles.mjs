import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {assertPhase2Preservation} from './phase2-preservation.mjs';
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const layouts=[],scans=[],errors=[];await mkdir('artifacts/phase12',{recursive:true});
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const context=await browser.newContext({reducedMotion:'reduce'}),page=await context.newPage();
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`)});
 for(const width of [320,390,720,768,980,981,1024,1440,1920])for(const theme of ['light','dark']){
  await page.setViewportSize({width,height:1000});await page.goto(base+'/articles/');await page.evaluate(t=>document.documentElement.dataset.theme=t,theme);await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('#main-navigation>a[aria-current]').innerText(),'Articles');
  assert.equal(await page.locator('meta[name=robots]').getAttribute('content'),'noindex, nofollow');
  assert.equal(await page.locator('ul[role=list]>li[data-article-placeholder]').count(),3);
  assert.equal(await page.locator('[data-article-placeholder] a,[data-article-placeholder] button,time,main form,main article').count(),0);
  assert.ok((await page.locator('main').innerText()).includes('No articles are published yet.'));
  assert.ok(!/Read more|Published on|By author|views\b/.test(await page.locator('main').innerText()));
  assert.ok(!/@type["']?\s*:\s*["'](?:Article|BlogPosting|NewsArticle)/.test(await page.content()));
  assert.deepEqual(await page.locator('main a').evaluateAll(links=>links.map(a=>a.getAttribute('href'))),[new URL(base+'/').pathname,new URL(base+'/contact/').pathname]);
  const state=await page.locator('.articles-index').evaluate(el=>({align:getComputedStyle(el.querySelector('header')).textAlign,padding:parseFloat(getComputedStyle(el).paddingTop),bottom:parseFloat(getComputedStyle(el).paddingBottom),overflow:document.documentElement.scrollWidth>innerWidth}));
  assert.equal(state.align,'center');assert.ok(Math.abs(state.padding-Math.min(56,Math.max(32,width*.04)))<.1);assert.equal(state.bottom,state.padding);assert.equal(state.overflow,false);
  for(const link of await page.locator('main a').all()){await link.focus();assert.ok((await link.boundingBox()).height>=44);assert.equal(await link.evaluate(el=>el.matches(':focus-visible')&&getComputedStyle(el).outlineStyle==='solid'),true)}
  if([390,1440].includes(width)){const scan=await new AxeBuilder({page}).include('main').analyze();assert.deepEqual(scan.violations,[]);scans.push({width,theme});await page.locator('main').screenshot({path:`artifacts/phase12/articles-${width}-${theme}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'})}
  layouts.push({width,theme});
 }
 await context.close();const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:900}}),p=await nojs.newPage();
 for(const [index,path] of ['/', '/contact/'].entries()){await p.goto(base+'/articles/');await p.locator('main a').nth(index).focus();await p.keyboard.press('Enter');await p.waitForURL(base+path)}await nojs.close();
 const preservation=await assertPhase2Preservation();assert.deepEqual(errors,[]);await writeFile('artifacts/phase12/report.json',JSON.stringify({layouts,scans,preservation,errors},null,2));console.log(JSON.stringify({layouts:layouts.length,accessibilityScans:scans.length,noJavaScriptLinks:2,preservation,errors}));
}finally{await browser.close()}
