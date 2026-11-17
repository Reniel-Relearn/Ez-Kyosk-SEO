# Home FAQ: approved copy and publication

Date: 17 November 2026, Asia/Manila.

## Authorization and scope

Owner approved the ten drafted questions/answers verbatim, local integration, then deployment to the existing main-branch GitHub Pages design-review preview. No other page copy, original hero, images, header treatment, form settings or indexing controls are authorized to change in this release. Articles/blog remains planning only.

Runtime source:src/data/product.ts, exported faqs, used only by Home. Ten answers cover definition, end-to-end ordering/collection, optional cashier, payments, tracking, automated inventory, compatibility, industries, customization and quotation. Existing section heading, order after journey/before final demo CTA and native independently expandable details/summary layout retained.

## Owner-confirmed facts

- Tracking details become available after successful electronic payment or after payment at the cashier for cash orders.
- Customers can follow their order number on the ceiling-mounted queue dashboard without scanning. The cashier can supply the order number, tracking QR or both. No assumption about printing, ticket format, SMS or mandatory smartphone use.
- Tracking QR is separate from payment QR. Cash remains an optional alternative.
- Software-only, hardware-only and combined offerings are available. Pricing/payment terms depend on the agreed quotation, not invented prices or a universal subscription model.
- Automated inventory updates and menu-availability controls are quotation-dependent additions, not automatically included in every package. Earlier broad core-inventory statements do not override this latest inclusion clarification.
- Specific existing-system compatibility is assessed, not guaranteed across all providers/devices. No tested compatibility list has been supplied.

These are owner-approved product/marketing facts, not evidence that this static marketing preview processes payments or operates an order backend. The generated artwork is illustrative, not software verification.

## Small responsive correction

Local QA exposed the existing FAQ indicator geometry: its flex width shrank beside longer questions and rotating the whole30px circle extended its bounds into the row gutter. Keep the30px circle non-shrinking; rotate the inner plus pseudo-element only. Decorative indicator remains aria-hidden, native summary retains its question label. No new browser JavaScript or broader accordion redesign.

## Verification

- Local build/static verification passed. Targeted FAQ suite passed: 12 viewport/theme combinations, 120 exact-answer checks, 240 keyboard toggles, four section accessibility scans and four no-JavaScript combinations, with no reported browser/resource errors or question/answer row overflow. Pointer interaction and independent mixed/all-open states passed. Mobile light collapsed and desktop dark all-open screenshots visually reviewed.
- Final full-site regression passed after the indicator correction: 48 route/viewport checks, 32 sampled light/dark accessibility scans, zero browser errors or failed requests. Keyboard/menu/Escape/focus, product tabs/FAQ/theme and mocked inquiry success/failure passed; zero real form submissions.
- Build verification now asserts all ten exact approved questions/answers appear in static HTML, native disclosure count, optional tracking, post-payment cash tracking, quotation-dependent automation and no em dashes.
- scripts/qa-home-faq.mjs checks six widths320/390/768/980/1440/1920 and both themes; exact rendered copy, keyboard/pointer toggles, independent expansion, all-open readability, no overflow, section axe and no-JavaScript behavior. Reports/screenshots ignored under artifacts/faq-*.
- Existing full-site QA updated to the new payment question and ten-item count. Original hero, six journey cards, other sections, navigation/theme/forms and sampled route accessibility remain regression checks.
- Existing header worst-case contrast limitations are unchanged and recorded in TRANSLUCENT_HEADER.md; FAQ passing checks do not imply site-wide accessibility conformance.
- Publish only scoped source/tests/docs, not local source PDF/DOCX, unused artwork or ignored artifacts. Verify isolated staged-source build, successful CI/Pages for the actual commit and live FAQ before reporting complete. Preserve preview noindex/nofollow, robots blocking and non-sending unconfigured inquiry form.

## Flagged for the NEXT consistency pass, not silently changed

Home product intro calls inventory core; Home metadata and shared HeroProduct caption mention real-time inventory; src/data/product.ts inventory panel and Product page describe real-time support. These describe a capability, but might be read as standard package inclusion. Review and qualify package language against the latest quotation-dependent automation rule without changing protected original hero wording or claiming all inventory visibility is absent.

The Home Scan Your Tracking QR caption and five-microstep How It Works guide should also be reviewed against optional scanning/end-to-end six-stage terminology. The FAQ is now explicit; this release does not quietly rewrite those sections. Next Home sections: final demo CTA/footer check. [Articles proposal](ARTICLES_PLAN.md) is not approved implementation.
