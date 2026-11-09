import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4322';
const report = [];
await mkdir('artifacts', { recursive: true });
try {
  await page.goto(base);
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark');
  for (const theme of ['dark', 'light']) {
    if (await page.locator('html').getAttribute('data-theme') !== theme) {
      await page.getByRole('button', { name: `Switch to ${theme} mode` }).click();
    }
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'), theme);
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 950 });
      for (const path of ['/', '/features/', '/contact/', '/about/']) {
        await page.goto(`${base}${path}`);
        await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(async img => { img.loading='eager'; try { await img.decode(); } catch {} })); });
        assert.equal(await page.locator('html').getAttribute('data-theme'), theme);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${theme} ${width} ${path}`);
        const violations = (await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations.map(v => ({ id:v.id, nodes:v.nodes.map(n=>n.target) }));
        report.push({ theme, width, path, violations });
        if(path==='/' && [390,1440].includes(width))await page.screenshot({ path:`artifacts/hero-${theme}-${width}.png` });
      }
    }
    await page.goto(base);
    await page.getByRole('button', { name: `Switch to ${theme==='dark'?'light':'dark'} mode` }).focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('html').getAttribute('data-theme'), theme==='dark'?'light':'dark');
  }
  // A blocked storage API must not prevent rendering or toggling.
  const blocked = await browser.newContext();
  await blocked.addInitScript(() => Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage unavailable');}}));
  const fallback = await blocked.newPage();
  await fallback.goto(base);
  await fallback.getByRole('button',{name:'Switch to light mode'}).click();
  assert.equal(await fallback.locator('html').getAttribute('data-theme'),'light');
  await blocked.close();
  await writeFile('artifacts/theme-report.json',JSON.stringify(report,null,2));
  console.log(JSON.stringify({ checks: report.length, failed: report.filter(r=>r.violations.length), persistence: 'passed', keyboard: 'passed', blockedStorage: 'passed' },null,2));
  assert.ok(report.every(r=>r.violations.length===0));
} finally { await browser.close(); }
