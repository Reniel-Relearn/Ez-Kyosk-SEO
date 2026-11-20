// Read-only evidence for the page-specific approval gate in patch F.
import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const records = [];
await mkdir('artifacts/phase13/page-alignment', { recursive: true });
try {
  for (const width of [390, 768, 1440, 1920]) for (const theme of ['light', 'dark']) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    for (const route of ['/', '/contact/', '/privacy/']) {
      await page.goto(base + route);
      await page.evaluate(async theme => { document.documentElement.dataset.theme = theme; await document.fonts.ready; }, theme);
      const metrics = await page.evaluate(() => {
        const measure = selector => {
          const el = document.querySelector(selector);
          if (!el) return null;
          const r = el.getBoundingClientRect(), s = getComputedStyle(el);
          return { x: r.x, width: r.width, height: r.height, leftContent: r.left + parseFloat(s.paddingLeft), rightContent: innerWidth - r.right + parseFloat(s.paddingRight), paddingTop: s.paddingTop, paddingBottom: s.paddingBottom, minHeight: s.minHeight, fontSize: s.fontSize };
        };
        return { header: measure('.site-header'), hero: measure('main>section'), title: measure('h1'), form: measure('.contact-section'), legal: measure('.legal-content'), overflow: document.documentElement.scrollWidth > innerWidth, headings: document.querySelectorAll('h1').length, preview: document.querySelector('form')?.dataset.live, navigation: [...document.querySelectorAll('#main-navigation>a')].map(a => a.textContent.trim()) };
      });
      assert.equal(metrics.overflow, false);
      assert.equal(metrics.headings, 1);
      if (route === '/contact/') assert.equal(metrics.preview, 'false', 'review must not enable real submission');
      records.push({ width, theme, route, ...metrics });
      if (route !== '/' && [390, 1440].includes(width)) await page.screenshot({ path: `artifacts/phase13/page-alignment/${route.slice(1,-1)}-${width}-${theme}.png`, fullPage: true });
    }
    await page.close();
  }
  await writeFile('artifacts/phase13/page-alignment/results.json', JSON.stringify(records, null, 2));
  console.log(JSON.stringify(records.filter(r => r.width === 1440 && r.theme === 'light')));
  console.log(`PASS: ${records.length} read-only alignment samples, no horizontal overflow, preview form retained.`);
} finally { await browser.close(); }
