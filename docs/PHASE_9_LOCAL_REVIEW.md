# Phase 9: FAQs and About Us

Date: 20 November 2026, Asia/Manila.

Status: owner accepted Phase 9, including the bottom-left FAQ Contact action, and authorized publication followed by local Phases 10-12 in separate commits. Publication in progress; close only after live verification. Details below record accepted implementation history.

- Live through Phase 8: https://reniel-relearn.github.io/Ez-Kyosk-SEO/
- Local through Phase 9: http://127.0.0.1:4323/Ez-Kyosk-SEO/

## Exact approved FAQ alignment, implemented

1. Centered the existing title, label and introduction. Removed the old desktop side-by-side/sticky introduction layout. Owner-review revision: moved the unchanged Ask a different question Contact action below all ten questions, flush left with their shared text edge, with a 24px gap. It is no longer in the introduction.
2. Placed all ten native disclosures in one centered column, maximum 960px wide, within the unchanged hero-aligned outer section margins. The narrower inner reading block is deliberate; full-width section backgrounds and outer gutters remain consistent.
3. Questions and answers are explicitly **left-aligned with natural, uneven right edges, not fully justified**. Questions and answers share the same left edge. No centered answers or two-column question layout.
4. Icons share the right edge of each question row, with their original restrained blue styling and subtle row dividers. The full question row remains the native summary click/tap target, with visible keyboard focus and no nested button or icon-only target.
5. Preserved independent expansion: multiple answers can remain open; closing one does not close its neighbours. Native details/summary remains usable without JavaScript, Enter and Space retain their normal operation, and no accordion library was introduced.
6. Set readable 16px question/answer type. Answers use a bounded reading measure with comfortable line height; narrow screens reclaim answer-side padding instead of clipping text. Height grows naturally as answers expand; no fixed panel heights or forced fit into one viewport.
7. Kept every question and answer, native disclosure markup, factual payment/configuration language and Contact destination exactly unchanged. Only the Contact action's position/wrapper changed. Static FAQ/source-data preservation guards remain active; the original golden markup comparison explicitly normalizes only this relocation, leaving all original Q&As and link bytes protected. No SEO schema/copy changes or ranking guarantees added.

## About Us and shared spacing, implemented

1. Applied the accepted responsive 32-56px top/bottom section baseline to both FAQ and About. Preserved hero-aligned equal outer side margins. FAQ-to-About spacing comes from their section padding, not redundant margins.
2. Retained About's existing centered heading/introduction, centered its label and four principle headings, and matched the compact heading scale. Principle descriptions remain left-aligned. Existing four/two/one-column breakpoints remain 981px+, 721-980px and 720px or below respectively.
3. Reduced unnecessary principle-card minimum height/margins, while retaining padding and natural-height readable content. Kept the existing Contact action centered and at least 44px high.
4. Preserved the complete HomeAbout component, all four introductory paragraphs, purpose/principles, branding, section order, legacy About compatibility and Contact link. No invented history, clients, credentials or automatic feature inclusions. Standalone About remains retired.
5. Scoped new styles to Home only. No header/hero, navigation implementation, page-route, shared global stylesheet, image, metadata, contact form or other section content changes.

## Files

- `src/styles/faq-about.css`: scoped FAQ and About presentation.
- `src/pages/index.astro`: stylesheet import and approved FAQ Contact-action relocation only.
- `scripts/phase2-preservation.mjs`: normalize only the approved action relocation before the unchanged original golden comparison.
- `scripts/qa-home-faq.mjs`: exact data, alignment, spacing and interaction assertions.
- `scripts/qa-home-about.mjs`: original component/content hash, responsive layout, focus, links and accessibility.
- This review and current roadmap status records.

## Review locally

1. Scroll below the journey and Industries sections to FAQ. Check the centered introduction above the one-column list; question/answer left edges and right-edge icons should stay consistent at every width.
2. Open several answers, then all ten. Close one and verify its neighbours stay open. Try the full row, keyboard Enter/Space, and light/dark themes. Expanded text should remain comfortably readable without horizontal scrolling.
3. Inspect the gap between FAQ and About with answers closed and expanded. The height changes naturally, but the section-boundary spacing stays compact.
4. Select About Us in navigation. On suitable desktops the complete content frame should land centered below the sticky header; narrow layouts scroll naturally. Check existing facts/principles and the unchanged Contact action without submitting the preview form.

## Verification

- Pages-subpath build/static verification passed: routes, internal links/assets, original metadata, preview indexing controls, sitemap, exact FAQ content and Home migration contracts.
- FAQ: 24 width/theme combinations across 12 widths, 240 exact-answer checks, 480 keyboard toggles, four scoped accessibility scans and four no-JavaScript width/theme combinations passed. Pointer/full-row activation, closed/mixed/all-open/one-closed states, right-edge icons, shared flush-left text, centered stacked introduction/list, natural heights, no overflow and exact adjacent FAQ/About section padding passed.
- About: 22 width/theme layouts, 88 principle-card checks, four scoped accessibility scans and no-JavaScript Contact activation at 390/1440px passed. Original four introductory paragraphs and full component hash preserved; heading/intro/card alignment, existing responsive breakpoints, card bottoms, equal margins, compact spacing, visible keyboard focus and minimum 44px Contact action verified.
- Section navigation/framing: 68 regression checks passed, including complete About frame below the sticky header at desktop sizes and readable narrow fallback. Existing enhanced navigation/focus and compatibility implementation unchanged.
- Shared margins: 40 responsive/theme/JavaScript and no-JavaScript layouts passed.
- Full-site regression: 36 layouts and 24 sampled accessibility scans passed; menu/Escape/focus return, FAQ, product tabs, theme and mocked form success/failure passed. No real preview submissions or browser/resource errors.
- Preservation guard passed: protected Home section markup including exact FAQ disclosures, all Home images and 72 protected artwork/shared-style files unchanged, with explicit normalization only for the approved Phase 4 heading and Phase 9 action relocation. Product data hash protects every FAQ answer and other exported content. HomeAbout component hash protects all its existing copy, markup, branding and link.
- Desktop/mobile captures in both themes reviewed. Original header translucency is unchanged; accepted background-dependent contrast is not reclassified as a full-site accessibility pass.
- Phase 8 closure commit `f9e8129` passed both workflows. After the local Phase 9 build, independent public hashes still matched Phase 8 for 12 documents and both Home stylesheets. Phase 9 remains uncommitted/unpublished.

Ignored local evidence: `artifacts/faq-report.json` and FAQ captures, `artifacts/phase9/about-report.json` and About captures, `artifacts/phase2/frames/report.json`, margin/full-site reports and `artifacts/phase8/live-release.json`. These test artifacts are not public site content.

## Boundaries and next exact actions

No Phase 9 publication, issue replies/closures, image generation/editing, held branding corrections, research, new claims or Phase 10 implementation. Preview remains noindex/nofollow/robots-blocked. Accessibility samples are not full certification; existing translucent-header contrast remains background-dependent. Narrow CSS reflow is verified, not browser-toolbar zoom automation.

Next: owner reviews Phase 9 locally and requests refinements or separately approves publication. After approval, commit/push only Phase 9, verify both workflows/public files/live behavior, then close it. Phase 10 remains unapproved; its exact proposed actions are:

1. Retain Home's existing final demo CTA/footer, with no new Home form or unsolicited ending section.
2. Preserve Contact/Privacy routes, form fields, validation, honeypot, preview notices and the unconfigured no-send boundary.
3. Verify Request a Demo/Contact links, external kiosk demo destination and header/footer branding.
4. Refine approved ending titles/supporting presentation and compact spacing with hero-aligned Home side margins, retaining readable footer groups and existing inquiry functionality.
5. Audit footer links against the final route map and retain Privacy access; remove no approved content or invent dummy destinations.
6. Test keyboard, native validation, no-JavaScript and no-send preview. Any configured-form outcome tests must be intercepted mocks, not real deliveries. Integrate locally, review, then obtain separate publication approval.
