# How Ez Kyosk works: six-card local completion

CURRENT REVISION: owner approved restoring card1 hardware orientation in cards2-4, clearer casing/background separation, and three payment choices. Active cartv5/paymentv2/scanv2; third caption now Choose How to Pay. [New prompts, assets, visual comparison and QA](JOURNEY_GEOMETRY_PAYMENT_REVISION.md). Cards1/5/6 unchanged. Earlier versions/caption below are historical.

Date: 16 November 2026. Scope: Home #how-it-works, after Designed to adapt and before FAQ. Owner explicitly authorized finishing and QA-checking ALL six cards sequentially, including direct local integration after checks. This supersedes earlier one-preview/awaiting-approval notes for this section. No commit, push, deployment or production indexing change.

## Final state

Six image-led cards, zero reserved image areas, ordered semantic list, visible captions without JavaScript, desktop3/tablet2/phone1 columns. First owner-selected close-up preserved unchanged. Only later image slots populated; original hero, prior sections, page navigation and detailed guide/FAQ/schema retained. The guide's old ordering microsteps are not rewritten in this image-section scope.

| Card | Active image stem | Story / visual QA |
| --- | --- | --- |
| 1. Start & Select | journey-start-select-v3 | Owner-selected exact tight menu-selection composition retained; screen and terminal visible, no additional crop. |
| 2. Review & Edit Order | journey-review-edit-v4 | Visual inspection: two separated rows, shared quantity columns, flat screen-aligned contained buttons, no text collisions; quantity 2, PHP240 subtotal, PHP400 total readable. Right index on croissant plus; first selected photo preserved. |
| 3. Pay by Card or E-Wallet | journey-payment-v1 | Visual: aligned contained payment options and Total PHP400, terminal matchesPHP400, one generic anonymous card at NFC area with plausible hand, no QR/success/duplicate actions. Card and E-Wallet readable. |
| 4. Scan Your Tracking QR | journey-scan-qr-v1 | Visual: Track your order/Order104/Scan with your phone contained aligned, phone camera facing kiosk and front viewfinder visible, grip plausible, main QR not obscured; no payment UI. Generated QR is illustrative, no functional scan/URL validation claimed. |
| 5. Track Your Queue Status | journey-track-queue-v1 | Visual: Order104 Preparing phone, matching board Preparing104105/Ready101102, no status contradiction, readable contained phone labels/board columns, natural edge grip and face/profile, distinct from scan image. |
| 6. Collect Your Order | journey-collect-v1 | Visual: tray supported by counter, one cup/two croissants, two connected hands at opposite tray edges, no overlapping body/counter errors observed; order104 now Ready for Pickup, Preparing105106. Cafe/customer continuity and Pickup label clear. |

## Screen correction and story consistency

Card2 v4 replaces the problematic v3 preview. Simplified cream cart into separate rows with equal quantity-control columns and generous vertical spacing. Front-facing display and equal-width contained buttons share screen plane; no overlapping labels detected in manual review. RIGHT index on Butter Croissant plus, quantity2, unitPHP120/subtotal240; latte1x160; total400. Amount remains400 in card3. Order104 starts after checkout, is Preparing in card5 on BOTH phone and public queue, then Ready for Pickup in card6. Final tray contains one coffee and two croissants, consistent with cart. Card3 depicts one card tap, while E-Wallet remains a visible alternative, not simultaneous payment methods.

Exact-match/pixel-perfect identity/logo preservation is not guaranteed by generated imagery. These are fictional original illustrative scenes, not client testimonials, actual software captures or validated live transactions. QR in card4 is illustrative; functional scanning, URL destination, payment processing and backend order status were NOT tested or claimed. Original source images/previous variants preserved. No public claim of real transaction verification was added.

## Assets and optimization

Every active stem above has 320x240,640x480,1280x960 WebP copies under public/assets/images. At source generation 1448x1086 opaque4:3, same ratio. Existing prepare-industry-image.mjs quality88 resize/encoding only, no upscaling, crop or manual HTML/SVG artwork substitute. All generated output copied into project as responsive deliverables, source PNGs preserved outside repo in generated_images.

Active mapping/illustrative alt: src/data/journeyImages.mjs. Home uses mapping. JourneyCard lazy-loads responsive sources, reserves640x480 geometry and uses object-fit:contain. No false interactive HTML buttons over photographs. Controls inside artwork are image content only.

## QA, completed

Manual: generated full outputs inspected for text/controls/geometry, hands, continuity, food count, arithmetic and order-state agreement; cart integrated close screenshot inspected before proceeding. All final cards inspected in desktop-light, tablet-dark and phone-light section captures, plus individual card captures. Small in-image microtext naturally loses readability at thumbnail; accessible HTML captions carry the actual six-step content. Browser accessibility checks cannot inspect raster text and do not replace the manual review.

Sequential integration: cards2,3,4,5 each followed by production build/static verification and24 browser viewport/theme/density combinations,144 card checks,6 section accessibility scans, zero errors, plus no-JavaScript guide navigation at390/1024/1440. Final card6 followed by the same complete journey suite. Current default tests require six images and zero placeholders.

Final production build/static checks PASSED (BASE_PATH=/Ez-Kyosk-SEO), including all18 active source dimensions, source/built hashes, internal assets/links/anchors, metadata, indexing controls and schema configuration.

Final journey suite PASSED:24 combinations across widths320/390/720/721/768/1024/1180/1181/1440/1920 and density1/2,144card checks,6 accessibility scans, all six images decoded/correct srcset/alt/contain; exact six titles/bodies/order; no horizontal overflow, no text/card overflow, matching row headings/image-bottoms/card-bottoms, all cards contained vertically by grid; no-JS link works at390/1024/1440; zero page/HTTP errors.

Full-site regression PASSED:48 route/viewport checks,32 light/dark accessibility scans with no violations, no browser errors or failed requests, keyboard menu/Escape/focus return/FAQ/product tabs/theme toggle passed. Preview form makes zero real submissions; managed form success/failure mocked and passed. git diff --check passed.

Ignored reports/captures:
- artifacts/journey-step2-cart-qa-* (second integration)
- artifacts/journey-step3-payment-qa-*
- artifacts/journey-step4-scan-qa-*
- artifacts/journey-step5-track-qa-*
- artifacts/journey-six-complete-* (final six-card suite)
- artifacts/qa-report.json and home-{light,dark}-{390,1440}.png (full-site)

Reproduce final checks:
```powershell
$env:BASE_PATH='/Ez-Kyosk-SEO'
npm.cmd run build
npm.cmd run verify
# With dist served at the existing base on127.0.0.1:4323:
$env:QA_SCREENSHOT_PREFIX='journey-six-complete'
node scripts/qa-customer-journey.mjs
$env:QA_BASE_URL='http://127.0.0.1:4323/Ez-Kyosk-SEO'
npm.cmd run qa
```

## Exact new generation/edit prompts and sources

Built-in ImageGen only; no CLI/API fallback. First selected image/prompt history: [Start & Select close-up](JOURNEY_START_SELECT_CLOSEUP.md), not regenerated in this task.

### Card2: Review & Edit Order v4

Final source: local generated master: exec-18edaf16-4ac8-41f6-a9ce-c443867f558c.png

```text
Use case: precise-object-edit. Image1 is edit target: fix ONLY cart UI legibility, alignment and hand interference in this photo for a production website. Keep SAME adult Filipina/profile/dark ponytail/cream blouse/gold hoop, LEFT charcoal/silver Ez Kyosk kiosk/unused attached right terminal, close framing/cafe/window/daylight.
Output ONE opaque LANDSCAPE 4:3 photo at least1440px wide.
Critical QA correction: screen rendered almost straight-on as a clean upright flat rectangular plane, extremely slight perspective only; all text baselines, separators and button edges parallel to corresponding SCREEN edges, never pasted world-horizontal over angled screen. All controls fully INSIDE screen bezel with generous consistent left/right internal margins. Do NOT make crooked button baselines or buttons leaning differently from glass. Realistic device with straight vertical edges.
Redraw the entire CREAM cart area into a SIMPLE orderly UI with no overlapping lines. Ez Kyosk logo stays on black header with no white backing.
Heading "Your Order". TWO generous separated product rows:
Row1 left small latte photo; name "Caffe Latte"; smaller "PHP 160 each"; next line clearly separate controls [minus] [1] [plus], aligned center height. RIGHT column subtotal "PHP 160".
Row2 left small croissant photo; name "Butter Croissant"; smaller "PHP 120 each"; next line [minus] [2] [plus], same columns, RIGHT subtotal "PHP 240".
Consistent font family/sizing, each label on its own line, quantity controls same dimensions, vertically aligned columns between rows. No repeated/extra prices or clutter.
Place total BELOW rows, visually separated: "Total" LEFT / "PHP 400" RIGHT on same clean baseline. Plenty of CLEAR SPACE between croissant control and Total.
BOTTOM TWO buttons, both FULLY CONTAINED with equal width and shared edges/plane: gold "Proceed to Payment", below outlined "Back to Menu". Enough blank gap and bottom padding, text centered inside each button, no icons needed. Don't overlap button/text, no text outside screen.
Action SAME right index touches SECOND row croissant PLUS, quantity2 immediately after increase, not a third change. Position hand to approach from RIGHT at ROW height, not sweep across RIGHT price column or Total. Put plus to right of quantity but enough gap before subtotal and natural index touches its edge without obscuring numeral2. Right wrist/arm connected, other fingers anatomically plausible. Total and row subtotals entirely unobstructed. Preserve face/gaze.
No newpeople/phone/card/QR/receipt/payment success or screen transition. Attached terminal stays idle. No floating UI or callouts. Keep accurate 160+2*120=400. This is illustrative sample UI, not exact software capture. Natural candid photorealism, no logo white plate, glam skin or colored filter. Main priority: ZERO overlapping text, correctly screen-aligned buttons and accurate cart.
```

### Card3: Pay by Card or E-Wallet v1

Final source: local generated master: exec-0a0e4b6d-214c-4f06-afab-a9f9c9b078d3.png

```text
Use case: photorealistic-natural. Generate ONE opaque LANDSCAPE4:3 photograph at least1440px wide, website customer journey stage3 "Pay by Card or E-Wallet".
Image1 reference: primary SAME fictional Filipina/customer identity/profile/dark wavy ponytail with darktie/soft curtainbangs/fine temple-nape wisps/cream blouse/goldhoop, SAME charcoal silver portrait Ez Kyosk kiosk attached RIGHT terminal, SAME close over-shoulder angle/customerRIGHT/deviceLEFT/cafe/lightwood/pastrycase/windowdaylight. Preserve photographic family, not newmodel/location. Keep front-facing flat screen geometry with contained readable UI, no floating graphics or white logo backing.
Story one physical contactless CARD payment action, e-wallet is alternative not simultaneous. Right hand now holds ONE generic dark blue bankcard between natural thumb/fingers, card near/top NFC area of attached terminal in credible tapping position. No readable cardholder/PAN/account data or invented bank logo. Not finger touching kiosk screen, no second card/phone/cash. Natural connected wrist/right arm, exactly one interacting hand. Screen and terminal visible, eye focus towards tap.
Kiosk main screen simple clean cream UI with BLACK Ez Kyosk header identity. Large title "Choose payment". Separate total row "Total" / "PHP 400". TWO large orderly option buttons same width/alignment, generous padding and distinct rows: "Card" highlighted coffee-gold, "E-Wallet" neutral outlined. Small plain instruction "Tap card on terminal". Don't include cart rows/qty now. All baselines/rectangles PARALLEL TO SCREEN EDGES, no overlap or warped buttons, no multiple screen states. Keep physical screen almost straight-on, display fullyinsidebezel with margins.
Terminal small screen "PHP 400" and "Tap card", no approval/success/checkmark to avoid same moment completed and unfinished. Terminal NFC/contactless cue at top remains accessible, card not covering entire display. Same terminal hardware right of portraitkiosk, no newstand/duplicateterminal.
Composition tight but clear terminal/card focal action, same customerhead/shoulder/profile right, no legs/pedestal/wide ad. Keep face/hand/terminaldevice plane credible, real skin/cotton/hair/metal and soft daylight. Background only cafe context, no addedpeople/queues/QR/receipts/collectedfood. No paymentQR because trackingQR is next separate stage. Illustrative sample UI/transaction, not actual backend proof. No watermarks/overlays, oversmoothing or coloredfilters. Exactly PHP400 maintained, nofees/newitems.
```

### Card4: Scan Your Tracking QR v1

Final source: local generated master: exec-f7349ee4-3e68-4c61-8b6d-6541af08a9d4.png

```text
Use case: photorealistic-natural. ONE opaque LANDSCAPE4:3 image at least1440px wide, website journey stage4 "Scan Your Tracking QR".
Image1 primary reference for SAME fictional adult Filipina/profile/dark wavy ponytail/darktie/softcurtainbangs/fine temple-nape wisps/cream blouse/goldhoop, same LEFT charcoal silver portrait Ez Kyosk kiosk with attached unused right terminal, same close over-shoulder customerRIGHT cafe/lightwood/pastrycase/windowdaylight.
New distinct action AFTER checkout: customer holds ONE normal black smartphone vertically in RIGHT hand, camera aimed at kiosk QR; thumb/fingers secure EDGE grip, no fingertip pressing kiosk, no bankcard/cash. Smartphone FRONT screen faces customer and camera viewer behind her; REAR camera points toward kiosk. Credible perspective and clear line of sight, phone does NOT obscure kiosk QR or crucial text. One naturally connected forearm/hand, no fingers through glass or duplicate phone.
Main kiosk screen almost straight-on flat rectangular contained UI. Black header original Ez Kyosk identity directly on dark, no whiteplate. Creambody with large clean aligned "Track your order", separate "Order 104" underneath, a large BLACK/WHITE square illustrative tracking QR centered inside WHITE square with generous quiet zone, then clear plain "Scan with your phone". Minimal text only. All text/control edges follow physical screen plane, insidebezel with margins, no overlaps/crooked buttons. No cart or price/payment UI. Attached terminal idle with neutral darkscreen, not a second QR.
Phone screen shows CAMERA viewfinder: small live preview of SAME cream kiosk QR panel centered in frame, subtle corner guides/standard camera chrome only, NOT payment app/cardwallet or orderstatus yet. Backcamera at kiosk, phonefront atcustomer. Keep recognizable square QR pattern with three corner finder blocks but do not encode any real payment URL/private data; this is illustrative mock UI, not a functioning scanner/backend link. Never label it payment or scan-to-pay.
Composition close and interaction-led, full kiosk QR/smartphone/hand visible, some customer's head/shoulder/profile right. Main kioskLEFT, phone middleRIGHT slightly in front of customer but without blocking main QR. No legs/pedestal/widead. Keep realistic head/body/device scale, skin/hair/cotton/screen reflections/natural daylight; plain organized cafecontext.
No extra people, foodcollection/receipt/queue board/statuspage/payment approved, graphic overlays/callouts/watermark or smearedbackground. Preserve natural photograph not collage/floating enlargedphone. Sample order104 continuity for later queue/collection.
```

### Card5: Track Your Queue Status v1

Final source: local generated master: exec-f31b7d27-5189-4570-9f58-ae8c11b26e97.png

```text
Use case: photorealistic-natural. ONE opaque LANDSCAPE4:3 photograph at least1440px wide, website journey stage5 "Track Your Queue Status".
Image1 reference: same fictional adult Filipina identity/darkwavyponytail/darktie/curtainbangs/temple-nape strands/cream blouse/goldhoop, same blackphone and warmneutral cafe window/lightwoodslatcounter/pastrycase/greenery/daylight. SAME customer after scanning order QR, now WAITING and reading status. Do NOT copy kiosk-dominant scanning composition.
Composition close over-her-right-shoulder view, customer head/profile/shoulder RIGHT, portrait smartphone foreground CENTER-LEFT primaryfocus, naturally held in RIGHT hand with secure edgegrip, eyes looking at phone not audience. Full phone display and important grip inside frame, realistic phone scale/proportions, normal perspective no bentglass/extra digits. No finger pressing kiosk, no paymentcard/cash. Kiosk not needed in this frame; camera is near waiting/pickup counter of same cafe.
Phone screen CLEAN illustrative MOBILE ORDER STATUS, not camera viewfinder or QR. Black top header small normal-reading Ez Kyosk identity no white backingplate. Cream/white body with generous separated rows: large "Order 104"; clear BLUE status pill "Preparing"; plain text "We are preparing your order." in two tidy lines if needed. Smaller separate helper "Collect when ready." Bottom no fake interactivebuttons needed. All phone typography aligned to physical SCREEN plane, fully contained margins/no overlapping glyphs. No prices or paymentconfirmation/QR/receipt now. One state Preparing only.
Background UPPER LEFT clearly visible ceiling-mounted landscape queue monitor facing customers above same cafe's coffee prep/pickup counter. Must NOT be obscured by phone. Black physical bezel/ceiling mount, not floatingUI. Simplified sample display TWO clear columns, blue LEFT header "Preparing" with numbers104,105 vertically; cyan RIGHT header "Ready for Pickup" with numbers101,102 vertically. Readable labels/numbers, consistent grid/padding, no duplicate104 in readycolumn. Phone and board AGREE104isPreparing. No promised waitminutes, predictions or actualcustomerdata. Keep queue board secondary but labels discernible, minimal natural depth blur, not unreadable smear.
Natural realistic skin/hair/cotton/wood/metal/screen reflections/daylight, no glam filters/plastic skin/neon overlays. No new foregroundpeople, QR/payment interaction, foodcollection, fullscreen floating apps or watermarks. This is illustrative sample tracking/queue UI not actual system screenshot or live backend proof. Warmneutral photo family and original cyan/blue identity maintained. Customer candid calm, phone action not presenting for audience.
```

### Card6: Collect Your Order v1

Final source: local generated master: exec-6c03f2dd-1dbc-4d59-a97e-5c084f92e0ae.png

```text
Use case: photorealistic-natural. Generate ONE opaque LANDSCAPE4:3 image at least1440px wide, final website customer journey stage6 "Collect Your Order".
Image1 PRIMARY continuity reference: SAME fictional adult Filipina profile/darkwavyponytail/simpledarktie/curtainbangs/temple-napewisps/cream blouse/goldhoop, SAME cafe window/lightwoodslatcounter/pastryglasscase/greenery/espressoequipment/naturalsoftdaylight. Keep natural feminine adult appearance/real skin/cotton/hair, not exaggerated body or posed ad.
Story sample order104 has now become READY and she collects it at orderly pickup counter. Customer RIGHT foreground/threequarter rearprofile faces staff acrosscounter, looking at tray not camera. ONE fictional adult Filipino male barista LEFT BEHIND counter in clean navy apron and lightneutral shirt, warm natural attentive expression, not posed presenter. Only these two people.
Counter supports ONE wood serving tray, ONE takeaway coffee cup with lid and TWO Butter Croissants on small neutral plate or linedtray. Quantities MUST match earlier cart: onecoffee + twocroissants, not two coffees/onecroissant or an entire meal. Tray right at handoff, GROUNDED on clear counter (not floating). Staff visible right hand steadies FAR LEFT edge, customer visible right hand reaches NEAR RIGHT edge; both believable connected wrists/arms and plausible grip, not interpenetrating hands or fingers through tray. Other hands can be naturally out of crop; no extra limbs. Eye focus on handoff; no phone or cardheld now.
Setting: SAME light wood slatted pickupcounter, pastrydisplay/espresso station/greenery/window recognizable in background, not newrestaurant. Simple small counter sign "Pickup" optional if clean, no complicated receipt/microtext.
Ceiling-mounted landscape QUEUE MONITOR secondary UPPER background clearly visible, original Ez Kyosk darkheader, TWO simple clean sample columns: blue "Preparing" with numbers105,106; cyan "Ready for Pickup" with LARGE "104". Status104MOVED toREADY, NOT alsoPreparing. It is illustrative UI not real orderproof. All monitor text and numbers inside display on screen plane, generous padding, no overlap/warpedbaselines. No new laptop/tabletcheckout/kiosktransaction; collection not cashierpayment.
Composition close-medium, upperbody/profile/customer ponytail, staff upperbody, entiretray/cup/twocroissants/important hands visible. Use slightly more room than devicecloseup to make handoff and geometry clear but NOT wide full-body ad/legs/floor. Avoid clippingfood or intersectingcounter atwrist. Natural cafe scale/lens/perspective/contactshadows. Warmneutral colors with blue/cyanqueue identity, realistic reflections/materials, no oversmoothedskin/neon/filter/heavyblur.
No paymentaction/card/cash/newQR/receipts/inventedmerchantbranding/floatinggraphics/watermarks, no extra customers. Preserve customer identity/hair/outfit and cafe as much as reference allows, one clear candid action collecting preparedorder104.
```

## Next actions

1. Owner reviews local Home #how-it-works at desktop/mobile, especially the corrected cart and complete story.
2. Apply requested refinements only; do not automatically redesign FAQ or rewrite detailed guide/schema. Next physical section is FAQ (What businesses ask before a demo).
3. If owner authorizes publication, commit/push only selected active code/docs/assets, exclude source references/private files/superseded previews, retain design-review noindex controls, then verify Pages deployment. No publication performed in this task.
