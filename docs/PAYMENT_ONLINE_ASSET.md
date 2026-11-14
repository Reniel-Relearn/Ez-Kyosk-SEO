# Online payments: exact owner-supplied PNG

Date: 14 November 2026. Owner requested the first attached image as layout reference and the second image, at the explicit local path, as the EXACT artwork for this card.

## Placement and scope

Home AND Product > Payments with AltPayNet > Flexible ways to complete an order. > Online payments > QR and e-wallet checkout.

Replace only the second CSS phone/QR placeholder with the supplied PNG. Preserve the first payment image and its centered spacing, both card headings/descriptions/links, other images, hero and page order. Desktop copy remains left, art right; existing responsive stacking remains. The phone/hand/cards are centered in a clear frame with equal 32px top/bottom padding and contained at their original aspect ratio.

Retained description: **Let customers use supported QR, GCash, Maya, card, and e-wallet payment paths from a mobile device.** Retained link: **Discuss online payments**. The screenshot's alternate headline/body/CTA is not copied into the HTML.

## Exact asset and provenance

- Source: `assets/Hand Holding AltPayNet Payment Phone and Cards.png`.
- Dimensions: 1371 x 1148; transparent PNG; 1,558,315 bytes.
- SHA-256: `6e5c2d1de4e3d0eef00417515d4fa18234a23e68ccd713793d836c01e528124d`.
- Direct Astro metadata import, rendered with an ordinary img, NOT an image transformation component. Build emits the original PNG under its base-safe hashed `_astro/` URL.
- No ImageGen, new prompt, regeneration, rebranding, recoloring, cropping, rotation, filter, raster resizing or re-encoding. CSS display scaling only. Source and built bytes must match the hash above.
- Original embedded logo/provider marks, green/cyan accents, QR and card imagery are retained because the owner explicitly requested this exact composition. This artwork-specific exception does not replace the website master logo elsewhere.
- The artwork is owner-supplied illustration, not a verified application capture, actual payment, proof of a provider relationship or guaranteed functional payment QR. The embedded QR destination is not validated or visited; no transaction or payment link is added to the website.
- Preserve supplied PNG despite its larger transfer size; lazy loading and async decoding defer loading. No lossy derivatives are substituted because exact-file fidelity is explicitly required.
- Unrelated owner PNG `assets/AltPayNet Mobile Payment Essentials.png` and PDF/DOCX references remain untouched and outside this change.

## Verification

Build/static verification passed, including a pinned source hash and byte-identical built PNG on both routes, original dimensions, retained copy/links and unchanged first image family/transparency.

Targeted browser checks passed 64 image/responsive/theme checks across both payment images on Home/Product, six widths and high-density phone/desktop variants, plus 8 payment-section accessibility scans with zero violations/errors. Both images preserve natural ratios, fit without cropping/overflow, use no filter/rotation/opacity change, and remain centered with top/bottom breathing room. The second image loads as PNG, not a generated substitute. Phone/desktop light/dark screenshots and the whole payment section were visually reviewed.

Full-site regression passed 48 responsive route checks and 32 accessibility scans with no violations, browser errors or failed requests. Navigation, themes, existing product tabs/disclosures/FAQs and mocked form flows passed. No real inquiry was sent. Reports: ignored `artifacts/payment-images-report.json` and `artifacts/qa-report.json`; screenshot families include `artifacts/payment-images-{home,product}-online-{390,1440}-{light,dark}.png`.

## Exact next card: Hospitality & food (proposal only)

- Location: Home > Designed to adapt > Different operations. One clearer experience. > first industry card, **Hospitality & food**.
- Preserve title and description: **Cafés, bakeries, restaurants, and quick-service teams can create a clearer ordering path.** Preserve **Explore this industry** link to Solutions hospitality section.
- Proposed visual: photorealistic wide establishing view of a clean contemporary café/bakery counter. Our portrait kiosk is identifiable in the foreground; a pastry display and coffee equipment establish the environment behind it. No isolated payment-device close-up, phone/cards, enlarged UI panel or dashboard.
- Materials/light: neutral stone and natural wood, soft daylight, charcoal/silver kiosk and restrained blue/cyan brand details. Keep important subjects in a central crop-safe area. No identifiable real business/venue, personal records, payment success, customer testimonial or implied real client deployment.
- Plan a 3:2 master with a narrower responsive Home-card crop; retain all text as HTML and keep it readable in both themes. Final crop/frame is to be reviewed before integration.
- Scope after authorization: only first Home industry visual. Reuse on the separate Solutions page remains pending, not automatic.
- NOT generated or integrated in this iteration. Continue one card at a time; every completion report gives exact next-card details.

## Modified files

Supplied source PNG added to repository unchanged; PaymentShowcase second artwork import/markup; two scoped online-image CSS rules; static/full-site/targeted QA updates; this asset record and current visual/project/iteration/brand/prompt-status documentation. Terminal handoff marked historical. No other source image, first-card CSS, website copy or application logic changes.
