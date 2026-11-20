import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {assertPhase2Preservation} from './phase2-preservation.mjs';

const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const component=(await readFile('src/components/PaymentShowcase.astro','utf8')).replaceAll('\r\n','\n');
assert.equal(createHash('sha256').update(component).digest('hex'),'6f8f4ba7f22a09e9eabf47b47ecf3ea677eb3f268e47cb4515642791da01c93d','original payment copy, links and image markup unchanged');
const browser=await chromium.launch({channel:'msedge',headless:true}),results=[],errors=[];
await mkdir('artifacts/phase6',{recursive:true});
try{
 for(const javaScriptEnabled of [true,false]){
  const context=await browser.newContext({javaScriptEnabled,reducedMotion:'reduce'}),page=await context.newPage();
  page.on('pageerror',error=>errors.push(error.message));
  page.on('response',response=>{if(response.status()>=400)errors.push(`${response.status()} ${response.url()}`);});
  for(const width of [320,390,720,721,768,1024,1180,1181,1400,1401,1440,1920,2560]) for(const theme of ['light','dark']){
   await page.setViewportSize({width,height:1000});await page.goto(base+'/');
   await page.evaluate(async theme=>{document.documentElement.dataset.theme=theme;await document.fonts.ready;},theme);
   const section=page.locator('#payments');await section.scrollIntoViewIfNeeded();
   await section.locator('img').evaluateAll(async images=>{await Promise.all(images.map(async image=>{image.loading='eager';await image.decode();}));});
   const state=await section.evaluate(el=>{
    const style=getComputedStyle(el),hero=getComputedStyle(document.querySelector('.home-hero')),intro=el.querySelector('.section-heading>p').getBoundingClientRect();
    return {paddingTop:parseFloat(style.paddingTop),paddingBottom:parseFloat(style.paddingBottom),sameMargins:style.paddingLeft===hero.paddingLeft&&style.paddingRight===hero.paddingRight,
     headingCentered:getComputedStyle(el.querySelector('.section-heading')).textAlign==='center',introCentered:Math.abs(intro.left+intro.width/2-innerWidth/2)<2,
     overflow:document.documentElement.scrollWidth>innerWidth,
     cards:[...el.querySelectorAll('.payment-card')].map(card=>{
      const copy=card.querySelector('.payment-copy'),link=copy.querySelector('a'),a=link.getBoundingClientRect(),r=copy.getBoundingClientRect();
      return {title:copy.querySelector('h3').textContent,centered:getComputedStyle(copy).textAlign==='center',linkCentered:Math.abs(a.left+a.width/2-r.left-r.width/2)<2,
       href:link.getAttribute('href'),actionHeight:a.height,overflow:card.scrollWidth>card.clientWidth,
       actionLines:(()=>{const range=document.createRange();range.selectNode(link.firstChild);return range.getClientRects().length;})(),
       actionOverflow:link.scrollWidth>link.clientWidth+1,
       clipped:[...copy.querySelectorAll('h3,p,a')].some(n=>n.scrollHeight>n.clientHeight+2&&/hidden|clip/.test(getComputedStyle(n).overflowY))};
     })};
   });
   const expected=Math.min(56,Math.max(32,width*.04));assert.ok(Math.abs(state.paddingTop-expected)<.1&&Math.abs(state.paddingBottom-expected)<.1);
   assert.equal(state.sameMargins,true);assert.equal(state.headingCentered,true);assert.equal(state.introCentered,true);assert.equal(state.overflow,false);
   assert.deepEqual(state.cards.map(card=>card.title),['Terminal integration','QR and e-wallet checkout']);
   for(const card of state.cards){assert.equal(card.centered,true);assert.equal(card.linkCentered,true);assert.equal(card.href,new URL(base+'/contact/').pathname);assert.ok(card.actionHeight>=44);assert.equal(card.overflow,false);assert.equal(card.clipped,false);}
   assert.equal(state.cards[1].actionLines,1,'Discuss online payments stays on one line');
   assert.equal(state.cards[1].actionOverflow,false,'online action fits its column');
   const onlineAction=section.locator('.payment-card--online .text-link');await onlineAction.hover();await page.waitForTimeout(250);
   const hoverState=await onlineAction.evaluate(link=>{const range=document.createRange();range.selectNode(link.firstChild);return {lines:range.getClientRects().length,overflow:link.scrollWidth>link.clientWidth+1};});
   assert.deepEqual(hoverState,{lines:1,overflow:false},'online label also fits on hover');
   if(javaScriptEnabled&&[390,1440].includes(width)) await section.screenshot({path:`artifacts/phase6/payments-${width}-${theme}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'});
   results.push({width,theme,javaScriptEnabled,...state});
  }
  await context.close();
 }
 assert.deepEqual(errors,[]);const preservation=await assertPhase2Preservation();
 await writeFile('artifacts/phase6/payments-report.json',JSON.stringify({results,errors,preservation},null,2));
 console.log(JSON.stringify({layouts:results.length,cardChecks:results.length*2,errors,preservation}));
}finally{await browser.close();}
