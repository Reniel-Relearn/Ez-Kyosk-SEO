# Platform Card 1 v5 — camera-free slim stand

24 November 2026. Owner approved implementation, separate PR/squash merge and publication as the first of three independently reversible changes. Only first platform image/import and exact test expectations change; other card content, photographs and expansion behavior are preserved.

## Assets and image edit

Built-in imagegen used. Edit target: `public/assets/images/platform-self-ordering-human-v4-1080.webp`. Hardware-only reference: `assets/hero-kiosk-hardware-v6.webp`. Master: `assets/platform-self-ordering-human-v5-source.png`; encoded derivatives: `public/assets/images/platform-self-ordering-human-v5-{270,540,1080}.webp`. Original assets preserved. Sharp only resizes/encodes at quality 88; no raster retouching.

Camera and mounts removed; slim plain stand, no pedestal logo. Screen branding/UI and attached terminal retained. Woman, café and pose preserved as closely as generative editing permits, not guaranteed pixel-identical. Illustrative artwork, not a certified SUNMI product photograph. Versioned original remains available.

## Exact prompt

Use case: precise-object-edit. Image 1 is EDIT TARGET, the portrait cafe photograph of a woman using a kiosk. Image 2 is HARDWARE STYLE REFERENCE ONLY, the current Hero kiosk. Edit ONLY Image 1's physical kiosk: remove the complete camera/sensor bar and mount, finish the top bezel cleanly with no camera or lens. Remove the complete pedestal Ez Kyosk logo/icon and make the stand slim, plain matte black, stable and physically connected. Match Image 2's slim camera-free dark enclosure/support family, adapted to Image 1's ORIGINAL angle, facing, screen quadrilateral and fingertip reach; do not copy Image 2's UI, pose, floating icons or background. STRICT preserve Image 1's SCREEN-header turquoise/white Ez Kyosk logo and EN control, Cafe & Bakery banner, category row, existing four products, gold plus buttons and Pay & Order. Retain attached payment terminal, provider marks, mounting bracket. Preserve woman face, hair/clip, cream blouse, navy trousers, body/arms/hands/finger position, candid gaze, cafe, plants, countertop, daylight, depth of field and framing as closely as possible. No new branding or badges. No webpage card/footer/title. No mirror or crop. Photorealistic localized edit, natural metal shadows and geometry. Portrait 3:4, preferably 1080x1440 or higher. ONLY hardware top accessory/pedestal/casing changes; do not remove screen branding or change scene.

## Verification and rollback

Build and static verifier pass for Pages-subpath configuration; native card screenshots inspected. Responsive/state/keyboard/no-JavaScript/accessibility and golden asset checks run through `scripts/qa-platform-card.mjs`; only this exact v5 substitution is normalized, with unchanged golden fixtures. Browser artifacts remain local. Preview server configuration mismatch was corrected by using the Pages-shaped static server.

Local results: 160 card-state checks, 640 independent-expansion/alignment checks, 40 section accessibility scans and no-JavaScript interaction checks passed with no browser/resource errors; 72 protected original assets retained. The image itself was inspected for camera removal, narrow plain stand, natural terminal attachment and retained screen logo/menu.

Publication: separate PR, squash merge after successful checks. To undo, revert this PR's squash commit through a new PR; preserve originals and unrelated changes. A revert deploys through Pages and is not instantaneous. Do not reset shared main or erase history.

