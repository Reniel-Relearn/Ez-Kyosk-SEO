# Section 4 Step A: native Self-Ordering local review

## Public-facing wording and desktop balance (latest)

Desktop text uses a comfortable460px reading measure and a single-column feature list in Card 1 only, keeping the existing wording/CTA. This creates natural visual height alongside the compact checkout rather than stretching short text across excessive empty gaps. Both columns share their outer top/bottom alignment. Build/static verification,16 interactive responsive/theme/JavaScript configurations,4 targeted accessibility scans and36 product regression layouts were checked for this revision; final desktop/phone screenshots recorded by scripts/qa-native-orders.mjs.

Removed Card 1's Sample Interface badge, demo/payment disclaimer and sample-order phrasing; count now reads “3 items.” Quantity calculations remain browser-only and checkout remains aria-disabled/inert. No actual checkout/payment integration added. Card 1 desktop columns now share top/bottom boundaries: the existing marketing copy is distributed vertically with deliberate spacing, and the order header/rows are more compact. Marketing text and other tabs are unchanged; mobile retains natural vertical stacking. This supersedes the visible badges/disclaimer described in older records below. Integrated locally only, no commit/push/deployment.

## Premium checkout refinement (latest owner request)

Card 1 now uses a semantic product list rather than the earlier table: Current Order #001, Dine-in and Sample Interface badges, three decorative code-native food icons, unit prices, calculated line amounts and working compact quantity controls. Subtotal and prominent total use PHP currency with two decimals; initial total PHP300.00. Added an explicitly aria-disabled royal-blue Proceed to Checkout button and visible demo-only explanation; click/keyboard activation cannot submit or navigate. Rounded themed surface, subtle border and soft shadow supersede the former transparent stroke-only appearance. No new dependency, logo, generated artwork, payment processing or changes to other panels/marketing/navigation. Existing bounds, no-JavaScript fallback and browser-only calculations remain.

Verification refreshed for this refinement: build/static verifier passed; product visual QA passed80 responsive/theme/density combinations and20 accessibility scans; preservation regression passed36 layouts/180 panels/10 legacy links, with other content and72 protected assets unchanged. Interaction QA passed16 viewport/theme/JavaScript configurations and4 accessibility scans: quantity arithmetic, zero/lower-bound protection, demo cap99, subtotal, reload/reset, keyboard controls and no real submissions. Reports: artifacts/native-checkout-premium-report.json, artifacts/native-orders-report.json and artifacts/phase5/products-report.json. Historical full-site QA below predates this appearance refinement; it is not represented as a fresh full-site run. Local only; no commit, push or deployment authorized.

## Latest follow-up: Orders-only interactive panel

Owner requested this local refinement after the initial delivery below. It supersedes the earlier logo/menu/read-only description, which remains a historical record.

- Removed the logo and menu. A single Orders table fills its container, with a thin border, zero outer padding/margin, transparent background and no shadow.
- Coffee, Sandwich and Cookie begin at quantity1, totaling PHP300. Clickable plus/minus buttons recalculate each amount, grand total and item count immediately.
- Quantities run0–99 (local demonstration guard only); zero rows remain available to re-add. Native keyboard controls and a polite status announcement are included. Tab switches preserve state; reload resets the sample.
- No checkout, network request, form submission or persistence. No-JavaScript fallback displays initial values, disabled buttons and an explanatory note.
- Other four visuals, surrounding copy/CTA, tabs, Section 3 and shared layout remain unchanged. No generation, commit, push or deployment.

Current checks: build/static verifier passed; dedicated interaction QA passed16 layouts (320/390/768/1440px, light/dark, JavaScript on/off),4 accessibility scans, zero browser errors and zero submissions. Product visual QA passed80 combinations and20 accessibility scans; product regression passed36 layouts/180 panels/10 legacy links. Desktop and mobile screenshots visually reviewed. Dedicated script: scripts/qa-native-orders.mjs; run it separately from generic visual QA to avoid report-prefix collisions.

Full-site regression also passed36 layouts and24 accessibility scans, with zero page errors, failed requests or preview submissions; keyboard navigation and mocked form success/failure passed. Reports: artifacts/qa-report.json and artifacts/native-orders-report.json (dedicated interaction rerun).

Review locally: http://127.0.0.1:4323/Ez-Kyosk-SEO/ → Products → Self-Ordering. Next: review this refinement before authorizing Card 2's unbranded native Checkout table. All-five completion and the later Benefits overhaul are still pending.

## Initial Step A delivery (superseded appearance below)

21 November 2026. Owner approved implementing Step A only. Shared native-UI foundation and Card 1 implemented locally; no image generation, commit, push, deployment or Cards 2–5 migration.

## Delivered

- Card 1 right-hand visual is now a native semantic menu list plus order table, not generated artwork/device frame.
- Original project logo retained once via existing adaptive BrandMark. Compact Sample interface / Read-only sample labels, no fake Pay button, forms, inputs or transaction action.
- Exact illustrative order: Coffee1 at PHP100, Sandwich1 at PHP150, Cookie1 at PHP50; quantity3, totalPHP300 calculated from common immutable data.
- Desktop shows Menu beside Your order; preview-width container query stacks them below430px rather than shrinking text. Actual table headers/caption/row headers and numeric alignment preserved.
- Transparent root, no decorative background, shadow or fixed image aspect. Natural height and full available grid-cell width; themed cell separators/text use existing tokens.
- Explanatory heading/body/features/CTA, five tabs/icons/keyboard behavior, compact section margins and all other Home sections unchanged.
- Remaining four cards retain their current images (POSv2, Inventoryv2, Reportsv1, Customersv1). This is an INCOMPLETE migration, not completion of all Section 4.

## Files

New NativeSelfOrdering.astro, src/data/nativeProducts.mjs and src/styles/product-native.css. ProductExplorer.astro removes first image manifest entry and selects native component; source files/images retained.

Updated build verifier and product/full-site QA for native-first/four-image transitional state. scripts/product-native-preservation.mjs reconstructs only the explicitly superseded first visual for original golden comparison and normalizes only approved component imports/branch/manifest removal. Original golden fixtures, data/icon/component remainder and 72 protected assets not reset or modified. Original shared global.css/home-hero.css unchanged.

## Checks

Build/static verification passed. Product section checks passed36layouts,180panel checks,10legacy detail links, both themes and no-JavaScript layout. Product visual checks passed80responsive/theme/density combinations and20accessibility scans; exact native data/semantic/no-frame assertions added and final rerun recorded below.

Final strengthened rerun passed all80combinations/20accessibility scans, including exact header/row values, row scopes/caption, one original-logo image only, no fake controls, transparent background, automatic aspect ratio and no shadow. Sample data arithmetic/immutability checks and final golden preservation passed; git diff --check passed. Reports: artifacts/native-self-ordering-step-a-report.json, artifacts/phase5/products-report.json and artifacts/qa-report.json (full-site script output).

Full-site browser regression passed36layouts and24sampled accessibility scans, keyboard menu/Escape/focus/FAQ/product tabs/theme and mocked form success/failure, with zero page/resource errors and zero real preview submissions. Known translucent-header readability limits are not solved or waived by this work.

Desktop light/dark and mobile screenshots visually inspected: crisp HTML text, menu/order columns, numeric total, original logo and no hardware/backplate. Sticky-header overlay in full-height mobile screenshot is screenshot/scroll context, not justification to change the shared header. Mobile naturally requires vertical scrolling.

Local review: http://127.0.0.1:4323/Ez-Kyosk-SEO/ > Products > Self-Ordering.

## Exact next step, not implemented

Owner reviews Card 1 and shared shell. On approval, implement Step B's Card 2 POS & Checkout ONLY: same native styling, a single unbranded Checkout / Sample order table with Item/Qty/Amount; Coffee1/PHP100, Sandwich1/PHP150, Cookie1/PHP50, totalPHP300. No logo, hardware, printer, queue board, duplicated panel, payment-success claim or fake checkout action. Preserve existing left-side copy/CTA and tab behavior. Test local light/dark/mobile/keyboard/no-JavaScript/table semantics and return before Card 3.

Reminder retained: after ALL FIVE native Section 4 cards are complete and approved, remind owner to plan the Benefits section “A better way to take orders” overhaul. No Benefits change or publication authorized now.
