# Iterative redesign notes

Updated: 14 November 2026

Status: the owner removed action 2; all three benefit icons and the first two platform-card images/layouts are implemented. Actions 3 and 4 are documented in the visual asset plan. Action 5 and the benefit text/number cleanup are implemented and verified. Cards 3-5, other imagery, and journey changes stay pending.

These notes take precedence over earlier proposals where the design direction has changed. Keep completed implementation separate from pending redesign work.

Latest iteration: POS and checkout is now the second image-led card, using a staff-side workstation/receipt-printer image and the same number-free, edge-to-edge, plus/minus disclosure layout as Self-Ordering Experience. Its existing description remains in initial HTML, collapsed by default. Cards 3-5 and other sections stay unchanged. Next proposal only: Payments with AltPayNet. Continue one card at a time. See [PLATFORM_POS_CHECKOUT_ASSET.md](PLATFORM_POS_CHECKOUT_ASSET.md).

## Task register

| Task | Status | Scope and next action |
| --- | --- | --- |
| Remove em dashes | Done | Removed from website copy and checked in generated pages. |
| Expand content sizes and reduce side margins | Done for the current layout | Shared responsive gutters are 20px to 64px; additional card and typography adjustments remain part of iterative review. |
| Expand text widths and reduce unnecessary wrapping | Done for the reviewed payment introduction | Payment heading and description were widened and left-aligned. This does not mean adding more words or enlarging every font. |
| Finalize and apply color palette | Done and verified | Blue with subtle cyan highlights, exact theme tokens, and component states are applied in the shared stylesheet. See [COLOR_PALETTE.md](COLOR_PALETTE.md). |
| Visual assignments and shared art direction | Done as planning; first two platform cards implemented | [VISUAL_ASSET_PLAN.md](VISUAL_ASSET_PLAN.md) assigns subjects, groups, crops, reuse, and styling. Three benefit icons and the first two overview images are implemented; other imagery is pending. |
| Three benefit cards under "A better way to take orders" | Titles and all three icons implemented | Titles: "Faster Ordering Experience", "More Order Capacity", and "Better Service Flow"; 01/02/03 are removed. Kiosk/tap, merged-order-path, and sequential-flow/checkmark SVGs share the blue/cyan family and both themes. |
| Add ultra-realistic images to applicable cards | First two overview cards implemented for review | Home > From the first tap to the next task. > Self-Ordering Experience and POS and checkout have 4:3 images and expandable descriptions. Next proposal: Payments with AltPayNet; not generated. Other sections are unchanged. See [PLATFORM_POS_CHECKOUT_ASSET.md](PLATFORM_POS_CHECKOUT_ASSET.md). |
| Add visuals to "Five areas. One adaptable system." | Pending | Give each of the five product panels an appropriate, distinct visual, with accurate product/interface references where needed. |
| Update the customer journey and add images | Pending | New requested sequence: Browse -> Select -> Payment -> Get order. The existing five-step implementation has not yet changed. |
| Follow the Word document's homepage arrangement | Removed by owner | Action 2 and its dependent homepage-rearrangement step are removed. Retain the current homepage section order; the uploaded documents remain local references. |

The saved image prompt remains verbatim in [IMAGE_ASSET_PROMPT.md](IMAGE_ASSET_PROMPT.md). All three benefit icons and one realistic overview sample are implemented; remaining imagery awaits further review/work. Specifications and asset paths are in [VISUAL_ASSET_PLAN.md](VISUAL_ASSET_PLAN.md).

## Finalized palette specification

Confirmed direction: a minimalist blue interface with subtle cyan highlights on neutral light/dark foundations. [COLOR_PALETTE.md](COLOR_PALETTE.md) is the authoritative specification and is now applied to the website. Preserve the official logo artwork and its original colors.

Implemented core tokens:

| Role | Light mode | Dark mode |
| --- | --- | --- |
| Page background | `#F8FAFC` | `#080D16` |
| Card surface | `#FFFFFF` | `#111827` |
| Main text | `#0F172A` | `#F8FAFC` |
| Primary blue | `#2563EB` | `#60A5FA` |
| Subtle secondary cyan accent | `#0E7490` | `#22D3EE` |

Use neutral surfaces for most of the interface and blue for primary buttons, links, active states, and the benefit icons. Cyan appears only in small highlights, such as focus treatments or selected decorative details. It can connect the blue interface to the logo's turquoise without creating a second competing theme. Avoid a different accent color for each card.

Primary button text: white on the light-mode blue button and dark navy on the dark-mode blue button. Default-state contrast is 5.17:1 and 7.02:1 respectively. The full specification also defines hover, pressed, focus, and disabled states. Calculations cover the specified pairs only; actual component and browser review belongs to implementation.

## Benefit icon direction

- Faster Ordering Experience: touchscreen/tap symbol.
- More Order Capacity: two order slips and paths merging into a shared queue, with one cyan junction.
- Better Service Flow: connected sequential stages ending in one cyan completion checkmark.

The completed SVG icon family uses consistent stroke weight, proportions, and visual size. Each icon applies the theme's blue with one small cyan detail.

## Alignment rules for later work

- Use the finalized palette tokens for later interface and image art direction.
- Retain the current homepage arrangement; the Word-order action is removed.
- Keep a shared asset assignment list so each image explains a different benefit, capability, payment method, industry, or journey step.
- Retain consistent lighting, device references, composition standards, and proportions within each image group.
- Preserve crawlable text, responsive behavior, sticky navigation, and accessible light/dark presentation.
- Review the four-step journey against related pages and copy when implementing it, so the website does not present conflicting process descriptions.
