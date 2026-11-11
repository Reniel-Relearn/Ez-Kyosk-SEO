# EZ Kyosk marketing website

An Astro marketing website for EZ Kyosk, designed for local review before production launch. The repository contains the website only; kiosk ordering, payment, POS, inventory, and order-processing services run outside this codebase.

## Review locally

Install Node.js 24 or a compatible current version, then run:

```text
npm ci
npm run build
npm run verify
npm run preview -- --port 4322
```

Open `http://127.0.0.1:4322/`. On Windows, `Open EZ Kyosk.cmd` performs the build-and-preview workflow automatically.

For active editing, use `npm run dev`. Run `npm run qa` while a preview is available on port 4322 to execute the responsive browser, keyboard, form, image, and accessibility suite.

## Configuration

Copy `.env.example` to `.env` for local configuration. Keep real environment values out of version control.

- `SITE_URL` is the approved public production origin. Builds without it intentionally remain unindexed.
- `PUBLIC_FORM_ENDPOINT` is an approved managed inquiry endpoint.
- `PUBLIC_CONTACT_EMAIL` is the approved public business contact address.

## Current status

The full responsive redesign, product content, technical SEO foundation, preview-safe inquiry flow, and automated checks are complete for local review. Production launch remains gated by owner approval plus confirmed business/privacy details, an inquiry provider, hosting, domain, and production accounts.

See [the owner guide](docs/OWNER_GUIDE.md), [development progress](docs/DEVELOPMENT_PROGRESS.md), [project roadmap](docs/PROJECT_PLAN.md), and [deployment guide](docs/DEPLOYMENT_GUIDE.md).
