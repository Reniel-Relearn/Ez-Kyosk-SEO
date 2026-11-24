# Hero v6 — logo-free screen and refined supporting icons

24 November 2026. Local integration only; no commit, push or deployment authorized for this revision. Supersedes v5's instruction to retain the screen-header logo. Benefits remains separately committed locally as `fe76ab6`.

## Saved assets and scope

- Edit target: `assets/hero-kiosk-hardware-v5.webp`; original and earlier versions preserved.
- Built-in imagegen edit, transparent background. Master: `assets/hero-kiosk-hardware-v6-source.png` (1024 × 1536).
- Encoded asset: `assets/hero-kiosk-hardware-v6.webp`, WebP quality 92/alpha quality 100. Sharp used only for encoding, not raster editing.
- Remove the complete screen-header icon/wordmark and collapse its branding band. Café banner/menu moves upward; recovered space is distributed through the interface, retaining compact EN/globe control.
- Refine four existing floating tiles: cart, QR, dining and Visa/Mastercard. Preserve their arrangement, blue/white palette, golden rays and orbit.
- Preserve camera-free black enclosure, general facing, slim unbranded pedestal/base and attached terminal. No manufacturer/model certification implied. This is generated marketing artwork, not an exact production-software screenshot; UI typography needs owner visual approval.
- Only runtime change: HeroProduct's imported image. Site logo, text, layout, other images and paused accent experiments remain unchanged.

## Exact built-in imagegen prompt

Use case: precise-object-edit. Input image is the EDIT TARGET: transparent portrait Hero illustration. Make these two changes only. 1) Kiosk software: remove the complete Ez Kyosk icon and wordmark from top screen header. Collapse the now-unneeded tall black branding band; move Cafe & Bakery / Order Here banner upward to the top of the usable screen with a compact EN/globe control at upper right. Redistribute the reclaimed space through banner/menu/product/cart rows with consistent margins, aligned plus controls, clear typography, no blank header strip, no awkward whitespace and no overlaps. Keep existing cafe menu style, products/prices, cafe food photos, the two-item order and correct total 280 pesos (160 latte +120 butter croissant), bottom Pay & Order button. Do not add replacement logo or new text branding. Follow exact physical screen perspective, natural screen boundaries, no clipping or UI outside bezel. 2) Refine FOUR floating tiles only: shopping cart upper left, QR upper right, dining table/chairs lower left, Visa/Mastercard payment lower right. Retain their overall positions, scale and general poses but refine into coherent premium 3D product icons: clean rounded-square edges, consistent depth/perspective/material lighting, sharp simple white symbols, balanced padding. Cart/QR/dining remain royal blue, payment tile remains white with its existing Visa/Mastercard marks. QR square pattern is crisp and coherent illustration, not a functional link. Preserve small golden accent rays and golden orbit. STRICT invariants: same camera-free slim black kiosk housing and three-quarter facing, screen plane, unbranded thin pedestal, base, attached payment terminal and original provider marks. No camera or top sensor bar, no pedestal branding, no added people, no background haze/clouds/smoke or scene. Preserve transparent alpha around subject and BETWEEN icons/orbit/device; never opaque black/white/checkerboard background. Same portrait 2:3 framing, 1024x1536 preferred, full subject no crop. Do not mirror, redesign hardware or change website layout. Photorealistic polished localized edit, preserving originals outside specified UI/tiles as closely as possible.

## Validation and review

Build and static verification passed. Targeted browser checks passed across 32 viewport/theme/JavaScript-on-off layouts with four Hero accessibility scans and no browser/resource errors. Decoded WebP alpha: 50.66% fully transparent pixels; source and three responsive derivatives pass transparency checks. Former camera position is clear; pedestal and former header-branding color guards pass. Preservation checks retain 72 protected assets and all other Home images. Desktop light/dark and mobile screenshots inspected under `artifacts/hero-hardware-v6/`. Automated color checks supplement, not replace, visual review.

Full-site browser regression also passed: 36 layout checks, 24 accessibility scans, no browser errors or failed requests, keyboard navigation and mocked form success/failure behavior intact, zero preview form submissions. The first attempt used the suite's inactive default port 4322; rerunning with the running preview URL passed.

Local review: http://127.0.0.1:4323/Ez-Kyosk-SEO/ . Review screen spacing, logo removal, four icons, transparent edges and physical geometry in both themes. Await visual approval before committing/publishing this Hero revision.
