# Wellness & beauty: preview v1

## Current status: actual image approved and integrated locally

16 November 2026: owner approved the actual v1 preview after the rear-panel identity placement was explicitly flagged. Integrated ONLY the third Home > Designed to adapt photograph using existing industry-wellness-v1 responsive assets. No new generation, crop, artwork edits or asset overwrite. First two photographs, shared layout, headings, descriptions, badge and Explore destination retained. The owner-approved rear logo remains an illustrative image choice, not verification of production hardware. Three photos now filled, Services & B2B remains the sole reserved image. Local only, no commit/push/deployment.

Verification completed for this THREE-image integration: production build/static checks passed with BASE_PATH=/Ez-Kyosk-SEO, including all nine responsive image dimensions and built/public SHA256 equality. Updated industry browser suite decodes/asserts all three sources and one pending fourth area; passed 24 layout/theme/density combinations (96 card checks), six section accessibility scans, keyboard/focus and all four destinations without JavaScript, with no overflow/browser/HTTP errors. Full-site regression passed 48 route/viewport checks and 32 light/dark accessibility scans; zero browser errors or failed requests. Inquiry behavior mocked, zero real inquiries sent. Desktop light and tablet dark section captures visually inspected (tall element capture retains sticky-header/focus overlay artifact, not a card-layout defect). Reports/screenshots are ignored under artifacts/industry-wellness-integrated-* and artifacts/qa-report.json. git diff --check passed. Local test server stopped after checks.

Next: [Services & B2B proposed final industry image](INDUSTRY_SERVICES_PLAN.md), awaiting separate approval; do not generate automatically. Earlier preview-only status and review notes below remain historical.

Date: 16 November 2026. Written scene approved by owner; actual image awaiting review. PREVIEW ONLY, not integrated/pushed/deployed. Built-in ImageGen used, no CLI/API fallback.

## Location and image review

Home > Designed to adapt > THIRD card, Wellness & beauty. Two fictional adult Filipinas discuss an open visual styling/care leaflet at an organized salon counter. Client LEFT in cream, adviser RIGHT in light blue/navy apron. Mirror, one styling chair and unbranded bottles establish salon context. Soft daylight and neutral materials follow the approved photographic family.

Full image and 320px WebP inspected. Both heads, key hands, leaflet and connected POS support are inside frame; hands are spatially separate with no obvious disconnected digits detected in this inspection. Adviser points toward an unlabelled hair image; client looks toward the leaflet, neither faces audience. No prices, appointment calendar, payment confirmation or identifiable customer data. Foreground includes a seated client, rather than an active treatment.

IMPORTANT DEVIATION FOR OWNER REVIEW: output shows an Ez Kyosk identity on the rear of the staff-facing POS, not an oblique SCREEN glimpse as proposed. No claim that this rear mark is physically verified on production hardware. Retained as an actual-image review candidate in light of owner's explicit preference for the logo-bearing Retail version; NOT silently treated as approval for this new image. Brand rendering is generative, not a pixel-identical composite of the asset. Adviser styling/appearance resembles the prior Retail scene despite a different-face request; do not claim proven distinct identities. Both points may be revised after actual-image feedback.

## Provenance and saved files

References inspected before generation:
1. public/assets/images/industry-retail-v1-1280.webp: photographic family ONLY.
2. assets/ez-kyosk-lockup.png: original identity artwork ONLY.
3. public/assets/images/platform-pos-checkout-v1-1280.webp: compact hardware family ONLY, not printer/studio.

Original generated PNG preserved: C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-84417e31-85bb-4e5b-b9ec-299baf822c61.png.

Source opaque 1448 x 1086 (4:3). Workspace public/assets/images:
- industry-wellness-v1-320.webp: 320 x 240, 22,190 bytes.
- industry-wellness-v1-640.webp: 640 x 480, 59,632 bytes.
- industry-wellness-v1-1280.webp: 1280 x 960, 158,664 bytes.

Existing prepare-industry-image.mjs performs resize/encoding only, WebP quality 88, no crop/upscale or manual artwork editing. Source/previous art preserved. Responsive files decoded at expected dimensions. No runtime import; no build/browser regression rerun for this preview-only pass. Earlier Retail integration tests are not claimed as new preview tests.

## Exact next actions

1. Owner reviews actual preview including rear-panel identity and human scene; request any targeted revision before integration.
2. After actual-image approval, integrate ONLY third card photo with responsive sources and illustrative alt; preserve first two photos, layout, copy, badge and Explore destination.
3. Update expected image counts to three approved/one pending; run build/static and responsive/theme/accessibility/link checks.
4. Then present exact Services & B2B fourth-image brief for separate approval. No automatic fourth image generation or remote deployment.

## Exact generation prompt

```text
Use case: photorealistic-natural.
Asset type: original website industry photograph for Home > Designed to adapt > THIRD card "Wellness & beauty". PREVIEW ONLY, not a website mockup.
Output: ONE opaque LANDSCAPE 4:3 photograph at least 1440px wide.
Input references: Image 1, approved Retail photograph, supplies ONLY photographic family (natural daylight, neutral white balance, realistic materials, restrained blue); do not copy shop, faces or product conversation exactly. Image 2 is ORIGINAL Ez Kyosk identity artwork ONLY, never redesign the logo or use a header screenshot. Image 3 is compact charcoal/silver landscape POS hardware family ONLY, not studio, printer or forced front-facing screen.
Scene/story: a calm contemporary Philippine hair/beauty salon consultation corner. Cream walls, light wood, a large mirror, ONE styling chair and neatly arranged unbranded hair-care bottles in background. Clean organized circulation. A client discusses a styling service and an optional care add-on with a salon adviser before selecting. Natural candid consultation, not payment or posed presentation.
People: exactly TWO fictional adult Filipinas, different faces from reference. Client on LEFT in simple cream/beige blouse, three-quarter profile toward adviser. Adviser on RIGHT in modest light-blue blouse and plain navy apron. Natural skin/hair, realistic adult proportions, softly defined/slender arms and controlled sleeve volume, not exaggerated thinness. No invented uniform badges.
Interaction: small clean consultation counter/table BETWEEN them. An understated physical service leaflet rests open on it, with a few abstract unlabelled visual options, no readable invented prices/treatments/package offers. Adviser gently indicates ONE option with a relaxed fingertip; client looks at SAME leaflet with relaxed small smile, one hand resting nearby. Neither looks at camera. Keep hands spatially distinct, plausible five-finger anatomy/wrists. No exchange of objects.
Device: ONE compact charcoal tablet/POS on RIGHT STAFF-SIDE counter edge, aligned and firmly supported on connected stand/base. Screen faces adviser, device secondary to consultation. Use a natural oblique side view that permits a restrained glimpse of original-reference "Ez Kyosk" idle identity on SCREEN without turning it toward the audience. No detailed software, appointment/calendar or checkout UI. Do not invent rear branding. No standing kiosk, terminal or printer.
Composition: medium-wide eye-level editorial photograph, normal-lens natural perspective, conversational rather than symmetric. Keep both full heads, important hands, leaflet and device support INSIDE frame. Salon remains recognizable at 320px. Lower-left photo edge relatively quiet for future HTML flower badge (don't bake any badge into photo).
Lighting/materials: soft side-window daylight, believable contact shadows, subtle reflections, realistic pores/hair strands/cotton/wood. Natural neutral photographic colors, restrained blue clothing/brand, no blue/orange filter, glamour retouching, plastic skin or excessive blur.
Avoid: extra people or mirror duplicates, crowded clutter, random equipment, medical/clinical props or treatment, before/after results, appointment-booking claims/calendar/slots, records, analytics, payment success, cash/card/QR-phone action, third-party brands, testimonial, prices, promotional text, website frames/controls/headlines/badges, floating graphics, watermark, bulky distorted limbs, extra/fused fingers, floating hardware.
This is an illustrative fictional industry scenario, not an actual client location or verified software screenshot.
```
