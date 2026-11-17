# Home product tabs: approved publication and freeze

Date: 17 November 2026, Asia/Manila.

## Approved scope

Owner accepted the icons and explicitly authorized deployment, then freezing Home. This supersedes the earlier local-only restriction below for this scoped release. Publish the icons/tests/docs to existing main-branch Pages design review, verify live, then treat the deployed Home as frozen. No Product runtime redesign is authorized yet. Articles remains deferred. [Product page plan](PRODUCT_PAGE_PLAN.md).

Owner approved replacing visible01-05 prefixes only in Home > Explore the product > Five areas. One adaptable system. This is a local finishing change, not approval to deploy, shorten/restructure Home, modify the separate Product page or create Articles. Product-page planning follows local review; Articles is deferred.

## Implementation

- New ProductTabIcon.astro renders five lightweight inline SVG variants: touchscreen/tap indicator, checkout register, stock box, bar chart and customer pair.
- Same existing IndustryIcon outline treatment:24-unit viewBox,1.8 stroke, rounded caps/joins, currentColor. Each product icon20x20px and non-shrinking. No generated raster images, new icon package, logo alteration or external request.
- ProductExplorer imports that component in place of the numeric span. Text, tab IDs/labels, selected/tabindex states, panel relationships, initial selection and existing JavaScript remain unchanged.
- Scoped product-tab CSS makes resting icons blue and hover/selected icons match the existing text foreground in both themes. Replaces obsolete numeric-span rules; no new colours or hover effects.
- Existing breakpoints retained: above980px icons visible;721-980px labels/tabs stay but icons hidden as the old numbers were;720px and below tab bar hidden and all five product panels stacked. No forced mobile icon layout or horizontal scroll.
- All icons aria-hidden and focusable=false, with no SVG title, so screen readers continue to use the original written tab labels without redundant words/numbers.
- Static verification now asserts five decorative inline icons, correct dimensions and no01-05 prefixes; separate Product page does not receive these icons. scripts/qa-product-tab-icons.mjs covers breakpoint edges, colours, labels, pointer/keyboard, accessible names, active panel count, geometry, overflow and section accessibility.

## Preservation and review

Verification passed: production build/static checks; 20 layout/theme combinations across320/390/720/721/768/980/981/1024/1440/1920 widths,100 icon checks, pointer/arrow/Home/End controls, existing compact/mobile behavior, no document overflow and four product-section axe scans with zero reported violations. Full-site regression passed48 route/viewport checks and32 sampled accessibility scans with no browser errors/failed requests. Inquiry tests mocked, zero real submissions. Light/dark desktop tab screenshots visually reviewed. JavaScript syntax and git diff --check passed.

Section heading, paragraphs, feature lists, five approved images, links, mobile panel stacking and existing arrow/Home/End behavior retained. Original hero, header, FAQ, One Connected Platform, Payments and Product page unchanged. Known header worst-case contrast limits are separate and unchanged; do not claim whole-site accessibility conformance from icon checks.

Local preview: http://127.0.0.1:4323/Ez-Kyosk-SEO/#product-title. Reports/screenshots ignored in artifacts/product-tab-icons-*. Earlier icon implementation was local-only; subsequent owner instruction now authorizes commit/push/deployment of the scoped release, not unrelated issue mutations.

Next exact action: deploy and verify approved icons, freeze Home, then finalize/approve Product's page-specific hero/copy/visual details before editing that page. Earlier proposed Home explorer simplification is not implemented or authorized by this publication.
