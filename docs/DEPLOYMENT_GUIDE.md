# Deployment guide

The current GitHub Pages deployment at `https://reniel-relearn.github.io/Ez-Kyosk-SEO/` is a public design-review environment built from `main`. It uses `/Ez-Kyosk-SEO` as its base path and intentionally omits `SITE_URL`, which preserves `noindex, nofollow` metadata and crawl blocking. This is not the production launch.

## Home FAQ publication, 17 November 2026

Owner approved exact ten-answer FAQ draft, local integration and subsequent deployment to the existing main-branch Pages review. Include FAQ data, Home decorative-indicator markup/CSS correction, static/full-site/targeted FAQ checks and related docs only. No new article routes/content/navigation, no other page copy/hero/image/header changes, no private references or unused local artwork. [Release scope and facts](HOME_FAQ_REVISION.md); [Articles brainstorm](ARTICLES_PLAN.md) is not implemented.

Verify all approved answers in static and rendered HTML, independent native disclosure behavior at mobile/desktop in both themes, keyboard/pointer/no-JavaScript access and no row overflow. Run full-site regression and isolated staged-source build/verify before push. Wait for CI/Pages success for the actual SHA and verify live answers/stylesheet/crawl controls before reporting deployed. Preserve noindex/nofollow and robots blocking; no form activation. Known header contrast limits remain unchanged, not waived by FAQ checks.

## Header publication, 17 November 2026

Owner approved the shared50% no-blur header after local review and requested deployment plus resolution of the associated feedback comment. Publish the six scoped files only: src/styles/global.css; scripts/qa-translucent-header.mjs; docs/TRANSLUCENT_HEADER.md; docs/PROJECT_PLAN.md; docs/WIREFRAME_SPEC.md; this guide. No private reference files, unrelated assets, superseded previews or ignored QA artifacts. Main, Pages workflow, base path, unindexed design-review controls and forms remain unchanged.

Header styling is consistent across all eight routes:120deg gradient using existing blue-tint/page colours at50% alpha at both stops; no blur; controls/logo fully opaque; sticky geometry and opaque expanded mobile menu retained. Local targeted352 layout/scroll checks,80 keyboard-menu cycles,32 sampled header axe scans and12 rendered gradient-pixel samples completed without layout/browser/resource errors. Separate worst-case contrast tests have24 failures (minimum nav1.41:1); the test correctly exits1 and the owner-approved visual release is NOT an accessibility-conformance or production-launch claim. See [full record](TRANSLUCENT_HEADER.md). Do not weaken tests to make this known limit appear green.

Before reporting deployed: build/verify an isolated staged-source copy so untracked images/documents cannot leak into the artifact; run full-site regression; push only the scoped commit; verify Pages and Website checks succeed for that SHA; inspect live routes/theme/alpha/no-blur/menu/navigation and preserved indexing controls. Then reply to the original header comment6907239002 with release/checks/known limitation. Keep shared feedback hub#1 usable for new reviews; do not delete or obscure comments.

## Customer journey publication, 16 November 2026

Owner authorized pushing/deploying all six approved Home customer-journey cards and the later kiosk-perspective/payment-choice corrections. This supersedes earlier local-only/no-deployment notes for that work. Active stems: journey-start-select-v3, journey-review-edit-v5, journey-payment-v2, journey-scan-qr-v2, journey-track-queue-v1 and journey-collect-v1, each at 320/640/1280 widths. Include the Home component/data/styles, static/browser checks and related documentation only. Do not publish superseded image variants, raw generated PNGs, private design PDF/DOCX, unrelated assets or ignored QA reports.

Retain main-branch Pages workflow, /Ez-Kyosk-SEO base, preview noindex/nofollow and robots blocking, form protections and existing hero/other sections. Source provenance records use local master filenames rather than personal absolute machine paths. Prepublication checks include clean release-copy build/static verification; prior local visual, 24-combination journey and 48-layout/32-accessibility full-site checks passed. Wait for actual workflow success and verify live HTML/assets/browser behavior before reporting deployment complete.

Read-only feedback audit before publication: one open shared issue (#1), no open PRs. Translucent/low-opacity sticky header remains unaddressed; existing header has opaque background even though backdrop blur is present. Wrist gap, five human platform images and independent expansion have explicit deployed-resolution replies. This publication does not implement header feedback or close/comment on issues.

## Designed to adapt publication, 16 November 2026

Owner authorized pushing/deploying the completed four-card Home section to the existing main-branch Pages review environment. This supersedes earlier local-only/no-deployment notes for this section. Approved sources: industry-hospitality-v2, industry-retail-v1, industry-wellness-v1 and industry-services-v6, each at 320/640/1280 widths. Publish only these new images, section components/styles, checks and related planning/provenance docs. Superseded previews, generated PNG masters, source reference PDF/DOCX, unrelated local assets and ignored QA artifacts are not part of this release.

Pre-push checks: completed production build/static verification, 24 industry layout/theme/density combinations (96 card checks), six section accessibility scans and no-JavaScript links, plus 48 full-site layout checks/32 accessibility scans; no reported browser errors or failed requests. Public inquiry behavior was mocked, no real inquiry sent. Verify the new workflow run and live page after pushing; authorization and local tests alone do not establish successful publication. Keep existing base path/indexing/form controls, hero and unrelated pages unchanged. No customer-journey implementation in this release. [Next brainstorm](JOURNEY_REDESIGN_PLAN.md).

Collaborator instructions are maintained in `docs/COLLABORATOR_FEEDBACK_GUIDE.md`.

Recommended: Cloudflare Workers Static Assets, as current Astro documentation recommends Workers for new Cloudflare projects. Pages remains an option for the same static dist output.

## Cloudflare Git deployment

1. Sign into your own Cloudflare account at https://dash.cloudflare.com/.
2. Open Workers & Pages and choose to create an application/import a repository.
3. Authorize access to only Reniel-Relearn/Ez-Kyosk-SEO.
4. Select main as production branch.
5. Use npm run build as build command and npx wrangler deploy as deploy command for Workers. The included wrangler.jsonc serves dist and the custom 404 page.
6. Use the actual returned temporary URL; do not invent a hostname. Add it as build variable SITE_URL and rebuild only once launch content is ready for indexing.
7. Confirm HTTPS, all seven pages, the 404 page, robots.txt, sitemap.xml, and canonical addresses.

For Pages, use npm run build and dist as the output directory; no SSR adapter is needed.

## Inquiry configuration

PUBLIC_FORM_ENDPOINT is a public managed-form submission address. PUBLIC_CONTACT_EMAIL is an approved public email. Neither is a confidential credential. Use the provider dashboard for any secrets. Confirm commercial-use terms and quota before choosing a provider. Test a submission and verify both provider acceptance and inbox arrival. Complete privacy wording before enabling the form publicly.

## Future domain

Purchase only when the owner decides. Add the actual domain through the hosting dashboard and follow its exact DNS values. Choose one preferred hostname, configure redirects from alternatives, update SITE_URL, rebuild, and verify HTTPS and redirects. Do not guess DNS records. Verify Search Console ownership through the owner's Google account and submit the actual sitemap URL.

Official references: https://docs.astro.build/guides/deploy/cloudflare/ and https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/.
