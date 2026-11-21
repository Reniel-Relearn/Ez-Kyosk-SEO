import { readFile, access, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { verifyHeroImage } from './verify-hero-image.mjs';
import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { journeyImages } from '../src/data/journeyImages.mjs';
import { faqs } from '../src/data/product.ts';

const paths = ['', 'offers', 'articles', 'features', 'how-it-works', 'solutions', 'about', 'contact', 'privacy'];
const retired = ['features','how-it-works','solutions','about'];
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
    assert.equal(html.includes('noindex, nofollow'), retired.includes(path), `${url}: legacy routes stay noindex`);
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
if (process.env.SITE_URL) {
  assert.equal(robots.match(/^Sitemap: (.+)$/m)?.[1], new URL(publicPath('/sitemap.xml'), process.env.SITE_URL).href, 'robots advertises exact base-aware sitemap URL');
} else {
  assert.equal(robots, 'User-agent: *\nDisallow: /\n', 'preview remains blocked without an advertised sitemap');
}
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, process.env.SITE_URL ? 5 : 0);
await access('dist/favicon.png');
await access('dist/brand-social.png');
await verifyHeroImage('assets/hero-kiosk-transparent-v3.webp');
const heroVariants = (await readdir('dist/_astro')).filter(file => file.startsWith('hero-kiosk-transparent-v3.') && file.endsWith('.webp'));
assert.equal(heroVariants.length, 3, 'all three responsive transparent hero variants');
for (const file of heroVariants) await verifyHeroImage(`dist/_astro/${file}`);
await assert.rejects(access('dist/assets/images/platform-self-ordering-v1-640.webp'), 'superseded public artwork is not deployed');
const homeHtml = pages.get('/');
const homeOrder=['home-hero','benefits-section','platform-section','product-section','payments-section','how-section','industries-section','faq-section','home-about','final-cta'];
const homePositions=homeOrder.map(name=>homeHtml.indexOf(`class="${name}`));
assert.ok(homePositions.every((position,index)=>position>=0 && (index===0 || position>homePositions[index-1])),'approved Home order: How It Works before Industries, all other sections retained');
const approvedHero = homeHtml.match(/<section class="home-hero[\s\S]*?<\/section>/)?.[0];
assert.ok(approvedHero, 'Home hero remains present');
assert.ok(homeHtml.includes('data-home-hero="true"'), 'Home-only background scope');
assert.ok(!/hero-note|<figcaption/.test(approvedHero), 'only approved hero supporting lines removed');
assert.ok(approvedHero.includes('Self-Ordering<br><span>Made Easy</span><br>for Your Business.') || approvedHero.includes('Self-Ordering<br /><span>Made Easy</span><br />for Your Business.'), 'original hero heading retained');
assert.ok(approvedHero.includes('Give customers the freedom to explore your menu, select their favorites, and review their orders, all from one touchscreen.'), 'original hero lead retained');
assert.ok(homeHtml.includes('Your Menu. Their Order. One Simple Screen.'), 'footer tagline retained');
const productTabs = homeHtml.match(/<div class="product-tabs"[\s\S]*?<\/div>/)?.[0];
assert.ok(productTabs, 'Home product tab bar retained');
assert.equal((productTabs.match(/role="tab"/g) || []).length, 5, 'five labelled product tabs');
assert.equal((productTabs.match(/class="product-tab-icon"/g) || []).length, 5, 'five inline category icons');
assert.ok(!/>0[1-5]</.test(productTabs), 'number labels removed from Home product tabs');
for (const kind of ['self-ordering', 'pos-checkout', 'inventory', 'reports', 'customers']) {
  const icon = productTabs.match(new RegExp(`<svg[^>]+data-product-icon="${kind}"[^>]*>`))?.[0];
  assert.ok(icon?.includes('aria-hidden="true"') && icon.includes('focusable="false"'), 'category icons are decorative, not extra controls');
  assert.ok(icon.includes('width="20" height="20"'), 'consistent icon dimensions');
}
assert.ok(!pages.get('/features/').includes('product-tab-icon'), 'separate Product page unchanged by Home-only icons');
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
const platformCards = [...homeHtml.matchAll(/<article class="platform-card--expandable"[\s\S]*?<\/article>/g)].map(match => match[0].replaceAll('&amp;', '&'));
assert.equal(platformCards.length, 5, 'five business-facing capabilities');
assert.ok(homeHtml.includes('>One Connected Platform</span>'), 'section identity retained');
const firstPlatformCard = platformCards[0];
assert.ok(firstPlatformCard, 'first platform card uses the image-led layout');
assert.ok(!firstPlatformCard.includes('<span>01</span>'), 'first card has no visible number');
assert.ok(firstPlatformCard.includes('Self-Ordering & Payments</h3>'), 'first card combines ordering and electronic payments');
assert.ok(/<details class="platform-card-details">\s*<summary[^>]*aria-label="About Self-Ordering & Payments"/.test(firstPlatformCard), 'native accessible description disclosure');
assert.ok(!/<details[^>]*\sopen(?:[\s=>])/.test(firstPlatformCard), 'description starts collapsed');
assert.ok(firstPlatformCard.includes('Give customers a self-service ordering channel with supported electronic payment paths.'), 'business-facing description in initial HTML');
assert.ok(firstPlatformCard.includes('width="540" height="720"'), 'portrait dimensions reserve the correct layout space');
assert.ok(firstPlatformCard.includes('AI-generated illustration'), 'image alt does not imply an actual client photograph');
assert.ok(firstPlatformCard.includes('attached payment terminal'), 'first card alt reflects revised hardware');
assert.ok(!firstPlatformCard.includes('platform-self-ordering-v3-'), 'approved human portrait replaces device-only artwork');
for (const width of [270, 540, 1080]) {
  const filename = `platform-self-ordering-human-v4-${width}.webp`;
  assert.ok(firstPlatformCard.includes(publicPath(`/assets/images/${filename}`)), `first card references ${filename}`);
  const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
  assert.equal(metadata.width, width);
  assert.equal(metadata.height, width * 4 / 3, 'approved 3:4 portrait ratio');
  assert.equal(createHash('sha256').update(await readFile(`dist/assets/images/${filename}`)).digest('hex'), createHash('sha256').update(await readFile(`public/assets/images/${filename}`)).digest('hex'), 'ordering hardware derivative copied without modification');
}
const secondPlatformCard = platformCards[1];
assert.ok(secondPlatformCard?.includes('id="platform-queue-title">Order Queue & Tracking</h3>'), 'queue visibility is second');
assert.ok(!secondPlatformCard.includes('<span>02</span>'), 'second card has no visible number');
assert.ok(secondPlatformCard.includes('Help customers see which orders are being prepared and which are ready for pickup.'), 'customer-facing queue description in HTML');
assert.ok(!/<details[^>]*\sopen(?:[\s=>])/.test(secondPlatformCard), 'queue description starts collapsed');
assert.ok(secondPlatformCard.includes('width="540" height="720"'), 'queue portrait reserves layout space');
assert.ok(secondPlatformCard.includes('AI-generated illustration of a ceiling-mounted Ez Kyosk sample order display'), 'accurate illustrative alt');
assert.ok(/<summary[^>]*aria-label="About Order Queue & Tracking"/.test(secondPlatformCard), 'queue disclosure has accessible label');
for (const width of [270, 540, 1080]) {
  const filename = `platform-order-queue-ceiling-v3-${width}.webp`;
  assert.ok(secondPlatformCard.includes(publicPath(`/assets/images/${filename}`)), `queue uses base-safe ${filename}`);
  const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
  assert.equal(metadata.width, width);
  assert.equal(metadata.height, width * 4 / 3, 'uncropped 3:4 queue image');
  assert.equal(createHash('sha256').update(await readFile(`dist/assets/images/${filename}`)).digest('hex'), createHash('sha256').update(await readFile(`public/assets/images/${filename}`)).digest('hex'), 'approved logo-free queue asset deployed without modification');
}
const thirdPlatformCard = platformCards[2];
assert.ok(thirdPlatformCard?.includes('id="platform-inventory-title">Inventory & Availability</h3>'), 'inventory is third');
assert.ok(!thirdPlatformCard.includes('<span>03</span>'), 'third card number removed');
assert.ok(thirdPlatformCard.includes('Keep item availability and inventory visibility aligned with daily operations.'), 'inventory description remains in HTML');
assert.ok(/<summary[^>]*aria-label="About Inventory & Availability"/.test(thirdPlatformCard), 'inventory disclosure has an accessible label');
assert.ok(!/<details[^>]*\sopen(?:[\s=>])/.test(thirdPlatformCard), 'inventory description starts collapsed');
assert.ok(thirdPlatformCard.includes('width="540" height="720"'), 'inventory portrait reserves correct layout space');
assert.ok(thirdPlatformCard.includes('AI-generated illustration of a team member checking a sample inventory spreadsheet'), 'inventory alt identifies illustrative spreadsheet content');
assert.ok(!thirdPlatformCard.includes('platform-inventory-tracking-v1-'), 'approved portrait replaces legacy stock composition');
for (const width of [270, 540, 1080]) {
  const filename = `platform-inventory-human-v2-${width}.webp`;
  assert.ok(thirdPlatformCard.includes(publicPath(`/assets/images/${filename}`)), `inventory uses base-safe ${filename}`);
  const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
  assert.equal(metadata.width, width);
  assert.equal(metadata.height, width * 4 / 3, 'uncropped 3:4 inventory image');
  assert.equal(createHash('sha256').update(await readFile(`dist/assets/images/${filename}`)).digest('hex'), createHash('sha256').update(await readFile(`public/assets/images/${filename}`)).digest('hex'), 'inventory spreadsheet derivative deployed without modification');
}
const fourthPlatformCard = platformCards[3];
assert.ok(fourthPlatformCard?.includes('id="platform-reports-title">Reports & Insights</h3>'), 'reports are fourth');
assert.ok(!fourthPlatformCard.includes('<span>04</span>'), 'fourth card number removed');
assert.ok(fourthPlatformCard.includes('Configure reports around sales, products and the operational questions your business needs to answer.'), 'reporting stays configurable');
assert.ok(/<summary[^>]*aria-label="About Reports & Insights"/.test(fourthPlatformCard), 'reporting disclosure has an accessible label');
assert.ok(!/<details[^>]*\sopen(?:[\s=>])/.test(fourthPlatformCard), 'reporting description starts collapsed');
assert.ok(fourthPlatformCard.includes('width="540" height="720"'), 'analytics portrait reserves correct layout space');
assert.ok(fourthPlatformCard.includes('AI-generated illustration of a manager reviewing an illustrative analytics dashboard'), 'analytics alt identifies illustrative content');
assert.ok(!fourthPlatformCard.includes('platform-configurable-extensions-v1-'), 'approved analytics portrait replaces legacy laptop artwork');
for (const width of [270, 540, 1080]) {
  const filename = `platform-reports-weekly-v3-${width}.webp`;
  assert.ok(fourthPlatformCard.includes(publicPath(`/assets/images/${filename}`)), `analytics uses base-safe ${filename}`);
  const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
  assert.equal(metadata.width, width);
  assert.equal(metadata.height, width * 4 / 3, 'uncropped 3:4 analytics image');
  assert.equal(createHash('sha256').update(await readFile(`dist/assets/images/${filename}`)).digest('hex'), createHash('sha256').update(await readFile(`public/assets/images/${filename}`)).digest('hex'), 'approved analytics dashboard derivative deployed without modification');
}
const fifthPlatformCard = platformCards[4];
assert.ok(fifthPlatformCard?.includes('id="platform-cashier-title">Cashier</h3>'), 'optional cashier is fifth');
assert.ok(!fifthPlatformCard.includes('<span>05</span>'), 'fifth card number removed');
assert.ok(fifthPlatformCard.includes('Offer an optional cashier-assisted payment route for customers who prefer to pay in cash.'), 'cash payment is explicitly optional');
assert.ok(/<summary[^>]*aria-label="About Cashier"/.test(fifthPlatformCard), 'cashier disclosure has an accessible label');
assert.ok(!/<details[^>]*\sopen(?:[\s=>])/.test(fifthPlatformCard), 'cashier description starts collapsed');
assert.ok(fifthPlatformCard.includes('width="540" height="720"'), 'cashier portrait reserves correct layout space');
assert.ok(fifthPlatformCard.includes('AI-generated illustration of a customer offering cash to a café cashier beside a staff-facing Ez Kyosk POS terminal'), 'cashier alt describes the illustrative optional-cash scene');
assert.ok(!fifthPlatformCard.includes('platform-pos-checkout-v1-'), 'approved second Cashier image replaces legacy workstation');
assert.ok(!platformCards.join('').includes('platform-payments-v1-'), 'redundant payment overview artwork is no longer imported');
for (const width of [270, 540, 1080]) {
  const filename = `platform-cashier-human-v4-${width}.webp`;
  assert.ok(fifthPlatformCard.includes(publicPath(`/assets/images/${filename}`)), `cashier uses base-safe ${filename}`);
  const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
  assert.equal(metadata.width, width, `${filename}: responsive width`);
  assert.equal(metadata.height, width * 4 / 3, `${filename}: uncropped 3:4 ratio`);
  assert.equal(createHash('sha256').update(await readFile(`dist/assets/images/${filename}`)).digest('hex'), createHash('sha256').update(await readFile(`public/assets/images/${filename}`)).digest('hex'), 'cashier orientation derivative copied without modification');
}
// The approved artwork remains on frozen Home; redesigned Product uses visual placeholders.
for (const route of ['/']) {
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
const industrySection = homeHtml.match(/<section class="industries-section[\s\S]*?<\/section>/)?.[0];
assert.ok(industrySection?.includes('Designed to adapt'), 'industry section identity retained');
const industryCards = [...industrySection.matchAll(/<a class="industry-card"[\s\S]*?<\/a>/g)].map(match => match[0].replaceAll('&amp;', '&'));
assert.equal(industryCards.length, 4, 'four single-link industry cards');
const industryTitles = ['Hospitality & food', 'Retail & shops', 'Wellness & beauty', 'Services & B2B'];
const industryIds = ['hospitality', 'retail', 'wellness', 'services'];
const industryBodies = [
  'Cafés, bakeries, restaurants, and quick-service teams can create a clearer ordering path.',
  'Bring product discovery, selection, payment, and stock visibility into one guided touchpoint.',
  'Present services and add-ons with a simple path from selection to checkout.',
  'Configure a customer-facing flow around the products, services, and approvals your operation needs.',
];
industryCards.forEach((card, index) => {
  assert.ok(card.includes(`id="industry-${industryIds[index]}-title">${industryTitles[index]}</h3>`), 'approved industry order/title');
  assert.ok(card.includes(industryBodies[index]), 'approved industry description retained');
  assert.ok(card.includes(`href="${publicPath('/contact/')}"`), 'industry inquiry destination');
  assert.ok(!/<details|<button|>0[1-4]</.test(card), 'industry links have no accordion/buttons/numbers');
  assert.equal((card.match(/class="industry-card-badge"/g) || []).length, 1, 'one decorative category badge');
  assert.ok(card.includes('>Discuss this use case <span'), 'clear industry inquiry label');
});
assert.ok(!industrySection.includes('industry-symbol'), 'large geometric placeholders removed');
assert.equal((industrySection.match(/class="industry-image"/g) || []).length, 4, 'all four approved photographs integrated');
assert.equal((industrySection.match(/data-image-status="pending"/g) || []).length, 0, 'no pending industry photographs');
assert.ok(!industrySection.includes('Image to follow'), 'completed section has no reserved-image labels');
assert.ok(industryCards[0].includes('AI-generated illustration of a customer using an Ez Kyosk kiosk beside a café counter'), 'illustrative hospitality alt');
assert.ok(industryCards[0].includes('width="640" height="480"'), 'landscape dimensions reserve layout space');
assert.ok(!industrySection.includes('industry-hospitality-v1-'), 'superseded first preview not imported');
assert.ok(industryCards[1].includes('AI-generated illustration of a shopper and shop associate'), 'illustrative retail alt');
assert.ok(industryCards[1].includes('width="640" height="480"'), 'retail reserves landscape dimensions');
assert.ok(!industrySection.includes('industry-retail-v2-'), 'owner selected logo-bearing v1, not unbranded v2');
assert.ok(industryCards[2].includes('AI-generated illustration of a salon client and adviser'), 'illustrative wellness alt');
assert.ok(industryCards[2].includes('width="640" height="480"'), 'wellness reserves landscape dimensions');
assert.ok(industryCards[3].includes('AI-generated illustration of a service adviser holding a portrait tablet with a sample Ez Kyosk services dashboard'), 'illustrative sample services alt');
assert.ok(industryCards[3].includes('width="640" height="480"'), 'services reserves landscape photo dimensions');
assert.ok(!/industry-services-v[1-5]-/.test(industrySection), 'only owner-approved balanced Services v6 imported');
for (const [index, stem] of ['industry-hospitality-v2', 'industry-retail-v1', 'industry-wellness-v1', 'industry-services-v6'].entries()) {
  for (const width of [320, 640, 1280]) {
    const filename = `${stem}-${width}.webp`;
    assert.ok(industryCards[index].includes(publicPath(`/assets/images/${filename}`)), 'approved responsive industry source');
    const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
    assert.equal(metadata.width, width);
    assert.equal(metadata.height, width * 3 / 4);
    assert.equal(createHash('sha256').update(await readFile(`dist/assets/images/${filename}`)).digest('hex'),
      createHash('sha256').update(await readFile(`public/assets/images/${filename}`)).digest('hex'), 'approved photograph bytes unchanged');
  }
}
const customerSection = homeHtml.match(/<section class="how-section[\s\S]*?<\/section>/)?.[0];
assert.ok(customerSection?.includes('Six simple steps.'), 'Home describes six customer stages');
assert.ok(customerSection.includes('<ol class="customer-journey-grid" role="list">'), 'ordered customer journey');
const journeyTitles = ['Start & Select', 'Review & Edit Order', 'Choose How to Pay', 'Scan Your Tracking QR', 'Track Your Queue Status', 'Collect Your Order'];
const journeyCards = [...customerSection.matchAll(/<li class="customer-journey-card"[\s\S]*?<\/li>/g)].map(match => match[0].replaceAll('&amp;', '&'));
assert.equal(journeyCards.length, 6, 'all six owner-approved customer stages');
journeyCards.forEach((card, index) => {
  assert.ok(card.includes(`<h3>${journeyTitles[index]}</h3>`), 'approved journey order/title');
  assert.ok(!/<details|<button|<a /.test(card), 'steps are readable, not false interactive controls');
});
const journeyExpectedImages = Number(process.env.JOURNEY_EXPECTED_IMAGES || 6);
assert.equal(Object.keys(journeyImages).length, journeyExpectedImages, 'authorized journey asset count');
assert.equal((customerSection.match(/class="customer-journey-image"/g) || []).length, journeyExpectedImages, 'all completed journey images integrated');
assert.equal((customerSection.match(/data-journey-image="pending"/g) || []).length, 6 - journeyExpectedImages, 'no unexpected reserved images');
assert.ok(journeyCards[0].includes('AI-generated illustration of a Filipina customer with a dark ponytail'), 'first journey image has illustrative alt');
assert.ok(journeyCards[0].includes('width="640" height="480"'), 'journey photo reserves landscape space');
assert.ok(!customerSection.includes(`href="${publicPath('/how-it-works/')}"`), 'obsolete detailed guide link removed');
for (const [id, { stem, alt }] of Object.entries(journeyImages)) {
  const card = journeyCards.find(card => card.includes(`id="journey-${id}"`));
  assert.ok(card?.includes(alt) && alt.startsWith('AI-generated illustration'), 'descriptive illustrative alt');
  assert.ok(card.includes('width="640" height="480"'), 'reserved landscape image dimensions');
  for (const width of [320, 640, 1280]) {
    const filename = `${stem}-${width}.webp`;
    assert.ok(card.includes(publicPath(`/assets/images/${filename}`)), 'responsive journey source');
    const metadata = await sharp(`dist/assets/images/${filename}`).metadata();
    assert.equal(metadata.width, width);
    assert.equal(metadata.height, width * 3 / 4);
    assert.equal(createHash('sha256').update(await readFile(`dist/assets/images/${filename}`)).digest('hex'),
      createHash('sha256').update(await readFile(`public/assets/images/${filename}`)).digest('hex'), 'journey artwork bytes preserved');
  }
}
const notFound = await readFile('dist/404.html', 'utf8');
for (const [path,section] of [['features','products'],['how-it-works','how-it-works'],['solutions','industries'],['about','about-us']]) {
  const html=pages.get('/'+path+'/');
  assert.ok(html.includes('data-legacy-section="'+section+'"'),'legacy fallback destination');
  assert.ok(!/product-section-nav|product-page|journey-map|solution-orbit|about-story/.test(html),'old content removed');
  assert.equal((html.match(/<img\b/g)||[]).length,2,'legacy pages retain branding only');
}
const navLabels=['Home','Products','How It Works','Industries','Plans &amp; Pricing','About Us','Articles'];
for(const html of pages.values()){
  const nav=html.match(/<nav id="main-navigation"[\s\S]*?<\/nav>/)?.[0];
  for(const label of navLabels) assert.ok(nav?.includes('>'+label+'</a>'),'all seven labels');
  assert.ok(!/href="[^"]*\/(?:features|how-it-works|solutions|about)\//.test(html.split('</head>')[1]),'no retired internal navigation destinations');
  assert.ok(!/[\u2014]/.test(html),'no em dashes');
}
assert.equal((pages.get('/offers/').match(/data-offer-plan=/g)||[]).length,3);
for(const amount of ['PHP 0','PHP 1,990/month','PHP 3,990/month','PHP 89,000','PHP 9,900','PHP 14,900']) assert.ok(pages.get('/offers/').includes(amount),'approved offer amount: '+amount);
assert.ok(pages.get('/offers/').includes('optional future upgrade') && pages.get('/offers/').includes('quoted separately'),'offer limitations remain explicit');
assert.ok(!pages.get('/offers/').includes('Pricing shown is proposed'),'later commercial approval reflected');
assert.equal((pages.get('/articles/').match(/data-article-placeholder/g)||[]).length,3);
assert.ok(!/<time\b|Read more/.test(pages.get('/articles/')),'no fabricated articles');
assert.ok(!/features\/|how-it-works\/|solutions\/|about\//.test(sitemap),'legacy pages omitted from sitemap');
for(const target of ['home','products','industries','how-it-works','about-us']) assert.ok(homeHtml.includes('id="'+target+'"'),'Home target');
assert.ok(homeHtml.indexOf('class="faq-section')<homeHtml.indexOf('id="about-us"') && homeHtml.indexOf('id="about-us"')<homeHtml.indexOf('class="final-cta"'),'About follows FAQ and precedes final CTA');
const faqSection = homeHtml.match(/<section class="faq-section[\s\S]*?<\/section>/)?.[0];
assert.ok(faqSection, 'Home FAQ remains present');
assert.equal(faqs.length, 10, 'ten owner-approved FAQ entries');
assert.equal((faqSection.match(/<details[ >]/g) || []).length, 10, 'ten native FAQ disclosures');
const escapeHtml = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
for (const [question, answer] of faqs) {
  assert.ok(faqSection.includes(escapeHtml(question)), `FAQ question in static HTML: ${question}`);
  assert.ok(faqSection.includes(escapeHtml(answer)), `FAQ answer in static HTML: ${question}`);
  assert.ok(!/[\u2014]/.test(question + answer), 'no em dashes in FAQ');
}
assert.ok(faqSection.includes('Scanning is optional'), 'tracking QR is optional');
assert.ok(faqSection.includes('both after payment'), 'cash tracking follows payment');
assert.ok(faqSection.includes('not included automatically in every package'), 'automated inventory is quotation-dependent');
assert.ok(!faqSection.includes('Browse → Select → Adjust → Review → Confirm'), 'FAQ no longer stops at ordering microsteps');
assert.ok([...notFound.matchAll(/\bez\s+kyosk\b/gi)].every(match => match[0] === 'Ez Kyosk'), '404: canonical brand spelling');
console.log('Passed: 9 content/compatibility documents plus custom 404, internal links/anchors/assets, metadata, indexing controls, sitemap, configured-site schema, Home content and migration contracts.');
