# Services & B2B: tablet image previews

Publication authorized, 16 November 2026: owner requested deploying the full four-card section. Approved balanced v6 is the ONLY Services version in this release. Earlier local-only/no-deployment statements below are historical. [Release scope/checks](DEPLOYMENT_GUIDE.md#designed-to-adapt-publication-16-november-2026); successful CI/live publication must be checked after push.

## Current integration: owner-approved v6, all four Home cards filled

16 November 2026: owner explicitly approved actual balanced v6 and authorized integration. Fourth Home > Designed to adapt card now imports industry-services-v6 at 320/640/1280 widths, with illustrative alt identifying a sample services dashboard. Existing WebP artwork bytes preserved; no new generation/crop/asset edit. Hospitality v2, logo-bearing Retail v1 and Wellness v1 untouched, as are headings/descriptions/badges/Explore destinations/shared layout. Four images, zero reserved areas. Local only, no commit/push/deployment.

Fresh FOUR-image integration checks passed: production build/static checks with BASE_PATH=/Ez-Kyosk-SEO, all 12 responsive source dimensions and built/public SHA256 equality, no superseded Services v1-v5 runtime imports. Updated industry browser suite asserts four decoded images/zero pending areas and passed 24 layout/theme/density combinations (96 card checks), six section accessibility scans, keyboard/focus and all four destinations without JavaScript; zero overflow/browser/HTTP errors. Full-site regression passed 48 route/viewport checks and 32 light/dark accessibility scans with zero browser errors or failed requests. Inquiry paths mocked, zero real inquiries sent. Desktop-light and phone-dark completed-section captures visually inspected. Screenshot-only styling hides sticky header/skip-link during tall element capture to avoid stitching overlays; all geometry/focus/accessibility assertions run on the unmodified page and actual header code remains unchanged. Reports/screenshots: ignored artifacts/industry-complete-integrated-* and artifacts/qa-report.json. git diff --check passed. Owned local test server stopped after checks.

Next brainstorm: [Home customer journey: Browse -> Select -> Payment -> Get order](JOURNEY_REDESIGN_PLAN.md). This proposed next work is NOT implemented or generated automatically. Earlier preview statuses below are historical.

## CURRENT: balanced upright portrait revision v6

16 November 2026: owner approved reducing the excessive lean/turn while preserving firm rear/right-edge left-hand grip. Built-in ImageGen edited v5 into v6; current actual-image review candidate ONLY, not imported/pushed/deployed. Older art preserved.

Approved pose targets: yaw about 8-10 degrees toward client, roll 0-2 degrees, backward pitch about 5 degrees. Simple weak-perspective references: cos(10 degrees)=0.9848078 apparent width retention before other perspective effects; a 350px axis rolled 2 degrees shifts about 12.22px. These are design guides, NOT recovered/verified 3D measurements from the raster.

Full image and 320px output inspected. Projected tablet long axis is now visibly near vertical, upper edge more level and screen less oblique than v5; near-front face prioritized for balanced presentation. Rear grip remains, left fingers visible around image-right edge, right index contacts selected Consultation icon without covering labels. Thin straight tablet outline, same three stacked sample options, no new stand/props or obvious extra/disconnected male hand detected. Exact yaw/pitch, actual device dimensions and hidden palm contact cannot be proven from the generated view; no claim all numeric targets were achieved precisely. People/office/light preserved visually, not guaranteed pixel-identical. Dashboard remains owner-approved illustrative sample, not actual software.

Source preserved: C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-73b07249-2af4-4fb7-a553-c4730bdf24b2.png, opaque 1448 x 1086 landscape 4:3. Saved under public/assets/images:
- industry-services-v6-320.webp: 320 x 240, 18,192 bytes.
- industry-services-v6-640.webp: 640 x 480, 48,282 bytes.
- industry-services-v6-1280.webp: 1280 x 960, 129,238 bytes.

Existing helper resize/encode only, quality 88; no crop/upscale/manual art edit/overwrite. Responsive dimensions decoded correctly, no Services image runtime import; git diff --check passed. No production/browser tests rerun for this unimported preview. Current three-photo Home section unchanged.

Next: owner reviews balanced v6; after actual-image approval integrate fourth only with responsive assets/illustrative alt, update tests to four photos/zero pending, verify build/static/responsive/light-dark/keyboard/links/accessibility, then next-section brainstorm. No automatic deployment.

### Exact balanced-pose edit prompt

```text
Use case: precise-object-edit.
Edit this exact Services & B2B photo. The user says the tablet is leaning/turning too much. Make ONLY a LOCAL TABLET-POSE correction and the minimum connected grip/fingertip adjustments. Keep everything else unchanged.

PRIMARY VISUAL TARGET: a BALANCED, nearly UPRIGHT portrait iPad-style tablet, with a very subtle turn toward the client. Do NOT repeat the noticeably leaning/narrowed tablet in the input.
- Straighten its projected central long axis to nearly vertical: top-center directly above bottom-center, sideways ROLL target 0-2 degrees maximum.
- Reduce the client-directed turn to only a gentle YAW target 8-10 degrees from front view, NOT 20-30 degrees and not additional turn from the input. Mostly broad readable face, only subtly toward female client at RIGHT.
- Minimal backward PITCH around 5 degrees. Not tipping sideways toward client or reclining.
- Physically ordinary thin portrait slate with width:height about 3:4. With such mild yaw its projected face should retain nearly full width (cos 10 degrees ~= .985 before other perspective), NOT appear tall/narrow or strongly trapezoidal. Target projected portrait aspect roughly .73-.75 at this mild angle, not .55-.60.
- ONE rigid flat panel, straight coplanar edges, four matching gently rounded corners, thin consistent dark bezels/metallic thickness. All screen rows, text and border must share exactly its perspective. No warped/twisted slab, mismatched corners, stretched text or exaggerated keystone.
- Maintain roughly same tablet center/scale and full edges in frame, clearly held above table; no stand/dock/base/case/keyboard/cables or Apple logo.

GRIP INVARIANT: preserve the secure LEFT-hand grip BEHIND the tablet, fingers wrapping around the image-RIGHT vertical edge near lower-middle. Left palm stays on back (mostly occluded), forearm naturally connected; NOT open palm under bottom. Reposition only fingertips/left wrist as needed to follow straighter tablet. Exactly two male hands. Right index continues lightly tapping selected top-row icon, label unobscured. No extra/disconnected digits, hand through tablet or floating device.

CONTENT INVARIANT: same Ez Kyosk identity header, exact heading "Services", same THREE STACKED portrait rows and line icons: "Consultation" (only blue selected outline), "Business Support", "Additional Services". White/blue/subtle-cyan UI, readable labels. Do not add prices, records, charts, appointments, payment confirmations or other features. This is an approved illustrative sample, not actual software.

SCENE INVARIANTS: same two adults/faces/hair/clothes/natural proportions/expressions/seated left-right positions, client resting hands, both naturally attending to screen rather than audience; same office/table/chairs/window/shelves/greenery, realistic lighting/neutral photographic colors/textures, camera and composition. No changes outside tablet and immediately connected grip/touch area, no added people/props/text.
Output ONE opaque LANDSCAPE 4:3 photorealistic photograph at same resolution at least 1440px wide. Tablet itself stays PORTRAIT. No crop, website frame/badge or watermark.
```

## Historical: client-facing grip v5

16 November 2026: owner requested portrait tablet slightly more toward client and adviser's LEFT hand firmly behind it up to its RIGHT edge. Built-in ImageGen edited v4 into v5; actual-image review candidate ONLY, not integrated/pushed/deployed. Prior versions preserved.

Full preview and 320px output inspected. Device screen modestly more oblique toward right-side client; adviser's left forearm now passes behind device, fingers visibly grip its image-right vertical edge instead of balancing underneath. Right index still taps selected Consultation icon without covering label. No leftover under-bottom/third male hand, stand, obvious detached digits or warped slab detected at this inspection. Palm is occluded by tablet, so rear contact/anatomy cannot be fully verified from a single rendered view; no exact measured yaw/ergonomic guarantee. Same portrait Services sample with three stacked options, identities, office and lighting retained visually (not pixel-identical claim). Labels readable at source size; fine text smaller at thumbnail. Illustrative UI is owner-approved concept, not actual-software evidence.

Source preserved: C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-3aae9c7c-847d-4b17-9548-7eccb1294d79.png, opaque 1448 x 1086 landscape 4:3. Saved public/assets/images:
- industry-services-v5-320.webp: 320 x 240, 18,204 bytes.
- industry-services-v5-640.webp: 640 x 480, 48,768 bytes.
- industry-services-v5-1280.webp: 1280 x 960, 128,796 bytes.

Existing helper resize/encoding only at quality 88, no crop/upscale/manual art edits/overwrite. Outputs decoded at expected dimensions, no runtime Services image import and git diff --check passed. No production/browser rerun for an unimported preview. Current three-photo industry section unchanged.

Next: owner reviews v5; after actual approval integrate only fourth card using responsive v5 and illustrative alt; update tests to four photos/zero pending; verify build/static, responsive/light-dark, keyboard/links/accessibility; then identify next section to brainstorm. No automatic deployment.

### Exact client-angle/grip edit prompt

```text
Use case: precise-object-edit.
Edit this EXACT Services & B2B photograph with ONLY TWO linked local changes: turn the PORTRAIT handheld tablet a little more toward the female client on RIGHT, and replace the man's under-bottom balancing grip with a secure LEFT-hand BACK-AND-RIGHT-EDGE grip.
1. Angle: yaw tablet about 10-15 degrees farther toward the CLIENT, not toward camera. The screen's viewing direction should aim more toward her face; the tablet's image-right edge recedes slightly and image-left edge is slightly nearer the camera. Keep a modest oblique readable front view, not side-on, not tablet back. Screen/UI/bezels all follow ONE rigid plane and coherent perspective. Retain portrait iPad-like proportions, slim even bezel/metallic edge, straight edges, matching corners, near-upright tilt, full perimeter within frame.
2. LEFT support hand: the adviser on LEFT extends his LEFT forearm naturally BEHIND the tablet. His left PALM rests FIRMLY against the rear panel, with naturally bent fingers reaching around and gripping the TABLET'S IMAGE-RIGHT VERTICAL EDGE (the edge toward the female client), roughly lower-middle height. Fingertips may peek around that edge/bezel but must not cover the UI labels. Thumb stays naturally opposed on rear/side; do not force both thumb and fingers to span full tablet width. Secure contact, proper finger occlusion/pressure/shadows, connected wrist/forearm. NOT open palm underneath, not fingertips balancing bottom, no hand passing through glass, no strap, no extra fingers. Adjust this left wrist/forearm only as needed. His RIGHT hand remains in front, index lightly tapping selected Consultation icon area with words unobscured. Exactly TWO male hands, no leftover bottom-support hand.
Keep tablet suspended above table, no stand/dock/base/case/keyboard/cable. No Apple logo.
Preserve SAME dashboard: original Ez Kyosk identity, exact heading "Services", THREE stacked portrait rows with exact labels "Consultation" (selected blue outline), "Business Support", "Additional Services", same line icons, white/blue/subtle-cyan. No new wording/features; realistic display perspective and low reflections.
INVARIANTS: same two adults/faces/hair/clothes/natural proportions/expressions, both attending naturally to screen, client's separate resting hands, seated positions, office/table/chairs/window/shelves/greenery, light/neutral photo color/materials, camera/framing. Only local device angle and male support-arm pose change; no new people/props/text or background redesign.
Output ONE opaque LANDSCAPE 4:3 photorealistic photograph, same at least 1440px-wide resolution. Tablet remains PORTRAIT. No crop, website frame, badge or watermark. Illustrative sample dashboard, not actual-software evidence.
```

## Historical: portrait geometry v4

16 November 2026: owner requested corrected tablet geometry/viewing angle and PORTRAIT orientation. Built-in ImageGen edited handheld v3 into v4; current actual-image review candidate, NOT imported/pushed/deployed. All older artwork preserved.

Tablet is now portrait inside the unchanged LANDSCAPE 4:3 photograph. Screen has straight coherent edges, thin bezel/metallic edge and a near-upright modestly oblique view. Male adviser supports bottom/back with left hand above table, taps top row icon area with right; no stand/extra male hand. Same illustrative Ez Kyosk / Services header, reflowed to three stacked rows: Consultation selected, Business Support, Additional Services. All words visible at source size. People/office/light retained visually, not claimed pixel-identical.

Full preview and 320px WebP inspected: device perimeter/critical hands in frame, no obvious warped/bent slab or disconnected digits detected, no blocked labels. Exact real-world yaw/tilt, dimensions and ergonomics cannot be established from generated pixels; naturalness/angle still subject to owner's actual-image review. Fine dashboard text naturally less readable at thumbnail. This is an illustrative sample, not verified software.

Source preserved: C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-e31b95ac-8fd7-44a7-88e3-4abb567ea5d7.png, opaque 1448 x 1086. Saved in public/assets/images:
- industry-services-v4-320.webp: 320 x 240, 18,190 bytes.
- industry-services-v4-640.webp: 640 x 480, 49,346 bytes.
- industry-services-v4-1280.webp: 1280 x 960, 130,896 bytes.

Resize/encode only with existing helper, quality 88, no crop/upscale/overwrite. Outputs decoded at expected dimensions; no runtime service image import. git diff --check passed; no build/browser rerun for unimported preview. Current first three cards unchanged.

Next: owner reviews PORTRAIT v4; after approval integrate only fourth reserved area, update tests to four images/zero pending, verify section/build/responsive/theme/keyboard/links/accessibility, then next-section brainstorm. No automatic deployment.

### Exact portrait/geometry edit prompt

```text
Use case: precise-object-edit.
Edit this exact Services & B2B photograph. Correct ONLY the handheld tablet's ORIENTATION, solid geometry, viewing angle, grip and necessary local hand/forearm poses. Keep all other scene content unchanged as closely as possible.
PRIMARY REQUEST: a realistic handheld iPad-style tablet in PORTRAIT orientation, NOT landscape. The PHOTOGRAPH/CANVAS stays LANDSCAPE 4:3.
Device:
- ONE slim ordinary 10-11 inch tablet, physically rectangular, portrait width:height about 3:4, subtly rounded matching corner radii, thin evenly proportioned dark bezels and thin consistent metallic edge.
- It must be ONE flat rigid slab: straight coplanar edges, coherent perspective/vanishing directions, no warped/bowed/twisted screen, skewed trapezoid mismatch, inflated edge, thick monitor body, mismatched corner/edge thickness or duplicated device.
- Hold nearly upright with only gentle backward tilt about 10 degrees and very little roll (under 5 degrees), screen naturally turned moderately toward the female client on RIGHT (about 20 degrees), not squarely displayed to camera. Camera still sees a believable readable three-quarter front view, with mild natural foreshortening, not extreme keystone distortion. Match screen UI perspective EXACTLY to glass plane.
Grip/action:
- Male adviser's LEFT hand securely cradles bottom/near-side bezel and back of tablet. Palm/fingers visibly carry weight with natural contact/occlusion/shadows; thumb on bezel not over content. Natural left wrist/elbow/forearm connection; forearm can rest on table while device is held ABOVE it.
- His RIGHT index finger lightly taps the TOP selected service row's icon area, not covering any words. Exactly TWO male hands, one supporting, one tapping, no leftover/extra hand, fused fingers, impossible stretched wrist or floating grip.
- Whole tablet edges and crucial hands visible safely inside frame. No stand, base, hinge, keyboard, dock, cables, case or Apple logo. No tablet edge rests on tabletop.
Illustrative dashboard: retain original-reference Ez Kyosk identity at top and exact heading "Services". Reflow the SAME three options responsively into THREE full-width STACKED rows appropriate for PORTRAIT, each icon at left and exact readable label at right:
1 "Consultation" (only selected row, blue outline)
2 "Business Support"
3 "Additional Services".
Do not rotate landscape UI sideways, squish text or keep three narrow side-by-side columns. White/blue/subtle-cyan, generous spacing, restrained line icons, correct typography perspective; no new wording, prices, charts, records, booking/payment/invoice features.
INVARIANTS: same two adults/faces/hair/clothes/natural arm proportions/expressions and seated left/right positions, client's separate resting hands, both looking naturally at screen (not audience), office shelves/window/plant/table/chairs, lighting/neutral colors/materials, camera/framing and lower-left clear table area. Adjust only local adviser arm poses as necessary for credible hold/tap. No new people/props, no glamour retouch or background changes.
Output ONE opaque LANDSCAPE 4:3 photorealistic photograph, same at least 1440px-wide resolution. Tablet itself portrait. No crop, website/card frame, badge or watermark. This remains an expressly approved illustrative sample dashboard, not a real-software screenshot.
```

## Historical: handheld landscape v3

16 November 2026: owner requested a HANDHELD iPad-style tablet. Built-in ImageGen edited the preceding v2; v3 is now the actual-image review candidate, NOT integrated/pushed/deployed. Previous source/preview files preserved. No new brand/Apple logo added.

Male adviser supports a slim landscape tablet above the tabletop with his left hand and taps Consultation with his right index finger. Entire stand/hinge/base removed and table restored. Full scene and 320px preview inspected: support hand connects to forearm, no leftover third male hand or obvious extra/disconnected digits detected; device is hand-supported, no tabletop base, screen words remain readable at source size. Faces/office/clothing/lighting preserved visually; generative edit is not guaranteed pixel-identical outside the requested change. No new software capabilities added. Dashboard remains an expressly approved illustrative sample, not actual software.

Source preserved: C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-423d95bb-d4d5-4dc9-b674-7ae5598ca966.png. Opaque 1448 x 1086 (4:3).
Saved under public/assets/images:
- industry-services-v3-320.webp: 320 x 240, 18,016 bytes.
- industry-services-v3-640.webp: 640 x 480, 49,138 bytes.
- industry-services-v3-1280.webp: 1280 x 960, 129,486 bytes.

Existing helper resize/encoding only, quality 88; no crop/upscale/manual artwork edit/overwrite. All three outputs decoded at expected dimensions. No runtime imports or production/browser rerun for this preview-only pass; first three industry cards unchanged. git diff --check passed.

Exact next actions: owner reviews HANDHELD v3; after approval integrate only fourth image with responsive assets/illustrative alt; update tests to four images/zero pending; verify full section/build/theme/keyboard/links/accessibility; then identify next section for brainstorming. No automatic deployment or other-section generation.

### Exact handheld edit prompt

```text
Use case: precise-object-edit.
Edit this exact Services & B2B photograph. User correction: it MUST be a truly HANDHELD iPad-style tablet, NOT a desktop touchscreen/POS or a device resting on a stand.
Make ONLY the device/support/grip change and the necessary local hand/forearm pose adjustment:
- REMOVE the entire tabletop stand, hinge, pedestal and base. Restore natural uninterrupted matching wood surface/shadows where stand was.
- Replace the thick monitor-like device with ONE slim 11-inch iPad-style landscape slate: thin dark bezel, subtly rounded corners, thin metallic edge. No Apple logo, no keyboard/case/stand/dock/charging cables.
- Male adviser LEFT holds the tablet naturally IN HIS LEFT HAND, fingers securely supporting back/lower edge, thumb on bezel outside the screen content; gently cradled at his lower chest/above tabletop, not resting its bottom on table. His left forearm/elbow may be naturally supported by table. Make the load-bearing grip physically credible, no floating device or impossible reach.
- His RIGHT index finger taps the selected Consultation tile near its icon, leaving ALL words unobscured. Only TWO male hands total, left supports and right taps; no leftover resting third hand from original pose, no fused fingers, sensible wrists/elbows.
- Landscape screen angled toward BOTH adviser and female client and visible obliquely to camera. Candid shared use, not raising tablet to present to audience. Keep full tablet outline and critical hands in frame.
Preserve exactly the illustrative dashboard content/layout: original-reference Ez Kyosk identity at top, heading "Services", THREE tiles with exact labels "Consultation", "Business Support", "Additional Services", same restrained line icons, only Consultation has BLUE selected outline. White/blue/subtle-cyan palette; crisp legible labels, no added UI, charts, records, prices, appointments or payment confirmations.
Keep all other elements unchanged as closely as possible: same two adults/identities/hair/clothes/natural arm proportions/expressions, female's separate resting hands, seated left/right arrangement and both looking at screen, office shelving/window/greenery/table/chairs, daylight/neutral photographic color/materials, camera and 4:3 framing. No new people/props/text, no client/software verification claims.
ONE opaque LANDSCAPE 4:3 photorealistic photograph, same at least 1440px-wide resolution, no crop or website frame/watermark.
```

## Historical: stand-mounted corrected v2

Date: 16 November 2026. Owner approved an ILLUSTRATIVE services dashboard (not an actual-software screenshot). Built-in ImageGen used, no CLI/API fallback. Corrected v2 is the current actual-image review candidate; not integrated/pushed/deployed.

## Approved scene and inspection

Home > Designed to adapt > FOURTH/final card, Services & B2B. Two fictional Filipino adults in a clean professional-services office: male adviser LEFT in light blue, female client RIGHT in cream/navy. They look toward a landscape touchscreen tablet on a low stable stand; adviser touches the selected service tile. No paper-led discussion or laptop remains.

Dashboard uses Ez Kyosk identity, heading Services, three service tiles labelled Consultation, Business Support and Additional Services. Consultation has the single blue selected outline. Exact requested labels inspected at full size; first output had fingertip over the initial C, and one targeted edit shifted the touch upward so the whole label is readable. No prices, customer data, calendar, payments, analytics or unapproved business-software workflows added. This is an owner-approved conceptual service-selection illustration, NOT evidence these screens/features match actual software or a real client installation.

Corrected full image and 320px responsive version visually inspected. Both heads, important hands, tablet edges/stand/base in frame; hand/wrist relationships appear plausible at this inspection, no obvious extra/disconnected digits detected. Screen is camera-readable with the two people seated on either side looking toward it. Tablet remains more upright than the initial low/upward-tilt recommendation; owner can review this actual angle rather than assuming exact perspective compliance. At thumbnail, people/tablet/service layout remain recognizable; fine label readability naturally decreases. Device support grounded, lower-left table area clear for HTML badge. Original identity supplied as reference; generative rendering is not a pixel-identical manual asset composite.

## References and provenance

Viewed before generation:
1. public/assets/images/industry-hospitality-v2-1280.webp: lighting/material family ONLY; not cafe/people/kiosk.
2. assets/ez-kyosk-lockup.png: original identity ONLY, not header screenshot.

Original PNGs preserved:
- Initial v1: C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-5beceb92-7438-45ed-ba1e-a90f222e61fe.png.
- Corrected v2: C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-1cdcd265-1586-4ccb-994f-b8f15b35e592.png.

Corrected source opaque 1448 x 1086 (4:3). Saved to public/assets/images:
- industry-services-v2-320.webp: 320 x 240, 18,044 bytes.
- industry-services-v2-640.webp: 640 x 480, 49,400 bytes.
- industry-services-v2-1280.webp: 1280 x 960, 128,862 bytes.

prepare-industry-image.mjs performs resize/encoding ONLY at WebP quality 88, no crop/upscale/manual artwork edit or overwrite. Initial PNG retained for provenance, not imported. Existing three industry photos/runtime remain unchanged. Responsive files decoded at expected dimensions; no services image imported. No production/browser rerun for this unimported preview; prior Wellness integration checks are separate history.

## Exact next actions

1. Owner reviews actual corrected v2 (last displayed preview), particularly tablet angle/interaction, dashboard labels and people.
2. After actual-image acceptance, integrate ONLY fourth reserved photo with responsive sources and illustrative alt; retain first three images, copy/badge/links/layout.
3. Update expected counts to four approved/zero pending; verify build/static, all four sources, responsive/light-dark alignment, keyboard/links/accessibility.
4. Report Designed to adapt complete locally, then identify the next section for brainstorming from current plan/source. No automatic push/deployment or other-section generation.

## Exact initial prompt

```text
Use case: photorealistic-natural.
Asset type: original website industry photograph, Home > Designed to adapt > FOURTH card "Services & B2B". PREVIEW ONLY. Generate a photograph, not a website/card mockup.
Output: ONE opaque LANDSCAPE 4:3 raster at least 1440px wide.
Reference 1: photographic family ONLY (soft natural daylight, neutral white balance, realistic skin/materials and restrained blue), NOT cafe, people, standing kiosk or scene.
Reference 2: original Ez Kyosk identity ONLY, to appear INSIDE the tablet dashboard header. Do not redesign the mark, invent a different brand or use a header screenshot.
Story/setting: contemporary small Philippine professional-services office consultation area, cream walls, light-wood meeting table, organized shelving, modest greenery and soft side-window daylight. Clear circulation and uncluttered working surface, not a shop/salon/cafe/payment counter. A visiting business client explores services with an adviser through a TOUCHSCREEN TABLET, no laptop or paper-led conversation.
People: exactly TWO fictional Filipino ADULTS with different faces/styling from reference. Male service adviser LEFT in plain light-blue shirt with controlled sleeves, short tidy hair, no tie/badge. Female business client RIGHT with shoulder-length dark hair, modest cream blouse/navy trousers. Naturally proportioned softly defined/slender adult arms, controlled sleeve volume, no exaggerated thinness or plastic skin.
Action: both seated slightly diagonally toward each other and tablet, candid service consultation. Adviser gently touches ONE service tile with index finger, other hand rests on table. Client looks toward the same screen, relaxed small conversational expression, hands resting separately. No one looks at camera or presents to audience. Keep fingers/wrists anatomically plausible, separated hands, one clear touch action.
Device: ONE realistic compact dark 11–13 inch LANDSCAPE touchscreen tablet, with no keyboard, on a LOW stable stand between them slightly nearer adviser. Tilt screen upward and diagonally so both can comfortably see/use it; camera gets readable angled screen view without an unnatural front-on advertising pose. Both people use the same screen, not its back. Frame tablet with all edges/connected stand/support visible; no floating hardware. Tablet is large enough to recognize dashboard, not oversized foreground hero.
ILLUSTRATIVE SAMPLE dashboard (owner expressly approved, NOT a screenshot of actual software):
- white interface, blue controls (#2563EB family), subtle cyan highlights.
- original-reference Ez Kyosk identity at top, exact brand words "Ez Kyosk".
- clear heading exact text "Services".
- exactly THREE large touch-friendly tiles, simple restrained line icons, exact labels "Consultation", "Business Support", "Additional Services". One selected tile outlined BLUE; adviser touches that tile without covering its label.
- minimal text, generous spacing, crisp legible typography, no extra tiny text, navigation, statistics, prices, records or promotional copy.
Composition: medium-wide eye-level editorial viewpoint with natural perspective, slight view down onto tabletop. Both full heads, important hands, whole tablet/stand within frame. Office recognizable at small card size; lower-left edge relatively calm for future HTML briefcase badge, no critical face/hand there. No badge/title/Explore baked into photograph.
Finish: premium ultra-realistic candid photography, believable pores, hair, cotton folds, wood grain, grounded contact shadows and restrained screen reflections that DO NOT obscure dashboard. Natural colors, no blue/orange filter, glamour retouch, excessive background smearing or CGI skin.
Avoid: extra people/devices, laptop/keyboard, standing kiosk/POS/printer, cash/cards/QR phone, handshake/signature, invoices/contracts, approval/CRM/project/appointment/calendar UI, payment confirmation, real customer/client data, business metrics, third-party logos, floating graphics, watermark, website frame/buttons/headlines. Illustrative fictional business setting, not a real client/deployment claim.
```

## Exact single-detail correction prompt

```text
Use case: precise-object-edit.
Edit this Services & B2B photograph with ONLY ONE small correction: move the male adviser's tapping index fingertip slightly UPWARD within the LEFT selected service tile, toward the people ICON/empty space ABOVE the text, so the ENTIRE word "Consultation", including initial C, is unobscured and exactly readable. Maintain a natural plausible index finger/hand/wrist/arm connection and real touch contact. Do not alter text to accommodate the hand.
Keep EVERYTHING ELSE unchanged: same two adults/faces/hair/expressions/clothes/natural arm proportions/seating, other hands, office/shelves/window/plant/table, daylight/color, camera/framing, tablet size/orientation/stand/support, exact Ez Kyosk identity, "Services" heading, exact three labels "Consultation", "Business Support", "Additional Services", icons and single blue selected outline. No extra fingers, objects, words or UI.
ONE opaque LANDSCAPE 4:3 photograph, same resolution at least 1440px wide. No crop, website frame or watermark.
```
