# Journey cards 2-4: kiosk geometry, separation and payment revision

Date: 16 November 2026. Owner approved the exact correction plan: use FIRST owner-selected kiosk for hardware/camera, correct cards2/3/4, improve localized casing/background separation, add optional Cash at Cashier alongside Card/E-Wallet, keep first/fifth/sixth cards unchanged. Direct local integration authorized; no push/deployment.

## Active result

| Card | Active stem | Change |
| --- | --- | --- |
| 1 Start & Select | journey-start-select-v3 | Unchanged, sole hardware/camera edit reference. |
| 2 Review & Edit Order | journey-review-edit-v5 | Angled kiosk restored, clear screen-projected controls/text, croissant2/subtotal240/total400. |
| 3 Choose How to Pay | journey-payment-v2 | Same hardware perspective, THREE choices Card/E-Wallet/Cash at Cashier, one cardtap, total400. |
| 4 Scan Your Tracking QR | journey-scan-qr-v2 | Same hardware perspective, Order104/QR/phone scan, no payment QR. |
| 5 Track Your Queue Status | journey-track-queue-v1 | Unchanged. |
| 6 Collect Your Order | journey-collect-v1 | Unchanged. |

Third HTML heading changed from Pay by Card or E-Wallet to Choose How to Pay, body to "Pay by card or e-wallet, or choose cash payment at the cashier." Alt includes all three choices. Cash remains a third option, not a new illustrated branch; no cash inserted into kiosk and no assumption about cashier/QR timing.

## Method and visual review

Built-in ImageGen edit mode only, ONE edit per revised card. Each used public/assets/images/journey-start-select-v3-1280.webp DIRECTLY as sole edit target/geometry reference, not a prior incorrectly straightened card. Source target viewed first. Prior versions and original PNGs retained; no manual compositing/HTML/SVG substitution.

Reference geometry anchors: original slightly three-quarter/diagonal device, top screen edge slopes gently down toward right, lower edge rises toward right, long sides lean right toward bottom, visible silver LEFT side thickness/charcoal bezel and connected RIGHT terminal/mount. Screen content must project inside this plane. These are qualitative 2D visual anchors, not a reconstructed camera calibration, measured real-world angle or promise of pixel-identical geometry.

Material separation: warm matte cafe backdrop distinguished from silver hardware, restrained metal-edge highlights, charcoal bezel and attached bracket readable. Natural window lighting preserved, no artificial glowing outline, saturation filter or hard cutout halo. Background depth is a supporting cue, not a brand-palette change or physical scene-intersection diagnosis.

- Card2: Original angled bezel/silver left-side depth and terminal position restored, warm non-metallic background with separate edge highlights; cart labels/control columns legible, 1x160+2x120=400. Both lower buttons follow angled glass, no line collision or amount occlusion. Natural hand on croissant plus.

- Card3: Angled screen/bezel/side casing based directly on first image, distinct silver hardware vs matte cafe; three equallyspaced contained choices Card/E-Wallet/Cash at Cashier; sample400 on kiosk and terminal; card atNFC area, no cash action/newroute. Labels do not overlap.

- Card4: Reference-angled kiosk restored with distinct silver side/black bezel/warm matte background. Order104/scaninstruction and main QR fully contained; phone foreground separated from terminal and not obscuring maincode. Phonefrontcamera view correct, no payment action. Terminal idle logo display rather than requested dark display; acceptable passive state, no new payment prompt. QR illustrative, not functional.

Full generated outputs and integrated card-size captures inspected. Labels/controls do not visibly collide; important totals/quantity/QR instructions unobstructed. Phone/terminal occlusion uses normal foreground depth, no obvious physical merging or disconnected extra hands observed. First/fifth/sixth assets protected. Text embedded in images is reviewed visually; browser accessibility/DOM checks cannot inspect raster text or prove correct real-world3D geometry. All scenes/UI/QR remain illustrative, not actual software captures/live transaction proof or functional QR destination tests.

## Saved responsive assets

All under public/assets/images, opaque4:3, source1448x1086, prepare-industry-image.mjs quality88 resize/encode only, no crop/upscale/manual artwork edits:

| Stem | 320x240 bytes | 640x480 bytes | 1280x960 bytes |
| --- | ---: | ---: | ---: |
| journey-review-edit-v5 | 21308 | 56028 | 136552 |
| journey-payment-v2 | 20368 | 53142 | 125934 |
| journey-scan-qr-v2 | 22046 | 57158 | 137976 |

Active mapping: src/data/journeyImages.mjs. Caption/body: src/data/product.ts. Expected title/body updated in scripts/verify-build.mjs and scripts/qa-customer-journey.mjs. Home grid/layout/card1/card5/card6/hero/prior sections/nav unchanged. No guide/FAQ/schema rewrite, deployment or indexing change.

## QA

- Each revised integration built and passed static verification, including full18 active asset dimensions/source-built hashes, base paths/links/metadata/indexing controls.
- After card2/cart:24 journey viewport/theme/density combinations,144card checks,6 section accessibility scans, zero errors, no-JS guide works at390/1024/1440.
- After card3/payment: same24/144/6 checks passed, new title/body and imagealt/three-choice reference verified, zero errors.
- Final card4/whole section: same24/144/6 checks passed, six images loaded/zero placeholders, matching order/captions, correct responsive source/alt/full4:3contain, aligned row headings/image/card bottoms, no horizontal/text/card overflow, no-JS guide link, zero browser/HTTP errors.
- SHA256 compared to BEFORE-task baseline: all NINE responsive files for cards1/5/6 unchanged, active mappings unchanged.
- Full-site regression PASSED:48 route/viewport checks,32 light/dark accessibility scans with zero violations, no browser errors/failed requests. Keyboard menu/Escape/focus return/FAQ/product tabs/theme toggle passed. Preview form posted zero real inquiries; managed-form success/failure mocked and passed.
- Final integrated desktop-light/tablet-dark/phone-light captures visually reviewed side by side, including unchanged first reference and all six cards. No cropped photograph frames, caption collisions or hardware perspective reversions observed. Small embedded UI text naturally reduces at thumbnail size; HTML captions remain readable.
- git diff --check and JavaScript syntax checks passed. Local preview returnsHTTP200 with six images/zero placeholders and current three-option payment caption. No push/deployment.

Ignored reports/captures: artifacts/journey-geometry-cart-v5-*, journey-geometry-payment-v2-*, journey-geometry-final-*; full-site artifacts/qa-report.json. Prior completion records are historical where they list cartv4/paymentv1/scanv1 or old payment caption.

## Exact built-in prompts and original outputs

### Card2, version5

Output source: local generated master: exec-6dbda4f9-a41e-4c82-8ce6-a7c7fefaef7c.png

```text
Use case: precise-object-edit. Image1 is EDIT TARGET: owner-selected first journey photograph. Produce SECOND card by changing ONLY its screen to cart review, related right-hand pointing position and subtle local background/light separation. Keep SAME woman/profile/hair/creamblouse/goldhoop, cafe/daylight/close crop, and especially ORIGINAL angled kiosk. ONE opaque LANDSCAPE4:3 at least1440px wide.
HARDWARE/CAMERA LOCK: This is an EDIT of Image1, not a new front-on product shot. KEEP Image1's original slightly three-quarter/diagonal kiosk pose and projected screen quadrilateral: upper edge slopes slightly down toward right; bottom edge rises toward right; BOTH long side edges lean right towards bottom. Keep original visible silver LEFT side thickness, rounded charcoal bezel, height/width, original crop and attached RIGHT terminal position/mount. Do NOT square the screen into an upright rectangle, straighten verticals or rotate the whole kiosk towards camera. Keep relative head/device/terminal scale. Every screen element must be perspectively projected INSIDE this existing angled glass, like a printed layout on that exact plane, NOT world-horizontal text pasted over it.
DEPTH/SEPARATION: Keep dark charcoal bezel and distinct softly highlighted silver side panel. Background stays warm matte cafe plaster/window/wood, not metallic gray matching side panel. Subtle natural window edge light and separate physically attached terminal bracket, believable soft contact shading only at hardware joints. Avoid merged window mullion/casing outlines or dark featureless blobs behind terminal. No brightglow/thickoutline/hard cutout halo/heavyblur or arbitrary shadow cast onto distantwall. Natural material/brightness contrast should show depth without recoloring website/brand.
Screen: retain black Ez Kyosk header/logo directly on black, no whiteplate. Replace menu/banner/categories with SIMPLE cream cart UI in existing ANGLED screen. Heading "Your Order". Two tidy separated rows with small respective latte and croissant photos, no overlappingtext:
Caffe Latte / "PHP 160 each", quantity controls minus [1] plus, separate right-column "PHP 160".
Butter Croissant / "PHP 120 each", quantity minus [2] plus, separate right-column "PHP 240".
Clear separated total row below "Total" / "PHP 400". Gold "Proceed to Payment" and outlined "Back to Menu" lower buttons, equal shared widths/margins, centered labels, contained inside glass. Layout grid/labels/buttons all follow same screen perspective; maintain generous padding and gap. Original bezel/angles remain untouched. No arbitrary new screen orientation to improve text.
RIGHT index lightly touches edge of Butter Croissant PLUS, quantity2 already showing after singleincrement. Comfortable wrist connected to arm, other fingers naturally curled, no extra/fused digits. Position hand approach so subtotalPHP240 and totalPHP400 are not obscured; far otherhand outsidecropnaturally. Preserve identity/gaze screen. Attached terminal unused, no card/phone/payment action/QR/queue/receipt.
Premium natural realistic editorial photo, true skin/hair/cotton/metaltextures and neutralwindowlight. Preserve original silhouette exactly as much as image edit allows. Most important: same angled physical kiosk as Image1, legible perspectively aligned UI and differentiated background, NOT previous straight-on device.
```

### Card3, version2

Output source: local generated master: exec-9c89c5b8-7c8c-4f92-9cfc-c189fc74d28b.png

```text
Use case: precise-object-edit. Image1 is BASE EDIT TARGET: first owner-selected journey photo. Preserve its SAME woman/profile/dark ponytail/creamblouse/goldhoop/cafe/crop/lighting and especially original ANGLED kiosk. Change screen into payment method choice and right hand into cardtap. ONE opaque LANDSCAPE4:3 photograph at least1440px wide.
HARDWARE/CAMERA LOCK: This is an EDIT of Image1, not a new front-on product shot. KEEP Image1's original slightly three-quarter/diagonal kiosk pose and projected screen quadrilateral: upper edge slopes slightly down toward right; bottom edge rises toward right; BOTH long side edges lean right towards bottom. Keep original visible silver LEFT side thickness, rounded charcoal bezel, height/width, original crop and attached RIGHT terminal position/mount. Do NOT square the screen into an upright rectangle, straighten verticals or rotate the whole kiosk towards camera. Keep relative head/device/terminal scale. Every screen element must be perspectively projected INSIDE this existing angled glass, like a printed layout on that exact plane, NOT world-horizontal text pasted over it.
DEPTH/SEPARATION: Keep dark charcoal bezel and distinct softly highlighted silver side panel. Background stays warm matte cafe plaster/window/wood, not metallic gray matching side panel. Subtle natural window edge light and separate physically attached terminal bracket, believable soft contact shading only at hardware joints. Avoid merged window mullion/casing outlines or dark featureless blobs behind terminal. No brightglow/thickoutline/hard cutout halo/heavyblur or arbitrary shadow cast onto distantwall. Natural material/brightness contrast should show depth without recoloring website/brand.
Main screen preserve black Ez Kyosk logoheader and exact original screen quadrilateral. Creambody clean aligned UI on this angled plane, no cart/menugrid:
Heading "Choose payment".
Separate compact row "Total" LEFT / "PHP 400" RIGHT.
THREE LARGE equallywide contained buttons vertically stacked, consistent gaps/margins/height:
1. "Card" highlighted gold to indicate current selected method.
2. "E-Wallet" neutral outlined.
3. "Cash at Cashier" neutral outlined.
Below choices plain "Tap card on terminal" with enough bottom padding.
All labels inside buttons, fitting on one line; no overlaps, no button beyondbezel; baselines/gold/outlined button edges track SAME angled glass perspective, not upright orthographic rectangle. Cash is an optional alternative only, no new workflow/insertcashslot/cashhand. Retain PHP400, no fees.
Right hand holds ONE anonymous darkblue bankcard near attached terminal's TOP NFC symbol, natural thumb/fingerssecuregrip/card orientation. No readable bank/PAN/customerdata. Terminal remains SAMEposition/scale/bracket as ORIGINAL firstphoto, smalldisplay "PHP 400" / "Tap card". No payment approved/success state. No screenpointinghand also, no second hand/phone/cash, no duplicates. Keep plausible arm/wrist and gaze at terminal, generic carddoesnot obscurewholeterminal.
Same close perspective, charcoal bezel/silver leftdepth distinct from mattewarmwall/windowbackground; soft trueedgereflections, natural contactshadow onhardware mount, no colorblobs/stucktogether wall. Do NOT straighten kiosk to accommodate threebuttons, don't zoomout or change device/cafe.
Natural candid photorealism hair/skin/cotton/metal, noglow/callouts/watermark/extrapeople/QR/orderqueue/receipt/foodcollection. Illustrative payment UI, no realtransactionclaim.
```

### Card4, version2

Output source: local generated master: exec-6a0cfa75-b469-4043-add7-e3bba085cdad.png

```text
Use case: precise-object-edit. Image1 is BASE EDIT TARGET, original FIRST journey photo. Make stage4 Scan Your Tracking QR, not a new front-on kiosk. Keep SAME customeridentity/profile/darkwavyponytail/darktie/softbangs/temple-nape strands/cream blouse/goldhoop, original close crop/cafe/daylight and original ANGLED kiosk. ONE opaque LANDSCAPE4:3 photo at least1440px wide.
HARDWARE/CAMERA LOCK: This is an EDIT of Image1, not a new front-on product shot. KEEP Image1's original slightly three-quarter/diagonal kiosk pose and projected screen quadrilateral: upper edge slopes slightly down toward right; bottom edge rises toward right; BOTH long side edges lean right towards bottom. Keep original visible silver LEFT side thickness, rounded charcoal bezel, height/width, original crop and attached RIGHT terminal position/mount. Do NOT square the screen into an upright rectangle, straighten verticals or rotate the whole kiosk towards camera. Keep relative head/device/terminal scale. Every screen element must be perspectively projected INSIDE this existing angled glass, like a printed layout on that exact plane, NOT world-horizontal text pasted over it.
DEPTH/SEPARATION: Keep dark charcoal bezel and distinct softly highlighted silver side panel. Background stays warm matte cafe plaster/window/wood, not metallic gray matching side panel. Subtle natural window edge light and separate physically attached terminal bracket, believable soft contact shading only at hardware joints. Avoid merged window mullion/casing outlines or dark featureless blobs behind terminal. No brightglow/thickoutline/hard cutout halo/heavyblur or arbitrary shadow cast onto distantwall. Natural material/brightness contrast should show depth without recoloring website/brand.
Retain black Ez Kyosk header on exact same projected physical glass. Replace menu with SIMPLE cream tracking panel, typography/QR panel mapped onto existing ANGLED screen:
large "Track your order", separate "Order 104", generous BLACK/WHITE illustrative square QR on WHITE square withquietzone, then "Scan with your phone" lower. All elements insideglass with margins, no labels outside bezel/overlap, QR plane follows same perspective as device. Use only few big labels, no payment/options/amounts/cart/menu banner. Terminal remains same scale/position/bracket, idle neutraldark display, no secondQR.
Change right hand from touching menu to holding ONE BLACK portraitsmartphone aimed at QR, secure natural edgegrip/thumb/fingers, connected wrist/arm. Smartphone FRONTscreen facescustomer/viewer behind her, REARcamera faceskiosk, no camera facingwrongway. Camera viewfinder shows smaller preview of same Order104trackingpanel withQR framedbycornermarks, not paymentapp or statuspage. Phone must NOT cover main QR/Order104/scaninstruction; place near screenRIGHT with realisticdepth separation from terminal, no phonebody fusedintoterminal or fingers throughdevice.
QR is illustrative artwork, no realpaymentURL/private data or promise of function. No scan-to-pay. Stage depicts scanningtracking after checkout only.
Casing remains darkcharcoal withsilver leftsidehardware clearly differentiated from WARM MATTE cafe plaster/windowbehind, soft realisticmetalhighlight and connectedterminalmount/no mergedshadowblob. Keep original reference perspective, DO NOT squareup/straightendevice to make QRfrontal. Lighting fromsamewindow, realhair/skin/cotton/metaltextures, no brightoutline/glow/colorfilter/heavyblurs.
No card/cash/receipt/extra hand/extra people/queueboard/collectedfood/watermark/overlays. Match first hardware silhouette not previous straight-on image.
```

## Next actions

Owner reviews three corrected cards side by side with unchanged first card in local Home #how-it-works. Make only requested refinements. Do not automatically publish or redesign next section. FAQ remains next physical section; publication requires new instruction.
