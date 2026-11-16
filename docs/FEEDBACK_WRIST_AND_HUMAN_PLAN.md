# Wrist-gap fix and first human-interaction card

Date: 16 November 2026.

Latest update supersedes the historical v2 notes below: human v3 with the hero-reference attached terminal is approved, locally integrated and verified. Other cards remain unchanged. Next is owner review of the [business-facing connected-platform structure](CONNECTED_PLATFORM_BUSINESS_REVIEW.md), not automatic second-image generation. No deployment in this pass.

## Authorized scope

The wrist-gap correction is complete. The owner subsequently approved human portrait v2 and its integration into the first card. It is integrated LOCALLY in 3:4; no push/deployment or other-card generation in this pass. Next is the proposal for POS and checkout, not industry imagery. See [PLATFORM_SELF_ORDERING_HUMAN_ASSET.md](PLATFORM_SELF_ORDERING_HUMAN_ASSET.md) and [PLATFORM_POS_CHECKOUT_HUMAN_PLAN.md](PLATFORM_POS_CHECKOUT_HUMAN_PLAN.md).

Feedback: [wrist alignment](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6874782334) and [people interacting with the five platform cards](https://github.com/Reniel-Relearn/Ez-Kyosk-SEO/issues/1#issuecomment-6873577528). Issue #1 is a shared feedback hub; resolving the wrist does not resolve the human-image request or justify closing the whole issue.

## Wrist fix

Verified before correction: at a 1440px live viewport, the second payment image had about 11.3px of layout space below it, plus the 1px card border. At 1920px it was already flush inside the border. Center alignment caused the viewport-dependent gap, not image-frame padding.

Change only the online PNG's flex cross-axis alignment from center to end. It meets the card's INNER bottom edge; retain the existing border and rounded clipping. Terminal image remains centered. Preserve compact card proportions, all image bytes, natural aspect ratios, text, links and all other sections. No regeneration, crop, re-encoding, resize or filter is applied to the exact supplied PNG.

Tightened tests require the second image to have less than 0.1px bottom-frame slack, with card-bottom gap equal only to its border. First-image centering assertions remain. Build/static verification passed, including the pinned source/built PNG hash comparison. Targeted browser verification passed 112 image/responsive/theme checks across Home/Product, twelve widths/breakpoint edges and high-density phone/desktop variants, plus 8 payment-section accessibility scans with zero violations/errors. Maximum measured inner bottom gap for the online image: ZERO pixels. Phone/desktop light/dark screenshots were visually reviewed. Ignored reports/screenshots use `artifacts/payment-wrist-flush-*`. Full-site historical results are not claimed as a new rerun in this narrowly scoped CSS correction.

## First platform-card proposal: approved preview

Exact location: Home > One connected platform > From the first tap to the next task. > first card, **Self-Ordering Experience**. Not the benefit icon, hero, product-panel tab, payment card or Industries section.

Approved direction supersedes the earlier 4:3 proposal: use a full-width 3:4 portrait image at existing card widths, making cards taller. Preserve title, plus/minus disclosure and description: **Let customers browse, select, adjust, review, and confirm from one focused touchscreen.** First-card framing is now updated locally; the other four images stay 4:3 until individually redesigned, not automatically cropped.

Recommended scene: a believable candid customer interaction, not a device-only render or a model posing for a stock photo.

- One fictional adult Filipina café guest, approximately 25-35, in an unbranded light neutral blouse and dark navy trousers. The proposed casting direction is approved for this illustrative preview, not a real customer.
- Customer on the left, kiosk on the right, both prominent within the approved 3:4 frame. Three-quarter side view, approximately mid-thigh up. Keep face, reaching arm, fingertip and touchscreen readable at small card size; do not cut through fingers or hide the interaction.
- Customer looks at the menu, not the camera. Relaxed shoulders, slight natural forward lean, right index fingertip gently touching a menu item, other fingers naturally curled. Left arm rests naturally at her side. No payment action, card, phone or receipt in this first scene.
- Preserve the physical family/materials of our original kiosk artwork: portrait glass display, charcoal housing and brushed-silver edge, plausible support and proportions. Screen sits at a believable reach/eye level. Original Ez Kyosk lockup from assets directly on dark header/pedestal with cyan/light contrast, NO white backing plate. Do not use a header screenshot or invent another identity.
- Existing café-menu artwork is the visual screen reference; avoid new detailed prices, fictional metrics or claims that the image is a verified live screenshot. The point is the human choosing an item, not another enlarged UI diagram.
- Softly blurred contemporary café background, hint of neutral counter/wood, no identifiable venue or competing brand. Keep it a tight interaction photograph; save a wide venue-establishing view for Hospitality & food.
- Realistic skin texture, stray hair, subtle clothing creases, believable finger joints/nails, matching contact shadows and reflections. Natural expression, no exaggerated grin, beauty-filter skin, warped anatomy, floating hands or plastic-looking hardware.
- Soft side daylight, neutral white balance, restrained blue/cyan brand details. Eye-level normal-lens perspective, no ultra-wide distortion. Keep both touch point and screen edge clear; background blur must not obscure the interaction or product identity.
- This remains illustrative marketing imagery, not an actual client installation or testimonial. Do not add artificial waiting lines, speed/performance claims, embedded website headings, floating icons or watermark.

## Review before integration

Revision v2 follows the owner's approved review feedback: kiosk LEFT/customer RIGHT, normal-reading text rather than a literal pixel flip, customer turned farther toward the kiosk with more back shoulder and less face visible. Owner approved v2, now integrated locally; V1 is preserved. No deployment in this pass.

The first scene has two preserved preview versions; v2 passed owner review and is integrated locally. The later four human-interaction cards will be handled separately with coordinated lighting, realistic scale and distinct roles. No second-card human image has been generated.
