import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {assertPhase2Preservation} from './phase2-preservation.mjs';
import sharp from 'sharp';
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const folder='artifacts/hero-background-accents';await mkdir(folder,{recursive:true});
const browser=await chromium.launch({channel:'msedge',headless:true});
const layouts=[],accessibility=[],errors=[],visibility=[];
try {
  const context=await browser.newContext({reducedMotion:'reduce'}),page=await context.newPage();
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
  const inspect=()=>page.evaluate(()=>{
    const hero=document.querySelector('.home-hero'),figure=hero.querySelector('.hero-product'),copy=hero.querySelector('.hero-copy');
    // Element screenshots may scroll; compare document-space geometry.
    const box=el=>{const b=el.getBoundingClientRect();return [b.x+scrollX,b.y+scrollY,b.width,b.height];};
    const colors=el=>{const s=getComputedStyle(el);return [s.color,s.backgroundColor,s.backgroundImage,s.fontSize];};
    const s=getComputedStyle(hero,'::after');
    return {geometry:[hero,figure,copy,...hero.querySelectorAll('h1,p,a,img')].map(box),
      colors:[copy,...hero.querySelectorAll('h1,h1 span,p,a')].map(colors),gradient:getComputedStyle(hero,'::before').backgroundImage,
      text:hero.textContent,src:hero.querySelector('img').currentSrc,layer:{background:s.backgroundImage,animation:s.animationName,
        events:s.pointerEvents,z:s.zIndex,filter:s.filter,mask:s.maskImage,opacity:s.opacity,width:s.width,height:s.height},halo:getComputedStyle(figure,'::before').content,overflow:document.documentElement.scrollWidth>innerWidth};
  });
  for(const width of [320,390,720,768,1024,1366,1440,1920]) for(const theme of ['light','dark']){
    await page.setViewportSize({width,height:width===1366?768:1000});await page.goto(base+'/');
    await page.evaluate(async theme=>{document.documentElement.dataset.theme=theme;await document.fonts.ready;await document.querySelector('.hero-product img').decode();},theme);
    const before=await inspect();
    assert.equal(before.overflow,false);assert.equal(before.layer.animation,'none');assert.equal(before.layer.events,'none');
    assert.equal(before.layer.z,'-1');assert.equal(before.layer.filter,'none');
    assert.equal(before.halo,'none','rejected kiosk-centered halo removed');
    const mask=decodeURIComponent(before.layer.mask);
    assert.ok(mask.includes(width<=720?'0 0 450 1200':'0 0 1600 900')||mask.includes(width<=720?'hero-flowing-veins-mobile':'hero-flowing-veins'),'correct build-managed mobile/desktop SVG mask');
    assert.equal(before.layer.opacity,theme==='light'?'0.6':'0.72');
    assert.ok(before.layer.background.includes(theme==='light'?'234, 138, 56':'214, 182, 106'));
    const compare=[390,1440].includes(width);
    const figure=page.locator('.home-hero');
    const on=compare?await figure.screenshot({path:`${folder}/${theme}-${width}-background-on.png`}):null;
    const disabled=await page.addStyleTag({content:'.home-hero::after{display:none!important}'});
    const off=await inspect();
    for(const key of ['geometry','colors','gradient','text','src'])assert.deepEqual(before[key],off[key],`accent preserves ${key}`);
    if(compare){
      const offImage=await figure.screenshot({path:`${folder}/${theme}-${width}-background-off.png`});
      const a=await sharp(on).removeAlpha().raw().toBuffer({resolveWithObject:true});
      const b=await sharp(offImage).removeAlpha().raw().toBuffer();
      let changed=0;for(let i=0;i<a.data.length;i+=3)if(Math.max(...[0,1,2].map(c=>Math.abs(a.data[i+c]-b[i+c])))>=8)changed++;
      const fraction=changed/(a.info.width*a.info.height);
      assert.ok(fraction>.002,`${theme} ${width}: rendered background veins visibly differ, not just CSS present (${fraction})`);
      visibility.push({theme,width,changedPixels:changed,fraction,minimumChannelDifference:8});
    }
    await disabled.evaluate(el=>el.remove());
    if([390,1440].includes(width)){
      const scan=await new AxeBuilder({page}).include('.home-hero').analyze();assert.deepEqual(scan.violations,[]);
      accessibility.push({width,theme,violations:0});
      await page.locator('.home-hero').screenshot({path:`${folder}/${theme}-${width}.png`});
    }
    layouts.push({width,theme,...before});
  }
  await page.emulateMedia({reducedMotion:'no-preference'});await page.goto(base+'/');
  assert.equal((await inspect()).layer.animation,'none','static even with normal motion');
  await page.emulateMedia({forcedColors:'active'});
  assert.equal(await page.locator('.home-hero').evaluate(el=>getComputedStyle(el,'::after').display),'none');
  await context.close();
  const noJs=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:1000}});
  const noJsPage=await noJs.newPage();await noJsPage.goto(base+'/');
  assert.ok((await noJsPage.locator('.home-hero').evaluate(el=>getComputedStyle(el,'::after').backgroundImage)).includes('234, 138, 56'));
  await noJs.close();
  assert.deepEqual(errors,[]);const preservation=await assertPhase2Preservation();
  await writeFile(`${folder}/report.json`,JSON.stringify({layouts,accessibility,visibility,errors,preservation},null,2));
  console.log(JSON.stringify({layouts:layouts.length,accessibilityScans:accessibility.length,visibility,errors,layoutCopyPaletteArtworkPreserved:true,staticAndForcedColorsPassed:true,noJavaScriptPassed:true,preservation}));
}finally{await browser.close();}
