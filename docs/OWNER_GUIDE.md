# Owner guide

## Open the local review

On Windows, double-click **Open EZ Kyosk.cmd** in the project folder. It builds the production artifact, starts a local preview on port 4322, and opens `http://127.0.0.1:4322/`.

Or run:

```text
npm ci
npm run build
npm run verify
npm run preview -- --port 4322
```

The local form intentionally does not send or save information unless `PUBLIC_FORM_ENDPOINT` is configured.

## Review checklist

Review at least one computer and one phone width.

1. Homepage: hero, benefits, platform cards, five product areas, payments, industries, How It Works, FAQ, and final CTA.
2. Product: capability wording, five deep-dive sections, AltPayNet section, and configurable-scope language.
3. How It Works: five customer steps and operational handoff.
4. Solutions: hospitality, retail, wellness/beauty, and services/B2B suitability.
5. About: purpose, scope, and principles.
6. Contact: fields, requirements copy, preview feedback, and privacy link.
7. Privacy: confirm that it accurately describes the current local-review configuration.
8. Header/footer: every internal link, Request a Demo, and the external Explore EZ Kyosk link.

Check product claims carefully. Core self-ordering, POS checkout, AltPayNet payments, real-time inventory, and order queueing/tracking are presented as operational based on owner confirmation. Expanded reports, customer tools, loyalty, promotions, hardware, integrations, printing, kitchen workflows, and other bespoke capabilities are presented as configurable or subject to assessment.

## Update content and design

- Page content: `src/pages`
- Shared product facts and FAQs: `src/data/product.ts`
- Navigation, metadata, schema, and footer: `src/layouts/Layout.astro`
- Reusable components: `src/components`
- Brand tokens, layout, and responsive styles: `src/styles/global.css`
- Original artwork: `assets`
- Approved content record: `docs/WEBSITE_CONTENT.md`
- Wireframe source: `docs/WIREFRAME_SPEC.md`

Keep brand-art proportions intact and provide useful alternative text for meaningful images. Do not add unsupported statistics, customers, ratings, pricing, compatibility, certifications, addresses, or search-ranking promises.

## Validate changes

With the preview running on port 4322:

```text
npm run build
npm run verify
npm run qa
```

The QA suite launches headless Edge and writes ignored screenshots/reports to `artifacts/`.

## Before public launch

GitHub source publication and website deployment are separate actions. Confirm the owner-approved production branch, hosting account, HTTPS domain, preferred hostname, `SITE_URL`, inquiry provider, public email, business/legal identity, privacy contact, retention and request-handling procedures, final pricing/availability language, and any analytics/consent decision. Never commit passwords, API keys, access tokens, or production `.env` files.
