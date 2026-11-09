# EZ Kyosk marketing website

A separate Astro marketing website for EZ Kyosk. This repository contains no ordering, payment, POS, or inventory application.

## Run locally

Install Node.js 24 or a compatible current version, then run `npm ci` and `npm run dev`. Open the local address printed by Astro. Use `npm run build` to create the deployable `dist` folder and `npm run preview` to inspect that build.

## Configuration

Copy `.env.example` to `.env` for local configuration. Keep real environment values out of version control.

- `SITE_URL` is the public production origin. Builds without it intentionally remain unindexed.
- `PUBLIC_FORM_ENDPOINT` is an approved managed form endpoint.
- `PUBLIC_CONTACT_EMAIL` is the public business contact address.

## Validate

Run `npm run build` and `node scripts/verify-build.mjs` before publishing. The repository workflow runs the same checks for changes to `main` and for pull requests.

## Launch status

The design and content are implemented. Inquiry delivery and production hosting need authorized accounts and confirmed business details. Without `SITE_URL`, builds deliberately carry noindex metadata and disallow crawling. Do not enable indexing on an unfinished preview.

See [the owner guide](docs/OWNER_GUIDE.md), [progress](docs/DEVELOPMENT_PROGRESS.md), and [deployment guide](docs/DEPLOYMENT_GUIDE.md).
