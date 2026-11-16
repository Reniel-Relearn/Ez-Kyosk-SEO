# Start & Select: first customer-journey image

CURRENT: v1 below is preserved history. Owner explicitly selected the original tighter close-up instead of its refinement. It is integrated as journey-start-select-v3 with unchanged composition/content. [Active selection, exact prompts and checks](JOURNEY_START_SELECT_CLOSEUP.md). v1/v2 preserved. No new deployment.

Date: 16 November 2026. Owner approved the full scene/hair brief, chose existing illustrative menu references, and explicitly authorized generation THEN local integration in the same turn. Built-in ImageGen used, no CLI/API fallback. This direct-integration authorization is specific to first image, not permission to generate remaining stages or deploy.

## Exact scope and result

Home > How Ez Kyosk works (#how-it-works), AFTER Designed to adapt and BEFORE FAQ > FIRST card Start & Select. Owner refined earlier four-step concept to SIX: Start & Select / Review & Edit Order / Pay by Card or E-Wallet / Scan Your Tracking QR / Track Your Queue Status / Collect Your Order.

Implemented the six-stage Home scaffold with only first image, five clearly reserved image areas. Three desktop/two tablet/one phone columns, ordered HTML list, visible headings/descriptions, no card buttons/disclosures or visible large numbers. Existing section introduction/link and hero/industry/product/payment artwork retained. Home heading count now Six simple steps. Original detailed-guide ordering microsteps/FAQ/schema preserved for separately scoped reconciliation, not silently rewritten in this one-photo task.

Generated scene: kiosk LEFT/customer RIGHT at organized cafe counter, full portrait kiosk/base/attached terminal and customer inside 4:3 landscape frame. Customer in lightweight cream blouse/navy trousers/neutral loafers, discreet watch/earrings, candid screen-facing profile, relaxed free hand and one menu-selection touch. Dark mid-high wavy ponytail, discreet tie, near-side face-framing curtain bang and finer temple/nape strands; far bang naturally partly occluded, not forced toward camera. No blonde hair/braid/copied reference identity or outdoor article styling. Same character/clothing/venue/kiosk/light are reference anchors for subsequent images; generative identity continuity still requires review, not a guarantee.

Full-size and 320px WebP inspected. Head/important hands/device base are within frame; plausible elbow/wrist/finger contact, no obvious extra/disconnected digits detected in inspection. Existing illustrative Cafe & Bakery menu direction, no new checkout/QR/queue state; reference-dependent small text/logo not claimed pixel-identical or verified actual software. Terminal present but untouched. No additional people, floating hero icons/rings/glows or white logo backing plates. Fine hair/UI details naturally less legible at small size.

## Inputs and generation mode

Built-in reference mode used num_last_images_to_include=4 because hairstyle attachment had no local file path. Reference order:
1. Owner's attached blonde ponytail/curtain-bangs article image: hairstyle ONLY, not identity/color/text/pose/setting.
2. assets/hero-kiosk-transparent-v3.webp: existing kiosk/menu/attached-terminal family ONLY, not floating decorations.
3. public/assets/images/industry-hospitality-v2-1280.webp: cafe/light/material family ONLY, not people.
4. assets/ez-kyosk-lockup.png: original identity ONLY, never header screenshot.

Original output preserved: local generated master: exec-0a5a11bc-7cf8-4b78-84c6-3190017f6e71.png. Opaque 1448 x 1086 (4:3).

Saved public/assets/images:
- journey-start-select-v1-320.webp: 320 x 240, 24,648 bytes.
- journey-start-select-v1-640.webp: 640 x 480, 74,674 bytes.
- journey-start-select-v1-1280.webp: 1280 x 960, 200,644 bytes.

Existing prepare-industry-image.mjs extended to accept journey-* stems while preserving industry compatibility; resize/encoding only at WebP quality 88, no crop/upscale/manual artwork edits/overwrite. Local card uses reserved 640 x 480 dimensions, responsive srcset/sizes, lazy loading and illustrative alt.

## Verification

Production build and static checks passed with BASE_PATH=/Ez-Kyosk-SEO, all three responsive dimensions and source/built SHA256 equality. Dedicated journey browser checks passed 24 layout/theme/density combinations (144 card checks), six section accessibility scans, all six headings/descriptions/order/full image frames, per-row alignment and no horizontal overflow. All six cards readable and guide link keyboard-operable without JavaScript at 390/1024/1440. Completed industry regression also passed 24 combinations (96 card checks), six accessibility scans and all destinations without JavaScript. Full-site regression passed 48 route/viewport checks and 32 light/dark accessibility scans, zero browser errors/failed requests. Inquiry behavior mocked, zero real inquiries. First-image thumbnail plus desktop-light/phone-dark integrated captures inspected. Additional desktop DOM check confirms all card bottoms contained by grid and following FAQ starts below section; no actual overlap despite a tall-capture edge artifact. No deployment/commit/push; existing live release remains aab7020.

Reports/captures ignored under artifacts/journey-start-integrated-*, artifacts/industry-after-journey-start-* and artifacts/qa-report.json. Source references/superseded unrelated files preserved.

## Exact next actions

1. Owner reviews first local image/card (revision if requested).
2. Brainstorm/approve [SECOND image: Review & Edit Order](JOURNEY_REVIEW_EDIT_PLAN.md).
3. Generate only second image after that approval, inspect/integrate only authorized scope, preserve first artwork.
4. Continue one image at a time through remaining four stages. Payment visual method and tracking QR presentation require their own briefs; never confuse tracking QR with payment QR.
5. Reconcile the guide/FAQ/metadata narrative in a separately confirmed scope; no automatic all-page rewrite or deployment.

## Exact generation prompt

```text
Use case: photorealistic-natural.
Asset type: original website customer-journey photograph, Home > How Ez Kyosk works > FIRST card "Start & Select". Generate ONE photograph only, not a card mockup.
Output ONE opaque LANDSCAPE 4:3 raster at least 1440px wide. Portrait kiosk inside landscape image.
Reference roles, chronological:
Image 1 is user's attached ponytail/curtain-bangs photo: HAIRSTYLE REFERENCE ONLY. Do NOT copy woman/face, blonde color, outdoor setting, over-shoulder gaze, outfit, article text or watermark.
Image 2 is approved hero-kiosk-transparent-v3 artwork: HARDWARE + EXISTING ILLUSTRATIVE CAFE MENU reference only. Keep charcoal/silver upright kiosk with attached right-side payment terminal, portrait screen and grounded pedestal/base. DO NOT copy floating shopping/QR/card icons, gold orbital rings, glows or transparent cutout treatment.
Image 3 is approved cafe photograph: SETTING/LIGHT/MATERIAL family only (organized counter, window daylight, light wood, neutral walls/floor), NOT its woman, staff or wardrobe.
Image 4 is original assets/ez-kyosk-lockup.png: IDENTITY reference only. Brand words "Ez Kyosk"; preserve logo family/colors, no header screenshot/new logo/white backing plate.
Story: ONE fictional adult Filipina customer naturally choosing her first menu item on Ez Kyosk. Menu is ALREADY OPEN; no welcome-screen collage or simultaneous before/after actions. This establishes the same customer/wardrobe/venue/kiosk for subsequent six-stage journey photos.
Customer RIGHT, kiosk LEFT, facing inward toward screen. Candid three-quarter rear/side view, some near-side facial profile; eyes focused on selected product, never camera. Naturally feminine understated adult appearance, softly defined slender arms/relaxed shoulders/realistic proportions, lightweight cream blouse with neat controlled sleeves, navy trousers, simple neutral footwear, minimal jewelry/natural makeup and real skin texture.
HAIR important: dark brown/black MID-HIGH PONYTAIL with softly wavy length falling behind shoulder, simple discreet tie, NO braid. TWO face-framing curtain-bang sections, one each side; finer natural wisps at temples/in front of ears (soft sideburn strands), and loose delicate strands along NAPE. Far bang may be naturally partly occluded by profile, don't turn her toward audience to show it. Don't cover screen or tapping hand with hair. Not blonde, not identical to reference model.
Action: one index fingertip gently touches ONE EXISTING product-selection control on menu, without blocking important text/branding. Natural elbow bend and comfortable reach; other hand relaxed at side. Exactly two anatomically plausible hands, no fused/extra digits, detached wrist or presenting gesture.
Kiosk screen: follow existing approved Cafe & Bakery menu visual/product pictures/categories and its reference colors/structure, rather than invent new UI. Reference-based normal-reading Ez Kyosk header/pedestal identity, directly on dark surfaces, NO white logo backing plates. No exact microtext readability demanded at thumbnail. This remains an illustrative menu, NOT actual software screenshot. Attached terminal present as hardware but NO hand/card/phone/payment interaction; no payment success, tracking QR or queue screen.
Environment/composition: clean welcoming cafe, kiosk neatly beside counter end with straight grounded base and CLEAR walkway, not littered in middle of room. Eye-level medium-wide establishing shot, normal-lens perspective, entire head/important hands/whole kiosk screen, attached terminal and complete base safely INSIDE frame. Customer can be full-body; balanced human/device scale, enough surroundings to ground scene, not distant tiny kiosk or huge foreground hero. Uncrowded, NO extra foreground/background people needed.
Finish: ultra-realistic candid editorial photo, soft natural window daylight, believable hair/pores/cotton/wood/metal, contact shadows and restrained screen reflections. Neutral photographic colors; original branding accents, no overall blue/orange filter, glamour/plastic retouch, neon effects or heavy background smearing.
Avoid: looking over shoulder, staged ad smile, exaggerated anatomy, hair braid, blonde hair, copied face, clutter, floating hardware/graphics, screen redesign, extra device/terminal, third-party shop branding, article text/watermark, HTML heading/numbers/arrows/buttons over photograph, checkout/QR/queue/collection action.
Preserve safe framing for full 4:3 website display. Original illustrative scene, not a real client installation or verified SUNMI model.
```
