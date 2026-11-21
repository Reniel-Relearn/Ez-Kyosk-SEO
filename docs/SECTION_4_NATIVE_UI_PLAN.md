# Section 4 Products: native interface overhaul

Date: 21 November 2026. Canonical current Section 4 plan.

## Latest approval: implement Cards 2–5 locally

Card 1 is owner-approved and remains unchanged. The owner now authorizes the remaining four native cards together, superseding the earlier one-card-at-a-time approval gates below. Implement and verify all four locally; no commit, push or deployment. No image generation.

Shared baseline: Card 1's rounded theme-aware surface, thin border, subtle shadow, compact typography, blue/cyan accents, zero outer padding and consistent inner spacing. Desktop marketing copy shares comfortable top/bottom alignment with its visual, uses a460px reading measure and single-column feature list; phones stack naturally. Keep all existing tab icons/order, marketing wording and inquiry links. Remove embedded branding and internal sample/demo-only labels from all four. Preserve honest configurable wording; do not label anything LIVE, paid or guaranteed in every package.

1. **POS & Checkout (approved revision):** Order Queue / Cashier view header; derived Preparing3 and Ready for Pickup2 counters. Semantic Order / Items / Status table: #101 Coffee1/Cookie1 and #102 Sandwich1/Coffee1 ready for pickup; #104 Coffee2/Sandwich1, #105 Coffee1/Cookie2 and #106 Sandwich2/Cookie1 preparing. Blue/cyan textual statuses, no subtotal/total or status-changing action. Keep POS & Checkout tab and marketing copy unchanged. This is a staff-facing queue overview, not a mandatory cashier step after kiosk payment.
2. **Inventory:** native Inventory / Stock overview header; semantic Item / Stock / Unit / Status spreadsheet. Coffee Beans24kg/In Stock; Paper Cups8packs/Low Stock; Fresh Milk12L/In Stock; Matcha Powder3kg/Low Stock; Sugar18kg/In Stock. Five items, two low-stock items derived from the same data. Textual green/amber statuses, subtle row separators and responsive wrapping.
3. **Reports & Analytics (approved revision):** compact Analytics / Weekly overview dashboard; three KPI tiles: Total Orders132, Average per Day18.9, Peak DaySaturday/25. Existing weekly series12/18/15/22/19/25/21 retained. Compact native SVG Daily Orders line chart beside Category Mix donut/legend (Coffee35/Pastries25/Matcha22/Espresso18percent), stacking on narrow panels. Target450–520px desktop visual height where content permits, natural growth for accessibility; do not scale the entire interface or introduce clipping/fixed-height scrolling. HTML chart-data alternative retained. Reduce stretched marketing-copy gaps specifically for this panel. No new revenue, fake performance change or integration claims.
4. **Customers:** native Customer workspace / Configurable header, anonymous Guest01 profile; Profile, Loyalty, Promotions and Repeat orders rows. Profile shows a guest record; the other tools explicitly say Configurable. No invented points balance, coupons, personal/contact details or activation claims. Semantic profile/list layout, not fake clickable controls.

Only Card 1 retains interactive quantities. Other four are readable static product visualizations, not operational merchant software. No real checkout/backend/persistence. Use semantic HTML/CSS and lightweight SVG, existing Astro architecture and no dependencies. Preserve archived image masters/derivatives without rendering them in Section 4.

Acceptance: exact data/arithmetic, unchanged Card 1/copy/tabs/CTAs, all five native panels/no active product photos, both themes,320–1920px layouts, no-JavaScript content, keyboard tabs, accessible tables/chart alternative, no clipping and zero submissions. Narrowly update obsolete image assertions and original-source normalization for these four approved replacements; preserve golden assets/unrelated source. Report local review and remaining limitations. After all five receive local approval, remind owner to plan the “A better way to take orders” overhaul; do not implement it now.

## Approved Card 1 baseline

Self-Ordering remains the approved Current Order #001 / Dine-in interface with Coffee/PHP100, Sandwich/PHP150 and Cookie/PHP50 at initial quantity1. Native icons and compact minus/quantity/plus controls update item amounts, subtotal, total and count. Values display two decimal places. Quantities cannot fall below0 and use a browser-only cap99; this is not a claim about real order limits. Zero rows remain available to re-add; tab switches retain local state; reload resets it. Keyboard/native button controls, visible focus and polite status updates remain. Without JavaScript, initial values are readable and controls disabled.

No logos, menu/catalog, internal Sample Interface/demo-only labels, real payment processing, backend, persistence or customer submission. Proceed to Checkout stays aria-disabled and inert. Existing website header/footer branding is unchanged. [Historical Card 1 iterations and local review](SECTION_4_STEP_A_LOCAL_REVIEW.md).

## Technical implementation

- ProductExplorer.astro retains category-driven tab/copy/CTA rendering and existing keyboard tab script. It renders NativeSelfOrdering for Card 1 and NativeProductPanel(kind) for Cards 2–5. No active product-photo manifest or generated placeholder branch remains.
- NativeProductPanel.astro uses purpose-specific native HTML structures: checkout/inventory tables, accessible SVG analytics with HTML data, and customer profile/tool lists. Do not force every interface into the same table.
- nativeProducts.mjs stores immutable values and derives sums/counts. The analytics period is weekly; do not mix revenue/daily/weekly metrics or use inconsistent132-order series.
- product-native.css is scoped to Home Products. Use existing theme tokens and shared baseline; no UI framework, raster table, fake device, unrelated backplate, decorative glow or global typography/margin change.
- Table captions/column and row headers, textual stock statuses, chart title/description/data table, phone wrapping and no-JavaScript content must stay accessible. Keep real inquiry links functional, but do not imply that static customer tools or checkout perform backend actions.
- Original images/raw masters stay on disk. No asset deletion, image generation or publication of unused/private sources.

## Divide-and-conquer status and gates

### A. Card 1 and baseline — approved

Completed locally and accepted by owner. Preserve its source and interaction behavior while sharing the layout foundation.

### B. Cards 2–5 — implemented locally, awaiting review

1. Update this plan with Card 1 as baseline and the exact four data/layout maps.
2. Build POS & Checkout, then Inventory, then Reports & Analytics, then Customers using native interfaces.
3. Reuse existing approved copy/CTAs and baseline styles; preserve original source/assets outside the explicit substitutions.
4. Check arithmetic, metadata/routes, tables/chart alternatives, both themes,320–1920px responsiveness, desktop copy/visual alignment, keyboard tabs and no-JavaScript access.
5. Recheck Card 1 controls and site-wide navigation/theme/form behavior. Inspect actual desktop/phone screenshots and record failures honestly.
6. Return the all-card local review and stop for owner acceptance. No automatic commit/push/deployment.

Implementation and checks complete; [current all-card review](SECTION_4_NATIVE_UI_LOCAL_REVIEW.md). Full-site/browser/product suites passed; original golden fixtures and72 protected assets were preserved without reset.

### C. Publication — completed and live-verified

Owner accepted the final visual review and authorized the release workflow. Implementation462e4d1 is deployed and live-verified; [release record](SECTION_4_NATIVE_UI_RELEASE.md). Clean staged-source root/Pages builds and local/live suites passed. No private/untracked artwork was needed. Steps below record the completed publication workflow; further changes still need their own approval.

1. Resolve any owner feedback and obtain acceptance for all five cards.
2. Obtain explicit publication authority; inspect the dirty worktree and stage only approved necessary runtime/test/documentation changes. Do not include private references or unused image masters.
3. Commit/push only as authorized, verify checks and GitHub Pages success, then inspect live interfaces before reporting deployed.
4. Update issue comments only when authorized; report held research/images/screenshots separately.

## Next milestone reminder

After all FIVE Section 4 cards are finished, reviewed and approved, remind the owner to plan the overhaul of Section 2, **A better way to take orders** (Benefits: Faster Ordering Experience, More Order Capacity, Better Service Flow).

This is not Section 3 One Connected Platform. Do not edit Benefits or other sections/pages now. The reminder is a workflow milestone, not a timed automation or implementation/deployment permission.

## Superseded material

Old generated-device/table-image proposals in SECTION_4_IMAGE_REVISION_PLAN.md and earlier per-card image records are historical, not current instructions. PRODUCT_PAGE_PLAN.md concerns the inactive standalone page and does not govern this Home section. Earlier read-only/plain-table/Card 1 logo exceptions are superseded by the approved Card 1 iterations and this current plan.
