import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {offers} from '../src/data/offers.mjs';
import {assertPhase2Preservation} from './phase2-preservation.mjs';
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
assert.deepEqual(offers.map(p=>p.price),['PHP 0','PHP 1,990/month','PHP 3,990/month']);
assert.deepEqual(offers.slice(1).map(p=>p.costs),[[['Kiosk machine','PHP 89,000'],['Setup and onboarding','PHP 9,900']],[['Kiosk machine','PHP 89,000'],['Setup and integration','PHP 14,900']]]);
const layouts=[],scans=[],errors=[]; await mkdir('artifacts/phase11',{recursive:true});
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const context=await browser.newContext({reducedMotion:'reduce'}),page=await context.newPage();
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`)});
 for(const width of [320,390,720,768,1024,1025,1181,1440,1920])for(const theme of ['light','dark']){
  await page.setViewportSize({width,height:1000});await page.goto(base+'/offers/');
  await page.evaluate(t=>document.documentElement.dataset.theme=t,theme);await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('#main-navigation>a[aria-current]').innerText(),'Plans & Pricing');
  assert.equal(await page.locator('meta[name=robots]').getAttribute('content'),'noindex, nofollow');
  assert.equal(await page.locator('[data-offer-plan]').count(),3);
  for(const offer of offers){const card=page.locator(`[data-offer-plan=${offer.id}]`);assert.equal(await card.locator('h2').textContent(),offer.title);assert.equal(await card.locator('.offer-price').textContent(),offer.price);assert.deepEqual(await card.locator('li').allTextContents(),offer.items);assert.equal(await card.locator('a').textContent(),offer.action)}
  const content=await page.locator('main').innerText();
  for(const text of ['Up to 10 menu items','Up to 50 menu items','quoted separately','compatibility must be confirmed','optional future upgrade','Pricing and availability are not yet finalized','monthly billing units'])assert.ok(content.includes(text));
  assert.ok(!/Pricing shown is proposed|per kiosk|per branch|annual contract|Buy now/i.test(content));
  assert.equal(await page.locator('main form').count(),0);
  for(const price of await page.locator('.offer-price').all()) assert.equal(await price.evaluate(el=>{const r=document.createRange();r.selectNodeContents(el);return r.getClientRects().length}),1,'price stays on one line');
  assert.ok(!/@type["']?\s*:\s*["'](?:Offer|Product|Article)/.test(await page.content()));
  const geometry=await page.locator('[data-offer-plan]').evaluateAll(cards=>cards.map(c=>({top:c.getBoundingClientRect().top,bottom:c.getBoundingClientRect().bottom})));
  assert.equal(new Set(geometry.map(c=>Math.round(c.top))).size,width<=1024?3:1);
  if(width>1024)assert.ok(Math.max(...geometry.map(c=>c.bottom))-Math.min(...geometry.map(c=>c.bottom))<1);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  for(const link of await page.locator('main a').all()){assert.equal(await link.getAttribute('href'),new URL(base+'/contact/').pathname);assert.ok((await link.boundingBox()).height>=44)}
  if([390,1440].includes(width)){const scan=await new AxeBuilder({page}).include('main').analyze();assert.deepEqual(scan.violations,[]);scans.push({width,theme});await page.locator('main').screenshot({path:`artifacts/phase11/offers-${width}-${theme}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'})}
  layouts.push({width,theme});
 }
 await context.close();
 const nojs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:900}}),p=await nojs.newPage();
 for(let i=0;i<5;i++){await p.goto(base+'/offers/');await p.locator('main a').nth(i).focus();await p.keyboard.press('Enter');await p.waitForURL(base+'/contact/');assert.equal(await p.locator('form[data-live=false]').count(),1)}await nojs.close();
 assert.deepEqual(errors,[]);const preservation=await assertPhase2Preservation();await writeFile('artifacts/phase11/report.json',JSON.stringify({layouts,scans,preservation,errors,noJavaScriptLinks:5},null,2));console.log(JSON.stringify({layouts:layouts.length,accessibilityScans:scans.length,noJavaScriptLinks:5,preservation,errors}));
}finally{await browser.close()}
