# Wrist-gap fix and first human-interaction card

Date: 16 November 2026.

## Authorized scope

Owner requested fixing the wrist gap first, then STOPPING at brainstorming the first ultra-realistic human-interaction platform card. No new image generation or platform-image integration is authorized in this iteration. Industry imagery remains pending and is not the immediate next action.

Feedback: [wrist alignment](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6874782334) and [people interacting with the five platform cards](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6873577528). Issue #1 is a shared feedback hub; resolving the wrist does not resolve the human-image request or justify closing the whole issue.

## Wrist fix

Verified before correction: at a 1440px live viewport, the second payment image had about 11.3px of layout space below it, plus the 1px card border. At 1920px it was already flush inside the border. Center alignment caused the viewport-dependent gap, not image-frame padding.

Change only the online PNG's flex cross-axis alignment from center to end. It meets the card's INNER bottom edge; retain the existing border and rounded clipping. Terminal image remains centered. Preserve compact card proportions, all image bytes, natural aspect ratios, text, links and all other sections. No regeneration, crop, re-encoding, resize or filter is applied to the exact supplied PNG.

Tightened tests require the second image to have less than 0.1px bottom-frame slack, with card-bottom gap equal only to its border. First-image centering assertions remain. Build/static verification passed, including the pinned source/built PNG hash comparison. Targeted browser verification passed 112 image/responsive/theme checks across Home/Product, twelve widths/breakpoint edges and high-density phone/desktop variants, plus 8 payment-section accessibility scans with zero violations/errors. Maximum measured inner bottom gap for the online image: ZERO pixels. Phone/desktop light/dark screenshots were visually reviewed. Ignored reports/screenshots use `artifacts/payment-wrist-flush-*`. Full-site historical results are not claimed as a new rerun in this narrowly scoped CSS correction.

## First platform-card proposal: brainstorming ONLY

Exact location: Home > One connected platform > From the first tap to the next task. > first card, **Self-Ordering Experience**. Not the benefit icon, hero, product-panel tab, payment card or Industries section.

Retain its existing full-width 4:3 image frame, title, plus/minus disclosure and description: **Let customers browse, select, adjust, review, and confirm from one focused touchscreen.** Other four platform images stay untouched until separately reviewed.

Recommended scene: a believable candid customer interaction, not a device-only render or a model posing for a stock photo.

- One fictional adult Filipina café guest, approximately 25-35, in an unbranded light neutral blouse and dark navy trousers. This is a proposed casting direction, not a confirmed user preference or real customer.
- Customer on the left, kiosk on the right, both prominent within the 4:3 frame. Three-quarter side view, approximately mid-thigh up. Keep face, reaching arm, fingertip and touchscreen readable at small card size; do not cut through fingers or hide the interaction.
- Customer looks at the menu, not the camera. Relaxed shoulders, slight natural forward lean, right index fingertip gently touching a menu item, other fingers naturally curled. Left arm rests naturally at her side. No payment action, card, phone or receipt in this first scene.
- Preserve the physical family/materials of our original kiosk artwork: portrait glass display, charcoal housing and brushed-silver edge, plausible support and proportions. Screen sits at a believable reach/eye level. Original Ez Kyosk lockup from assets directly on dark header/pedestal with cyan/light contrast, NO white backing plate. Do not use a header screenshot or invent another identity.
- Existing café-menu artwork is the visual screen reference; avoid new detailed prices, fictional metrics or claims that the image is a verified live screenshot. The point is the human choosing an item, not another enlarged UI diagram.
- Softly blurred contemporary café background, hint of neutral counter/wood, no identifiable venue or competing brand. Keep it a tight interaction photograph; save a wide venue-establishing view for Hospitality & food.
- Realistic skin texture, stray hair, subtle clothing creases, believable finger joints/nails, matching contact shadows and reflections. Natural expression, no exaggerated grin, beauty-filter skin, warped anatomy, floating hands or plastic-looking hardware.
- Soft side daylight, neutral white balance, restrained blue/cyan brand details. Eye-level normal-lens perspective, no ultra-wide distortion. Keep both touch point and screen edge clear; background blur must not obscure the interaction or product identity.
- This remains illustrative marketing imagery, not an actual client installation or testimonial. Do not add artificial waiting lines, speed/performance claims, embedded website headings, floating icons or watermark.

## Review before generation

Present this scene to the owner and confirm or revise the proposed customer styling, camera framing and café context. Then, ONLY after approval, generate one preview, inspect anatomy/contact/branding/crop and receive review before replacing the first card. Preserve original assets/versioned recovery. The later four human-interaction cards will be handled separately with coordinated lighting, realistic scale and distinct roles.
