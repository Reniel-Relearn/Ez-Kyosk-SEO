# Owner guide

## Review the design

1. Start the local preview.
2. Review the homepage on both a computer and a phone.
3. Visit The product, How it works, Solutions, About us, and Request a Demo.
4. Check the wording, brand artwork, product claims, contact details, and inquiry behavior.

Use the moon/sun button beside Request a Demo to switch between dark and light mode. The site remembers the selection in the current browser. Dark is the initial default.

The homepage currently uses the owner-provided artwork in `assets/hero-kiosk-original.png`. The earlier illustrative concept is retained in `assets/hero-kiosk-concept.png` but is not displayed. Astro creates optimized web versions during the build.

## Update content

Page content lives in `src/pages`. Shared navigation and footer markup live in `src/layouts/Layout.astro`, shared styling lives in `src/styles`, and product facts and FAQs live in `src/data/product.ts`.

Original brand artwork lives in `assets/`. Keep its proportions intact and use descriptive alternative text for meaningful images. `public/favicon.png` is the browser icon derived from the official kiosk artwork. Approved messaging is recorded in `docs/WEBSITE_CONTENT.md`.

## Open a local preview

On Windows, double-click **Open EZ Kyosk.cmd** in the project folder. It rebuilds the site, starts a local background preview on port 4322, and opens the browser. The address is available only on the local computer.

For active editing, run:

```text
npm ci
npm run dev
```

For a production-style check, run:

```text
npm run build
node scripts/verify-build.mjs
npm run preview -- --port 4322
```

## Publish updates

GitHub stores the source and change history. A hosting provider can build the repository into a public site, but repository publication and website deployment are separate actions. Confirm the hosting project, production environment variables, domain, and deployment branch before enabling automatic production builds.

Keep development previews unindexed. Validate changes before committing, and review the production deployment after it completes.

## Accounts and costs

Astro and the current project dependencies are open-source. Hosting, form delivery, analytics, and domain services may have separate limits, fees, or renewal costs. No paid service is authorized by this repository alone.

## Before public launch

Confirm the business contact, privacy contact, retention period, form provider, actual product assets, availability and pricing language, and whether demo requests can be accepted. Complete provider sign-ins through their official interfaces. Never commit passwords, API keys, access tokens, or production `.env` files.
