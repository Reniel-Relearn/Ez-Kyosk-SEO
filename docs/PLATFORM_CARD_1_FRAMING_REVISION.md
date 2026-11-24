# Platform Card 1 — hide stand floor base

24 November 2026. Owner visually approved the framing-only follow-up to PR #53 and subsequently authorized publication. Publish in its own follow-up PR/squash commit, excluding unrelated local notes and paused trials.

Implementation: wrap only the `platform-ordering` photograph in a clipped 3:4 frame. Apply a positive 1.10 scale anchored at top center, placing the floor/base plate below the visible photo boundary. Original source/derivatives, screen UI/logo, camera-free hardware and scene remain untouched; no image regeneration or raster editing. Shared card dimensions, heading/body, native disclosure behavior and the other four images remain unchanged.

Files: `src/components/PlatformImageCard.astro`, `src/styles/platform-section.css`. Tests recognize the exact authorized wrapper/positive crop for Card 1 while retaining uncropped/untransformed checks for other cards and original golden asset hashes. No baseline fixtures reset. Build/static verification passes; responsive/state/keyboard/accessibility/no-JavaScript suite runs through `scripts/qa-platform-card.mjs`, screenshots prefixed `platform-base-hidden`.

Validation completed: 160 card-state checks, 640 independent-expansion/alignment cases, 40 accessibility scans and no-JavaScript behavior passed with no browser/resource errors. All 72 protected original assets retained. Phone light and desktop dark screenshots visually inspected: floor plate is hidden and the plain vertical stand reaches the lower photo edge. An initial browser attempt found the old local server stopped; restarting the static review server resolved that environment issue.

Review: http://127.0.0.1:4323/Ez-Kyosk-SEO/ → One Connected Platform → first card. Check floor plate is invisible, vertical stand continues into the bottom boundary, kiosk top remains visible, image fills its frame and headings/controls stay aligned in both themes. Revert this local wrapper/CSS change to restore the exact published v5 framing; original artwork is preserved.
