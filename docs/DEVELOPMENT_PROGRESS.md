# Development progress

## Current implementation

- Astro static marketing site with seven content pages, a custom 404 page, `robots.txt`, and `sitemap.xml`.
- Shared responsive navigation, footer, light/dark theme controls, and official EZ Kyosk brand assets.
- Product-focused homepage, feature overview, five-step ordering journey, industry use cases, FAQs, and demo inquiry flow.
- Inquiry previews do not transmit or persist input unless an approved managed form endpoint is configured.
- Builds without `SITE_URL` deliberately emit preview-safe noindex metadata and block crawling.
- Payment, POS, printing, and kitchen integrations are described as planned rather than currently available.

## Validation completed

- Production build and static verification for page metadata, internal links, headings, assets, robots behavior, and sitemap entries.
- Responsive browser checks at phone, tablet, desktop, and ultrawide sizes with no horizontal overflow.
- Keyboard navigation, mobile menu behavior, theme persistence, and storage-failure fallback checks.
- Preview form no-send behavior plus mocked managed-form success and failure checks; no live service was contacted.
- Automated axe accessibility scans at mobile and desktop sizes reported no WCAG A/AA violations. Automated results are not a complete accessibility certification.
- Browser runs reported no JavaScript page errors or failed page/asset requests.

Generated screenshots, reports, build output, local tools, dependency folders, and environment files are excluded from version control.

## Before public launch

- Confirm the public site URL, business and privacy contact details, retention policy, and production hosting ownership.
- Configure and verify inquiry delivery with an approved provider.
- Replace illustrative product imagery with approved production screenshots when available.
- Confirm availability, pricing language, and all integration claims.
- Run the repository checks again with the production configuration before enabling indexing.

Publishing this source repository does not by itself authorize or perform a production deployment.
