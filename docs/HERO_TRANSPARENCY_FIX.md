# Hero transparency correction

Date: 13 November 2026. Scope: the homepage hero artwork shown in the owner's screenshot. No hero text, CTA, layout, header logo source, or other section is redesigned.

## Fix 1: remove the surrounding haze

The rejected v2 file had an alpha channel but zero fully transparent pixels, so gray/colored matte artifacts appeared over the page. A background-extraction edit produced a real cutout, preserving the kiosk, terminal, four floating icons, crisp connector arcs, and accent marks. The intermediate result was decoded and inspected on both light and dark diagnostic backgrounds before starting fix 2.

## Fix 2: remove the two white logo backing panels

A second, separate edit removed the white/light backing panels from the touchscreen header and pedestal. The device's dark material shows behind the logo; there are no transparent holes through the hardware. The logo follows the supplied original `assets/ez-kyosk-lockup.png` as its reference, with the existing dark-surface treatment (turquoise symbol/Ez and light Kyosk letters). No header screenshot is a source. Original logo/icon files are unchanged.

## Final asset and integration

- Active file: `assets/hero-kiosk-transparent-v3.webp`, 1024 x 1536, 209,428 bytes; built-in ImageGen edits, then WebP quality 92 / effort 6 optimization preserving alpha.
- `HeroProduct.astro` imports the v3 asset at the existing 420/640/900 responsive widths; optimized variants are approximately 48/84/134KB.
- The broad CSS drop-shadow on the hero image is removed. The existing page gradient and intentional CSS orbit remain; the image itself has no rectangular matte or diffuse background.
- Source and all three built variants pass decoded-pixel checks: four corners and selected empty regions are alpha=0, substantial transparent area remains, core device pixels are near-opaque, and the logo regions no longer have large white backing panels.
- Source transparent-pixel fraction: 47.84%; white-pixel fractions in the tested header and pedestal regions are approximately 4.01% and 5.29%, representing lettering/details rather than rectangular panels.
- Browser pixel checks pass in both themes at 390, 1440, and 1920px, with transparent corners, correct v3 source, no image filter, and no horizontal overflow. Actual browser screenshots were visually reviewed.

The v2 source is retained as a non-imported reference. Other artwork, including the overview card's studio composition, is outside this hero-specific correction and remains unchanged.

## Regression checks

`scripts/verify-hero-image.mjs` checks decoded pixels rather than trusting a transparency flag. `scripts/verify-build.mjs` runs it against the source and every responsive hero variant and rejects references to the old hero. Browser QA checks the loaded source and absence of the CSS filter.

The full browser regression suite passed 48 responsive route checks and 32 light/dark accessibility scans with zero violations, browser errors, or failed requests. Hero wording/layout, other sections, keyboard interactions, and inquiry behavior remain intact.

## Exact built-in ImageGen prompts

### Step 1

```text
Use case: background-extraction. Edit the supplied image, do not redesign it.
STEP 1 ONLY: create a precision cutout with a REAL transparent alpha background. Remove ALL smoky/cloudy gray, black, blue and yellow background haze, blurry glows, and the rectangular background field behind and between the objects. Every empty/background region, including all four corners and the gaps between the kiosk and floating icons, must be completely alpha=0, not a semi-transparent gray matte, checkerboard texture, fog or a painted background.
Keep exactly the same kiosk, pedestal/base, payment terminal, touchscreen menu, brand logos and their current white backing panels, four floating 3D icons, and small yellow accent marks at the same positions, sizes and portrait 2:3 framing. Preserve the sharp golden connector arcs themselves if separable, but remove their diffuse glow. Preserve white surfaces that belong to real objects, such as the Visa/Mastercard icon and the two kiosk logo backing panels; those are NOT the background for this step.
Kiosk and icons must be solid/opaque with clean anti-aliased edges. Do not make the objects translucent. Do not modify any text, menu products, prices, logos, shape, lighting on the physical objects, or relative placements. No added objects, ground plane, cast shadow clouds, white outline/halo, painted transparency, or new illustration.
Output a PNG cutout with genuine transparent pixels around the objects.
```

### Step 2

```text
Use case: precise-object-edit. Image 1 is the background-corrected kiosk cutout to edit. Image 2 is the ORIGINAL approved transparent logo asset assets/ez-kyosk-lockup.png, not a screenshot.
STEP 2 ONLY: remove the unwanted white/light rectangular backing panels behind the Ez Kyosk logos at the touchscreen header and on the pedestal. Restore the continuous dark charcoal/black device surface behind each logo. Keep the complete supplied turquoise kiosk icon + "Ez Kyosk" lockup directly on that dark surface, with NO badge, plate, sticker, white/light rectangle, border, fill or glow behind the logo. Keep the logo's background transparent; do NOT cut a transparent hole through the actual kiosk hardware. Preserve its recognizable shape and exact mixed-case "Ez Kyosk" lettering. For dark-surface readability, use the existing website dark-mode treatment: turquoise symbol and Ez, with Kyosk letters light/white, but NEVER a white rectangle around them. Match Image 2's full logo design rather than inventing a new identity.
Also restore the language selector's dark header treatment with light EN/globe text where the old white header band was.
Everything else MUST remain unchanged: genuine fully transparent background and all existing empty gaps; sharp cutout edges; same 1024x1536 portrait composition, kiosk geometry, menu layout, food photos, prices, texts, payment terminal, payment-provider marks, four floating 3D icons, golden connector arcs and small accent marks. Do not reintroduce any background haze, blur, clouds, gradients, floor, rectangular matte, shadow field, checkerboard texture or other scenery. Retain opaque objects on actual alpha=0 empty background. No extra elements, camera/composition change, watermark, or redesign.
```
