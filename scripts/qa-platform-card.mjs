import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { assertPhase2Preservation } from './phase2-preservation.mjs';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4322/Ez-Kyosk-SEO';
const prefix = process.env.QA_SCREENSHOT_PREFIX || 'platform-card-layout';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const errors = [], results = [], accessibility = [], alignment = [];
const cards = [
  { id: 'platform-ordering', title: 'Self-Ordering & Payments', stem: 'platform-self-ordering-human-v3', ratio: 3 / 4, body: 'Give customers a self-service ordering channel with supported electronic payment paths.' },
  { id: 'platform-queue', title: 'Order Queue & Tracking', stem: 'platform-order-queue-ceiling-v2', ratio: 3 / 4, body: 'Help customers see which orders are being prepared and which are ready for pickup.' },
  { id: 'platform-inventory', title: 'Inventory & Availability', stem: 'platform-inventory-human-v1', ratio: 3 / 4, body: 'Keep item availability and inventory visibility aligned with daily operations.' },
  { id: 'platform-reports', title: 'Reports & Insights', stem: 'platform-reports-weekly-v1', ratio: 3 / 4, body: 'Configure reports around sales, products and the operational questions your business needs to answer.' },
  { id: 'platform-cashier', title: 'Cashier', stem: 'platform-cashier-human-v2', ratio: 3 / 4, body: 'Offer an optional cashier-assisted payment route for customers who prefer to pay in cash.' },
];
await mkdir('artifacts', { recursive: true });
try {
  for (const deviceScaleFactor of process.env.QA_ALIGNMENT_ONLY === 'true' ? [] : [1, 2]) {
    const context = await browser.newContext({ reducedMotion: 'reduce', deviceScaleFactor });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
    for (const width of deviceScaleFactor === 1 ? [320, 390, 768, 1024, 1440, 1920] : [390, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(`${base}/`);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator('.platform-card--expandable').count(), 5);
      assert.deepEqual(await page.locator('.platform-card--expandable h3').allTextContents(), cards.map(card => card.title), 'approved business-facing order');
      assert.equal(await page.locator('.platform-section .eyebrow').textContent(), 'One Connected Platform');
      assert.deepEqual(await page.locator('.platform-grid > article:not(.platform-card--expandable) > span').allTextContents(), []);
      assert.deepEqual(await page.locator('.platform-grid > article:not(.platform-card--expandable) h3').allTextContents(), []);
      assert.equal(await page.locator('.platform-icon').count(), 0);
      for (const expected of cards) {
        const card = page.locator(`[aria-labelledby="${expected.id}-title"]`);
        const details = card.locator('details');
        const summary = details.locator('summary');
        const description = details.locator('p');
        await card.scrollIntoViewIfNeeded();
        await card.locator('img').evaluate(image => image.decode());
        assert.equal(await card.locator('h3').count(), 1);
        assert.equal(await card.locator('h3').innerText(), expected.title);
        assert.equal(await card.locator(':scope > span').count(), 0);
        assert.equal(await summary.getAttribute('aria-label'), `About ${expected.title}`);
        assert.equal(await description.textContent(), expected.body);
        for (const theme of ['light', 'dark']) {
          await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
          assert.equal(await description.isVisible(), false);
          await summary.focus();
          await page.keyboard.press('Tab');
          await page.keyboard.press('Shift+Tab');
          assert.equal(await summary.evaluate(element => element.matches(':focus-visible')), true, 'visible keyboard focus');
          for (const open of [false, true]) {
            if (open) await page.keyboard.press('Enter');
            assert.equal(await details.evaluate(element => element.open), open);
            assert.equal(await description.isVisible(), open);
            const geometry = await card.evaluate(card => {
              const image = card.querySelector('img'), heading = card.querySelector('h3'), summary = card.querySelector('summary');
              const box = card.getBoundingClientRect(), img = image.getBoundingClientRect(), title = heading.getBoundingClientRect(), toggle = summary.getBoundingClientRect();
              return {
                edgeLeft: img.left - box.left, edgeRight: box.right - img.right, edgeTop: img.top - box.top,
                imageRatio: img.width / img.height, headingBelow: title.top >= img.bottom,
                naturalRatio: image.naturalWidth / image.naturalHeight, imageTransform: getComputedStyle(image).transform,
                toggleWidth: toggle.width, toggleHeight: toggle.height, source: image.currentSrc,
                plusVertical: getComputedStyle(summary.querySelector('span'), '::after').display,
                noOverflow: document.documentElement.scrollWidth <= innerWidth && card.scrollWidth <= card.clientWidth,
              };
            });
            assert.ok(Math.abs(geometry.edgeLeft - 1) < .1 && Math.abs(geometry.edgeRight - 1) < .1 && Math.abs(geometry.edgeTop - 1) < .1, 'image flush with the inside card border');
            assert.ok(Math.abs(geometry.imageRatio - (expected.ratio || 4 / 3)) < .01, 'approved per-card aspect ratio');
            assert.ok(Math.abs(geometry.imageRatio - geometry.naturalRatio) < .01, 'no crop or stretch');
            assert.equal(geometry.imageTransform, 'none', 'no CSS mirroring of logo or lettering');
            assert.equal(geometry.headingBelow, true); assert.equal(geometry.noOverflow, true);
            assert.ok(geometry.toggleWidth >= 44 && geometry.toggleHeight >= 44);
            assert.equal(geometry.plusVertical === 'none', open, 'plus becomes minus when expanded');
            assert.ok(geometry.source.includes(`${expected.stem}-`));
            if (deviceScaleFactor === 1 && [390, 1440].includes(width)) {
              const scan = await new AxeBuilder({ page }).include('.platform-section').analyze();
              assert.deepEqual(scan.violations, []);
              accessibility.push({ card: expected.id, width, theme, open, violations: scan.violations });
              await card.screenshot({ path: `artifacts/${prefix}-${expected.id}-${width}-${theme}-${open ? 'open' : 'closed'}.png` });
            }
            results.push({ card: expected.id, width, theme, deviceScaleFactor, open, ...geometry });
          }
          await page.keyboard.press('Space');
          assert.equal(await description.isVisible(), false, 'Space collapses description');
          await summary.click(); assert.equal(await description.isVisible(), true, 'pointer expands description');
          await summary.click(); assert.equal(await description.isVisible(), false, 'pointer collapses description');
          await card.scrollIntoViewIfNeeded();
          await page.mouse.move(0, 0);
          const edgeBox = await card.boundingBox();
          await page.mouse.move(edgeBox.x + edgeBox.width / 2, edgeBox.y + edgeBox.height - 2);
          const edgePositions = await card.evaluate(async element => {
            const tops = [];
            for (let frame = 0; frame < 12; frame++) {
              await new Promise(requestAnimationFrame);
              tops.push(element.getBoundingClientRect().top);
            }
            return tops;
          });
          assert.ok(Math.max(...edgePositions) - Math.min(...edgePositions) < .1, 'card edge does not oscillate under pointer');
        }
      }
    }
    await context.close();
  }
  const alignedContext = await browser.newContext({ reducedMotion: 'reduce' });
  const alignedPage = await alignedContext.newPage();
  alignedPage.on('pageerror', error => errors.push(error.message));
  alignedPage.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  for (const width of [320, 390, 720, 721, 768, 1024, 1180, 1181, 1440, 1920]) {
    await alignedPage.setViewportSize({ width, height: 1000 });
    await alignedPage.goto(`${base}/`);
    await alignedPage.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.querySelectorAll('.platform-image')].map(async image => {
        image.loading = 'eager';
        await image.decode();
      }));
    });
    for (const theme of ['light', 'dark']) {
      await alignedPage.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
      assert.equal((await alignedPage.locator('#platform-title').innerText()).replace(/\s+/g,' '), 'Powerful features. Stronger together.');
      assert.equal(await alignedPage.locator('#platform-title br').count(),0,'no forced heading break');
      const headingLines=await alignedPage.locator('#platform-title').evaluate(el=>{
        const node=el.firstChild,index=node.textContent.indexOf('Stronger'),range=document.createRange();range.selectNodeContents(node);
        const word=(start,end)=>{const r=document.createRange();r.setStart(node,start);r.setEnd(node,end);return r.getBoundingClientRect();};
        const stronger=word(index,index+7),together=word(index+8,index+16);
        return {lines:range.getClientRects().length,overflow:el.scrollWidth>el.clientWidth,sameWordLine:Math.abs(stronger.top-together.top)<1,wordGap:together.left-stronger.right};
      });
      if(width>1180) assert.equal(headingLines.lines,1,'single-line desktop heading');
      assert.equal(headingLines.overflow,false,'heading wraps naturally without overflow');
      if(headingLines.sameWordLine) assert.ok(headingLines.wordGap>=3,'visible space between Stronger and together');
      const presentation = await alignedPage.locator('.platform-section').evaluate(section => {
        const heading=section.querySelector('.section-heading'),intro=heading.querySelector('p'),r=intro.getBoundingClientRect();
        const heroStyle=getComputedStyle(document.querySelector('.home-hero')),sectionStyle=getComputedStyle(section);
        const compactPadding=Math.min(56,Math.max(32,innerWidth*.04));
        return {compactSpacing:Math.abs(parseFloat(sectionStyle.paddingTop)-compactPadding)<.1&&Math.abs(parseFloat(sectionStyle.paddingBottom)-compactPadding)<.1,
          headingCentered:getComputedStyle(heading).textAlign==='center',introCentered:Math.abs(r.left+r.width/2-innerWidth/2)<2,
          sameMargins:heroStyle.paddingLeft===sectionStyle.paddingLeft&&heroStyle.paddingRight===sectionStyle.paddingRight,
          titlesCentered:[...section.querySelectorAll('.platform-card-body h3')].every(n=>getComputedStyle(n).textAlign==='center'&&getComputedStyle(n).justifyContent==='center')};
      });
      assert.deepEqual(presentation,{compactSpacing:true,headingCentered:true,introCentered:true,sameMargins:true,titlesCentered:true});
      let collapsedHeights;
      // Every combination: all collapsed, all expanded, and all mixed states.
      for (let mask = 0; mask < 32; mask++) {
        const geometry = await alignedPage.evaluate(mask => {
          const cards = [...document.querySelectorAll('.platform-card--expandable')];
          cards.forEach((card, index) => card.querySelector('details').open = Boolean(mask & (1 << index)));
          return cards.map(card => {
            const rect = card.getBoundingClientRect();
            const heading = card.querySelector('h3').getBoundingClientRect();
            const details = card.querySelector('details');
            const description = details.querySelector('p').getBoundingClientRect();
            return { top: rect.top, bottom: rect.bottom, height: rect.height, open: details.open, headingTop: heading.top,
              headingBottom: heading.bottom, descriptionTop: details.open ? description.top : null,
              overflow: card.scrollWidth > card.clientWidth,
              pageOverflow: document.documentElement.scrollWidth > innerWidth };
          });
        }, mask);
        if (mask === 0) collapsedHeights = geometry.map(card => card.height);
        geometry.forEach((card, index) => {
          if (!card.open) assert.ok(Math.abs(card.height - collapsedHeights[index]) < 1,
            `closed card ${index} stays compact at ${width}px / ${theme} / mask ${mask}`);
        });
        const rows = [];
        for (const card of geometry) {
          let row = rows.find(row => Math.abs(row[0].top - card.top) < 1);
          if (!row) rows.push(row = []);
          row.push(card);
          assert.equal(card.overflow || card.pageOverflow, false, 'no overflow in simultaneous disclosure states');
        }
        for (const row of rows) {
          for (const key of ['headingTop', 'headingBottom', ...(row.every(card => card.open) || row.every(card => !card.open) ? ['bottom'] : [])]) {
            assert.ok(Math.max(...row.map(card => card[key])) - Math.min(...row.map(card => card[key])) < 1,
              `row ${key} aligned at ${width}px / ${theme} / mask ${mask}`);
          }
          const openCards = row.filter(card => card.descriptionTop !== null);
          if (openCards.length) assert.ok(Math.max(...openCards.map(card => card.descriptionTop)) -
            Math.min(...openCards.map(card => card.descriptionTop)) < 1, 'expanded descriptions share starting line');
        }
        assert.equal(rows.length, width <= 720 ? 5 : width <= 1180 ? 2 : 1, 'responsive row count preserved');
        if ([0, 8, 31].includes(mask) && [390, 1024, 1440, 1920].includes(width)) {
          await alignedPage.locator('.platform-grid').screenshot({ path: `artifacts/${prefix}-mask-${mask}-${width}-${theme}.png` });
        }
        alignment.push({ width, theme, mask, rows: rows.length });
      }
    }
  }
  await alignedContext.close();
  const noJs = await browser.newContext({ javaScriptEnabled: false, reducedMotion: 'reduce' });
  const page = await noJs.newPage();
  for (const width of [390, 1024, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(`${base}/`);
    await page.evaluate(async () => {
      await document.fonts.ready;
      await Promise.all([...document.querySelectorAll('.platform-image')].map(async image => { image.loading = 'eager'; await image.decode(); }));
    });
    const closedHeights = await page.locator('.platform-card--expandable').evaluateAll(cards => cards.map(card => card.getBoundingClientRect().height));
    for (const [index, details] of (await page.locator('.platform-card-details').all()).entries()) {
      assert.equal(await details.locator('p').isVisible(), false);
      await details.locator('summary').click(); assert.equal(await details.locator('p').isVisible(), true);
      const states = await page.locator('.platform-card--expandable').evaluateAll(cards => cards.map(card => ({ height: card.getBoundingClientRect().height, open: card.querySelector('details').open })));
      states.forEach((state, other) => {
        assert.equal(state.open, other === index, 'without JavaScript only clicked card opens');
        if (other !== index) assert.ok(Math.abs(state.height - closedHeights[other]) < 1, 'without JavaScript closed neighbour stays compact');
      });
      await page.keyboard.press('Space'); assert.equal(await details.locator('p').isVisible(), false);
    }
  }
  await noJs.close();
  assert.deepEqual(errors, []);
  const preservation=await assertPhase2Preservation();
  await writeFile(`artifacts/${prefix}-report.json`, JSON.stringify({ results, alignment, accessibility, errors, preservation, withoutJavaScript: 'passed' }, null, 2));
  console.log(JSON.stringify({ stateChecks: results.length, alignmentChecks: alignment.length, accessibilityScans: accessibility.length, errors, preservation, withoutJavaScript: 'passed' }));
} finally { await browser.close(); }
