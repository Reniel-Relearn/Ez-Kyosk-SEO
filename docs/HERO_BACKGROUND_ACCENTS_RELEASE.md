# Hero-only background accents — isolated release

24 November 2026. Owner reopened the background trial and approved implementation, a separate PR/squash merge and publication alongside the other two independent revisions.

## Scope

- Home Hero background only. Keep original underlying gradient, foreground text, buttons, imagery, spacing and all other section/card surfaces unchanged.
- Light: orange/copper #EA8A38 / #C97843, layer opacity .60. Dark: champagne/antique gold #D6B66A / #A98134 / #EAD69B, opacity .72. Tokens are local to the Hero pseudo-element, not global status/brand tokens.
- Dedicated file: `src/styles/hero-background-accents.css`. One import in Home. Original code-native masks: `assets/patterns/hero-flowing-veins.svg` and `hero-flowing-veins-mobile.svg`.
- SVGs use relative source imports through Vite, so built URLs/data URIs work under both root and /Ez-Kyosk-SEO/. No root-relative public path assumption.
- Static flowing lines/fine cracks around the edges, no kiosk halo/smoke or content recolor. Pointer events disabled, no animation, hidden in forced-colors mode. No imagegen used for these code-native accents.

## Checks

Pages-shaped build/static checks pass. Accent suite passes 16 responsive/theme layouts, four Hero accessibility scans, static/reduced-motion/forced-colors/no-JavaScript checks and rendered on/off comparisons. Foreground geometry, text, colors, underlying gradient and artwork stay identical with decoration switched off. Desktop light/dark and mobile screenshots visually inspected. Visible pixel changes: 1.37–1.41% on phones, 2.64–3.13% on desktop at a minimum channel difference of eight. No browser/resource errors; 72 original assets retained.

Combined checks: full site 36 layouts and 24 sampled accessibility scans, keyboard navigation/theme/menu/FAQs/product tabs, mocked form success/failure and zero real preview submissions pass. Benefits reversal passes 36 layouts/four scans with section surfaces intact; selective logo suite passes 84 cases and original-asset/color probes. Sampled scans do not resolve the separate known translucent-header contrast concern (#32).

## Independent release and rollback

1. Platform photograph: PR #53, squash `68cd9bd04d7ce81acc07d6019bd11871104e02de`. Revert that squash to restore the older card, not the Hero or other photographs.
2. Shared selective logo: PR #54, squash `3fea49c6e97a8f422f3be3bd75336cee928b91e1`. Original identity assets remain preserved. Revert that squash to disable this branding integration.
3. Accents: this PR, its own squash commit. Remove the Home import for a temporary local off-preview; use a new revert PR for a published rollback. Tune only local accent tokens/patterns for future adjustments.

Do not reset/force-push shared main. A rollback is a new commit, tested and deployed through Pages. If later edits touch a test expectation, reconcile that expectation with the intended feature state; do not lower contrast thresholds or undo unrelated features. No claim of instantaneous production rollback.

Related focused issue #34: this is the authorized Hero-only trial release, not authorization to spread accents across the website. Website logo and platform changes remain independently scoped in their own PRs.
