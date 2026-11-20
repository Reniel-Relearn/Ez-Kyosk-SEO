# Phase 13 publication and live verification

20 November 2026, Asia/Manila. Owner authorized separate pushes, publication, GitHub status replies, conditional issue closure and a new nontechnical feedback hub.

Live website: https://reniel-relearn.github.io/Ez-Kyosk-SEO/

## Published runtime source

Verified source: c1177b23d6140f521ad775a189e3f12d5ea82b3e. All 12 commits since 25232b0 were pushed individually in order without squashing or force-pushing. Earlier Pages jobs were superseded/cancelled by the configured concurrency policy; the final release deployment succeeded.

- [Website checks succeeded](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/actions/runs/44755053515).
- [GitHub Pages deployment succeeded](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/actions/runs/44755053615).

| Scope | Runtime commit(s) | Published result |
| --- | --- | --- |
| A | 3248f7d | Mouse navigation glows title letters twice after scrolling settles; keyboard focus and reduced-motion handling retained. |
| B | ec760bb | Configured-subpath robots advertises the correct sitemap; preview remains blocked/noindex. |
| C | f73dbe1, 7e10c9c | Approved Home alternation; light ending white-smoke; footer dark in both themes, including logo and interaction states. |
| D | e11a8d6 | Approved product/demo/quote labels, CTA role styles and left-aligned payment copy/actions; original Hero and destinations retained. |
| E | 93a2960, documentation only | Existing asset/research/launch holds preserved, not falsely marked fixed. |
| F | ba0ad76, 4d8936e | Contact/Privacy layout aligned; decorative icons; Privacy notice/body left edge aligned with Hero. Text and form behavior preserved. |

c1177b2 reconciles the historical audit records and exact-source QA guards with the approved revisions. This release record is a subsequent documentation-only update; it does not change runtime files or imply new production configuration.

## Verification

- Six public HTML documents (Home, Offers, Articles, Contact, Privacy, 404) return HTTP 200 and match the approved local build byte-for-byte by SHA256. Both referenced stylesheets match exactly.
- Live title-glow regression: 24 cases across themes, widths and motion preferences, plus replay, superseded navigation, keyboard focus and cross-page pointer intent.
- Live ending/footer regression: 30 route/width pairs in both themes, matching footer rest/hover/pressed/focus/logo colors; 24 footer and four ending scoped accessibility scans, plus two no-JavaScript checks.
- Live retained-page regression: 24 layout/content comparisons against the pre-change fixture, eight scoped accessibility scans, four no-JavaScript pages and zero preview POST requests.
- Local integrated site regression: 36 layouts, 24 sampled accessibility checks, no browser/resource errors, no real form submissions, mocked success/failure and keyboard controls passing.
- Local navigation/frame regression: 168 layouts, 72 section jumps, 16 legacy targets, 50 no-JavaScript checks, four normal-motion jumps and 68 section-frame checks.
- Additional local checks: 60 CTA route/theme/width cases; 12 surface layouts/four scoped scans; 52 payment layouts/104 cards; final product regression 36 layouts/180 panels/10 legacy detail links with content/artwork preservation.
- Root/configured-root/configured-subpath/Pages-preview builds verified for B. Final local review build remains the blocked Pages-shaped preview.

These are exercised tests, not a guarantee across every browser, backdrop or assistive technology. Existing strict scrolled-header contrast failures remain a pre-production concern; no threshold was weakened. No domain, indexing, analytics or real inquiry endpoint was enabled. No image generation or held research was performed. Private reference documents and unused artwork variants were not published.

## GitHub feedback disposition

- [Issue #30 resolution](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/30#issuecomment-7042322911): all five current requests addressed, deployed and verified; issue closed as completed after checking for new feedback.
- [Issue #1 status](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-7042322238): implemented work acknowledged; issue intentionally remains open because later platform/product/payment artwork changes, embedded-brand cleanup and search-question research are still held. Header readability remains explicit. Original comments/screenshots were preserved.
- Owner requested a new general hub titled **Feedbacks, Comments, Suggestions, Bugs** with a live link, beginner-friendly review steps, a copyable comment format, an example, privacy guidance and links to the carried-forward unfinished scope.

Next: continue collaborator review; implement held scopes only after their own approvals. Current local review remains http://127.0.0.1:4323/Ez-Kyosk-SEO/ .
