# Compact payment-card layout

Date: 14 November 2026. Applies to shared Home AND Product payment section.

## Latest owner direction

Make both white payment cards smaller so their artwork fits closely from top to bottom, like the supplied compact two-card screenshot. This explicitly supersedes the earlier floating/32px breathing-room request. Do not regenerate or edit either image, especially the exact supplied online-payment PNG.

## Implementation

- Remove old 500px minimum card height and all added top/bottom image-frame padding.
- Tighten copy padding and heading/paragraph spacing without changing words or reducing the existing font sizes.
- Desktop: two landscape cards. First card reserves 3/8 width for the 3:4 kiosk/terminal asset; second reserves 3/5 width for the wider 1371:1148 phone/hand/cards PNG. Their natural heights are nearly equal without stretching or cropping.
- At 1400px and below, one landscape card per row, with 260px terminal and 414px phone image columns. This prevents long unchanged copy from forcing tall cards/gaps at intermediate widths.
- At 720px and below, readable stacked copy/image layout; terminal capped at 270px wide and phone at 430px. Image frames still have zero vertical padding.
- Original transparency, image bytes, natural ratios, card titles/descriptions/links, themes, other sections and page order are retained. Small transparent margins already INSIDE the original source images remain untouched; no artificial crop is used to remove them.
- Updated terminal srcset sizes describes its actual display widths. Exact supplied PNG remains a direct original import, not re-encoded.

## Verification

Build/static verification passed, including source/built PNG byte equality and unchanged card copy. Targeted QA passed 112 image/responsive/theme checks across Home/Product, twelve widths including both sides of 720px/1400px breakpoints, and high-density phone/desktop variants. Eight payment-section accessibility scans passed with zero violations/errors. Tests require zero image-frame vertical padding, natural uncropped ratios, no overflow, no filters/rotation/opacity change, compact card heights and less than 16px layout slack above/below artwork. At 1440px the cards are approximately 361px tall rather than the old 500px minimum; at 1920px they are approximately 453px tall. Actual transparent pixels inside each source remain unchanged.

Full-site regression passed 48 responsive route checks and 32 accessibility scans with zero violations, browser errors or failed requests. Navigation, themes, existing controls and mocked form flows passed; no real inquiry was sent. Phone/desktop light/dark and shared Product screenshots were visually reviewed. Ignored reports/screenshots: `artifacts/payment-compact-report.json`, `artifacts/payment-compact-*`, and `artifacts/qa-report.json`.

## Files and next action

PaymentShowcase second-card modifier and terminal sizes; payment-only stylesheet rules; targeted payment QA; current roadmap/visual/iteration docs and historical asset-record spacing notes. No image file changes or new dependency/runtime logic.

Next remains Home > Designed to adapt > Different operations. One clearer experience. > Hospitality & food. Proposed café/bakery counter scene with our kiosk foreground, pastry display and coffee equipment behind, soft daylight, neutral materials and subtle blue/cyan details. Preserve existing title/description/link as HTML; no real deployment claim. Exact brief is in [PAYMENT_ONLINE_ASSET.md](PAYMENT_ONLINE_ASSET.md). Not generated or integrated now.
