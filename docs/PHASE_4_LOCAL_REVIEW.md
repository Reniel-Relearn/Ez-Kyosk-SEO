# Phase 4: One Connected Platform

Date: 20 November 2026, Asia/Manila.

Status: local result and compact-spacing refinement accepted, published and live verified on 20 November. Phase 4 COMPLETE; see [release and closure](PHASE_4_RELEASE.md). Review steps below are retained as implementation history. Phase 5 implementation remains unapproved; its action plan now includes compact top/bottom spacing.

Local review: http://127.0.0.1:4323/Ez-Kyosk-SEO/

## Post-release local correction requested during Phase 5 review

Publication closure, 20 November: final continuous-heading/word-spacing correction published separately as ca34718; both workflows succeeded and 640 live alignment/heading cases plus no-JavaScript passed before Phase 5 was pushed. See [separate release evidence](PHASE_5_RELEASE.md). Earlier local-only/two-line notes below are historical; the final title has no forced break. Current implementation authority follows the latest roadmap, not older statements in this release-history document.

Latest direction, 20 November: the owner prefers “Powerful features. Stronger together.” as one continuous heading. Removed the forced break and its narrow-phone sizing exception; retained clearer word spacing. It is one line on suitable desktop widths and wraps naturally on phones without overflow. This supersedes the two-line direction/history below. Changes remain local and preserve ongoing Phase 5 work.

Latest verification: build/static checks, 640 platform alignment cases (including single-line desktop rendering, word gap and no overflow) and the Phase 5 recheck (36 layouts, 180 panel cases, ten detail links) passed. No browser errors or source/image preservation failures. Desktop measurement/capture confirms one rendered line. No commit, push or deployment performed for this correction.

20 November: heading now explicitly breaks after “Powerful features.”, with “Stronger together.” on the second line. Source inspection confirmed an existing normal word space; scoped word spacing is slightly increased to make that separation visually clear. The sentences/meaning remain unchanged. This correction is local only and does not change the published Phase 4 release record or authorize deployment. Existing Phase 5 work remains intact. Heading tests now check the explicit break, two rendered lines and a visible measured gap between Stronger and together across responsive widths/themes.

At widths up to 360px, only this heading's font size scales slightly lower so both sentences remain single lines (30.4px at a 320px viewport). Build/static verification and 640 platform alignment cases passed, including explicit two-line/word-gap assertions and no-JavaScript behavior. Phase 5 recheck passed 36 layouts, 180 panel cases and ten detail links, with original source/image preservation. Phone/desktop heading captures under ignored `artifacts/phase4/heading-*.png` were visually checked. No push or deployment performed.

## Implemented scope

Owner-requested local spacing refinement: Phase 4 top and bottom padding now match Phase 3 at responsive 32–56px per side, replacing the shared 76–140px spacing. Side margins, internal card spacing, images, text and disclosure behavior are unchanged. The responsive alignment suite checks both compact padding values in every width/theme case.

1. Retained the One Connected Platform label and exact five-card structure/order: Self-Ordering & Payments; Order Queue & Tracking; Inventory & Availability; Reports & Insights; Cashier.
2. Replaced only the section h2, “From the first tap to the next task.”, with “Powerful features. Stronger together.”
3. Centered the section label, responsive heading and unchanged introduction. Used a readable centered introduction width and a 24px heading-to-introduction gap.
4. Centered each card title within its available title area beside its existing plus/minus control. Kept 44px controls, title/description row alignment, existing card padding and hero-aligned section margins.
5. Preserved all five existing image selections, aspect ratios, markup and asset bytes. No generated imagery, mirroring, rebranding or dashboard edits.
6. Preserved native details/summary behavior and CSS subgrid tracks. Only open cards acquire description space; closed neighbors stay compact; all-open card bottoms align within responsive rows. Mixed-state heights may differ intentionally.
7. No card-description rewriting, new capability claims, category restructure, shared-style rewrite or other section changes.

## Files and safeguards

- `src/pages/index.astro`: approved h2 replacement and Home-only stylesheet import.
- `src/styles/platform-section.css`: section heading/introduction and card title alignment only.
- `scripts/qa-platform-card.mjs`: existing comprehensive native disclosure suite plus assertions for the new exact heading, centered presentation, preserved hero margins and preservation guard.
- `scripts/phase2-preservation.mjs`: normalizes only the exact approved platform h2 back to its baseline text before comparison. The golden fixture is unchanged; all remaining platform markup/copy, other protected sections and image/style hashes remain guarded. It reports this normalization explicitly instead of claiming four byte-identical sections.
- Architecture, phase plan, roadmap and this report: local approval/status tracking.

## Verification

- Pages-subpath build and static verification passed.
- After the compact-spacing refinement, build/static verification and all 640 alignment/spacing cases plus no-JavaScript disclosures were rerun successfully. No browser errors; preservation guard passed. Evidence: `artifacts/phase4-compact-report.json`. Interaction/accessibility counts below refer to the preceding full Phase 4 run, not an additional accessibility scan for this padding-only refinement.
- Platform suite: 160 state checks over eight viewport/device-scale combinations in both themes, including exact copy, image source/ratio, no cropping/mirroring, 44px controls, plus/minus states, visible keyboard focus, Enter/Space, pointer clicks and steady hover edges.
- Alignment suite: 640 cases across ten widths (320–1920px), both themes and all 32 disclosure combinations. Closed neighbors stay at their collapsed heights; heading tracks and open-description starts align; uniform-state row bottoms align; expected one/two/five responsive rows and no overflow passed.
- 40 scoped platform accessibility scans passed. Native independent disclosures passed with JavaScript disabled at phone, tablet and desktop widths.
- Shared Home margins: 40 layouts across ten widths (320–2560px), both themes and JavaScript enabled/disabled passed, including all-open card descriptions.
- Full-site smoke regression: 36 layouts and 24 sampled accessibility scans passed. Existing menu, focus return, FAQ, product tabs, theme and mocked form success/failure behavior passed with no browser/resource errors or real submissions.
- Preservation guard passed: three protected sections unchanged, platform markup unchanged except the exact approved h2, all Home image markup and 72 protected assets/shared styles unchanged. The original golden fixture was not rewritten.
- Desktop full-section and tablet dark mixed-state captures were visually inspected. Ignored evidence: `artifacts/phase4-platform-report.json`, `artifacts/phase4-platform-*.png` and shared-margin captures under `artifacts/phase3/margins/`.

Known existing limitation: approved translucent-header contrast remains background-dependent as documented in Phase 3. This phase does not modify the header or claim full-site accessibility certification. Preview remains noindex.

Local QA captures are test evidence only, not held marketing/source screenshot work. Image generation/editing, kiosk/logo/dashboard/cashier-orientation feedback and four-card restructuring remain held and unresolved by this presentation change.

## Exact next actions

1. Review the section locally in both themes on desktop and phone: section heading/intro alignment, titles beside controls, image proportions and responsive rows.
2. Expand one card, several cards and all five; verify closed neighbors stay compact and all-open bottoms align within each row. Test plus/minus controls with pointer, Enter and Space.
3. Request corrections or approve the local result. Only after explicit deployment approval: commit approved files, push main, monitor workflows, verify live and close Phase 4. Do not automatically reply to or close GitHub issues.
4. Next proposed phase is Phase 5, Products Section on Home. Retain five tabs, icons, categories, copy and current images; center headings/supporting presentation while preserving readable lists; verify useful Contact actions and selection/Arrow/Home/End keyboard behavior; test both themes, responsive/zoom reflow and no-JavaScript content; integrate locally and stop for review. Keep image generation and overlap restructuring held. Do not begin without approval.
