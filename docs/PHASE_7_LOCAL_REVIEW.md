# Phase 7: Designed to adapt / Industries

Date: 20 November 2026, Asia/Manila.

Status: owner accepted the local result and authorized Phase 7 push/deployment on 20 November, followed by local Phase 8 implementation. Publication in progress; do not mark complete until live verification. Review details below record the accepted implementation. Earlier local-only status is superseded by this approval.

- Live through Phase 6: https://reniel-relearn.github.io/Ez-Kyosk-SEO/
- Local through Phase 7: http://127.0.0.1:4323/Ez-Kyosk-SEO/

## Implemented scope

1. Centered the Designed to adapt label, section heading, introduction and four industry-card headings. Descriptions and Contact actions remain left-aligned for reading; category badges retain their original overlapping position.
2. Matched the accepted compact top/bottom baseline with `clamp(32px, 4vw, 56px)`. Retained the hero-aligned, centered 1200px maximum content boundary and equal responsive side margins. Kept the existing compact 34-44px heading scale so the complete desktop frame remains readable below the sticky header.
3. Retained Hospitality & food, Retail & shops, Wellness & beauty and Services & B2B, all descriptions, approved photos, image proportions, category icons and four/two/one-column responsive layout. No new feature claims or industry pages.
4. Retained Industries navigation, hash-free enhanced section navigation, meaningful industry targets, legacy Solutions compatibility forwards and all four existing Contact destinations.
5. Corrected an existing accessibility defect discovered during QA: the whole-card links' overriding `aria-label` omitted visible text. Removed the override so each link derives its accessible name from its unchanged visible contents. No visual wording or destination changed. Legacy heading focus has an explicit visible outline.
6. Corrected the stale industry test's retired Solutions destinations to the approved Contact actions. Preservation checks allow only the exact accessible-name attribute removal; all other component bytes, icons, approved Home image markup and protected assets remain guarded.

## Files

- `src/styles/industries-section.css`: Home-only presentation rules.
- `src/pages/index.astro`: import of that stylesheet only.
- `src/components/IndustryCard.astro`: remove the overriding accessible label only.
- `scripts/qa-industry-cards.mjs`: current destinations, scoped presentation and preservation assertions.
- This review and roadmap status records.

## Review locally

1. Open the local link and select Industries in the main navigation. Check the centered introduction/card headings and complete desktop content-frame landing.
2. Compare the section's equal side margins and compact top/bottom spacing with the preceding sections.
3. Check four desktop cards, two tablet columns and one vertical phone column, in light and dark themes. Images must remain uncropped, badges readable and descriptions/actions aligned within each row.
4. Tab to each card, check the visible focus indicator and activate it to reach Contact. Do not submit the preview form. Existing `/solutions/#hospitality` and other industry compatibility links should still reach the corresponding Home industry target.

## Verification

- Pages-subpath build and static verification passed: routes, links/assets, metadata, preview indexing controls, sitemap and Home migration contracts.
- Industry suite: 24 responsive/theme/density layouts, 96 card checks, six scoped accessibility scans and all four Contact links without JavaScript passed. Exact visible titles/descriptions, approved image sources, image loading, 4:3 frames, badges, row alignment, keyboard focus, centered headings and compact hero-aligned spacing checked. No browser/resource errors.
- Section framing: 68 desktop/narrow checks passed, including whole-frame Industries landing beneath the sticky header. Visual captures reviewed at desktop and in both themes.
- Navigation: 168 layouts, 72 section jumps, 16 legacy-route checks, 50 no-JavaScript checks and four normal-motion jumps passed.
- Shared side margins: 40 layouts across widths/themes and JavaScript/no-JavaScript passed.
- Full-site regression: 36 layouts and 24 sampled accessibility scans passed; menu/Escape/focus return, FAQ, product tabs, theme toggle and mocked form success/failure passed. No actual preview submissions or browser/resource errors.
- Preservation: protected Home sections (with the explicit accepted Phase 4 heading normalization), all Home image markup and 72 artwork/shared-style files unchanged. Industry icon unchanged; IndustryCard differs only in the audited accessible-name attribute removal.
- Phase 6 closure commit `1caf38f` passed both GitHub workflows. After the local Phase 7 build, manifest-only public checks still matched the saved Phase 6 hashes for 12 documents and both Home stylesheets. No Phase 7 changes were pushed.

Ignored QA evidence: `artifacts/industry-complete-integrated-report.json`, industry captures, `artifacts/phase2/navigation-report.json`, section-frame/margin reports, full-site QA report and `artifacts/phase6/live-release.json`. These local evidence files are not website content.

Scope limitation: sampled accessibility checks are not a full certification. The previously accepted translucent-header contrast remains background-dependent; no header design change or automated browser-toolbar zoom verification is claimed.

## Boundaries and next actions

No image generation/editing, research, new screenshots for imagery, payment-artwork corrections, issue replies/closures or Phase 8 implementation. Existing held embedded-branding corrections are not complete. No SEO ranking guarantees or search-indexing launch changes.

Next: owner reviews Phase 7 locally and requests any refinements. Only after separate publication approval: commit/push Phase 7, verify both workflows and public files, close Phase 7 and present the exact Phase 8 journey-section actions for approval.
