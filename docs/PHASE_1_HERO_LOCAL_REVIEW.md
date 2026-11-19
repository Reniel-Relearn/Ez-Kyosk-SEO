# Phase 1: Hero Section local review

Date: 19 November 2026, Asia/Manila.

Status: OWNER APPROVED LOCAL RESULT AND AUTHORIZED DEPLOYMENT on 19 November 2026. Publication verification is in progress; this document is not itself proof of live deployment. Phase 2 has not started.

Local preview: http://127.0.0.1:4323/Ez-Kyosk-SEO/

## Approved centered-container refinement

Implemented locally after the owner's layout-reference approval. The entire two-column hero and Home header contents now share a centered content boundary, capped at 1200px. Equal side margins are 83px at 1366px, 120px at 1440px and 360px at 1920px; smaller screens retain at least 20px. The logo aligns with the hero's left boundary and the desktop header CTA with its right boundary. Backgrounds remain full-width; text stays left-aligned, artwork stays on the right and phones retain the stacked layout. Other pages' headers are unchanged; sitewide navigation architecture remains Phase 2.

Only `src/styles/home-hero.css` and corresponding assertions in `scripts/qa-home-hero.mjs` were changed for this refinement. Build/static checks and all 44 targeted combinations passed, including equal margins, the shared 1200px boundary, logo/desktop-CTA alignment and byte-preservation checks. Visually inspected the refreshed 1440px and 1920px dark screenshots. Primary CTA vertical positions remain as measured below. No copy, artwork, menu destinations or other sections changed. No publication performed.

## Verified cause and implemented correction

The header's approved 50%-alpha gradient was rendered over the plain page background. The hero's separate blue gradient started below that header, creating the marked dark band. A Home-only body hook and scoped stylesheet now extend the hero gradient upward behind the header. The header remains sticky, translucent and blur-free; controls retain full opacity and the mobile dropdown remains solid. The thin Home header divider is transparent at the hero boundary.

Reduced Home heading size from a 92px maximum to 68px, tightened responsive side gutters and vertically centered the desktop text/artwork composition. Phone content remains stacked with the two CTAs before the image. No fixed-height content clipping was added.

Removed only the Home hero note and the visible kiosk figcaption. Main heading, eyebrow, lead, audience, CTA wording/destinations and meaningful image alt remain. The footer tagline remains. All original artwork is unchanged.

## Measured first-screen results

Both themes have the same geometry. Coordinates are CSS pixels from the top of the viewport.

| Viewport | Previous heading | New heading | Previous primary CTA bottom | New primary CTA bottom |
| --- | --- | --- | --- | --- |
| 390 x 844 | 46.8px | 37.05px | 684px | 523px |
| 1366 x 768 | 90.16px | 62.84px | 757px | 634px |
| 1440 x 900 | 92px | 66.24px | 804px | 647px |
| 1920 x 1080 | 92px | 68px | 804px | 653px |

Sampled pixels immediately above/below the header boundary show a maximum dark-theme channel difference of 2 on desktop, previously 18 at 1366px; phone difference is at most 6, previously 22. These measurements describe a blended gradient, not a promise that all pixels are identical. Desktop dark and phone light after screenshots were visually inspected.

## Verification

- Pages-subpath build and static verification passed, including preserved hero heading/lead, footer tagline, alt/image transparency, preview indexing controls and links/assets.
- Targeted hero suite passed 44 layout/theme/JavaScript-state combinations at 320, 390, 720, 721, 768, 980, 981, 1024, 1366, 1440 and 1920px. No horizontal overflow; CTA first-screen checks pass at the three required viewports; phone CTA precedes artwork; sticky header, Escape/focus return, full-opacity controls and no blur pass.
- Full-site suite passed 48 layout checks and 32 sampled accessibility scans, with no browser errors or failed requests. Keyboard controls and mock-only inquiry success/failure checks pass; no live inquiry was sent.
- Product regression passed 24 layout/theme/density checks, 4 sampled accessibility scans, 20 anchor checks, 28 sticky navigation checks and 4 no-JavaScript checks.
- Preservation baseline from a0ed9df protects non-hero Home main content, exact header/footer markup, 9 other output documents and 72 referenced/source artwork and shared stylesheet files. All pass byte/hash comparisons. Historical whole-Home freeze retained, with scoped replacement assertions for this approved hero change.
- Sampled accessibility scans are not a claim of universal accessibility conformance. The approved transparent header has a known background-dependent contrast limitation; retain its existing strict worst-case contrast test and do not lower thresholds to conceal it.
- Transparent-header recheck: 352 layout/scroll checks, 32 sampled header scans, four worst-case backdrop tests and desktop no-JavaScript navigation ran without browser errors. The strict contrast test still reports 24 readability failures and exits nonzero, as expected for the existing 50%-alpha treatment. This limitation is not resolved by Phase 1; it requires a separate approved visual/accessibility decision.

Evidence generated locally under ignored `artifacts/phase1/`: `before-*.png`, `after-*.png`, before/after reports and `qa-report.json`. General regression reports remain in ignored `artifacts/`. Do not publish test artifacts or private reference documents.

## Files changed for Phase 1

- `src/pages/index.astro`: Home stylesheet/marker and removal of the hero note.
- `src/layouts/Layout.astro`: optional Home-only body hook; non-Home output unchanged.
- `src/components/HeroProduct.astro`: removal of the visible figcaption only.
- `src/styles/home-hero.css`: isolated background, type, spacing and phone CTA rules.
- `scripts/phase1-preservation.mjs`, `scripts/fixtures/home-phase1-preservation.json`: scoped preservation guard.
- `scripts/qa-home-hero.mjs`: responsive, no-JavaScript, CTA and keyboard checks.
- `scripts/qa.mjs`, `scripts/qa-product-page.mjs`, `scripts/verify-build.mjs`: updated approved hero assertions without dropping unrelated checks.
- This review document, roadmap status and phase-plan status.

Existing uncommitted architecture/planning changes and unrelated user files are preserved. No asset generation or raster editing occurred.

## Owner review and exact next gate

The owner accepted the centered-container refinement and explicitly requested deployment and a resolution reply to the matching Hero Section issue comment. Publish only Phase 1 and its supporting planning/testing documents; verify Pages before reporting complete or posting the resolution. Keep the shared feedback issue open.

1. Open the local preview and compare light/dark at the top of Home.
2. Review the blended header background, reduced typography, side gutters and text/artwork balance.
3. At desktop 1366 x 768 and phone 390 x 844, confirm buttons are visible and comfortable. Scroll, toggle theme and use the mobile menu.
4. Approve or request local corrections. After local acceptance, give explicit deployment approval for this reviewed version.
5. Only then commit scoped files, push existing main, monitor Pages, verify the live result and report Phase 1 complete.
6. Present Phase 2 Header Navigation and Page Architecture actions for separate approval. Do not start it automatically.

Image generation, research, source screenshot references and the overlapping four-card restructure remain on hold.
