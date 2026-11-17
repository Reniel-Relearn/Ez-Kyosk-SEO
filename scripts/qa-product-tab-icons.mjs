import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const labels = ['Self-Ordering', 'POS & Checkout', 'Inventory', 'Reports & Analytics', 'Customers'];
const kinds = ['self-ordering', 'pos-checkout', 'inventory', 'reports', 'customers'];
const results = [], accessibility = [], errors = [];
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  for (const width of [320, 390, 720, 721, 768, 980, 981, 1024, 1440, 1920]) for (const theme of ['light', 'dark']) {
    await page.setViewportSize({ width, height: 1000 }); await page.goto(`${base}/`);
    await page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
    await page.evaluate(() => document.fonts.ready);
    const tabs = page.locator('.product-tabs [role="tab"]'), icons = tabs.locator('svg');
    assert.deepEqual(await tabs.allTextContents(), labels, 'labels retained without numbers');
    assert.deepEqual(await icons.evaluateAll(items => items.map(icon => icon.dataset.productIcon)), kinds);
    for (let index = 0; index < 5; index++) {
      const tab = tabs.nth(index), icon = icons.nth(index);
      assert.equal(await icon.getAttribute('aria-hidden'), 'true');
      assert.equal(await icon.getAttribute('focusable'), 'false');
      assert.equal(await icon.getAttribute('stroke-width'), '1.8');
      assert.ok(await icon.locator('path,rect,circle').count() > 0);
      assert.equal(await icon.isVisible(), width > 980, 'existing compact icon hiding preserved');
      assert.equal(await tab.getAttribute('aria-controls'), `panel-${kinds[index]}`);
      if (width > 720) {
        assert.equal(await page.getByRole('tab', { name: labels[index], exact: true }).count(), 1);
        await tab.click();
        assert.equal(await tab.getAttribute('aria-selected'), 'true');
        assert.equal(await page.locator('.product-panel:visible').count(), 1);
        assert.equal(await page.locator(`#panel-${kinds[index]}`).isVisible(), true);
        const state = await tab.evaluate(el => {
          const icon = el.querySelector('svg'), a = icon.getBoundingClientRect(), b = el.getBoundingClientRect();
          return { textColor: getComputedStyle(el).color, iconColor: getComputedStyle(icon).color,
            width: a.width, height: a.height, fits: a.left >= b.left && a.right <= b.right && a.top >= b.top && a.bottom <= b.bottom };
        });
        assert.equal(state.iconColor, state.textColor, 'selected icon follows selected text colour');
        if (width > 980) { assert.equal(state.width, 20); assert.equal(state.height, 20); assert.equal(state.fits, true); }
      }
    }
    assert.equal(await page.locator('.product-panel:visible').count(), width <= 720 ? 5 : 1);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    if (width > 720) {
      await tabs.first().focus(); await page.keyboard.press('End');
      assert.equal(await tabs.last().getAttribute('aria-selected'), 'true');
      await page.keyboard.press('ArrowRight'); assert.equal(await tabs.first().getAttribute('aria-selected'), 'true');
      await page.keyboard.press('ArrowLeft'); assert.equal(await tabs.last().getAttribute('aria-selected'), 'true');
      await page.keyboard.press('Home'); assert.equal(await tabs.first().getAttribute('aria-selected'), 'true');
      await page.mouse.move(0, 0);
      const inactive = tabs.nth(1);
      const rest = await inactive.locator('svg').evaluate(el => getComputedStyle(el).color);
      await inactive.hover();
      const hover = await inactive.evaluate(el => [getComputedStyle(el).color, getComputedStyle(el.querySelector('svg')).color]);
      assert.equal(hover[0], hover[1], 'hover icon follows text colour');
      assert.notEqual(rest, hover[1], 'inactive icon changes colour on hover');
      await page.mouse.move(0, 0);
    }
    if ([390, 1440].includes(width)) {
      const scan = await new AxeBuilder({ page }).include('.product-section').analyze();
      assert.deepEqual(scan.violations, []); accessibility.push({ width, theme, violations: [] });
      const target = width > 720 ? page.locator('.product-tabs') : page.locator('.product-panels').first();
      if (width > 720) await target.screenshot({ path: `artifacts/product-tab-icons-${width}-${theme}.png` });
    }
    results.push({ width, theme, categoryIcons: 5, iconsVisible: width > 980, panelsVisible: width <= 720 ? 5 : 1 });
  }
  assert.deepEqual(errors, []);
  await writeFile('artifacts/product-tab-icons-report.json', JSON.stringify({ results, accessibility, errors }, null, 2));
  console.log(JSON.stringify({ layoutThemeChecks: results.length, iconChecks: results.length * 5, accessibilityScans: accessibility.length, errors }));
} finally { await browser.close(); }
