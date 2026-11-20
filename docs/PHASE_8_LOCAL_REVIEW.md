# Phase 8: How Ez Kyosk works

Date: 20 November 2026, Asia/Manila.

Status: accepted Phase 8 source c41e2d7 is deployed and verified live; see [release and closure](PHASE_8_RELEASE.md). Details below record the accepted local implementation. Phase 9 is approved locally only.

- Live through Phase 8: https://reniel-relearn.github.io/Ez-Kyosk-SEO/
- Local through Phase 8: http://127.0.0.1:4323/Ez-Kyosk-SEO/

## Delivered locally

1. Centered the section label, unchanged two-line heading, introduction and all six card headings. Card descriptions remain left-aligned for reading. Compact `clamp(32px, 4vw, 56px)` section padding matches preceding phases; hero-aligned equal side margins remain unchanged. Removed the journey grid's redundant top/bottom margins rather than adding hidden overflow or fixed text heights.
2. Preserved the approved single six-card desktop row from 1181px, including the accepted readable 17px heading/14px description sizes and spacing. Three columns at 1025-1180px, two at 721-1024px and one vertical column at 720px and below. Images remain full 4:3 landscape frames with containment; no carousel, transforms, page zoom or cropping.
3. Retained all six approved image assets, source selections/markup, illustrative alt text, ordered-list semantics, sequence and visible text outside images. The unchanged JourneyCard component contains no false interactive controls. No retired-guide action remains.
4. Preserved titles: Start & Select; Review & Edit Order; Choose How to Pay; Scan Your Tracking QR; Track Your Queue Status; Collect Your Order. Payment remains before tracking, with card/e-wallet or optional cashier cash; no actual payment functionality added to this marketing website.
5. Only copy correction: the fourth description is now **After payment, optionally scan the order-tracking QR to view order status.** This reflects the already-approved FAQ facts and avoids treating scanning as compulsory. The other five descriptions and all FAQ answers remain byte-preserved. Tracking QR and payment QR remain separate concepts; existing FAQ explains tracking by order number without scanning.
6. Scoped all new CSS to Home's How It Works section. Shared styles, hero/header, other section content, navigation implementation, routes, metadata and preview indexing controls unchanged.

## Files

- `src/styles/journey-section.css`: Home-only presentation/reflow.
- `src/pages/index.astro`: stylesheet import only.
- `src/data/product.ts`: exact optional tracking-QR caption correction only.
- `scripts/qa-customer-journey.mjs`: responsive presentation, exact facts/assets/component preservation, navigation and accessibility assertions.
- This review and current roadmap status records.

## Review locally

1. Select How It Works in the navigation. On a suitable desktop, the complete six-card content frame should be centered beneath the sticky header, with equal side margins and compact spacing.
2. Check all six headings, order and image details. Verify image proportions, aligned captions/card bottoms and the optional post-payment QR explanation.
3. Try a wide tablet, small tablet and phone: three, two and one columns respectively; no horizontal page scrolling or clipped wording. A tall section scrolls naturally rather than being zoomed down to fit.
4. Toggle light/dark themes. Test keyboard navigation and reduced motion. The cards are steps, not buttons; focus follows the main navigation to the section heading.

## Verification

- Pages-subpath build and static verification passed: routes, links/assets, metadata, preview indexing controls, sitemap and Home migration contracts.
- Journey suite: 30 responsive/theme/density layouts, 180 card checks and six scoped accessibility scans passed. Exact six titles/captions/order, ordered-list semantics, full image loading, source/alt preservation, uncropped 4:3 geometry, row alignment, containment, no fake controls and no horizontal page overflow checked at breakpoint edges through 1920px.
- Presentation assertions passed for centered heading/intro/card headings, exact compact vertical spacing and equal hero-aligned side margins.
- Reading without JavaScript passed at 390/1024/1440px; all six steps visible with exact captions. Normal-motion navigation passed at 390/1440px, including landing, section focus, active navigation, no URL hash and no page zoom. Main responsive suite uses reduced motion.
- Section-frame regression: 68 checks passed, including the complete six-card desktop frame below the sticky header at 1181x768 and 1366x768. Desktop and tablet visual captures inspected.
- Shared margin regression: 40 responsive/theme/JavaScript and no-JavaScript layouts passed.
- Full-site regression: 36 layouts/24 sampled accessibility scans passed; menu/Escape/focus return, FAQ, product tabs, theme toggle and mocked form success/failure passed. No real submissions or browser/resource errors.
- Preservation: all Home image markup and 72 protected artwork/shared-style files unchanged. JourneyCard and journey-image assignments unchanged. Product data is hash-guarded except the exact optional tracking caption, preserving FAQ and all other exported content. Protected Home sections retain the previously accepted Phase 4 heading normalization only.
- Phase 7 closure commit `578c8cc` passed both workflows. After the local Phase 8 build, independent public hashes still matched the saved Phase 7 release for 12 documents and both Home stylesheets. No Phase 8 source was pushed.

Ignored evidence: `artifacts/phase8-journey-report.json` and captures; `artifacts/phase2/frames/report.json`; margin/full-site reports; `artifacts/phase7/live-release.json`. These local test artifacts are not public website content.

## Boundaries and next exact actions

No image generation/editing, held embedded-branding changes, new claims, FAQ answer rewriting, issue replies/closures, Phase 9 implementation or Phase 8 publication. Existing preview remains noindex/nofollow/robots-blocked. Sampled accessibility checks are not full certification; previously accepted translucent-header contrast remains background-dependent. Narrow CSS reflow is tested, not browser-toolbar zoom automation.

Next: owner reviews Phase 8 locally and requests refinements or separately approves publication. After publication approval: commit/push only Phase 8, verify workflows/public files/live journey, record closure, then present Phase 9's exact actions for approval:

1. Preserve all ten FAQ questions and answers exactly.
2. Center FAQ heading/introduction and match compact vertical spacing/equal side margins; retain readable question/indicator alignment and independent native disclosures.
3. Test pointer/keyboard/no-JavaScript, long answers and mixed/all-open states.
4. Refine the existing Home About presentation after FAQs: center approved headings/introduction, match spacing and retain approved purpose/principles and website branding.
5. Keep standalone About retired, existing Contact actions and current factual copy; add no invented history, credentials, clients or automatic package inclusions.
6. Test navigation landing/focus, themes, reflow, exact FAQ preservation and Contact links. Integrate locally and stop for review before separate publication approval.
