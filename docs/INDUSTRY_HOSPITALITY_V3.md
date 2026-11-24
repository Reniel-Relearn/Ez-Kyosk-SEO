# Industries Card 1 — camera-free hardware revision

Release status update: all four Industries cards visually approved; owner authorized commit/push/deployment on 24 November. Earlier local-only statements below are implementation-stage history. See `INDUSTRIES_IMAGE_REVISION_PLAN.md` for current release status and remaining resolution queue.

24 November 2026. Local integration only; pending owner visual review. No push or deployment.

## Saved files and scope

- Master: `assets/industry-hospitality-v3-source.png` (1448 × 1086).
- Responsive WebP: `public/assets/images/industry-hospitality-v3-{320,640,1280}.webp`.
- Original v2 files and supplied hardware reference preserved.
- Only Hospitality's image stem changes in Home. Existing alt remains accurate; copy, layout, icons, links, other cards and Hero/YourAI remain unchanged.
- Built-in imagegen editing used. Sharp only resized/encoded responsive files; no cropping.

## Visual inspection

Camera/top accessory removed; continuous black casing, slim plain pedestal and matching base. Screen-header branding and cafe menu retained; side terminal remains attached. Existing cafe composition, customer interaction, barista and lighting remain recognizable. This is a generated localized revision, not a guarantee of pixel-identical preservation outside the device. At card scale the fine in-image menu/provider lettering is illustrative, not certified production UI.

## Final edit prompt

Use case: precise-object-edit. Edit target image 1: the existing 4:3 café photograph. Image 2 is HARDWARE STYLE REFERENCE ONLY. Produce a 4:3 landscape photograph at least 1280 pixels wide. Change ONLY the kiosk enclosure, stand and base in image 1. Replace its thick silver perimeter with the thin black portrait casing and narrow black central pedestal and matching black floor base of image 2, translated into image 1's existing three-quarter angle, exact screen position and plane, height and customer reach. VERY IMPORTANT: NO CAMERA, no top-mounted camera/sensor accessory bar, no mounts or protrusions above the screen. Remove the white top protrusion from image 1 and do NOT copy the camera from image 2. Natural clean continuous top casing. Remove Ez Kyosk logo from pedestal completely; pedestal is plain narrow black metal, no badge, plate, yellow stripe or blur patch. Preserve image 1's original cafe menu screen including turquoise Ez Kyosk screen-header branding, original menu layout, screen perspective and side-mounted payment terminal with its original marks. Do not copy image 2's UI or yellow logo. Preserve woman identity, cream clothes, pose, pointing finger contacting menu, barista pouring coffee, café counter, windows, plants, furniture, photographic camera position, lighting and entire landscape framing. Maintain realistic pedestal support, attached terminal bracket, materials, floor contact shadows and perspective. No extra objects, no other scene redesign, no mirroring, no text or card borders outside screen. Photorealistic localized hardware replacement.

## Next

Validation passed: production build and build verifier; 24 responsive/theme/density layouts, 96 card checks, six scoped accessibility scans, no browser/resource errors, all four contact links without JavaScript, and 72 protected original assets. Report: `artifacts/industry-hospitality-v3-report.json`. Desktop integrated screenshot visually inspected. These checks do not certify tiny generated in-image lettering or pixel-identical photographic preservation.

Owner reviews Card 1 locally. On approval, brief Card 2: remove only embedded Ez Kyosk branding from Retail POS hardware, preserving staff-facing orientation and the entire scene. No automatic publication or editing of Card 2.
