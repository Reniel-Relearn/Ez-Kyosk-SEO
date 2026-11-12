# Deployment guide

The current GitHub Pages deployment at `https://reniel-relearn.github.io/Ez-Kyosk-SEO/` is a public design-review environment built from `feature/full-site-redesign`. It uses `/Ez-Kyosk-SEO` as its base path and intentionally omits `SITE_URL`, which preserves `noindex, nofollow` metadata and crawl blocking. This is not the production launch.

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
