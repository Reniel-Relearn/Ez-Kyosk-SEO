import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';

const paths = ['', 'features', 'how-it-works', 'solutions', 'about', 'contact', 'privacy'];
const basePath = `/${(process.env.BASE_PATH || '').replace(/^\/+|\/+$/g, '')}`.replace(/^\/$/, '');
const pages = new Map();
const titles = new Set();
const descriptions = new Set();
const locationFor = (url) => `dist${url.endsWith('/') ? url + 'index.html' : url}`;
const publicPath = (url) => `${basePath}${url}` || '/';
const outputPath = (pathname) => {
  if (basePath) assert.ok(pathname === basePath || pathname.startsWith(`${basePath}/`), `path uses configured base: ${pathname}`);
  return pathname.slice(basePath.length) || '/';
};

for (const path of paths) {
  const url = `/${path ? path + '/' : ''}`;
  const html = await readFile(locationFor(url), 'utf8');
  pages.set(url, html);
  assert.ok([...html.matchAll(/\bez\s+kyosk\b/gi)].every(match => match[0] === 'Ez Kyosk'), `${url}: canonical brand spelling`);
  assert.ok(html.includes('ez-kyosk-lockup.'), `${url}: original shared logo asset`);
  assert.ok(!/hero-kiosk-original|platform-self-ordering-v1-|Ez%20Kyosk%20Orbit/.test(html), `${url}: no superseded deployed artwork`);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${url}: one h1`);
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && !titles.has(title), `${url}: unique title`);
  assert.ok(description && !descriptions.has(description), `${url}: unique description`);
  titles.add(title); descriptions.add(description);
  assert.ok(html.includes(`href="${publicPath('/favicon.png')}"`), `${url}: supplied icon`);
  assert.ok(!html.includes('favicon.svg'), `${url}: no obsolete favicon`);
  if (process.env.SITE_URL) {
    const expected = new URL(publicPath(url), process.env.SITE_URL).href;
    assert.ok(html.includes(`rel="canonical" href="${expected}"`), `${url}: canonical`);
    assert.ok(!html.includes('noindex, nofollow'), `${url}: indexing`);
    assert.ok(html.includes('property="og:image"'), `${url}: sharing image`);
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1]);
    const nodes = schema['@graph'] || [schema];
    const webPage = nodes.find(node => node['@type'] === 'WebPage');
    const webSite = nodes.find(node => node['@type'] === 'WebSite');
    assert.equal(webPage?.url, expected);
    assert.equal(webPage?.inLanguage, 'en-PH');
    assert.equal(webSite?.url, new URL(publicPath('/'), process.env.SITE_URL).href);
    const image = html.match(/property="og:image" content="([^"]+)"/)?.[1];
    assert.ok(image.startsWith(new URL(process.env.SITE_URL).origin));
    await access(locationFor(outputPath(decodeURIComponent(new URL(image).pathname))));
  } else {
    assert.ok(html.includes('noindex, nofollow'), `${url}: preview noindex`);
    assert.ok(!html.includes('rel="canonical"'), `${url}: no invented canonical`);
  }
}

for (const [pageUrl, html] of pages) {
  for (const [, value] of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
    if (!value.startsWith('/') && !value.startsWith('#')) continue;
    const url = new URL(value, `https://example.test${publicPath(pageUrl)}`);
    await access(locationFor(outputPath(decodeURIComponent(url.pathname))));
    if (url.hash) {
      const targetPath = outputPath(url.pathname);
      const target = pages.get(targetPath) || await readFile(locationFor(targetPath), 'utf8');
      assert.ok(target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${pageUrl}: anchor ${value}`);
    }
  }
}

const robots = await readFile('dist/robots.txt', 'utf8');
assert.ok(robots.includes(process.env.SITE_URL ? 'Allow: /' : 'Disallow: /'));
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, process.env.SITE_URL ? 7 : 0);
await access('dist/favicon.png');
await access('dist/brand-social.png');
await assert.rejects(access('dist/assets/images/platform-self-ordering-v1-640.webp'), 'superseded public artwork is not deployed');
const notFound = await readFile('dist/404.html', 'utf8');
assert.ok([...notFound.matchAll(/\bez\s+kyosk\b/gi)].every(match => match[0] === 'Ez Kyosk'), '404: canonical brand spelling');
console.log('Passed: 7 pages, internal links/anchors/assets, unique metadata, logo/favicon references, indexing controls, sitemap, and configured-site schema/sharing image.');
