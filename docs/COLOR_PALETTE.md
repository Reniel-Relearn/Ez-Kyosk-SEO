# Final website color palette

Finalized: 13 November 2026

Status: action 1 is complete as a design specification. Action 5 is implemented and verified in the shared stylesheet. This specification replaces the earlier turquoise-led interface proposal.

The chosen direction is blue with subtle cyan highlights, using blue/white for light mode and blue/black/white for dark mode. Most surfaces remain neutral. Blue identifies primary actions and selected states; cyan provides restrained highlights and visible keyboard focus.

## Semantic tokens

These roles are implemented in the shared stylesheet. Existing component aliases resolve to these semantic tokens; fixed dark sections and supplied brand/product artwork retain their appropriate contrasting presentation.

| Token | Light mode | Dark mode | Use |
| --- | --- | --- | --- |
| `page` | `#F8FAFC` | `#080D16` | Page, header, and footer foundation |
| `surface` | `#FFFFFF` | `#111827` | Cards, forms, and content panels |
| `surface-raised` | `#FFFFFF` | `#172033` | Menus and elevated panels |
| `blue-tint` | `#EFF6FF` | `#10213A` | Selected/hover backgrounds and restrained blue panels |
| `text` | `#0F172A` | `#F8FAFC` | Headings, body copy, and control labels |
| `text-muted` | `#475569` | `#CBD5E1` | Supporting copy and secondary labels |
| `blue` | `#2563EB` | `#60A5FA` | Primary actions, links, active indicators, benefit icons |
| `blue-hover` | `#1D4ED8` | `#93C5FD` | Hovered primary actions and links |
| `blue-pressed` | `#1E40AF` | `#3B82F6` | Pressed primary actions |
| `on-blue` | `#FFFFFF` | `#0F172A` | Labels and icons inside filled blue buttons |
| `cyan` | `#0E7490` | `#22D3EE` | Keyboard focus and small secondary highlights |
| `cyan-tint` | `#ECFEFF` | `#083344` | Small accent badges when needed |
| `line` | `#E2E8F0` | `#253247` | Decorative separators and card boundaries |
| `control-border` | `#64748B` | `#64748B` | Input boundaries and outlined control borders |
| `disabled-surface` | `#E2E8F0` | `#253247` | Disabled control background |
| `disabled-text` | `#475569` | `#94A3B8` | Disabled control labels |

## Usage rules

- Keep most page and card area neutral. Use blue consistently for primary actions; do not give different cards different accent colors.
- Use cyan sparingly for focus outlines, small markers, and selected decorative details. Keep major buttons blue and major surfaces neutral.
- Use the same color roles across both themes, with the theme-specific shades above. A color role does not require the identical hex value in both modes.
- Preserve original logo artwork, payment-provider marks, product references, and natural photography colors. This palette controls the website interface; it does not authorize recoloring source brand assets or inventing product interfaces.
- Keep ordinary headings in `text`; use blue for selected emphasis. Do not style every heading or paragraph in cyan.
- Use `line` only for decorative boundaries. Use the stronger `control-border` when a boundary is needed to identify an interactive control.
- Use opaque colors behind readable text. Any later image overlay or transparency needs its own contrast review.
- Keep hover and focus effects restrained. A subtle cyan halo may accompany focus, but an opaque focus ring remains the visible indicator.
- Convey form status through explicit text and appropriate symbols, rather than color alone. Additional semantic status colors require a separate defined use; do not introduce them as decorative accents.

## Component states

| Component | Default | Hover / pressed | Keyboard focus |
| --- | --- | --- | --- |
| Primary button | `blue` fill and border, `on-blue` label | `blue-hover` fill; `blue-pressed` when pressed; same label color | Opaque 3px `cyan` outline with a 3px gap matching the surrounding surface |
| Secondary button | Transparent fill, `blue` label, `control-border` boundary | `blue-tint` fill with `blue-hover` label | Same cyan outline and gap |
| Text link | `blue` text with an underline or equivalent persistent link indication | `blue-hover`, retaining the link indication | Same cyan outline and gap |
| Active navigation item | `blue` label and underline | `blue-hover`; retain active underline | Same cyan outline and gap |
| Inactive navigation item | `text` label | `blue` label | Same cyan outline and gap |
| Benefit icon | `blue` strokes from one consistent icon family | Maintain the same family and readable stroke color | Focus belongs to the containing control if interactive |
| Input / select / textarea | `surface` background, `text` value, `text-muted` placeholder, `control-border` boundary | Maintain a visible boundary | Same cyan outline and gap |
| Card | `surface` background, `text` heading, `text-muted` supporting copy, decorative `line` boundary | Subtle border/shadow emphasis; keep text readable | Interactive cards receive the same cyan outline and gap |
| Disabled control | `disabled-surface` and `disabled-text` | No active hover treatment | Use appropriate disabled behavior; do not apply whole-control opacity |

Small cyan badges use `cyan-tint` with `cyan` text. Keep supporting labels and all meaningful copy as HTML text, not embedded in generated imagery.

## Contrast verification

Relative-luminance calculations checked 58 explicit color pairings: text, muted text, blue, hover blue, and cyan against the page, surface, raised surface, and blue-tint backgrounds; control boundaries against those backgrounds; all three primary button states; cyan badges; and disabled labels.

- All 50 text pairings exceed 4.5:1; the lowest is 4.75:1.
- All 8 control-boundary pairings exceed 3:1; the lowest is 3.39:1.
- Focus uses the opaque cyan color on a neutral surrounding surface with a separating gap, not a low-opacity glow alone.

| Primary button state | Light-mode label contrast | Dark-mode label contrast |
| --- | --- | --- |
| Default | 5.17:1 | 7.02:1 |
| Hover | 6.70:1 | 9.90:1 |
| Pressed | 8.72:1 | 4.85:1 |

These calculations validate the specified solid-color pairings only. Actual rendering, focus visibility, and browser accessibility checks are part of action 5 verification; future image overlays need their own review.

Implementation verification passed: 48 responsive route checks including pinned navigation, 32 light/dark axe scans with zero violations, and actual default/hover/pressed/focus colors at phone and desktop widths. The secondary mobile action remains outlined. No new icon or image assets were created.

## Scope boundary

- Complete now: palette selection, exact tokens, usage rules, interaction-state specification, pairwise contrast calculations, and shared CSS implementation.
- Not performed: icon creation, image generation, or homepage rearrangement.
- Action 2 is removed at the owner's request. Retain the current homepage sequence and stop before creating the first benefit icon.
