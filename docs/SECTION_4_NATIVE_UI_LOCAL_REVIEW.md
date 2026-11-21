# Section 4: all native product interfaces, local review

PUBLICATION UPDATE: owner accepted all five cards and the final Card 2/4 revisions. Implementation462e4d1 is deployed and live-verified on existing GitHub Pages; [release and verification](SECTION_4_NATIVE_UI_RELEASE.md). Local-only/no-publication statements below describe earlier review stages and are superseded by this explicit release. Next is Benefits planning, not automatic implementation.

## Latest approved revisions: cashier queue and compact analytics

Owner approved the Card 2/4 revision brief. Integrated locally, no commit/push/deployment.

- Card 2 now shows **Order Queue / Cashier view** with derived Preparing3 and Ready for Pickup2 counts. Five order rows (#101,#102,#104,#105,#106), short item summaries and textual blue/cyan statuses replace the receipt/subtotal/total. Read-only; no fake status action or mandatory cashier implication.
- Card 4 now shows three derived weekly KPI tiles:132 total orders,18.9 average/day and Saturday25 peak. Compact daily line chart sits beside a Category Mix donut with an explicit35/25/22/18percent legend; HTML order-data disclosure retained. Both charts stack on narrow panels. Reduced card-specific spacing and centered, comfortably grouped left copy replace the stretched layout. Desktop visual target450–520px is enforced in QA at1440/1920px; no fixed clipping height or CSS scaling.
- Same weekly data and category percentages retained; no new revenue, growth or live-operation claim. Card 1 source/controls, Card 3 inventory, Card 5 customer tools, navigation/marketing words and inquiry links unchanged. Initial Card 1 screenshots matched exactly; unaffected desktop inventory/customer appearance and source/data also checked. Mobile full-panel image comparisons can differ by capture alignment after upstream panel heights change and are not represented as exact pixel matches.
- Updated plan, native component/data, scoped styles, verifier and queue/chart QA. Reports: artifacts/native-queue-dashboard-report.json, artifacts/native-orders-report.json and artifacts/phase5/products-report.json. Initial browser tests could not connect because the local preview server was stopped; restored the existing server and reran successfully. No application error was hidden by that restart.

The original checkout-table/large-dashboard delivery below is historical where superseded by this revision.

Final revision checks passed: build/static verification;80 responsive/theme/density checks and20 accessibility scans including desktop dashboard height;16 Card 1 interaction configurations and4 accessibility scans;36 product regression layouts/180 panels/10 legacy detail links and72 original protected assets. Zero browser errors or submissions. Desktop light/dark and phone screenshots reviewed. The full-site run recorded below belongs to the preceding all-five implementation, not a fresh run for this Card 2/4-only refinement.

21 November 2026. Owner approved Card 1 and requested applying its design/layout baseline to Cards 2–5. Canonical plan updated before implementation: [SECTION_4_NATIVE_UI_PLAN.md](SECTION_4_NATIVE_UI_PLAN.md). All five now integrated locally. Cards 2–5 await owner acceptance. No generation, commit, push, deployment or issue update.

## Delivered

1. **Self-Ordering:** approved Current Order #001, icons, working quantities and computed subtotal/total retained. No changes to NativeSelfOrdering.astro during this implementation. Quantity bounds, keyboard use and inert checkout preserved.
2. **POS & Checkout:** Checkout #001 with Dine-in badge, semantic three-item quantity/amount table, subtotal and PHP300.00 total. Read-only, no payment submission.
3. **Inventory:** semantic five-row spreadsheet, exact approved stock/units/statuses, derived tracked-items5/low-stock2 counts. Text and green/amber colors indicate status; alternating rows and wrapping preserve readability.
4. **Reports & Analytics:** Weekly overview, Total Orders132, Daily Orders trend12/18/15/22/19/25/21. Native accessible SVG with HTML data-table disclosure. Top Selling Categories35/25/22/18percent, total100. No revenue or invented integration claims.
5. **Customers:** anonymous Guest01 profile and Customer tools: Profile/Guest record; Loyalty, Promotions and Repeat orders/Configurable. No personal details, fictional points or fake action buttons.

Shared rounded themed surface, thin border, soft shadow, typography and spacing follow Card 1. Desktop copy uses comfortable460px measure, single-column features and matching outer top/bottom alignment; mobile stacks. Existing marketing words, CTAs, tab labels/icons/order and keyboard behavior preserved. No internal sample/demo labels, embedded logos or hardware imagery. All quantities/data are illustrative browser-side values, not live merchant records; no backend, payment, persistence or real customer data introduced.

## Files and preservation

- New src/components/NativeProductPanel.astro handles the four distinct interfaces; existing Card 1 stays separate.
- src/components/ProductExplorer.astro replaces four visual slots and removes its unused product-photo manifest/placeholder branch; tabs and copy unchanged.
- src/data/nativeProducts.mjs adds immutable inventory, weekly/category and customer-tool data.
- src/styles/product-native.css extends the approved baseline to all cards and adds responsive tables/chart/profile styling.
- Build verifier and browser QA now assert five native interfaces rather than four remaining photos. scripts/qa-product-image.mjs remains a compatible historical entry point, delegating to scripts/qa-native-products.mjs.
- scripts/product-native-preservation.mjs reconstructs only the five approved replaced visual slots/manifest/imports for the original source/artwork comparison. Original golden fixture, marketing/tab source,72 protected assets and shared global/hero CSS remain protected; no baseline reset. Raw source images and old responsive derivatives remain on disk, not rendered by Section 4.

## Checks

- Production build and static verifier passed: routes, links/assets, metadata/indexing, sitemap/schema and Home contracts.
- All-native visual suite:80 viewport/theme/density combinations,20 accessibility scans, exact table/chart/profile values, keyboard tabs, chart disclosure, zero page/resource errors and zero submissions. Report artifacts/native-products-report.json.
- Product regression:36 layouts with JavaScript enabled/disabled,180 panel checks and10 legacy detail links; exact marketing copy/features/CTAs and original-source/golden preservation passed. Report artifacts/phase5/products-report.json.
- Approved Card 1 interaction recheck:16 configurations and4 accessibility scans, recalculation, zero/cap bounds, keyboard, subtotal/count, inert checkout and no submissions. Report artifacts/native-orders-report.json.
- Full-site regression:36 layouts and24 accessibility scans, zero page/resource errors and zero real preview submissions. Keyboard menu/Escape/focus, FAQ, product tabs, theme, and mocked form success/failure passed. Report artifacts/qa-report.json.
- Desktop light/dark and phone screenshots visually reviewed: clear tables, status words, native chart and guest workspace; no clipping. Native chart data expands without JavaScript and remains in HTML.

Local review: http://127.0.0.1:4323/Ez-Kyosk-SEO/ → Products → inspect all five tabs (all panels stack on phones/no-JavaScript).

## Next actions

1. Owner reviews Cards 2–5 locally and reports any refinements.
2. Obtain explicit acceptance of all five and separate publication approval before commit/push/deployment.
3. Once all five are approved, plan an overhaul of Section 2, **A better way to take orders** (Benefits: Faster Ordering Experience, More Order Capacity, Better Service Flow). Do not change that section now.

No research, image generation, other Home section/page changes or deployment were included. Existing translucent-header limitations are outside this Section 4 scope.
