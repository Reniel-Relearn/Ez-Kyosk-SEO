# Iterative redesign notes

Updated: 13 November 2026

Status: the owner removed action 2 and authorized the first two icons. "Faster Ordering Experience" and "More Order Capacity" are now integrated for owner review. Actions 3 and 4 are documented in the visual asset plan. Action 5 and the benefit text/number cleanup are implemented and verified. Better, raster imagery, and journey changes stay pending.

These notes take precedence over earlier proposals where the design direction has changed. Keep completed implementation separate from pending redesign work.

## Task register

| Task | Status | Scope and next action |
| --- | --- | --- |
| Remove em dashes | Done | Removed from website copy and checked in generated pages. |
| Expand content sizes and reduce side margins | Done for the current layout | Shared responsive gutters are 20px to 64px; additional card and typography adjustments remain part of iterative review. |
| Expand text widths and reduce unnecessary wrapping | Done for the reviewed payment introduction | Payment heading and description were widened and left-aligned. This does not mean adding more words or enlarging every font. |
| Finalize and apply color palette | Done and verified | Blue with subtle cyan highlights, exact theme tokens, and component states are applied in the shared stylesheet. See [COLOR_PALETTE.md](COLOR_PALETTE.md). |
| Visual assignments and shared art direction | Done as planning | [VISUAL_ASSET_PLAN.md](VISUAL_ASSET_PLAN.md) assigns distinct subjects, groups, crops, reuse, and icon styling. First two icons implemented; remaining assignments pending. |
| Three benefit cards under "A better way to take orders" | Text cleanup and first two icons implemented | Titles: "Faster Ordering Experience", "More Order Capacity", and "Better"; 01/02/03 are removed. The kiosk/tap and merged-order-path SVGs share the blue/cyan family and both themes. Better's icon remains pending. |
| Add ultra-realistic images to applicable cards | Pending | Plan subjects across the site to avoid redundant scenes. Benefit cards are the icon exception; not every card needs photography. |
| Add visuals to "Five areas. One adaptable system." | Pending | Give each of the five product panels an appropriate, distinct visual, with accurate product/interface references where needed. |
| Update the customer journey and add images | Pending | New requested sequence: Browse -> Select -> Payment -> Get order. The existing five-step implementation has not yet changed. |
| Follow the Word document's homepage arrangement | Removed by owner | Action 2 and its dependent homepage-rearrangement step are removed. Retain the current homepage section order; the uploaded documents remain local references. |

The saved image prompt remains verbatim in [IMAGE_ASSET_PROMPT.md](IMAGE_ASSET_PROMPT.md). Only the first two benefit icons have been authorized and implemented. Better and other imagery remain pending. Specifications and asset paths are in [VISUAL_ASSET_PLAN.md](VISUAL_ASSET_PLAN.md).

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
- Better: connected order flow with a checkmark.

Use one icon family with consistent stroke weight, proportions, and visual size. Apply the theme's blue consistently. The first two icons are implemented as SVG; Better remains a concept, not a created asset.

## Alignment rules for later work

- Use the finalized palette tokens for later interface and image art direction.
- Retain the current homepage arrangement; the Word-order action is removed.
- Keep a shared asset assignment list so each image explains a different benefit, capability, payment method, industry, or journey step.
- Retain consistent lighting, device references, composition standards, and proportions within each image group.
- Preserve crawlable text, responsive behavior, sticky navigation, and accessible light/dark presentation.
- Review the four-step journey against related pages and copy when implementing it, so the website does not present conflicting process descriptions.
