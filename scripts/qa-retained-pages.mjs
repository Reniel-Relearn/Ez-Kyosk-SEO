import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
const base = process.env.QA_BASE_URL || 'http://127.0.0.1:4323/Ez-Kyosk-SEO';
const folder = 'artifacts/phase13/retained-pages';
const capture = process.argv.includes('--capture-baseline');
const browser = await chromium.launch({ channel: 'msedge', headless: true });
await mkdir(folder, { recursive: true });
async function content(page) {
  return page.evaluate(() => ({
    title: document.title, description: document.querySelector('meta[name="description"]').content,
    text: [...document.querySelectorAll('main h1,main h2,main p,main li,main label')].map(el => el.textContent.trim()),
    controls: [...document.querySelectorAll('main input,main select,main textarea,main button')].map(el => ({ tag: el.tagName, attrs: [...el.attributes].filter(a => a.name !== 'class').map(a => [a.name, a.value]), text: el.textContent.trim() })),
    form: document.querySelector('form') ? [...document.querySelector('form').attributes].map(a => [a.name, a.value]) : null,
    links: [...document.querySelectorAll('main a')].map(el => ({ text: el.textContent.trim(), href: el.getAttribute('href'), target: el.target, rel: el.rel })),
  }));
}
// Pinned pre-F baseline is committed so a clean checkout can run this regression.
const baseline = capture ? {} : JSON.parse(await readFile(new URL('./fixtures/phase13-retained-pages.json', import.meta.url), 'utf8'));
const results = [], errors = [], posts = [];
try {
  if (capture) {
    const page = await browser.newPage();
    for (const route of ['/contact/', '/privacy/']) { await page.goto(base + route); baseline[route] = await content(page); }
    await writeFile(`${folder}/baseline.json`, JSON.stringify(baseline, null, 2));
    console.log('Captured pre-F text, metadata, control and form safeguards.');
  } else {
    for (const width of [320, 390, 768, 1024, 1440, 1920]) for (const theme of ['light', 'dark']) {
      const context = await browser.newContext({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
      const page = await context.newPage();
      page.on('pageerror', e => errors.push(e.message));
      page.on('request', r => { if (r.method() === 'POST') posts.push(r.url()); });
      for (const route of ['/contact/', '/privacy/']) {
        await page.goto(base + route);
        await page.evaluate(async theme => { document.documentElement.dataset.theme = theme; await document.fonts.ready; }, theme);
        assert.deepEqual(await content(page), baseline[route], `${route}: text/metadata/form safeguards preserved`);
        const state = await page.evaluate(() => {
          const header = document.querySelector('.site-header'), hero = document.querySelector('.page-hero'), hs = getComputedStyle(header), s = getComputedStyle(hero), h1 = getComputedStyle(document.querySelector('h1'));
          const legal = document.querySelector('.legal-content section')?.getBoundingClientRect();
          const notice = document.querySelector('.legal-content > .notice')?.getBoundingClientRect();
          return { overflow: document.documentElement.scrollWidth > innerWidth, left: parseFloat(s.paddingLeft), right: parseFloat(s.paddingRight), headerLeft: parseFloat(hs.paddingLeft), headerRight: parseFloat(hs.paddingRight), top: parseFloat(s.paddingTop), bottom: parseFloat(s.paddingBottom), minHeight: s.minHeight, titleSize: parseFloat(h1.fontSize), titleLeft: document.querySelector('h1').getBoundingClientRect().left, noticeLeft: notice?.left, legal: legal && { left: legal.left, right: innerWidth - legal.right, width: legal.width }, iconCount: document.querySelectorAll('.contact-points svg[aria-hidden="true"][focusable="false"]').length, oldBadges: [...document.querySelectorAll('.contact-points>div>span')].some(el => /^0[123]$/.test(el.textContent)) };
        });
        const margin = Math.max(20, (width - 1200) / 2), padding = Math.max(32, Math.min(56, width * .04));
        for (const value of [state.left, state.right, state.headerLeft, state.headerRight]) assert.ok(Math.abs(value - margin) < .1);
        assert.equal(state.overflow, false);
        assert.ok(Math.abs(state.top - padding) < .1 && Math.abs(state.bottom - padding) < .1);
        assert.equal(state.minHeight, '0px');
        assert.ok(Math.abs(state.titleSize - Math.max(34, Math.min(52, width * .04))) < .1);
        if (route === '/privacy/') {
          assert.ok(Math.abs(state.legal.left - state.titleLeft) < 1, 'body and Hero share a left edge');
          assert.ok(Math.abs(state.noticeLeft - state.titleLeft) < 1, 'notice shares Hero left edge');
          assert.ok(Math.abs(state.legal.width - Math.min(width - 2 * margin, 960)) < 1, 'readable maximum width retained');
        }
        else { assert.equal(state.iconCount, 3); assert.equal(state.oldBadges, false); }
        if ([390, 1440].includes(width)) {
          const axe = await new AxeBuilder({ page }).include('main').analyze();
          assert.deepEqual(axe.violations, [], `${route} ${theme} ${width}: scoped accessibility`);
          await page.screenshot({ path: `${folder}/${route.slice(1, -1)}-${theme}-${width}.png`, fullPage: true });
        }
        if (route === '/contact/') {
          await page.locator('input[name="name"]').fill('Local QA');
          await page.locator('input[name="email"]').fill('qa@example.test');
          await page.locator('select[name="business_type"]').selectOption({ label: 'Other' });
          await page.locator('textarea[name="message"]').fill('Local preview test only');
          await page.getByRole('button', { name: 'Preview inquiry' }).click();
          await page.getByRole('status').filter({ hasText: 'Nothing was sent or saved' }).waitFor();
        }
        results.push({ width, theme, route, ...state });
      }
      await context.close();
    }
    for (const theme of ['light', 'dark']) for (const route of ['/contact/', '/privacy/']) {
      const context = await browser.newContext({ javaScriptEnabled: false, colorScheme: theme, viewport: { width: 390, height: 1000 } });
      const page = await context.newPage(); await page.goto(base + route);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      assert.deepEqual(await content(page), baseline[route]);
      await context.close();
    }
    assert.deepEqual(errors, []); assert.deepEqual(posts, []);
    await writeFile(`${folder}/results.json`, JSON.stringify({ results, errors, posts }, null, 2));
    console.log(`PASS: ${results.length} retained-page layouts/content comparisons, eight scoped axe checks, four no-JavaScript pages, zero preview POSTs.`);
  }
} finally { await browser.close(); }
