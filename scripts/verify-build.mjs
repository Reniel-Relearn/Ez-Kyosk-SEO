import { readFile, access, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { verifyHeroImage } from './verify-hero-image.mjs';
import sharp from 'sharp';
import { createHash } from 'node:crypto';

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
assert.equal((homeHtml.match(/class="ui-window"/g) || []).length, 0, 'all product placeholders replaced');
assert.equal((homeHtml.match(/class="product-panel-image"/g) || []).length, 5, 'all five product images integrated');
const customersPanel = homeHtml.match(/<section class="product-panel" id="panel-customers"[\s\S]*?<\/section>/)?.[0];
assert.ok(customersPanel?.includes('Add customer tools when they serve the experience.</h3>'), 'Customers heading retained');
assert.ok(customersPanel.includes('Customer profiles, loyalty, promotions, and related tools can be scoped around client needs and the experience they want to provide.'), 'optional customer-tool scoping retained');
assert.ok(customersPanel.includes('Illustrative Ez Kyosk smartphone sample profile'), 'Customers image described as illustrative');
assert.ok(!customersPanel.includes('ui-window'), 'Customers placeholder replaced');
for (const width of [480, 960, 1440]) {
  const filename = `product-customers-v1-${width}.webp`;
  assert.ok(customersPanel.includes(publicPath(`/assets/images/${filename}`)), `Customers uses base-safe ${filename}`);
  const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
  assert.equal(metadata.width, width);
  assert.equal(metadata.height, width * 3 / 4);
}
const reportsPanel = homeHtml.match(/<section class="product-panel" id="panel-reports"[\s\S]*?<\/section>/)?.[0];
assert.ok(reportsPanel?.includes('Shape reporting around the questions you ask.</h3>'), 'Reports heading retained');
assert.ok(reportsPanel.includes('Reporting and analytics can be configured to the information, roles, and workflows a client needs rather than forcing every business into one template.'), 'configurable reporting description retained');
assert.ok(reportsPanel.includes('Illustrative Ez Kyosk reporting laptop'), 'Reports image described as illustrative');
assert.ok(!reportsPanel.includes('ui-window'), 'Reports placeholder replaced');
for (const width of [480, 960, 1440]) {
  const filename = `product-reports-v1-${width}.webp`;
  assert.ok(reportsPanel.includes(publicPath(`/assets/images/${filename}`)), `Reports uses base-safe ${filename}`);
  const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
  assert.equal(metadata.width, width);
  assert.equal(metadata.height, width * 3 / 4);
}
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
for (const route of ['/', '/features/']) {
  const html = pages.get(route);
  assert.equal((html.match(/class="payment-terminal-image"/g) || []).length, 1, `${route}: one terminal image`);
  assert.ok(!html.includes('class="mini-kiosk"'), `${route}: terminal CSS placeholder replaced`);
  assert.ok(html.includes('Terminal integration</h3>'), `${route}: payment heading retained`);
  assert.ok(html.includes('Connect a secure payment terminal to the kiosk checkout flow for supported card and in-store payment requirements.'), `${route}: payment description retained`);
  assert.ok(html.includes('Discuss terminal requirements'), `${route}: payment link retained`);
  assert.ok(html.includes('Illustrative Ez Kyosk countertop kiosk'), `${route}: illustrative alt`);
  assert.equal((html.match(/class="payment-online-image"/g) || []).length, 1, `${route}: second payment image integrated`);
  assert.ok(!html.includes('class="phone"'), `${route}: online payment CSS placeholder replaced`);
  assert.ok(html.includes('QR and e-wallet checkout</h3>'), `${route}: second payment heading retained`);
  assert.ok(html.includes('Let customers use supported QR, GCash, Maya, card, and e-wallet payment paths from a mobile device.'), `${route}: second payment description retained`);
  assert.ok(html.includes('Discuss online payments'), `${route}: second payment link retained`);
  const onlineTag = html.match(/<img class="payment-online-image"[^>]+>/)?.[0];
  assert.ok(onlineTag?.includes('Owner-supplied illustration'), `${route}: accurate owner-supplied image alt`);
  assert.ok(onlineTag.includes('width="1371" height="1148"'), `${route}: original dimensions retained`);
  const onlineSource = onlineTag.match(/src="([^"]+)"/)?.[1];
  assert.ok(onlineSource?.endsWith('.png'), `${route}: original PNG, not a generated/re-encoded replacement`);
  const sourceBytes = await readFile('assets/Hand Holding AltPayNet Payment Phone and Cards.png');
  const deployedBytes = await readFile(locationFor(outputPath(decodeURIComponent(onlineSource))));
  const hash = bytes => createHash('sha256').update(bytes).digest('hex');
  assert.equal(hash(sourceBytes), '6e5c2d1de4e3d0eef00417515d4fa18234a23e68ccd713793d836c01e528124d', 'exact owner-approved source PNG unchanged');
  assert.equal(hash(deployedBytes), hash(sourceBytes), `${route}: deployed PNG byte-identical to supplied original`);
  for (const width of [360, 720, 1080]) {
    assert.ok(html.includes(publicPath(`/assets/images/payment-terminal-v1-${width}.webp`)), `${route}: base-safe terminal source ${width}`);
  }
}
for (const width of [360, 720, 1080]) {
  const file = `dist/assets/images/payment-terminal-v1-${width}.webp`;
  const metadata = await sharp(file).metadata();
  assert.equal(metadata.width, width);
  assert.equal(metadata.height, width * 4 / 3);
  assert.equal(metadata.hasAlpha, true, `${file}: alpha channel`);
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let transparent = 0, solid = 0;
  for (let i = 3; i < data.length; i += info.channels) {
    if (data[i] === 0) transparent++;
    // Generated cutout interiors use alpha 252-254; preserve rather than repaint them.
    if (data[i] >= 250) solid++;
  }
  assert.ok(transparent > info.width * info.height * .1, `${file}: genuinely transparent surrounding pixels`);
  assert.ok(solid > info.width * info.height * .3, `${file}: near-opaque device detail retained`);
  assert.equal(data[3], 0, `${file}: no baked background at top-left`);
  assert.equal(data[info.width * info.channels - 1], 0, `${file}: no baked background at top-right`);
}
const notFound = await readFile('dist/404.html', 'utf8');
assert.ok([...notFound.matchAll(/\bez\s+kyosk\b/gi)].every(match => match[0] === 'Ez Kyosk'), '404: canonical brand spelling');
console.log('Passed: 7 pages, internal links/anchors/assets, unique metadata, logo/favicon references, indexing controls, sitemap, and configured-site schema/sharing image.');
