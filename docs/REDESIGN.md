# Brand website redesign

## Implemented direction

The redesign presents Ez Kyosk as a bold, welcoming, minimalist, and product-led self-ordering platform. It uses accessible light/dark themes, Plus Jakarta Sans with ExtraBold headings, blue/white and blue/black/white surfaces, and subtle cyan highlights. Buttons and interactive states follow `COLOR_PALETTE.md`; keyboard focus has an opaque cyan outline. The selected preference persists locally, with the operating-system preference used on the first visit.

The original hero eyebrow, headline, description, audience line, CTA labels, and tagline are locked and remain unchanged through design revisions. Only the previous outdated illustration caption was updated to reflect owner-confirmed operational POS checkout, AltPayNet payments, real-time inventory, and order tracking.

The visual references influenced hierarchy and pattern selection only. The website uses original Ez Kyosk copy, layouts, component compositions, CSS illustrations, and owner-supplied assets.

## Information architecture

The primary navigation is Home, Product, How It Works, Solutions, and About, with Request a Demo as the persistent CTA. Industries is grouped under Solutions. The existing homepage sequence is retained after the owner removed the Word-arrangement action; How It Works remains immediately before the FAQ. Product content is available in HTML at all times; desktop visitors use accessible tabs while mobile visitors see vertically stacked sections.

The benefits are named Faster Ordering Experience, More Order Capacity, and Better Service Flow; their numbers are removed and their matching 64px blue/cyan SVG family is complete. The next section's first card, Self-ordering experience, now has a realistic generated kiosk composition, optimized as responsive WebP for both themes. This is the first art-direction sample for review; the other four cards and all remaining imagery are unchanged. `VISUAL_ASSET_PLAN.md` records specifications, implementation, and pending assignments.

Supporting routes provide distinct detail instead of repeating the homepage:

- Product explains five product areas and configurable scope.
- How It Works expands the five-step customer and operational journey.
- Solutions covers hospitality, retail, wellness/beauty, and services/B2B.
- About establishes purpose and product principles without invented company history.
- Contact captures requirements in preview-safe or configured-provider mode.
- Privacy accurately describes the local-review state and launch dependencies.

## Brand and product visuals

- `ez-kyosk-lockup.png`: header/footer identity.
- `Ez Kyosk Orbit Logo.png`: About-page brand artwork and configured sharing image.
- `hero-kiosk-original.png`: owner-supplied hero/product artwork.
- `hero-kiosk-concept.png`: retained local source reference, not displayed.
- Product dashboards, payment terminal, phone/QR, industry, and process graphics are original CSS compositions with adjacent crawlable explanations.

Artwork keeps its proportions and is optimized to WebP by Astro. Important explanations are not baked only into images.

## Responsive and interactive behavior

The site uses vertical page scrolling only. Layouts adapt at desktop, tablet, large-phone, narrow-phone, and ultrawide widths. Controls meet touch-target expectations, focus remains visible, mobile navigation returns focus after Escape, tab arrows work by keyboard, and animation degrades to static content with reduced-motion preferences. Motion never controls whether copy exists or remains readable.

## Product truth

The copy describes owner-confirmed operational self-ordering, POS checkout, AltPayNet payment processing, real-time inventory, and order queueing/tracking. Expanded reports, analytics, customer tools, loyalty, promotions, provider compatibility, hardware, printing, kitchen workflows, and other bespoke requirements are described as configurable or subject to assessment. No invented pricing, ranking guarantees, testimonials, customer logos, addresses, certifications, or rollout dates appear.

## Verification

The build, static verification, 48 responsive route/viewport checks, keyboard interactions, inquiry states, image loading, browser errors, network failures, and 32 light/dark axe scans all pass. Generated QA screenshots and reports remain excluded from Git.
