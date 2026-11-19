import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {assertPhase2Preservation} from './phase2-preservation.mjs';
const base=process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const root=new URL(base+'/');
const labels=['Home','Products','How It Works','Industries','Plans & Pricing','About Us','Articles'];
const sections={Products:'products','How It Works':'how-it-works',Industries:'industries','About Us':'about-us'};
const routes=['/','/offers/','/articles/','/contact/','/privacy/','/404.html'];
const browser=await chromium.launch({channel:'msedge',headless:true});
const layouts=[],jumps=[],legacy=[],errors=[];
await mkdir('artifacts/phase2',{recursive:true});
async function landed(page,id){
  try { await page.waitForFunction(id=>{
    const target=document.getElementById(id),header=document.querySelector('.site-header');
    if(!target || !header) return false;
    const rect=target.getBoundingClientRect(),style=getComputedStyle(target),bottom=header.getBoundingClientRect().bottom;
    const paddingTop=parseFloat(style.paddingTop)||0,paddingBottom=parseFloat(style.paddingBottom)||0;
    const frameHeight=target.offsetHeight-paddingTop-paddingBottom,available=innerHeight-bottom;
    const expected=bottom+(frameHeight<=available-32 ? (available-frameHeight)/2 : 16);
    return Math.abs(rect.top+paddingTop-expected)<=4;
  },id); } catch(error) {
    console.log('Failed section landing',await page.evaluate(id=>({id,url:location.href,width:innerWidth,scrollY,target:document.getElementById(id)?.getBoundingClientRect().toJSON(),header:document.querySelector('.site-header')?.getBoundingClientRect().toJSON(),focus:document.activeElement?.outerHTML}),id));
    await page.screenshot({path:'artifacts/phase2/failed-landing.png'});
    throw error;
  }
  assert.equal(new URL(page.url()).hash,'');
  assert.equal(new URL(page.url()).search,'');
  assert.equal(new URL(page.url()).pathname,root.pathname);
  assert.equal(await page.locator('#'+id).evaluate(el=>el.contains(document.activeElement)),true,'focus follows section navigation');
  assert.ok((await page.locator('#main-navigation > a[aria-current]').count())<=1);
}
try{
  const context=await browser.newContext({reducedMotion:'reduce'});
  const page=await context.newPage();
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400) errors.push(`${r.status()} ${r.url()}`);});
  for(const width of [320,390,720,721,768,980,981,1024,1180,1181,1280,1366,1440,1920]){
    await page.setViewportSize({width,height:900});
    for(const theme of ['light','dark']) for(const route of routes){
      assert.equal((await page.goto(base+route)).status(),200);
      await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);
      await page.evaluate(()=>document.fonts.ready);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${width}/${route}: no overflow`);
      const nav=page.locator('#main-navigation > a:not(.nav-mobile-cta)');
      assert.deepEqual(await nav.allTextContents(),labels);
      if(width<=1180){
        await page.locator('.menu-toggle').click();
        assert.equal(await nav.first().isVisible(),true);
        assert.match(await page.locator('#main-navigation').evaluate(el=>getComputedStyle(el).backgroundColor),/^rgb\(/,'mobile menu background is opaque');
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
        assert.equal(await page.locator('.menu-toggle').evaluate(el=>el===document.activeElement),true);
      }else{
        const geometry=await page.evaluate(()=>{
          const rect=s=>document.querySelector(s).getBoundingClientRect();
          const logo=rect('.site-header .logo'),nav=rect('#main-navigation'),theme=rect('.theme-toggle');
          return {center:(nav.left+nav.right)/2,width:innerWidth,left:nav.left,logoRight:logo.right,right:nav.right,themeLeft:theme.left};
        });
        assert.ok(Math.abs(geometry.center-width/2)<1,'menu centered in viewport');
        assert.ok(geometry.left>=geometry.logoRight+12 && geometry.right<=geometry.themeLeft-12,'no logo/control overlap');
      }
      await page.evaluate(()=>scrollTo(0,700));
      assert.ok(Math.abs((await page.locator('.site-header').boundingBox()).y)<1);
      layouts.push({width,theme,route});
    }
  }
  for(const width of [390,1181,1440]){
    await page.setViewportSize({width,height:900});
    for(const route of routes) for(const [label,id] of Object.entries(sections)){
      await page.goto(base+route);
      if(width<=1180) await page.locator('.menu-toggle').click();
      await page.getByRole('navigation').getByRole('link',{name:label,exact:true}).click();
      await landed(page,id);
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
      jumps.push({width,route,label,id});
    }
  }
  for(const [route,hash,id,tab] of [
    ['features','','products'],['features','self-ordering','products','self-ordering'],['features','pos-checkout','products','pos-checkout'],
    ['features','inventory','products','inventory'],['features','reports','products','reports'],['features','customers','products','customers'],
    ['features','payments','payments'],['features','unknown','products'],['features','%E0%A4%A','products'],
    ['how-it-works','','how-it-works'],['solutions','','industries'],['solutions','hospitality','industry-hospitality'],
    ['solutions','retail','industry-retail'],['solutions','wellness','industry-wellness'],['solutions','services','industry-services'],['about','','about-us']]){
    await page.goto(`${base}/${route}/${hash?'#'+hash:''}`);
    await page.waitForURL(root.href);
    await landed(page,id);
    if(tab) assert.equal(await page.locator(`#tab-${tab}`).getAttribute('aria-selected'),'true');
    legacy.push({route,hash,id,tab});
  }
  // Root Home is a real fallback for modified/new-tab links, with no stale stored intent.
  await page.goto(base+'/offers/');
  const products=page.getByRole('navigation').getByRole('link',{name:'Products',exact:true});
  await products.dispatchEvent('click',{button:0,ctrlKey:true});
  assert.equal(await page.evaluate(()=>sessionStorage.length),0);
  assert.equal(await products.getAttribute('href'),root.pathname);
  // History and consumed intent must not jump back to the prior requested section on a fresh Home visit.
  await page.getByRole('navigation').getByRole('link',{name:'Products',exact:true}).click();await landed(page,'products');
  await page.getByRole('navigation').getByRole('link',{name:'Articles',exact:true}).click();await page.waitForURL(base+'/articles/');
  await page.goBack();await page.waitForURL(root.href);
  await page.goForward();await page.waitForURL(base+'/articles/');
  await page.goto(root.href);
  await page.waitForTimeout(150);
  assert.equal(await page.evaluate(()=>sessionStorage.length),0);
  assert.ok(await page.evaluate(()=>scrollY<10));
  // Native skip action is enhanced without a public fragment.
  await page.locator('.skip-link').focus();await page.keyboard.press('Enter');
  assert.equal(await page.locator('#main').evaluate(el=>el===document.activeElement),true);
  assert.equal(new URL(page.url()).hash,'');
  await page.setViewportSize({width:390,height:844});
  await page.goto(root.href);
  await page.locator('.menu-toggle').focus();await page.keyboard.press('Enter');
  assert.equal(await page.locator('#main-navigation > a').first().evaluate(el=>el===document.activeElement),true,'keyboard menu opening focuses the first link');
  await page.keyboard.press('Escape');
  assert.equal(await page.locator('.menu-toggle').evaluate(el=>el===document.activeElement),true);
  // Broken storage must degrade to complete Home content, not broken navigation.
  const blocked=await browser.newContext({reducedMotion:'reduce'});
  await blocked.addInitScript(()=>{Storage.prototype.setItem=()=>{throw new Error('blocked');};Storage.prototype.getItem=()=>{throw new Error('blocked');};});
  const blockedPage=await blocked.newPage();await blockedPage.goto(base+'/offers/');
  await blockedPage.getByRole('navigation').getByRole('link',{name:'Products',exact:true}).click();await blockedPage.waitForURL(root.href);
  assert.equal(await blockedPage.locator('#products').count(),1);await blocked.close();
  // No JavaScript: every primary link is visible and sections remain readable; legacy is a clean Home link.
  const nojs=await browser.newContext({javaScriptEnabled:false});
  const staticPage=await nojs.newPage();
  for(const width of [320,390,768,1181,1440]) for(const route of [...routes,'/features/','/how-it-works/','/solutions/','/about/']){
    await staticPage.setViewportSize({width,height:900});await staticPage.goto(base+route);
    assert.equal(await staticPage.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    for(const link of await staticPage.locator('#main-navigation > a:not(.nav-mobile-cta)').all()) assert.equal(await link.isVisible(),true);
    if(route==='/'){
      assert.equal(await staticPage.locator('#products').count(),1);
      assert.equal(await staticPage.locator('[role="tabpanel"]:visible').count(),5);
    }
    if(route==='/features/') assert.equal(await staticPage.locator('[data-legacy-section] a').getAttribute('href'),root.pathname);
  }
  await nojs.close();
  const motion=await browser.newContext({reducedMotion:'no-preference',viewport:{width:1440,height:900}});
  const motionPage=await motion.newPage();
  for(const [label,id] of Object.entries(sections)){
    await motionPage.goto(root.href);
    await motionPage.getByRole('navigation').getByRole('link',{name:label,exact:true}).click();
    await landed(motionPage,id);
    await motionPage.waitForTimeout(800);
    await landed(motionPage,id);
  }
  await motion.close();
  await page.setViewportSize({width:1440,height:900});await page.goto(root.href);
  await page.screenshot({path:'artifacts/phase2/home-desktop.png'});
  await page.setViewportSize({width:390,height:844});await page.locator('.menu-toggle').click();
  await page.screenshot({path:'artifacts/phase2/home-phone-menu.png'});
  assert.deepEqual(errors,[]);
  const preservation=base.includes('/Ez-Kyosk-SEO') ? await assertPhase2Preservation() : 'checked on Pages-subpath build';
  await writeFile('artifacts/phase2/navigation-report.json',JSON.stringify({layouts,jumps,legacy,noJavaScriptChecks:50,normalMotionJumps:4,preservation,errors},null,2));
  console.log(JSON.stringify({layouts:layouts.length,sectionJumps:jumps.length,legacyChecks:legacy.length,noJavaScriptChecks:50,normalMotionJumps:4,preservation,errors}));
  await context.close();
}finally{await browser.close();}
