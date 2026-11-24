import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {assertPhase2Preservation} from './phase2-preservation.mjs';
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const copy=[
 ['Faster Ordering','Let customers browse, select and review their order in one place.'],
 ['More Order Capacity','Add a self-service ordering channel alongside your existing operations.'],
 ['Better Service Flow','Connect ordering, payment and tracking for a clearer customer journey.'],
];
const browser=await chromium.launch({channel:'msedge',headless:true});
const results=[],accessibility=[],errors=[];
await mkdir('artifacts/minimal-benefits',{recursive:true});
try {
 for(const javaScriptEnabled of [true,false]) {
  const context=await browser.newContext({javaScriptEnabled,reducedMotion:'reduce'}),page=await context.newPage();
  page.on('pageerror',error=>errors.push(error.message));
  page.on('response',response=>{if(response.status()>=400)errors.push(response.status()+' '+response.url());});
  for(const width of [320,390,720,768,980,981,1181,1440,1920]) for(const theme of ['light','dark']) {
   await page.setViewportSize({width,height:1000});await page.goto(base+'/');
   await page.evaluate(async theme=>{document.documentElement.dataset.theme=theme;await document.fonts.ready;},theme);
   const section=page.locator('.benefits-section'),panel=section.locator('.benefits-panel');
   await section.scrollIntoViewIfNeeded();
   assert.equal(await section.locator('h2').textContent(),'A better way to take orders');
   assert.equal(await section.locator('.benefits-panel').count(),1);
   assert.equal(await section.locator('img,a,button,.section-heading,.benefit-lead,.benefit-label').count(),0);
   assert.equal(await section.locator('.benefit-icon svg').count(),3);
   assert.deepEqual(await section.locator('.benefit-icon').evaluateAll(icons=>icons.map(icon=>icon.getAttribute('aria-hidden'))),['true','true','true']);
   assert.deepEqual(await section.locator('article').evaluateAll(cards=>cards.map(card=>[card.querySelector('h3').textContent,card.querySelector('p').textContent])),copy);
   for(const article of await section.locator('article').all()) {
    const a=await article.boundingBox(),icon=await article.locator('.benefit-icon').boundingBox(),heading=await article.locator('h3').boundingBox(),body=await article.locator('p').boundingBox();
    assert.equal(icon.width,64);assert.equal(icon.height,64);
    assert.ok(Math.abs(icon.x+icon.width/2-a.x-a.width/2)<1,'original icon centered');
    assert.ok(icon.y+icon.height<=heading.y&&heading.y+heading.height<=body.y,'icon, heading, description order');
   }
   assert.doesNotMatch(await section.innerText(),/%|Clear for customers|Considered for your team/);
   const state=await section.evaluate(el=>{
    const panel=el.querySelector('.benefits-panel'),p=panel.getBoundingClientRect(),hero=document.querySelector('.home-hero'),style=getComputedStyle(el);
    const cards=[...el.querySelectorAll('article')].map(card=>{const r=card.getBoundingClientRect(),s=getComputedStyle(card),h=card.querySelector('h3').getBoundingClientRect(),description=card.querySelector('p').getBoundingClientRect();return {x:r.x,y:r.y,width:r.width,height:r.height,headingY:h.y,paragraphY:description.y,background:s.backgroundColor,border:s.borderRightWidth,shadow:s.boxShadow,transform:s.transform,centered:s.textAlign==='center',clipped:[...card.querySelectorAll('h3,p,span')].some(n=>n.scrollWidth>n.clientWidth+1)};});
    return {overflow:document.documentElement.scrollWidth>innerWidth||panel.scrollWidth>panel.clientWidth,background:getComputedStyle(panel).backgroundColor,
      sectionBackground:style.backgroundColor,titleColor:getComputedStyle(panel.querySelector('h2')).color,
      bodyColors:[...panel.querySelectorAll('article>p')].map(n=>getComputedStyle(n).color),
      iconColors:[...panel.querySelectorAll('.benefit-icon svg')].map(n=>getComputedStyle(n).stroke),
      logoFilters:[...document.querySelectorAll('.brand-mark img')].map(n=>getComputedStyle(n).filter),
      heroAccent:getComputedStyle(hero,'::after').backgroundImage,
      equalMargins:Math.abs(p.left-(innerWidth-p.right))<2,
      heroMargins:style.paddingLeft===getComputedStyle(hero).paddingLeft&&style.paddingRight===getComputedStyle(hero).paddingRight,
      panelHeight:p.height,paddingTop:parseFloat(style.paddingTop),paddingBottom:parseFloat(style.paddingBottom),cards};
   });
   assert.equal(state.overflow,false);assert.equal(state.equalMargins,true);assert.equal(state.heroMargins,true);
   assert.equal(state.background,theme==='dark'?'rgb(255, 255, 255)':'rgb(23, 32, 51)');
   assert.equal(state.sectionBackground,theme==='dark'?'rgb(17, 24, 39)':'rgb(245, 245, 245)','section surface unchanged');
   const expectedBlue=theme==='dark'?'rgb(37, 99, 235)':'rgb(96, 165, 250)';
   assert.equal(state.titleColor,expectedBlue);assert.ok(state.iconColors.every(c=>c===expectedBlue));
   assert.ok(state.bodyColors.every(c=>c===(theme==='dark'?'rgb(71, 85, 105)':'rgb(203, 213, 225)')));
   assert.ok(state.logoFilters.every(f=>f.includes('brand-royal-filter.svg#royal-blue')),'approved selective turquoise-only brand filter active');
   assert.ok(state.heroAccent.includes('linear-gradient'),'approved Hero-only decorative accent active');
   const padding=Math.min(36,Math.max(24,width*.025));
   assert.ok(Math.abs(state.paddingTop-padding)<.1&&Math.abs(state.paddingBottom-padding)<.1);
   for(const card of state.cards){assert.equal(card.background,'rgba(0, 0, 0, 0)');assert.equal(card.border,'0px');assert.equal(card.shadow,'none');assert.equal(card.transform,'none');assert.equal(card.centered,true);assert.equal(card.clipped,false);}
   if(width>720) {
    assert.ok(Math.max(...state.cards.map(c=>c.y))-Math.min(...state.cards.map(c=>c.y))<2);
    assert.ok(Math.max(...state.cards.map(c=>c.paragraphY))-Math.min(...state.cards.map(c=>c.paragraphY))<2);
    if(width>=1440)assert.ok(state.panelHeight<=330,'compact desktop shared panel');
   } else assert.ok(state.cards[1].y>=state.cards[0].y+state.cards[0].height,'phone columns stack');
   await section.locator('article').first().hover();
   assert.equal(await section.locator('article').first().evaluate(el=>getComputedStyle(el).transform),'none','no individual-card hover lift');
   if(javaScriptEnabled&&[390,1440].includes(width)) {
    const scan=await new AxeBuilder({page}).include('.benefits-section').analyze();assert.deepEqual(scan.violations,[]);
    accessibility.push({width,theme,violations:scan.violations});
    await section.screenshot({path:`artifacts/minimal-benefits/benefits-${width}-${theme}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'});
   }
   results.push({width,theme,javaScriptEnabled,...state});
  }
  await context.close();
 }
 assert.deepEqual(errors,[]);
 const preservation=await assertPhase2Preservation();
 await writeFile('artifacts/minimal-benefits/report.json',JSON.stringify({results,accessibility,preservation,errors},null,2));
 console.log(JSON.stringify({layouts:results.length,accessibilityScans:accessibility.length,errors,preservation}));
} finally {await browser.close();}
