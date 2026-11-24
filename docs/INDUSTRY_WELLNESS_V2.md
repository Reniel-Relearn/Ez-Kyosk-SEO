# Industries Card 3 — Wellness branding removal

Release status update: all four Industries cards visually approved; owner authorized commit/push/deployment on 24 November. Earlier local-only statements below are implementation-stage history. See `INDUSTRIES_IMAGE_REVISION_PLAN.md` for current release status and remaining resolution queue.

24 November 2026. Local integration only; pending owner visual review. No commit, push or deployment.

## Saved files and scope

- Master: `assets/industry-wellness-v2-source.png` (1448 × 1086).
- Responsive WebP: `public/assets/images/industry-wellness-v2-{320,640,1280}.webp`.
- Original v1 files preserved. Built-in imagegen used for the edit; Sharp only resized/encoded the same 4:3 framing without cropping.
- Only Wellness image stem and accurate alt text changed. No section copy/layout/badge/link changes; Card 4 remains untouched.

## Visual inspection

Ez Kyosk branding removed from the POS rear. Plain charcoal surface with natural shading; silver rim, staff-facing device orientation and stand retained. Consultation, leaflet, people and salon composition remain recognizable. Generative editing does not guarantee pixel-identical preservation outside the logo; owner visual review is required.

## Final edit prompt

Use case: precise-object-edit. Asset: Industries Wellness & beauty website photograph. Input image 1 is the EDIT TARGET. Remove ONLY the turquoise Ez Kyosk icon and wordmark on the dark rear housing of the POS monitor at the right. Restore continuous natural charcoal device surface with the existing material texture, shading and reflections. No logo, replacement brand, sticker, blank plate or blur patch. Preserve everything else as closely as possible: exact POS shape, silver edge thickness, staff-facing screen orientation, angle, stand, base and table contact shadows; both women's identities, hair, clothing, pose, hands and finger pointing to the open styling leaflet; leaflet, salon chair, mirror, windows, shelves, bottles, plants, lighting, camera angle, entire photographic composition. Do not turn or reposition monitor, expose its screen or redesign people/environment. No camera or top-mounted sensor bar. Same 4:3 landscape framing, at least 1280 pixels wide. Photorealistic local branding removal only, no text/card borders/footer outside the device.

## Card 4 exact proposed actions — not implemented

Validation passed: production build/build verifier and whitespace checks; 24 responsive/theme/density layouts, 96 card checks, six scoped accessibility scans, no browser/resource errors, all four contact links without JavaScript, and preservation of 72 protected original assets. Integrated desktop screenshot visually inspected. Report: `artifacts/industry-wellness-v2-report.json`. These checks validate integration, not pixel-identical scene preservation.

1. Edit existing Services v6 photo; remove tablet's Ez Kyosk lockup and branded header area only.
2. Move Services title/list upward to reclaim the space with consistent screen margins.
3. Preserve Consultation, Business Support and Additional Services. Update after this brief: owner approved **Custom Setup** as the fourth row, replacing the longer proposed Setup & Onboarding. Implementation is recorded in `INDUSTRY_SERVICES_V7.md`.
4. Fit four evenly spaced readable rows with restrained line icons, keeping the fingertip aligned naturally to a valid row/control.
5. Preserve portrait tablet geometry, balanced angle toward client, adviser's secure grip, hands, people, office, light and 4:3 framing. Do not add cameras/sensor bars or replacement branding.
6. Version output, inspect text/perspective/hands, optimize 320/640/1280, update accurate alt, integrate locally, run responsive/theme/link/accessibility checks and return for owner review. No publication without separate approval.
