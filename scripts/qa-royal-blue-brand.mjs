import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import sharp from 'sharp';
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const folder='artifacts/royal-blue-brand';
await mkdir(folder,{recursive:true});
const hash=b=>createHash('sha256').update(b).digest('hex');
for(const file of ['assets/ez-kyosk-lockup.png','assets/ez_kyosk_icon.png','public/favicon.png','public/brand-social.png']) {
  assert.equal(hash(await readFile(file)),hash(execFileSync('git',['show',`HEAD:${file}`],{maxBuffer:10*1024*1024})),`${file}: original asset preserved`);
}
const browser=await chromium.launch({channel:'msedge',headless:true});
const results=[],errors=[];
try {
  for(const noJs of [false,true]){
    const context=await browser.newContext({javaScriptEnabled:!noJs,reducedMotion:'reduce'});
    const page=await context.newPage();
    page.on('pageerror',e=>errors.push(e.message));
    page.on('response',r=>{if(r.status()>=400) errors.push(`${r.status()} ${r.url()}`);});
    for(const width of noJs?[390,1440]:[320,390,768,1024,1440,1920]){
      await page.setViewportSize({width,height:1000});
      for(const route of ['/', '/offers/', '/articles/', '/contact/', '/privacy/', '/404.html']){
        await page.goto(base+route);
        await page.locator('.site-footer').scrollIntoViewIfNeeded();
        await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.querySelectorAll('.brand-mark img')].map(async i=>{i.loading='eager';await i.decode();}));});
        for(const theme of noJs?['light']:['light','dark']){
          if(!noJs) await page.evaluate(theme=>document.documentElement.dataset.theme=theme,theme);
          const marks=await page.locator('.brand-mark').evaluateAll(nodes=>nodes.map(node=>{
            const img=node.querySelector('img'),s=getComputedStyle(node,'::after'),r=node.getBoundingClientRect();
            return {color:s.backgroundColor,clip:s.clipPath,mask:s.maskImage,size:s.maskSize,opacity:getComputedStyle(img).opacity,
              alt:img.alt,loaded:img.complete&&img.naturalWidth>0,ratio:r.width/r.height,original:img.naturalWidth/img.naturalHeight,
              footer:!!node.closest('.site-footer'),filter:getComputedStyle(img).filter,focusBlocking:s.pointerEvents,overflow:document.documentElement.scrollWidth>innerWidth};
          }));
          assert.ok(marks.length>=2);
          for(const mark of marks){
            if(theme==='dark'||mark.footer){
              assert.equal(mark.color,'rgb(248, 250, 252)');assert.equal(mark.clip,'inset(0px 0px 0px 52%)');
              assert.ok(mark.mask.includes('ez-kyosk-lockup.'));assert.equal(mark.size,'100% 100%');
            }else assert.equal(mark.color,'rgba(0, 0, 0, 0)');
            assert.equal(mark.opacity,'1');assert.ok(mark.filter.includes('brand-royal-filter.svg#royal-blue'));
            assert.equal(mark.alt,'Ez Kyosk');assert.equal(mark.loaded,true);
            assert.ok(Math.abs(mark.ratio-mark.original)<.03);assert.equal(mark.overflow,false);
          }
          const link=page.locator('.site-header .logo');
          assert.equal(await link.getAttribute('aria-label'),'Ez Kyosk home');
          assert.equal(await link.getAttribute('href'),new URL(base+'/').pathname);
          if(!noJs){await link.focus();await page.keyboard.press('Shift');assert.equal(await link.evaluate(el=>getComputedStyle(el).outlineStyle),'solid');}
          if(!noJs&&route==='/'&&[390,1440].includes(width)){
            await link.evaluate(el=>el.blur());await page.evaluate(()=>window.scrollTo(0,0));
            for(const area of ['site-header','site-footer']) await page.locator(`.${area}`).screenshot({path:`${folder}/${area}-${theme}-${width}.png`});
          }
          results.push({width,route,theme,noJs,marks});
        }
      }
    }
    await context.close();
  }
  // Rendered-pixel guard: cyan changes; navy, white and empty areas do not.
  const colorContext=await browser.newContext({viewport:{width:600,height:400}});
  const colorPage=await colorContext.newPage();await colorPage.goto(base+'/');
  await colorPage.evaluate(url=>{
    const probe=document.createElement('div');probe.id='brand-color-probe';
    probe.style.cssText='position:fixed;left:0;top:0;z-index:99999;width:160px;height:40px;background:#f0f0f0';
    probe.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" style="display:block;filter:url('${url}')"><path fill="#00c8c8" d="M0 0h40v40H0z"/><path fill="#00232b" d="M40 0h40v40H40z"/><path fill="#fff" d="M80 0h40v40H80z"/></svg>`;
    document.body.append(probe);
  },base+'/brand-royal-filter.svg#royal-blue');
  const pixels=await sharp(await colorPage.locator('#brand-color-probe').screenshot({path:`${folder}/selective-color-probe.png`})).removeAlpha().raw().toBuffer();
  const pixel=x=>[...pixels.subarray((20*160+x)*3,(20*160+x)*3+3)];
  assert.deepEqual(pixel(20),[37,99,235],'turquoise becomes exact royal blue');
  assert.deepEqual(pixel(60),[0,35,43],'original navy retained');
  assert.deepEqual(pixel(100),[255,255,255],'original white retained');
  assert.deepEqual(pixel(140),[240,240,240],'transparent area remains empty');
  await colorContext.close();
  assert.deepEqual(errors,[]);
  await writeFile(`${folder}/report.json`,JSON.stringify({results,errors},null,2));
  console.log(JSON.stringify({layouts:results.length,errors,originalAssetsPreserved:4,turquoiseReplacement:'#2563EB',originalNavyWhiteRetained:true}));
}finally{await browser.close();}
