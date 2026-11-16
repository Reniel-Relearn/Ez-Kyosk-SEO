# Hospitality & food: first industry image preview

LATEST integration: actual revised v2 image approved and integrated locally in the shared industry-card layout. V1 is superseded, not imported. Other three photographs remain pending. [V2 integration](INDUSTRY_HOSPITALITY_REVISION_V2.md) and [next Retail proposal](INDUSTRY_RETAIL_PLAN.md). No new generation or deployment in this integration pass.

Latest review revision: owner requested slimmer natural arm/sleeve proportions and organized kiosk placement beside the counter. [Corrected v2 preview and exact edit prompt](INDUSTRY_HOSPITALITY_REVISION_V2.md) is generated/saved, awaiting actual-image review before integration. V1 below is retained historical provenance, not an approved final import. No runtime edits or deployment.

Date: 16 November 2026. Owner approved the written industry-card layout direction and first image concept. Built-in ImageGen produced this first preview; actual-image review is pending. NOT integrated, pushed or deployed. Other industry images are not generated.

## Exact location and purpose

Home > Designed to adapt > Different operations. One clearer experience. > FIRST card, Hospitality & food. Environment-first hospitality context, distinct from the close-up feature images in One Connected Platform. Existing description is retained: Cafés, bakeries, restaurants, and quick-service teams can create a clearer ordering path.

## References and output

All references were viewed before generation:
1. assets/hero-kiosk-transparent-v3.webp: physical charcoal/silver kiosk, attached terminal and approved menu ONLY; no floating icons, orbit/glow or studio cutout.
2. public/assets/images/platform-self-ordering-human-v3-1080.webp: cafe lighting, photographic texture and customer/device relationship ONLY; new wider composition.
3. assets/ez-kyosk-lockup.png: original identity, not a header screenshot. Embedded generated branding is a reference-based interpretation, not a guaranteed pixel-identical logo insertion.

Built-in ImageGen used, not CLI. Original opaque 1448 x 1086 PNG retained unchanged:
C:/Users/galan/.codex/generated_images/01a1c0d8-c8e5-7a93-9967-fb113f664c04/exec-6b264adb-c747-4f50-83a1-78786235855a.png

## Saved responsive previews

Under public/assets/images/:
- industry-hospitality-v1-320.webp: 320 x 240, 25,568 bytes.
- industry-hospitality-v1-640.webp: 640 x 480, 75,470 bytes.
- industry-hospitality-v1-1280.webp: 1280 x 960, 187,240 bytes.

scripts/prepare-industry-image.mjs reuses the established Sharp encoding approach: quality 88, effort 6, smart subsampling; resize/encode ONLY, no crop/upscale/artwork compositing. Versioned targets refuse overwrite.

## Inspection and limits

Full image and 320px thumbnail inspected. Original cafe environment remains recognizable; kiosk left, adult customer center looking/touching screen, adult barista right preparing a drink. Full heads and key hands are within frame; kiosk base rests on floor, attached terminal is physically supported. No obvious extra/disconnected limbs detected at this inspection. Lower-left badge-safe corner is floor/quiet furniture space rather than a face or touch point. Daylight/wood/materials and neutral/blue wardrobe fit the approved photographic family. No embedded website text, icon badge, floating graphics or white logo backing plate.

Image is an AI-generated illustrative environment, not an actual client installation or verified software screenshot. Thumbnail establishes the setting and interaction; menu microtext is not intended as legible software UI. Owner may still revise visual details after reviewing the actual result.

Preview verification only: decoded responsive dimensions/aspect ratios, source filename and absence of industry-hospitality-v1 imports in src. No browser/build/accessibility rerun for an unimported preview; no website layout or runtime changed.

## Exact next actions

1. Owner reviews the actual image and approves it or requests a targeted revision.
2. After image acceptance, implement the approved shared Home industry-card layout: remove 01-04, photo at top, overlapping category icon, heading, visible description and bottom-aligned Explore link. Preserve single-link semantics, current copy/order/destinations and both themes. No platform-style plus/minus controls here.
3. Integrate ONLY this accepted first photograph; do not silently generate the other three. Keep remaining image areas explicitly pending without invented final artwork, and present the local layout pilot for review.
4. Test equal row heights, image/heading/CTA alignment, responsive framing, keyboard/focus/link behavior and accessibility. Any shared Solutions reuse requires confirming scope before changing that page.
5. Next image brief is Retail & shops, then Wellness & beauty, then Services & B2B, each with separate written/actual-image review.

## Exact generation prompt

```text
Use case: photorealistic-natural.
Asset type: original website industry photograph, Home > Designed to adapt > first card "Hospitality & food". Generate ONLY a photographic asset, NOT a website screenshot/card mockup.
Output: one opaque LANDSCAPE 4:3 raster image, at least 1440px wide, full-bleed with no rounded frame, icon badge or typography overlays.
Input references: Image 1 is ONLY the approved Ez Kyosk hardware, attached payment terminal and cafe-menu reference. Exclude its floating blue icons, orbit rings, glow and isolated transparent/studio composition. Image 2 supplies ONLY natural cafe daylight, photographic realism and the customer/device relationship; make a genuinely wider environment-first scene, not a crop or recreation of that close-up. Image 3 is the original Ez Kyosk identity reference, not a screenshot.
Scene: an original contemporary Philippine cafe/casual food-service interior. Warm-neutral wood, light walls, an espresso counter on the RIGHT and a few simple tables/chairs to establish hospitality. Natural white balance, not an orange filter. Exactly TWO fictional adults.
Subjects and action: one adult Filipina guest in cream/neutral unbranded clothing near the CENTER, casually browsing the kiosk with a natural touch, shoulders/head facing its screen, not presenting to the camera. One adult Filipino staff member on the RIGHT behind the coffee counter, light-blue shirt/navy apron, naturally preparing a drink, not greeting/posing for the camera. Anatomically plausible hands, wrists, reach and body/device scale.
Composition: eye-level medium-wide editorial photograph, believable normal/wide lens without ultra-wide distortion. The charcoal/silver standing kiosk occupies the LEFT THIRD, angled inward toward the customer. Include its attached physical payment terminal as in reference, not a separate transaction scene. Device width approximately 20-25% of the photograph: the business environment and people are the story, not a giant foreground product. Preserve safe margins around heads, hands, touch point and important kiosk details. Show enough pedestal/base to ground the kiosk; do not place it on a table. Keep lower-left corner visually quiet for a FUTURE HTML badge, without baking a badge or intentional empty box into the image.
Screen and identity: reference the approved cafe menu, recognizable coffee/product selections, not a new dashboard or payment-success UI. Device logos normal-reading "Ez Kyosk", reference-based kiosk/cart/orbit symbol, cyan/light contrast directly on dark header/pedestal, NO separate white logo backing plates. No mirrored branding. Screen need not have readable microtext at card thumbnail scale.
Lighting/materials: soft window daylight, realistic skin/hair/fabric, wood grain, grounded shadows, restrained glass/metal reflections. Kiosk/customer interaction in focus; coffee environment gently softer but still recognizable. Restrained blue/cyan uniform/brand accents only, neutral welcoming photographic palette.
Avoid: extra people, posed advertising gestures, detached fingers, floating hardware, cash exchange, dedicated POS/payment close-up, queue board, inventory display, laptop analytics, artificial waiting lines, third-party store branding, legible customer data, slogans/headlines/website controls, watermarks, neon halos or CGI/plastic skin.
This is an illustrative generated environment, not a real client installation or verified software screenshot.
```
