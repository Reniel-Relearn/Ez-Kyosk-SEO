import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { productCategories } from '../src/data/product.ts';
import { sampleOrderTotal, inventoryItems, weeklyOrders, weeklyOrderTotal, categoryMix, customerTools, averageDailyOrders, peakOrderDay, queueOrders, preparingCount, pickupCount } from '../src/data/nativeProducts.mjs';

assert.equal(sampleOrderTotal,300); assert.equal(weeklyOrderTotal,132);
assert.equal(averageDailyOrders,'18.9');assert.deepEqual(peakOrderDay,{day:'Sat',orders:25});
assert.equal(preparingCount,3);assert.equal(pickupCount,2);
assert.equal(categoryMix.reduce((sum,item)=>sum+item.percentage,0),100);
assert.equal(inventoryItems.filter(item=>item.status==='Low Stock').length,2);
const base=process.env.QA_BASE_URL||'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const prefix=process.env.QA_SCREENSHOT_PREFIX||'native-products';
const browser=await chromium.launch({channel:'msedge',headless:true});
const results=[],accessibility=[],errors=[],submissions=[];
await mkdir('artifacts',{recursive:true});
try {
  for(const deviceScaleFactor of [1,2]) {
    const context=await browser.newContext({deviceScaleFactor,reducedMotion:'reduce'});
    const page=await context.newPage();
    page.on('pageerror',error=>errors.push(error.message));
    page.on('response',response=>{if(response.status()>=400)errors.push(response.status()+' '+response.url());});
    page.on('request',request=>{if(!['GET','HEAD'].includes(request.method()))submissions.push(request.method()+' '+request.url());});
    for(const width of deviceScaleFactor===1?[320,390,768,1024,1440,1920]:[390,1440]) {
      await page.setViewportSize({width,height:1000}); await page.goto(base+'/');
      assert.equal(await page.locator('#products [data-native-product]').count(),5);
      assert.equal(await page.locator('#products img,.product-explorer .ui-window').count(),0);
      for(const [index,category] of productCategories.entries()) for(const theme of ['light','dark']) {
        if(width>720)await page.locator('#tab-'+category.id).click();
        await page.evaluate(async theme=>{document.documentElement.dataset.theme=theme;await document.fonts.ready;},theme);
        const panel=page.locator('#panel-'+category.id),visual=panel.locator('[data-native-product]');
        await visual.scrollIntoViewIfNeeded();
        assert.equal(await panel.locator('h3').innerText(),category.title);
        assert.equal(await panel.locator('.product-panel-copy>p').innerText(),category.body);
        assert.deepEqual(await panel.locator('.check-list li').allTextContents(),category.items);
        assert.doesNotMatch(await visual.innerText(),/sample|demo only|LIVE|paid/i);
        assert.equal(await visual.locator('img,input,form').count(),0);
        if(category.id!=='self-ordering')assert.equal(await visual.locator('button,a').count(),0);
        if(category.id==='pos-checkout') {
          assert.deepEqual(await visual.locator('thead th').allTextContents(),['Order','Items','Status']);
          const rows=await visual.locator('tbody tr').evaluateAll(rows=>rows.map(row=>[...row.children].map(cell=>cell.textContent)));
          assert.deepEqual(rows,queueOrders.map(order=>['#'+order.number,order.items,order.status]));
          assert.equal(await visual.locator('[data-queue-preparing]').textContent(),'3');
          assert.equal(await visual.locator('[data-queue-pickup]').textContent(),'2');
          assert.doesNotMatch(await visual.innerText(),/Subtotal|₱/);
        }
        if(category.id==='inventory') {
          assert.deepEqual(await visual.locator('thead th').allTextContents(),['Item','Stock','Unit','Status']);
          assert.deepEqual(await visual.locator('tbody tr').evaluateAll(rows=>rows.map(row=>[...row.children].map(cell=>cell.textContent))),inventoryItems.map(item=>[item.name,String(item.stock),item.unit,item.status]));
        }
        if(category.id==='reports') {
          if(width>=1440) {
            const height=(await visual.boundingBox()).height;
            assert.ok(height>=450&&height<=520,'compact desktop dashboard stays within450–520px');
          }
          assert.equal(await visual.locator('[data-weekly-total]').textContent(),'132');
          assert.equal(await visual.locator('[data-daily-average]').textContent(),'18.9');
          assert.equal(await visual.locator('[data-peak-orders]').textContent(),'25');
          assert.equal(await visual.getByRole('img',{name:'Order category mix'}).count(),1);
          assert.deepEqual(await visual.locator('.product-native-segment').evaluateAll(segments=>segments.map(s=>[s.getAttribute('stroke-dasharray'),Number(s.getAttribute('stroke-dashoffset'))])),[['35 65',0],['25 75',-35],['22 78',-60],['18 82',-82]]);
          assert.equal(await visual.getByRole('img',{name:'Daily orders this week'}).count(),1);
          assert.deepEqual(await visual.locator('.product-native-categories li').evaluateAll(rows=>rows.map(row=>[row.firstElementChild.textContent,row.lastElementChild.textContent])),categoryMix.map(item=>[item.name,item.percentage+'%']));
          const disclosure=visual.locator('details');await disclosure.locator('summary').click();
          assert.equal(await disclosure.getAttribute('open'),'');
          assert.deepEqual(await disclosure.locator('tbody tr').evaluateAll(rows=>rows.map(row=>[row.firstElementChild.textContent,Number(row.lastElementChild.textContent)])),weeklyOrders.map(item=>[item.day,item.orders]));
          assert.equal(await disclosure.evaluate(el=>el.scrollWidth<=el.clientWidth),true);
          await disclosure.locator('summary').click();
        }
        if(category.id==='customers') {
          assert.equal(await visual.getByRole('heading',{name:'Guest 01'}).count(),1);
          assert.deepEqual(await visual.locator('.product-native-customer-tools li').evaluateAll(rows=>rows.map(row=>[row.children[1].textContent,row.children[2].textContent])),customerTools.map(tool=>[tool.title,tool.detail]));
        }
        for(const table of await visual.locator('table').all()) {
          assert.equal(await table.locator('caption').count(),1);
          assert.ok(await table.locator('th[scope=col]').count()>0);
          assert.ok(await table.locator('th[scope=row]').count()>0);
        }
        const geometry=await panel.evaluate(el=>{
          const visual=el.querySelector('[data-native-product]'),copy=el.querySelector('.product-panel-copy'),v=visual.getBoundingClientRect(),c=copy.getBoundingClientRect(),s=getComputedStyle(visual);
          return {overflow:document.documentElement.scrollWidth>innerWidth||el.scrollWidth>el.clientWidth||visual.scrollWidth>visual.clientWidth,
            clipped:[...visual.querySelectorAll('td,th,button,li,output')].some(n=>n.scrollWidth>n.clientWidth+1),
            border:s.borderTopWidth,padding:s.padding,aspect:s.aspectRatio,
            columnsAligned:innerWidth<=980||(Math.abs(v.top-c.top)<=1&&Math.abs(v.bottom-c.bottom)<=1)};
        });
        assert.equal(geometry.overflow,false);assert.equal(geometry.clipped,false);assert.equal(geometry.border,'1px');assert.equal(geometry.padding,'0px');assert.equal(geometry.aspect,'auto');assert.equal(geometry.columnsAligned,true);
        if(width>720) {
          await page.locator('#tab-'+category.id).focus();await page.keyboard.press('ArrowRight');
          assert.equal(await page.locator('#tab-'+productCategories[(index+1)%5].id).getAttribute('aria-selected'),'true');
          await page.keyboard.press('ArrowLeft');assert.equal(await page.locator('#tab-'+category.id).getAttribute('aria-selected'),'true');
        }
        if(deviceScaleFactor===1&&[390,1440].includes(width)) {
          const scan=await new AxeBuilder({page}).include('#products').analyze();assert.deepEqual(scan.violations,[]);
          accessibility.push({card:category.id,width,theme,violations:scan.violations});
          await panel.screenshot({path:`artifacts/${prefix}-${category.id}-${width}-${theme}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'});
        }
        results.push({card:category.id,width,theme,deviceScaleFactor,...geometry});
      }
    }
    await context.close();
  }
  assert.deepEqual(errors,[]);assert.deepEqual(submissions,[]);
  await writeFile(`artifacts/${prefix}-report.json`,JSON.stringify({results,accessibility,errors,submissions},null,2));
  console.log(JSON.stringify({responsiveThemeChecks:results.length,accessibilityScans:accessibility.length,errors,submissions}));
} finally {await browser.close();}
