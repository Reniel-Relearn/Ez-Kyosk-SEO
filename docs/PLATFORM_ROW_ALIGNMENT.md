# One Connected Platform: responsive row alignment

Date: 16 November 2026. Owner authorized implementation, push and GitHub Pages design-review deployment of the completed five-card section.

## Issue and scoped correction

The expandable cards used align-self:start, so each card ended at its own content height. One/two-line headings and descriptions of different lengths produced uneven bottoms and paragraph starts.

The card now stretches across three shared CSS subgrid tracks: image, heading, disclosure. The body spans the latter two tracks and shares their row sizing. Tracks grow from actual content, without fixed card heights, image cropping, text truncation or JavaScript height measurement. Cards in the same responsive row share their top/bottom edges, heading areas and open-description starting line. Shorter descriptions leave natural space beneath them.

Desktop retains five columns, tablet three columns (alignment per row), mobile one column with natural content-driven height. Native details/summary controls remain independent and work without JavaScript. Existing stationary hover targets, 44px controls, theme styling, full 3:4 images, approved headings and optional-cash/configurable-report descriptions remain intact.

## Publication scope

Include the previously owner-approved five-card portraits, business-facing card copy/order, responsive component dimensions, related test expectations and documentation, plus this alignment correction. Preserve original/versioned artwork locally. Do not publish untracked owner reference PDF/DOCX, unrequested payment-source PNG, generated QA artifacts or credentials. Hero, product explorer, payment artwork, navigation and other sections are not redesigned.

Target is the existing main-branch GitHub Pages workflow, not new hosting. Pages remains a design-review preview with existing indexing controls; this is not authorization to change production-domain/SEO indexing settings.

## Verification and deployment

Local production build/static verification passed with BASE_PATH=/Ez-Kyosk-SEO. Fresh targeted browser suite passed 160 card states, 640 simultaneous alignment cases (all 32 disclosure combinations at ten widths in both themes), 40 section accessibility scans, 80 hover-edge stability checks and independent pointer/Enter/Space/no-JavaScript controls. Breakpoint edges included 720/721 and 1180/1181. Assertions cover shared row bottoms, heading boundaries and open-description starts, responsive row count, uncropped/unstretched images, no horizontal overflow and 44px controls.

Full-site regression passed 48 route/viewport checks and 32 light/dark accessibility scans, with zero reported browser errors/failed requests. No actual inquiry sent. Desktop light/dark and tablet all-expanded screenshots visually reviewed. At 1920px all five bottom coordinates matched exactly, and all five paragraph starts matched exactly. Reports/screenshots remain ignored under artifacts/platform-row-alignment-* and artifacts/qa-report.json.

The first new simultaneous-state test attempt waited on off-screen lazy images; corrected the TEST HARNESS to eagerly load all five before measuring, then reran successfully. Production image lazy loading is preserved.

Publication target: https://reniel-relearn.github.io/Ez-Kyosk-SEO/ using existing Deploy design review to GitHub Pages workflow on main push. Remote workflow result and live verification are reported in the task handoff, not inferred from local tests or merely a successful push.

## Exact next section to brainstorm

Home > Designed to adapt > Different operations. One clearer experience. > first card, Hospitality & food. Plan a wider cafe/food-service environment showing the ordering touchpoint in context, not another close-up of payment, queue, inventory or analytics. Discuss scene, human activity, crop-safe placement and shared Home/Solutions use before generation or layout changes. Subsequent industry cards follow separately; no new image generation is authorized by this deployment request.
