# Cashier: optional-cash image preview

Date: 16 November 2026. Owner explicitly selected the SECOND, corrected v2 image. Integrated LOCALLY in fifth Cashier card with responsive 3:4 sources and illustrative alt. No new generation, push or deployment. First four artwork files, headings, descriptions, order and native plus disclosures retained. Build/static/browser verification passed as recorded below.

## Location and meaning

Home > One Connected Platform > fifth card, **Cashier**. Preserve existing optional-cash description and native plus disclosure. This is a business offering, not a compulsory customer step after kiosk electronic payment. No exact payment synchronization, queue release or receipt workflow is asserted.

## Generation and reference roles

Built-in ImageGen used, not CLI. Original PNGs retained:
- Initial v1: `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-35ac8628-dc30-4018-9e48-fd53e2069ed3.png`.
- Selected preview v2: `C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-ef78a961-da55-41d8-9f46-56ff6230855e.png`, 1086 x 1448.

References inspected before use:
1. `public/assets/images/platform-self-ordering-human-v3-1080.webp`: photographic family/daylight/materials only.
2. `public/assets/images/platform-pos-checkout-v1-1280.webp`: compact landscape charcoal/silver hardware only, not printer or studio scene.
3. `assets/ez-kyosk-lockup.png`: original brand identity, not a header screenshot. Generated interpretation is not a pixel-identical logo insertion.

Initial preview had a customer-facing screen and clipped customer head. Targeted revision widened framing and turned the POS toward staff. Camera now sees its rear, so the branded screen is not legible. Do not claim it shows a verified software interface.

## Saved responsive previews

All under `public/assets/images/`, encoded using `scripts/prepare-platform-portrait.mjs` with Sharp quality 88, no crop/upscale/artwork compositing:
- `platform-cashier-human-v2-270.webp`: 270 x 360, 25,878 bytes.
- `platform-cashier-human-v2-540.webp`: 540 x 720, 68,908 bytes.
- `platform-cashier-human-v2-1080.webp`: 1080 x 1440, 166,240 bytes.

## Visual review and limits

Full and 270px preview inspected. Customer left, cashier right; both heads within frame; one banknote held by customer, open receiving hand spatially separate, resting hands plausible at this inspection. POS stand/base physically supported on counter and screen staff-facing. No standing kiosk/card terminal/printer, report/queue screen or added headline. Natural cafe light and blue/navy/cream match family. Banknote is illustrative, not verified currency or a payment record. Scene is AI-generated, not a real client/staff/customer photograph.

Historical preview-only verification: responsive files decoded at the stated dimensions; fifth-card import was still `platform-pos-checkout-v1` at that point. The subsequent owner-approved integration now uses `platform-cashier-human-v2` with reserved 540 x 720 dimensions and 270/540/1080 sources. No crop, CSS flip, regenerated artwork or change to other cards.

## Exact next actions

1. Completed: owner selected second image; integrate ONLY fifth card, preserving optional-cash meaning and all existing text/disclosures.
2. Verify complete five-card family and report local-review result; no remote publication implied.
3. Next scoped section proposal: Home > Designed to adapt > Different operations. One clearer experience. > Hospitality & food. Agree its human/context scene and shared Home/Solutions crop strategy before any generation or layout edit. Existing product/payment artwork is complete and is not regenerated automatically.

## Local integration verification

Fresh production build and static verification passed with BASE_PATH=/Ez-Kyosk-SEO. Targeted browser suite passed 160 card states, 40 section accessibility scans, 80 card-edge hover stability checks and pointer/Enter/Space/no-JavaScript disclosures. Six widths (320, 390, 768, 1024, 1440, 1920) plus high-density phone/desktop variants cover correct sources, natural full 3:4 image ratios, no crop/stretch/mirroring, no overflow and at least 44px controls for all five cards. Full-site regression passed 48 route/viewport checks and 32 light/dark accessibility scans, zero reported browser errors/failed requests. Form checks were mocked; no actual inquiry sent.

Visually inspected Cashier desktop light/closed and phone dark/open screenshots. Full image and optional-cash copy fit correctly; heading and plus/minus controls retained. Reports/screenshots are ignored under artifacts/platform-cashier-integrated-* and artifacts/qa-report.json. Local review only, no remote publication.

## Initial generation prompt

```text
Use case: photorealistic-natural.
Asset type: website Home / One Connected Platform / fifth card "Cashier", preview only.
Generate ONE original premium editorial photograph, 3:4 portrait, at least 1080px wide, not a collage or graphic.
Input images: Image 1 is ONLY a reference for natural cafe daylight, photographic texture and visual family; do not copy its standing kiosk or person. Image 2 is ONLY a reference for the compact charcoal/silver landscape POS hardware family; do not copy its studio setup or add its receipt printer. Image 3 is the original Ez Kyosk logo reference, use this identity rather than inventing a logo.
Scene: a contemporary cafe with warm neutral wooden counter, softly blurred espresso/coffee preparation background, restrained blue/cyan accents. One fictional adult Filipino cashier around 25-35 stands on the RIGHT behind the counter in a plain light-blue shirt and navy apron. One fictional adult customer in cream/beige stands on the LEFT on the customer side.
Action: candid optional cash payment. Customer offers ONE loosely held banknote across the counter, pinched naturally at one edge; cashier has a relaxed open receiving hand nearby with a small visible air gap before touching the note. Keep both hands spatially distinct with anatomically plausible fingers, wrists and grips. No merged fingers or overlapping hand pile. The banknote communicates cash without readable denomination, serial number, portraits or detailed currency reproduction. No piles of cash.
Composition: medium three-quarter view from the customer side at a slight diagonal, both heads and upper bodies in frame, neither essential hand cropped, the cash handoff clearly visible near center lower-middle. Both look at the handoff, not camera; natural relaxed expressions, not posed presentation. Compact landscape POS on the STAFF side, secondary to the people, physically supported by a short charcoal/silver stand resting on the counter. Its screen is angled toward the cashier but sufficiently oblique to camera to glimpse a restrained original-reference "Ez Kyosk" idle identity. Screen/logo normal-reading, no separate white backing plate, no transaction UI, payment amount or success screen. Other hands rest naturally. Maintain sensible counter depth and physical device placement.
Style: ultra-realistic candid commercial photography, soft natural cafe window daylight, realistic skin pores, individual hair, fabric folds and brushed device materials, natural optical depth of field, believable proportions. No glossy CGI or plastic skin. Full-bleed image without border or reserved headline space.
Constraints: exactly TWO adults. This illustrates an optional cash route, not a compulsory step after kiosk electronic payment. No standing kiosk, card terminal, phone, printer, queue board, inventory tableau, laptop, analytics, detailed receipt or open cash drawer. No embedded headline, optional badge, arrows, floating icons, watermark or extra advertising text. Do not mirror the logo. Preserve visual family but create a new cash-handoff scene.
```

## Targeted revision prompt

```text
Use case: precise-object-edit.
Edit Image 1, the generated Cashier cafe portrait. Images 2 and 3 are supporting hardware and original logo references only.
Correct the composition without changing the scene: rotate/reposition the compact POS so its screen faces the CASHIER behind the counter, not the customer. Camera is diagonally customer-side so it should see only an oblique partial glimpse of the screen and device edge; branding is secondary, do not turn the screen toward camera to display it. The cashier should be able to operate the screen from where he stands. Physically supported stand/base on the staff side of counter. Preserve landscape charcoal/silver hardware family from Image 2 and restrained original-reference Ez Kyosk idle identity from Image 3 wherever visible, no white logo backing plate.
Also widen the camera framing enough that BOTH people's complete heads fit inside the 3:4 portrait with a little safe top/side space; preserve meaningful handoff size.
Keep everything else: same two fictional adult Filipino people, customer LEFT cream shirt, cashier RIGHT light-blue shirt/navy apron, candid downward gaze, same cash action with one indistinct banknote and naturally separate anatomically plausible receiving hand, natural other hands, realistic materials, daylight cafe counter/coffee preparation background and restrained blue/cyan palette. No new people, devices, UI or advertising text. No kiosk, card terminal, receipt printer, laptop, queue board, pile of money, readable currency details, floating graphics, watermark or added badge. Retain photorealistic texture. Output ONE corrected full-bleed portrait 3:4 at least 1080 pixels wide.
```
