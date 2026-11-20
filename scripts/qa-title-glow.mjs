import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const results = [];
await mkdir('artifacts/phase13/glow', { recursive: true });
try {
  for (const theme of ['light', 'dark']) for (const width of [390, 1440]) for (const motion of ['no-preference', 'reduce']) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: motion });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto(base + '/');
    await page.evaluate(async theme => { document.documentElement.dataset.theme = theme; await document.fonts.ready; }, theme);
    async function clickNav(name) {
      if (width < 1181) await page.locator('.menu-toggle').click();
      await page.locator('#main-navigation').getByRole('link', { name, exact: true }).click();
    }
    for (const [name, selector] of [['Home', '#home h1'], ['Products', '#products h2'], ['Industries', '#industries h2']]) {
      await clickNav(name);
      await page.waitForFunction(selector => document.querySelector(selector).getAnimations().some(a => a.playState === 'running'), selector);
      const state = await page.locator(selector).evaluate(el => {
        const animation = el.getAnimations()[0];
        return { focused: el === document.activeElement, outline: getComputedStyle(el).outlineStyle,
          frames: animation.effect.getKeyframes().map(f => ({ offset: f.offset, textShadow: f.textShadow })),
          duration: animation.effect.getTiming().duration, scrollY };
      });
      assert.equal(state.focused, true);
      assert.equal(state.outline, 'none');
      assert.equal(state.duration, motion === 'reduce' ? 650 : 1800);
      assert.equal(state.frames.length, motion === 'reduce' ? 3 : 5);
      assert.equal(state.frames.at(-1).textShadow, 'none');
      if (motion !== 'reduce') {
        assert.equal(state.frames[1].textShadow, state.frames[3].textShadow, 'two equal glow peaks');
        assert.equal(state.frames[2].textShadow, 'none', 'fade between pulses');
      }
      await page.screenshot({ path: `artifacts/phase13/glow/${theme}-${width}-${motion}-${name}.png` });
      if (name === 'Products' && width === 1440 && motion === 'no-preference') {
        for (const [label, time] of [['first-peak', 396], ['between-pulses', 864], ['second-peak', 1296]]) {
          await page.locator(selector).evaluate((el, time) => { const a = el.getAnimations()[0]; a.pause(); a.currentTime = time; }, time);
          await page.screenshot({ path: `artifacts/phase13/glow/${theme}-${label}.png` });
        }
        await page.locator(selector).evaluate(el => el.getAnimations()[0].play());
      }
      await page.waitForFunction(selector => document.querySelector(selector).getAnimations().every(a => a.playState !== 'running'), selector);
      assert.equal(await page.locator(selector).evaluate(el => getComputedStyle(el).textShadow), 'none');
      assert.equal(new URL(page.url()).hash, '');
      results.push({ theme, width, motion, name, ...state });
    }
    await clickNav('Industries'); // A no-op destination must replay too.
    await page.waitForFunction(() => document.querySelector('#industries h2').getAnimations().some(a => a.playState === 'running'));
    if (width === 1440) {
      await clickNav('Products');
      await clickNav('Home');
      await page.waitForFunction(() => document.querySelector('#home h1').getAnimations().some(a => a.playState === 'running'));
      assert.equal(await page.locator('#products h2').evaluate(el => el.getAnimations().length), 0);
    }
    if (width < 1181) await page.locator('.menu-toggle').click();
    await page.locator('#main-navigation').getByRole('link', { name: 'Products', exact: true }).focus();
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => document.activeElement === document.querySelector('#products h2'));
    const keyboard = await page.locator('#products h2').evaluate(el => ({ visible: el.matches(':focus-visible'), outline: getComputedStyle(el).outlineStyle, animations: el.getAnimations().length }));
    assert.equal(keyboard.visible, true);
    assert.equal(keyboard.outline, 'solid');
    assert.equal(keyboard.animations, 0);
    assert.deepEqual(errors, []);
    await context.close();
  }
  // Pointer intent survives navigation from a retained non-Home page.
  const page = await browser.newPage({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } });
  await page.goto(base + '/contact/');
  await page.locator('#main-navigation').getByRole('link', { name: 'Products', exact: true }).click();
  await page.waitForFunction(() => document.querySelector('#products h2')?.getAnimations().some(a => a.playState === 'running'));
  assert.equal(new URL(page.url()).pathname, new URL(base + '/').pathname);
  await page.close();
  await writeFile('artifacts/phase13/glow/results.json', JSON.stringify(results, null, 2));
  console.log(`PASS: ${results.length} heading glow cases; replay, superseded navigation, keyboard focus and cross-page intent.`);
} finally { await browser.close(); }
