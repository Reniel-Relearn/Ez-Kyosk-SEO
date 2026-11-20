# Phase 13 proposed patch scopes: approval required

20 November 2026. Owner requested local implementation and separate letter commits. Publication and issue mutation remain outside this request. Per-letter status below distinguishes implemented fixes from proposals that retain explicit design-approval gates.

## A. Pointer-navigation focus rectangle and two-pulse title glow

Status: implemented locally. `scripts/qa-title-glow.mjs` passes 24 theme/width/motion/heading cases plus replay, superseded navigation, keyboard focus and cross-page pointer intent. `scripts/qa-navigation.mjs` passes 168 layouts, 72 section jumps, 16 legacy checks, 50 no-JavaScript checks and four normal-motion jumps. Screenshots of both peaks and the intervening fade are in ignored artifacts/phase13/glow. Awaiting owner visual review; not published.

Verified from #30: native pointer clicks move focus to the correct heading but generic `:focus` styling draws the large rectangle. Input is not keyboard-focused (`:focus-visible` false), yet outline is solid 2px.

Exact proposed local actions:

1. Remove the large rectangular heading outline from mouse-click navigation, while retaining accessible keyboard focus indicators. Cover main section headings, product-detail headings and industry-detail headings consistently, not just Home. Preserve native control focus styles.
2. Preserve `tabindex=-1`, focus movement, clean URL, active navigation, scroll framing, skip-link/menu focus and legacy targets. Do not remove focus globally or weaken accessibility test thresholds.
3. After a mouse-click navigation reaches its destination and scrolling settles, animate only the destination title's letters with two successive gentle glow pulses: glow, fade, glow, fade completely. Use brand blue with a subtle cyan halo. This means two pulses, not merely two simultaneous glow layers.
4. Target approximately 1.5-2 seconds for the entire two-pulse effect, then restore the title's normal appearance. Do not add a rectangle, background flash, permanent highlight, text movement, resizing or layout shift. Preserve existing title wording and typography.
5. Replay the effect when the same navigation item is clicked again. Cancel stale pending effects when a newer navigation supersedes them so the wrong destination does not glow. Keep the implementation scoped to navigation intent rather than triggering on every focus event.
6. Under reduced-motion preferences, replace repeated pulses with one brief, steady highlight followed by a gentle fade. Keyboard navigation must retain an accessible focus indicator independently of the mouse-triggered effect; the glow is not a substitute for keyboard focus visibility.
7. Test mouse versus Enter/Space, desktop/mobile, normal/reduced motion, history, cross-page/legacy jumps and no-JavaScript, both themes and all heading target types. Verify pulse count, scroll-settled timing, replay, rapid repeated navigation, cleanup and readable text throughout. Show local screenshots and motion evidence for review before separate deployment approval.

Files: src/styles/navigation.css, src/styles/products-section.css, src/styles/industries-section.css, src/scripts/section-navigation.ts and scripts/qa-title-glow.mjs. No content/artwork changes or deployment.

## B. Configured-subpath robots sitemap URL

Status: implemented locally and verified with scripts/qa-robots-matrix.mjs. All four configurations pass the build verifier: unconfigured root, configured root, configured subpath and unconfigured Pages subpath. Local dist is restored to the blocked/noindex Pages preview. No real domain, indexing or production environment enabled.

Verified configuration-only bug: SITE_URL=https://example.test and BASE_PATH=/Ez-Kyosk-SEO generate correct subpath canonicals/sitemap entries, but robots advertises https://example.test/sitemap.xml instead of https://example.test/Ez-Kyosk-SEO/sitemap.xml. Current preview has no SITE_URL and correctly blocks indexing; it is unaffected.

Exact proposed local actions:

1. Build the advertised sitemap URL using the same sitePath/base-aware helper as sitemap entries.
2. Add a verifier assertion for the exact advertised sitemap URL, not just site-root behavior. Exercise configured root/subpath and unconfigured preview root/Pages.
3. Preserve preview Disallow:/, noindex/nofollow, empty preview sitemap and retired-route noindex. Do not set a real domain, activate indexing, add production env files or submit to search engines.
4. Verify four builds, restore the local noindex Pages review build, present results for acceptance, then obtain separate publication approval.

Files: src/pages/robots.txt.ts and relevant build/audit tests only. No metadata/copy redesign.

Separate future launch decision, not automatically included in B: configured builds currently index the reserved Articles wireframe and include it in the sitemap. Before a real SITE_URL is enabled, approve either genuine ready content or an explicit per-route noindex/sitemap-exclusion guard while the index is reserved. Current preview remains blocked and unchanged.

## C. Section-background alternation brief

Status: exact section-by-section proposal prepared in docs/PHASE_13_DESIGN_DECISIONS.md, scope C. No palette changes applied; awaiting the required map/ending selection.

Verified #30 visual request is not implemented uniformly. Suggested review mapping, not an applied change:

- Preserve approved Hero/header gradient composition.
- For subsequent Home sections, alternate two named light surfaces (white #FFFFFF and white-smoke #F5F5F5) and two existing dark surfaces (page #080D16 and surface #111827), starting with a contrasting benefits surface.
- Specify every section in order before coding, including whether the final CTA remains a deliberate dark exception. Current inverse white headings/paragraphs in Products, How It Works and ending must switch to appropriate theme text if placed on light surfaces.
- Keep brand blue/subtle cyan accents and all assets/layout/copy unchanged. Test rest/hover/text/icon contrast, card/background separation, theme persistence and no-JavaScript.
- Do not include a header-opacity change in this patch without separately approving it.

Needs owner selection/approval of the exact full section map and ending exception before local implementation. This is not a broken-route fix.

## D. CTA consistency brief

Use the captured six-route inventory to approve a role-based system: primary inquiry/demo, secondary live-kiosk exploration, contextual quote/support and navigation. Preserve real destinations and truthful distinctions (request versus actual instant demo; planned YourAI versus working voice product).

Approve exact old-to-new labels/colors/alignment per control before copy changes. Hero words remain protected unless specifically released. Keep minimum interactive targets, focus, contrast, accessible names, no-send form boundary and no fake conversion claims. Test all pages/themes/widths and final action states. No endpoint/analytics activation.

## E. Existing launch/asset holds, not hidden fixes

The approved 50%-alpha header still needs a contrast decision before production; maintain failing thresholds and current visual approval history. Do not silently change opacity or add blur. Large supplied payment PNG is a performance opportunity, but exact-original/image holds remain; a separately approved lossless derivative/format trial must preserve original assets and transparency, pass visual QA, then be reviewed. Research, article writing, embedded-brand cleanup and four-card platform overlap remain held.

## F. Request a Demo and Privacy Notice alignment

New verified feedback: [issue #30 comment, 20 November 2026](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/30#issuecomment-7040415383) requests checking and aligning the Request a Demo and Privacy Notice pages with the current website revisions. The relevant existing pages are src/pages/contact.astro and src/pages/privacy.astro. Record this as a separate scope, not an automatic extension of A.

Exact proposed local actions:

1. Audit both pages against the approved website revisions, checking shared header/navigation, content width and equal side margins, section spacing, typography, theme colors, CTA treatment, responsive layouts and keyboard accessibility.
2. Document each verified mismatch and the exact proposed correction before implementation. Coordinate CTA choices with D and header contrast decisions with E rather than silently overriding those approval boundaries.
3. Preserve existing form fields, validation, preview/no-send safeguards and submission behavior. Do not activate an endpoint, analytics or data collection as part of visual alignment.
4. Preserve truthful privacy disclosures and distinguish confirmed website behavior from production details still awaiting owner confirmation. Do not invent a provider, legal identity, retention period, privacy contact or legal assurance.
5. Once the precise corrections are approved, implement and test locally in both themes and at mobile, tablet and desktop widths. Check form preview and mocked success/failure behavior without sending real inquiries. Present both pages for owner review before separate publication approval.

Next: approve a selected local implementation scope individually. A's two-pulse visual behavior is agreed, while this turn updates documentation only. B remains separate; palette/CTA choices and F's exact page corrections need their own review. No website patch, issue mutation or deployment is included in this documentation update.
