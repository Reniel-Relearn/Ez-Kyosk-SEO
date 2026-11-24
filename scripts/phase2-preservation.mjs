import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {normalizeNativeProductHtml} from './product-native-preservation.mjs';
import {normalizeMinimalBenefitsHtml} from './benefits-preservation.mjs';
import {normalizeHeroHardwareHtml} from './hero-hardware-preservation.mjs';
const hash=value=>createHash('sha256').update(value).digest('hex');
export async function collectPhase2Preservation(){
  // Explicit 21 November card-specific approvals: normalize only ordering v4, queue v3,
  // inventory v2, reports v3, cashier v4 and exact descriptive alts for the original golden comparison.
  // Original artwork bytes and all other markup/assets remain protected; new
  // derivatives are checked by the verifier and platform/browser regression.
  const home=normalizeHeroHardwareHtml(normalizeNativeProductHtml(normalizeMinimalBenefitsHtml(await readFile('dist/index.html','utf8'))))
    // Owner-approved Card 1 framing wrapper only; keep image attributes/assets and all copy protected.
    .replace(/<div class="platform-image-frame">\s*(<img\b[^>]*>)\s*<\/div>/g,'$1')
    // 24 November: only Hospitality v3 hardware artwork changes; preserve
    // the original responsive files and all other Industries markup/copy.
    .replaceAll('industry-hospitality-v3-', 'industry-hospitality-v2-')
    // Approved Services screen-only revision: four rows, no embedded brand.
    .replaceAll('industry-services-v7-', 'industry-services-v6-')
    .replace('AI-generated illustration of a service adviser holding a portrait tablet with an unbranded four-service interface including Custom Setup for a business client', 'AI-generated illustration of a service adviser holding a portrait tablet with a sample Ez Kyosk services dashboard for a business client')
    // Approved Wellness logo removal: exact artwork and descriptive alt only.
    .replaceAll('industry-wellness-v2-', 'industry-wellness-v1-')
    .replace('AI-generated illustration of a salon client and adviser discussing a styling leaflet beside an unbranded staff-facing POS', 'AI-generated illustration of a salon client and adviser discussing a styling leaflet beside a staff-facing POS with an Ez Kyosk logo')
    // Approved Retail logo removal: exact new artwork/alt only; original
    // artwork stays byte-protected by the unchanged golden baseline.
    .replaceAll('industry-retail-v3-', 'industry-retail-v1-')
    .replace('AI-generated illustration of a shopper and shop associate discussing a boxed accessory beside an unbranded staff-facing POS', 'AI-generated illustration of a shopper and shop associate discussing a boxed accessory beside a staff-facing POS with an Ez Kyosk logo')
    // H1 approves only this online artwork/alt substitution, not surrounding copy.
    .replace('/Ez-Kyosk-SEO/assets/images/payment-online-v4-1371.webp', '/Ez-Kyosk-SEO/_astro/Hand Holding AltPayNet Payment Phone and Cards.D2n-BHG1.png')
    .replace('Illustrative hand holding an AltPayNet QR payment phone with Visa and Mastercard cards', 'Owner-supplied illustration of a hand holding an AltPayNet payment phone with QR, GCash, Maya, and card options')
    // Owner-approved terminal-only artwork: normalize this exact substitution,
    // retaining the golden checks for original artwork bytes and the online card.
    .replaceAll('payment-terminal-v2-', 'payment-terminal-v1-')
    .replace('Illustrative standalone card payment terminal displaying 300 pesos and Tap card', 'Illustrative Ez Kyosk countertop kiosk beside a payment terminal, showing a matching sample order total of 300 pesos')
    .replaceAll('product-self-ordering-v2-', 'product-self-ordering-v1-')
    .replaceAll('product-pos-checkout-v2-', 'product-pos-checkout-v1-')
    .replaceAll('product-inventory-v2-', 'product-inventory-v1-')
    .replace('Illustrative Ez Kyosk inventory concept on an unbranded tablet showing a five-row sample stock spreadsheet', 'Illustrative Ez Kyosk inventory tablet beside stock containers and an enlarged sample item availability table')
    .replace('Illustrative Ez Kyosk checkout concept on an unbranded slim touchscreen with a sample three-item order', 'Illustrative Ez Kyosk staff checkout workstation with an order queue, receipt printer, and matching generic checkout detail')
    .replace('Illustrative Ez Kyosk dark portrait kiosk close-up with a café menu and an attached payment terminal', 'Illustrative Ez Kyosk portrait kiosk menu with generic café items and an enlarged matching order review')
    // Approved 24 November camera-free/plain slim stand v5; retain all original golden hashes.
    .replaceAll('platform-self-ordering-human-v5-', 'platform-self-ordering-human-v4-')
    .replaceAll('platform-self-ordering-human-v4-', 'platform-self-ordering-human-v3-')
    .replaceAll('platform-order-queue-ceiling-v3-', 'platform-order-queue-ceiling-v2-')
    .replaceAll('platform-inventory-human-v2-', 'platform-inventory-human-v1-')
    .replaceAll('platform-reports-weekly-v3-', 'platform-reports-weekly-v1-')
    .replaceAll('platform-cashier-human-v4-', 'platform-cashier-human-v2-')
    .replace('AI-generated illustration of a manager reviewing an illustrative analytics dashboard on a laptop in a café', 'AI-generated illustration of a manager reviewing a sample weekly order-trend chart on an Ez Kyosk laptop')
    .replace('AI-generated illustration of a team member checking a sample inventory spreadsheet on a tablet beside café stock containers', 'AI-generated illustration of a team member checking a sample inventory list on an Ez Kyosk tablet beside café stock containers');
  const sections={};
  for(const name of ['home-hero','benefits-section','platform-section','faq-section']){
    const html=home.match(new RegExp(`<section class="${name}[^>]*>[\\s\\S]*?<\\/section>`))?.[0];
    assert.ok(html,`${name} present`);
    // Phase 4 explicitly approves only this h2 replacement. Keep the original
    // golden hash protecting every other byte of platform copy/markup/artwork.
    let normalized=name==='platform-section'
      ? html.replace('<h2 id="platform-title">Powerful features. Stronger together.</h2>','<h2 id="platform-title">From the first tap to the next task.</h2>')
      : html;
    // Phase 9 permits only moving this unchanged Contact action below the list.
    // Restore its original position for the existing golden comparison.
    if(name==='faq-section'){
      const action=normalized.match(/<div class="faq-actions">(<a class="text-link"[^>]*>Ask a different question[\s\S]*?<\/a>)<\/div>/);
      if(action) normalized=normalized.replace(action[0],'').replace(
        'compatibility, and pricing.</p></div>',
        `compatibility, and pricing.</p>${action[1]}</div>`);
    }
    sections[name]=hash(normalized.replace(/ id="home"| data-section-target(?:="true")?/g,''));
  }
  const artwork=[...home.matchAll(/<img\b[^>]*>/g)].map(match=>match[0]);
  const sources=new Set(artwork.flatMap(html=>[...html.matchAll(/\/Ez-Kyosk-SEO\/([^"'\s,]+\.(?:webp|png|svg|jpg))/g)].map(m=>`dist/${decodeURIComponent(m[1])}`)));
  for(const source of ['assets/hero-kiosk-transparent-v3.webp','assets/ez-kyosk-lockup.png','assets/Hand Holding AltPayNet Payment Phone and Cards.png','src/styles/global.css','src/styles/home-hero.css']) sources.add(source);
  const assets=[];
  for(const file of [...sources].sort()){
    // Retired Hero derivatives are no longer emitted by Astro. Keep their exact
    // pre-revision bytes archived and checked against the unchanged golden hash.
    const oldHero=file.match(/^dist\/_astro\/(hero-kiosk-transparent-v3\.BE9si6ci_(?:Z157wo7|Z2lKoEI|Z25QlHy)\.webp)$/);
    assets.push([file,hash(await readFile(oldHero?`assets/archive/${oldHero[1]}`:file))]);
  }
  // The owner-approved section swap changes reading order, not image markup or pixels.
  return {baseline:'e6495cda963b6b2371eda2186fc7aafb25fa3a8e',sections,imageMarkup:hash(JSON.stringify(artwork.sort())),assets:hash(JSON.stringify(assets)),assetCount:assets.length};
}
export async function assertPhase2Preservation(){
  const baseline=JSON.parse(await readFile(new URL('./fixtures/home-phase2-preservation.json',import.meta.url),'utf8'));
  assert.deepEqual(await collectPhase2Preservation(),baseline,'protected sections preserved except explicit Phase 4 h2, Phase 9 FAQ relocation and approved ordering/queue/inventory/reports/cashier image substitutions; original assets and all other Home images/styles preserved');
  const currentHome=await readFile('dist/index.html','utf8');
  const approvedQueueRevision=currentHome.includes('platform-order-queue-ceiling-v3-');
  const approvedInventoryRevision=currentHome.includes('platform-inventory-human-v2-');
  const approvedReportsRevision=currentHome.includes('platform-reports-weekly-v3-');
  const approvedCashierRevision=currentHome.includes('platform-cashier-human-v4-');
  const approvedOrderingRevision=currentHome.includes('platform-self-ordering-human-v5-');
  const approvedProductOrderingRevision=currentHome.includes('product-self-ordering-v2-');
  const approvedProductCheckoutRevision=currentHome.includes('product-pos-checkout-v2-');
  const approvedProductInventoryRevision=currentHome.includes('product-inventory-v2-');
  const approvedNativeSelfOrdering=currentHome.includes('data-native-product="self-ordering"');
  return {comparedSections:4,approvedPlatformHeadingNormalization:true,allHomeImagesUnchanged:!approvedNativeSelfOrdering&&!approvedOrderingRevision&&!approvedQueueRevision&&!approvedInventoryRevision&&!approvedReportsRevision&&!approvedCashierRevision&&!approvedProductOrderingRevision&&!approvedProductCheckoutRevision&&!approvedProductInventoryRevision,allOtherHomeImagesUnchanged:true,approvedNativeSelfOrdering,approvedProductInventoryRevision:approvedProductInventoryRevision?'v2 unbranded single-device five-row inventory':null,approvedProductCheckoutRevision:approvedProductCheckoutRevision?'v2 unbranded single-device sample checkout':null,approvedProductOrderingRevision:approvedProductOrderingRevision?'v2 kiosk detail with logos/terminal, no duplicate order panel':null,approvedOrderingRevision:approvedOrderingRevision?'v5 camera-free slim unbranded stand; retained screen UI/terminal':null,approvedQueueRevision:approvedQueueRevision?'v3 logo removal and upward reflow':null,approvedInventoryRevision:approvedInventoryRevision?'v2 logo-free five-row spreadsheet':null,approvedReportsRevision:approvedReportsRevision?'v3 reference-layout analytics dashboard':null,approvedCashierRevision:approvedCashierRevision?'v4 slim staff-facing device, Card 3 hardware reference':null,protectedAssets:baseline.assetCount};
}
if(process.argv.includes('--baseline')) console.log(JSON.stringify(await collectPhase2Preservation(),null,2));
