# Self-ordering overview card image (current: v2)

Status: generated and integrated as the first realistic sample for owner review. Approval of this sample's art direction is still pending; do not generate the remaining four overview images automatically.

## Placement and scope

Home > One connected platform > From the first tap to the next task. > card 01, Self-ordering experience. This replaces only that card's generic bar illustration. Existing hero artwork/copy, card labels/descriptions/numbers, five-card grid, remaining four visuals, product panels, payment cards, industry cards, and journey remain unchanged.

## Provenance and visual boundary

Generated with the built-in ImageGen tool, using owner-supplied `assets/hero-kiosk-original.png` as a kiosk-design and illustrative-menu reference. The output is AI-generated product imagery, not a verified live interface screenshot or evidence of specific hardware deployment. Do not reuse this as detailed interface documentation. Version 2 corrects both device branding areas using the original `assets/ez-kyosk-lockup.png` and `assets/ez_kyosk_icon.png`, not a header screenshot. Natural charcoal/silver materials and the neutral blue-tinted background remain. Current branding rules are in [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md).

## Responsive deliverables

All paths are inside `public/assets/images/`. The 4:3 composition shows the complete touchscreen and upper pedestal without a destructive crop. WebP quality 86, effort 6; visually reviewed against the generated output. The original generated PNG remains outside the repository in the tool's generated-image storage.

| File | Dimensions | Bytes |
| --- | --- | --- |
| platform-self-ordering-v2-320.webp | 320 x 240 | 8,424 |
| platform-self-ordering-v2-640.webp | 640 x 480 | 22,718 |
| platform-self-ordering-v2-1280.webp | 1280 x 960 | 58,266 |

Integration uses base-path-safe URLs, `srcset`/`sizes`, descriptive alt text, lazy loading, asynchronous decoding, and explicit width/height to reserve space. The image is not tinted or inverted in dark mode. No additional runtime JavaScript.

## Verification

Production build and static verification passed. Six widths in both themes plus high-density phone/desktop checks passed (16 combinations), including one new image, four unchanged placeholders, all five unchanged titles, no overflow, correct 4:3 dimensions, working responsive sources, and retained benefit icons. Four targeted platform-section axe scans found zero violations; no browser/request errors. Optimized master, desktop section, and light/dark phone/desktop card screenshots were visually reviewed.

## Exact generation prompt (historical v1)

The prompt below is preserved verbatim as provenance, not current branding direction. Its older name/logo instructions are superseded by [BRAND_GUIDELINES.md](BRAND_GUIDELINES.md). Superseded v1 WebP files are retained in `assets/archive/`, not deployed. Current v2 branding-edit prompts are recorded in the brand guidelines.

```text
Use case: product-mockup.
Asset type: premium production-ready website card image, landscape 4:3 composition, for EZ Kyosk's "Self-ordering experience" overview card.
Primary request: create an original ultra-photorealistic product photograph of the self-ordering kiosk in Image 1, focusing on browsing a cafe menu on its touchscreen.
Image 1 role: owner-supplied physical kiosk and existing illustrative menu artwork reference, not an edit target and not a verified live software screenshot.
Scene: restrained neutral light-gray studio setting with soft daylight and a very subtle cool-blue background tint. No busy venue, people, counter props, or other devices.
Subject: the SAME charcoal-black upright kiosk with rounded black touchscreen bezel, silver side edge, narrow dark pedestal and the existing small gold EZ Kyosk brand details. Preserve its recognizable design and plausible physical proportions. Show the entire touchscreen and a short upper section of its pedestal, at a modest three-quarter angle. Keep the device large, fully within a central crop-safe region, with comfortable clear space around it. The full floor/base need not be shown.
Screen: retain the reference's cafe-menu visual structure and recognizable coffee/pastry thumbnails. No new dashboards, invented analytics, feature claims, payment confirmation, performance figures, or fabricated detailed software views. This is illustrative product imagery; no explanatory labels or promotional copy outside the device.
Style: convincing real product photography, tactile matte-metal and glass, subtle realistic reflections, clean perspective and controlled soft shadows, professional restrained composition. Not a cartoon, icon, vector, glossy 3D advertisement, or screenshot collage.
Website context: minimalist blue/white light theme and blue/black/white dark theme, Plus Jakarta Sans typography; headings remain live HTML and are not baked into image. Blue/cyan should be only a quiet environmental cue; preserve the source kiosk's gold branding rather than recoloring it.
Avoid: the reference's floating shopping/QR/payment/table icons, companion payment terminal, glowing orbit, lightning, neon, watermark, captions, extra logos, people/hands, tiny invented words, or clutter.
Output: one high-quality landscape 4:3 raster image with opaque background, optimized later for responsive website use.
```

