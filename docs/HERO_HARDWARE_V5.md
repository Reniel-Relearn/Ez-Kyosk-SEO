# Hero hardware v5 — camera-free slim unbranded pedestal

24 November 2026. Owner authorized local Hero-only edit/integration. No push or Hero commit; Benefits card fix committed separately as `fe76ab6`.

## Scope and saved assets

- Edit target: `assets/hero-kiosk-hardware-v4.webp`; original preserved.
- Hardware styling reference: `assets/EZ Kyosk Cafe Ordering Kiosk.png`; omit its legacy camera assembly. Reference is not proof of an exact manufactured SUNMI model. No new manufacturer/model label or hardware capability invented.
- Master: `assets/hero-kiosk-hardware-v5-source.png` (1024 × 1536).
- Optimized transparent WebP: `assets/hero-kiosk-hardware-v5.webp`.
- Built-in imagegen used; Sharp only encodes WebP quality 92/alpha quality 100, without cropping/resizing/manual raster edits. `node scripts/prepare-hero-hardware.mjs v5` preserves existing versions.
- Remove complete camera/bar/mount, slim the pedestal to the reference profile, remove pedestal Ez Kyosk logo and stripe. Retain screen-header branding and menu, terminal, existing general angle/screen plane, four supporting tiles and golden orbit. Image remains an illustrative edit, not a verified hardware photograph or pixel-identical UI screenshot.
- Only runtime change is HeroProduct's image import; original alt, dimensions/responsive widths/loading and native Hero/header/CTA layout remain. No YourAI/platform/journey/Industries edits; logo/accent trials remain disconnected.

## Final built-in edit prompt

Use case: precise-object-edit. Asset: transparent website Hero artwork. Image 1 is EDIT TARGET; image 2 is HARDWARE STYLE REFERENCE ONLY. Edit ONLY kiosk physical hardware in image 1, preserving its existing three-quarter orientation, screen plane, scale and placement in the overall portrait composition. Match the supplied reference's thin black portrait enclosure, slim plain central black metal pedestal and matching compact floor base. REMOVE the complete top camera/sensor bar and mounting stub: natural clean continuous top edge, no camera/lens/webcam/sensor accessory whatsoever. REMOVE the Ez Kyosk logo from the pedestal; stand must be slim, plain and unbranded with no badge, blur patch or yellow stripe. Keep stable realistic screen-to-stand support, perspective, side-terminal bracket, materials and base geometry. STRICTLY retain image 1's existing turquoise Ez Kyosk SCREEN HEADER branding, cafe menu design, food thumbnails, price/order text, side payment terminal and its marks. Do not copy image 2's UI or yellow branding. Do not invent a manufacturer/model label. Preserve image 1's four surrounding floating tiles (shopping cart upper left, QR upper right, dining lower left, Visa/Mastercard lower right), little golden rays and golden orbit, their positions, size and orientation. No extra icons, no new background, no glow/haze or wall. Preserve full original portrait 2:3 framing, ideally 1024x1536, no crop, no mirrors. Background MUST remain genuinely transparent alpha including gaps around tiles, ring, device and stand, no checkerboard/white/black opaque backing. High-quality realistic localized hardware edit. Only requested kiosk enclosure/pedestal/base change; all other artwork remains as close as possible.

## Review and next actions

Targeted local validation passed: build/static verifier; 32 responsive/theme/JavaScript-on-off layouts, four Hero accessibility scans, no browser/resource errors, source and all three Astro variants pass decoded-alpha checks. Master/WebP have 52.19% fully clear pixels; old pedestal solid width 263px versus new 156px at the measured 80%-height row. Former camera position is transparent and the former pedestal-branding region has no turquoise pixels. Original section/image preservation guard passes with 72 protected assets. Integrated light/dark desktop screenshots visually inspected. Report: `artifacts/hero-hardware-v5/report.json`. These geometric/color checks supplement, not replace, owner visual acceptance.

Local: http://127.0.0.1:4323/Ez-Kyosk-SEO/ . Inspect camera-free top edge, slim unbranded pedestal/base, angle, terminal, menu and transparent edges in both themes. QA includes decoded alpha, proportional slimmer stand, clear former camera position, no turquoise pedestal mark, responsive loading, preservation and scoped accessibility. These checks do not certify precise SUNMI model identity or every generated menu character.

Full-site regression also passed: 36 layouts, 24 sampled accessibility scans, no browser errors/failed requests, zero real preview POSTs, mocked inquiry success/failure and keyboard controls. Known scrolled-header contrast concern remains unresolved. Hero changes remain uncommitted for review; no push occurred.

After owner review, refine if needed; separately approve Hero commit/publication. Other image-camera consistency work is held because owner restricted this pass to Hero only. Next separate unresolved item is scrolled-header readability, unless owner reprioritizes. No automatic domain purchase, SEO rewrite or issue closure.
