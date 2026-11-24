# Industries Card 2 — Retail logo removal

Release status update: all four Industries cards visually approved; owner authorized commit/push/deployment on 24 November. Earlier local-only statements below are implementation-stage history. See `INDUSTRIES_IMAGE_REVISION_PLAN.md` for current release status and remaining resolution queue.

24 November 2026. Local integration only; pending owner visual review. No commit, push or deployment.

## Files and scope

- Master: `assets/industry-retail-v3-source.png` (1448 × 1086).
- Responsive WebP: `public/assets/images/industry-retail-v3-{320,640,1280}.webp`.
- Original v1 and existing unused v2 files preserved; a new v3 avoids overwriting prior work.
- Built-in imagegen edited the photo. Sharp only resized/encoded the original 4:3 framing, without crop.
- Home changes only Retail's image stem and accurate alt text; no section copy, layout, links, badges or other card edits.

## Visual inspection

Ez Kyosk icon/wordmark removed from monitor rear; plain charcoal finish with natural shading and no replacement branding. Staff-facing orientation, silver rim, stand/base, customer/associate, boxed accessory, glass counter and store composition remain recognizable. Generative editing is not a guarantee of pixel-identical preservation outside the logo; owner review remains required.

## Final edit prompt

Use case: precise-object-edit. Asset: Industries Retail & shops website photograph. The supplied image is the EDIT TARGET. Remove ONLY the turquoise Ez Kyosk icon and wordmark printed at the center of the rear of the POS monitor on the right. Restore an uninterrupted plain dark charcoal metal/plastic rear surface with its existing subtle natural lighting gradient, reflections and texture. No blur patch, sticker, plate, replacement logo or new text. Strictly preserve the POS physical shape, silver rim, rear viewing angle, staff-facing screen orientation, stand and base, entire people identities/expressions/clothes/poses/hands, boxed accessory handoff, glass counter/reflections, shelves, packages, windows, plants, warm daylight and photographic composition. Do not turn the device, expose its screen, change its thickness, add any camera or top sensor bar, or redesign anything else. Keep the same 4:3 landscape framing, output at least 1280 pixels wide. Photorealistic localized logo removal; no website card border, caption or footer baked into image.

## Next

Validation passed: production build, build verifier and whitespace checks; 24 responsive/theme/density layouts, 96 card checks, six scoped accessibility scans, no browser/resource errors, all four contact links without JavaScript, and 72 protected original assets. Report: `artifacts/industry-retail-v3-report.json`. Integrated desktop/light and mobile/dark screenshots visually inspected. Tests validate integration, not pixel-identical photographic preservation.

After owner approval, Card 3: remove only the Ez Kyosk branding from the Wellness POS, preserving device geometry, consultation, leaflet, people and salon. Do not proceed automatically or publish without approval.
