import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { clampSampleQuantity, sampleOrderTotal, sampleQuantityLimit } from '../src/data/nativeProducts.mjs';

assert.equal(sampleOrderTotal, 300);
assert.equal(clampSampleQuantity(-1), 0);
assert.equal(clampSampleQuantity(1000), 99);
assert.equal(clampSampleQuantity(NaN), 0);
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [], accessibility = [], errors = [], submissions = [];
await mkdir('artifacts', { recursive: true });
try {
  for (const javaScriptEnabled of [true, false]) {
    const context = await browser.newContext({ javaScriptEnabled, reducedMotion: 'reduce' });
    const page = await context.newPage();
    page.on('pageerror', e => errors.push(e.message));
    page.on('response', r => { if (r.status() >= 400) errors.push(r.url()); });
    page.on('request', r => { if (!['GET','HEAD'].includes(r.method())) submissions.push(r.method()+' '+r.url()); });
    for (const width of [320,390,768,1440]) for (const theme of ['light','dark']) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(base+'/');
      await page.evaluate(async theme => { document.documentElement.dataset.theme=theme; await document.fonts.ready; }, theme);
      const preview = page.locator('[data-native-product="self-ordering"]');
      await preview.scrollIntoViewIfNeeded();
      assert.equal(await preview.locator('h4').innerText(), 'Current Order #001');
      assert.equal(await preview.locator('.product-native-dine-in').innerText(), 'Dine-in');
      assert.equal(await preview.locator('.product-native-item-icon svg').count(), 3);
      assert.doesNotMatch(await preview.innerText(),/sample|demo only|demonstration/i);
      assert.equal(await preview.locator('img,form,input,.product-native-menu,.product-native-catalog').count(), 0);
      assert.equal(await preview.locator('button').count(), 7);
      const checkout=preview.locator('.product-native-checkout');
      assert.equal(await checkout.getAttribute('aria-disabled'),'true');
      const originalUrl=page.url();
      await checkout.evaluate(button=>button.click());
      assert.equal(page.url(),originalUrl);
      const total = preview.locator('[data-sample-order-total]');
      assert.equal(await total.textContent(), '₱300.00');
      const frame = await preview.evaluate(el => {
        const s=getComputedStyle(el);
        return {padding:s.padding,border:s.borderTopWidth,style:s.borderTopStyle,shadow:s.boxShadow,
          overflow:document.documentElement.scrollWidth>innerWidth || el.scrollWidth>el.clientWidth,
          clipped:[...el.querySelectorAll('button,li,output,.product-native-item-info')].some(n=>n.scrollWidth>n.clientWidth+1)};
      });
      assert.equal(frame.padding,'0px'); assert.equal(frame.border,'1px');
      assert.equal(frame.style,'solid'); assert.notEqual(frame.shadow,'none');
      assert.equal(frame.overflow,false); assert.equal(frame.clipped,false);
      if(width>=981) {
        const copy=await page.locator('#panel-self-ordering .product-panel-copy').boundingBox();
        const visual=await preview.boundingBox();
        assert.ok(Math.abs(copy.y-visual.y)<=1,'desktop columns share top boundary');
        assert.ok(Math.abs(copy.height-visual.height)<=1,'desktop columns share bottom boundary');
      }
      if (javaScriptEnabled) {
        await checkout.focus(); await page.keyboard.press('Enter'); await page.keyboard.press('Space');
        assert.equal(page.url(),originalUrl,'demo checkout cannot navigate');
        assert.equal(await total.textContent(),'₱300.00','demo checkout cannot alter the order');
        const increase = name => preview.getByRole('button', {name:'Increase '+name+' quantity',exact:true});
        const decrease = name => preview.getByRole('button', {name:'Decrease '+name+' quantity',exact:true});
        const row = name => preview.locator('[data-order-row][data-item-name="'+name+'"]');
        await increase('Coffee').click();
        assert.equal(await row('Coffee').locator('output').textContent(),'2');
        assert.equal(await row('Coffee').locator('[data-row-amount]').textContent(),'₱200.00');
        assert.equal(await total.textContent(),'₱400.00');
        assert.equal(await preview.locator('[data-order-subtotal]').textContent(),'₱400.00');
        assert.match(await preview.locator('[role=status]').textContent(),/Coffee quantity 2.*₱400/);
        await increase('Cookie').click(); assert.equal(await total.textContent(),'₱450.00');
        await decrease('Coffee').click(); assert.equal(await total.textContent(),'₱350.00');
        if (width>720) {
          await page.locator('#tab-pos-checkout').click();
          await page.locator('#tab-self-ordering').click();
          assert.equal(await total.textContent(),'₱350.00','tab switch retains local quantity state');
        }
        await decrease('Coffee').click(); assert.equal(await total.textContent(),'₱250.00');
        assert.equal(await decrease('Coffee').isDisabled(),true);
        await decrease('Sandwich').click(); assert.equal(await total.textContent(),'₱100.00');
        await decrease('Cookie').click(); await decrease('Cookie').click();
        assert.equal(await total.textContent(),'₱0.00');
        assert.equal(await preview.locator('[data-order-count]').textContent(),'0 items');
        await increase('Coffee').focus(); await page.keyboard.press('Enter');
        assert.equal(await total.textContent(),'₱100.00');
        assert.equal(await preview.locator('[data-order-count]').textContent(),'1 item');
        await increase('Cookie').focus(); await page.keyboard.press('Space');
        assert.equal(await total.textContent(),'₱150.00');
        if (width===1440 && theme==='light') {
          await increase('Coffee').evaluate(button => { for(let i=0;i<110;i++) button.click(); });
          assert.equal(await row('Coffee').locator('output').textContent(),String(sampleQuantityLimit));
          assert.equal(await increase('Coffee').isDisabled(),true);
          assert.equal(await total.textContent(),'₱9,950.00');
        }
        await page.reload();
        await page.evaluate(theme => document.documentElement.dataset.theme=theme,theme);
        assert.equal(await total.textContent(),'₱300.00','reload resets sample; no persistent order');
      } else {
        assert.equal(await preview.locator('button:disabled').count(),6);
        assert.match(await preview.locator('noscript').textContent(),/Enable JavaScript/);
      }
      if (javaScriptEnabled && [390,1440].includes(width)) {
        const scan=await new AxeBuilder({page}).include('#products').analyze();
        assert.deepEqual(scan.violations,[]);
        accessibility.push({width,theme,violations:scan.violations});
        await preview.screenshot({path:`artifacts/native-orders-${width}-${theme}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'});
        if(width===1440) await page.locator('#panel-self-ordering').screenshot({path:`artifacts/native-orders-panel-${theme}.png`,style:'.site-header,.skip-link{visibility:hidden!important}'});
      }
      results.push({width,theme,javaScriptEnabled,...frame});
    }
    await context.close();
  }
  assert.deepEqual(errors,[]);
  assert.deepEqual(submissions,[]);
  await writeFile('artifacts/native-orders-report.json',JSON.stringify({results,accessibility,errors,submissions},null,2));
  console.log(JSON.stringify({layouts:results.length,accessibilityScans:accessibility.length,errors,submissions}));
} finally {await browser.close();}
