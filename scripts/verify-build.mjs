import { readFile, access, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { verifyHeroImage } from './verify-hero-image.mjs';
import sharp from 'sharp';

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
  assert.ok(!/hero-kiosk-original|hero-kiosk-branded-v2|platform-self-ordering-v1-|Ez%20Kyosk%20Orbit/.test(html), `${url}: no superseded deployed artwork`);
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
await verifyHeroImage('assets/hero-kiosk-transparent-v3.webp');
const heroVariants = (await readdir('dist/_astro')).filter(file => file.startsWith('hero-kiosk-transparent-v3.') && file.endsWith('.webp'));
assert.equal(heroVariants.length, 3, 'all three responsive transparent hero variants');
for (const file of heroVariants) await verifyHeroImage(`dist/_astro/${file}`);
await assert.rejects(access('dist/assets/images/platform-self-ordering-v1-640.webp'), 'superseded public artwork is not deployed');
const homeHtml = pages.get('/');
const selfOrderingPanel = homeHtml.match(/<section class="product-panel" id="panel-self-ordering"[\s\S]*?<\/section>/)?.[0];
assert.ok(selfOrderingPanel?.includes('product-panel-image'), 'Self-Ordering product panel has its generated concept image');
assert.ok(selfOrderingPanel.includes('Every choice, clear from the first tap.</h3>'), 'product panel heading retained');
assert.ok(selfOrderingPanel.includes('Illustrative Ez Kyosk portrait kiosk menu'), 'image described as illustrative, not a live screenshot');
assert.ok(!selfOrderingPanel.includes('ui-window'), 'first product placeholder remains replaced');
assert.equal((homeHtml.match(/class="ui-window"/g) || []).length, 2, 'remaining two product placeholders retained');
assert.equal((homeHtml.match(/class="product-panel-image"/g) || []).length, 3, 'only three product images integrated');
const inventoryPanel = homeHtml.match(/<section class="product-panel" id="panel-inventory"[\s\S]*?<\/section>/)?.[0];
assert.ok(inventoryPanel?.includes('Keep menu availability closer to reality.</h3>'), 'Inventory heading retained');
assert.ok(inventoryPanel.includes('Real-time inventory support helps the ordering experience reflect operational availability and gives teams a clearer view of stock movement.'), 'Inventory description retained');
assert.ok(inventoryPanel.includes('Illustrative Ez Kyosk inventory tablet'), 'Inventory image described as illustrative');
assert.ok(!inventoryPanel.includes('ui-window'), 'Inventory placeholder replaced');
for (const width of [480, 960, 1440]) {
  const filename = `product-inventory-v1-${width}.webp`;
  assert.ok(inventoryPanel.includes(publicPath(`/assets/images/${filename}`)), `Inventory uses base-safe ${filename}`);
  const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
  assert.equal(metadata.width, width);
  assert.equal(metadata.height, width * 3 / 4);
}
const checkoutPanel = homeHtml.match(/<section class="product-panel" id="panel-pos-checkout"[\s\S]*?<\/section>/)?.[0];
assert.ok(checkoutPanel?.includes('Move confirmed orders into checkout.</h3>'), 'checkout heading retained');
assert.ok(checkoutPanel.includes('Connect the self-ordering journey with the operational checkout flow, including order queueing and the requirements defined for each deployment.'), 'checkout description retained');
assert.ok(checkoutPanel.includes('Illustrative Ez Kyosk staff checkout workstation'), 'checkout image described as illustrative');
assert.ok(!checkoutPanel.includes('ui-window'), 'checkout placeholder replaced');
for (const width of [480, 960, 1440]) {
  const filename = `product-pos-checkout-v1-${width}.webp`;
  assert.ok(checkoutPanel.includes(publicPath(`/assets/images/${filename}`)), `checkout uses base-safe ${filename}`);
  const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
  assert.equal(metadata.width, width);
  assert.equal(metadata.height, width * 3 / 4);
}
for (const width of [480, 960, 1440]) {
  const filename = `product-self-ordering-v1-${width}.webp`;
  assert.ok(selfOrderingPanel.includes(publicPath(`/assets/images/${filename}`)), `product panel uses base-safe ${filename}`);
  const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
  assert.equal(metadata.width, width);
  assert.equal(metadata.height, width * 3 / 4);
}
assert.equal((homeHtml.match(/class="platform-image"/g) || []).length, 5, 'all five platform cards have imagery');
assert.ok(!homeHtml.includes('platform-self-ordering-v2-'), 'home uses the reviewed v3 correction, not the old white logo plates');
const firstPlatformCard = homeHtml.match(/<article class="platform-card--expandable"[\s\S]*?<\/article>/)?.[0];
assert.ok(firstPlatformCard, 'first platform card uses the image-led layout');
assert.ok(!firstPlatformCard.includes('<span>01</span>'), 'first card has no visible number');
assert.ok(firstPlatformCard.includes('Self-Ordering Experience</h3>'), 'first card keeps its one requested heading');
assert.ok(/<details class="platform-card-details">\s*<summary[^>]*aria-label="About Self-Ordering Experience"/.test(firstPlatformCard), 'native accessible description disclosure');
assert.ok(!/<details[^>]*\sopen(?:[\s=>])/.test(firstPlatformCard), 'description starts collapsed');
assert.ok(firstPlatformCard.includes('Let customers browse, select, adjust, review, and confirm from one focused touchscreen.'), 'description remains in the initial HTML');
const secondPlatformCard = [...homeHtml.matchAll(/<article class="platform-card--expandable"[\s\S]*?<\/article>/g)][1]?.[0];
assert.ok(secondPlatformCard?.includes('id="platform-checkout-title">POS and checkout</h3>'), 'second card has its unchanged heading');
assert.ok(!secondPlatformCard.includes('<span>02</span>'), 'second card has no visible number');
assert.ok(secondPlatformCard.includes('Connect confirmed orders to checkout, queueing, and the operational flow defined for your business.'), 'checkout description retained in HTML');
assert.ok(!/<details[^>]*\sopen(?:[\s=>])/.test(secondPlatformCard), 'checkout description starts collapsed');
const thirdPlatformCard = [...homeHtml.matchAll(/<article class="platform-card--expandable"[\s\S]*?<\/article>/g)][2]?.[0];
assert.ok(thirdPlatformCard?.includes('id="platform-payments-title">Payments with AltPayNet</h3>'), 'third card keeps its original heading');
assert.ok(!thirdPlatformCard.includes('<span>03</span>'), 'third card number removed');
assert.ok(thirdPlatformCard.includes('Support approved card, QR, GCash, Maya, and e-wallet payment paths.'), 'payment description remains in HTML');
assert.ok(/<summary[^>]*aria-label="About Payments with AltPayNet"/.test(thirdPlatformCard), 'payment disclosure has an accessible label');
assert.ok(!/<details[^>]*\sopen(?:[\s=>])/.test(thirdPlatformCard), 'payment description starts collapsed');
const fourthPlatformCard = [...homeHtml.matchAll(/<article class="platform-card--expandable"[\s\S]*?<\/article>/g)][3]?.[0];
assert.ok(fourthPlatformCard?.includes('id="platform-inventory-title">Inventory and order tracking</h3>'), 'fourth card keeps its original heading');
assert.ok(!fourthPlatformCard.includes('<span>04</span>'), 'fourth card number removed');
assert.ok(fourthPlatformCard.includes('Keep inventory visibility and order progress connected to the experience.'), 'inventory description stays in initial HTML');
assert.ok(/<summary[^>]*aria-label="About Inventory and order tracking"/.test(fourthPlatformCard), 'inventory disclosure has an accessible label');
assert.ok(!/<details[^>]*\sopen(?:[\s=>])/.test(fourthPlatformCard), 'inventory description starts collapsed');
const fifthPlatformCard = [...homeHtml.matchAll(/<article class="platform-card--expandable"[\s\S]*?<\/article>/g)][4]?.[0];
assert.ok(fifthPlatformCard?.includes('id="platform-extensions-title">Configurable extensions</h3>'), 'fifth card keeps its original heading');
assert.ok(!fifthPlatformCard.includes('<span>05</span>'), 'fifth card number removed');
assert.ok(fifthPlatformCard.includes('Scope reports, customers, loyalty, promotions, and other needs around your operation.'), 'extensions description stays in initial HTML');
assert.ok(/<summary[^>]*aria-label="About Configurable extensions"/.test(fifthPlatformCard), 'extensions disclosure has an accessible label');
assert.ok(!/<details[^>]*\sopen(?:[\s=>])/.test(fifthPlatformCard), 'extensions description starts collapsed');
for (const stem of ['platform-self-ordering-v3', 'platform-pos-checkout-v1', 'platform-payments-v1', 'platform-inventory-tracking-v1', 'platform-configurable-extensions-v1']) {
  for (const width of [320, 640, 1280]) {
    const filename = `${stem}-${width}.webp`;
    assert.ok(homeHtml.includes(publicPath(`/assets/images/${filename}`)), `home references ${filename}`);
    const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
    assert.equal(metadata.width, width, `${filename}: responsive width`);
    assert.equal(metadata.height, width * 3 / 4, `${filename}: unchanged 4:3 ratio`);
  }
}
const notFound = await readFile('dist/404.html', 'utf8');
assert.ok([...notFound.matchAll(/\bez\s+kyosk\b/gi)].every(match => match[0] === 'Ez Kyosk'), '404: canonical brand spelling');
console.log('Passed: 7 pages, internal links/anchors/assets, unique metadata, logo/favicon references, indexing controls, sitemap, and configured-site schema/sharing image.');
