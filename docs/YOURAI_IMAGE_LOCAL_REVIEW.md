# Offers: supplied YourAI image — local review

21 November 2026. Owner approved publishing the Hero, then adding `assets/Interactive Virtual Receptionist Kiosk.png` to Offers with discretion over responsive geometry, design and animation. Hero published separately as `2d64928`; YourAI is integrated LOCALLY ONLY pending visual review/publication approval. No voice, chat, camera, identity recognition or payment functionality is added.

## Source and design

- Exact supplied source retained, 1024×1536 RGBA, SHA256 `80d034c724509dca94730d9dc7b437c1cd888ee277b39d2694d1195d2acf536e`. No ImageGen, image redraw, manual retouch, crop, rotation or perspective change. Embedded graphics and existing hardware marks are part of the supplied illustration, not verified capabilities or endorsements.
- Existing YourAI text left and kiosk image right on desktop/tablet, vertically centered; desktop image canvas maximum 360px wide (540px tall), tablet maximum 300px wide. Existing Offers gutters and compact section spacing preserved.
- At 720px and below: centered copy above a centered 240px-wide portrait image. No tilt, decorative frame, added background plate, fake live status, oversized controls or infinite animation.
- One-time 22px entrance uses existing `data-reveal` behavior. No perpetual floating/pulse. Reduced motion and no-JavaScript render normally; normal-motion test confirms final transform settles to none.
- Existing header, pricing cards/placeholders, commercial/quotation terms, CTA links and all YourAI copy remain unchanged. The optional planned future-upgrade disclosure remains prominent; pricing and availability are not finalized. The pictured Tap to talk/QR controls are static pixels, not interactive website actions.

## Implementation

`src/pages/offers.astro`: import the supplied asset with Astro Image, add one semantic figure and a scoped two-column wrapper around the existing YourAI block. Accurate alt describes a virtual receptionist illustration for the planned upgrade. Lazy loading, async decoding, intrinsic 480×720 fallback and WebP quality 84; responsive widths 240/360/540/720 plus 480px fallback. Optimized variants approximately 9–42KB; no dependencies added.

`src/styles/offers.css`: scoped YourAI grid, original image proportions, contain fit, phone stacking and aligned copy. No global/shared CSS edits. `scripts/verify-build.mjs` protects exact supplied-source bytes, single visual, all five variants and future-only behavior. `scripts/qa-yourai-visual.mjs` compares the original pricing/final CTA and YourAI copy against the published Hero commit, then tests layout, themes, no-JavaScript and reduced/normal motion.

## QA

- Production build and static verifier passed; original source hash unchanged.
- YourAI: 32 responsive/theme/JavaScript-on/off layouts, four scoped accessibility scans, normal-motion entrance settles, no errors. Initial QA assumed header gutters matched Offers sections; verified the pre-existing difference and corrected the comparison to the existing Offers-section gutters without editing the header.
- Existing Offers: 18 layouts, four accessibility scans, five no-JavaScript Contact links, unchanged prices/terms/actions and Home preservation passed.
- Full site: 36 layouts, 24 accessibility scans, no browser errors or failed requests, zero preview submissions; mocked form success/failure and keyboard/menu/tabs/theme checks passed. Existing header-readability concern remains separately pending.
- Desktop light and phone dark screenshots visually inspected. Evidence: `artifacts/yourai-visual/report.json`, `1440-light.png`, `390-dark.png`, `artifacts/phase11/report.json`, `artifacts/qa-report.json`.

Local review: `http://127.0.0.1:4323/Ez-Kyosk-SEO/offers/` → Meet YourAI. Next: owner visual review, requested refinements, then separate publication approval. H2–H4 remain held; no issue closure authorized.
