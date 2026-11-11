# Brand website redesign

## Implemented direction

The redesign presents EZ Kyosk as a bold, welcoming, and product-led self-ordering platform. It uses a permanent light theme, Plus Jakarta Sans with ExtraBold headings, a warm off-white canvas, deep blue-teal content panels, restrained turquoise accents, generous whitespace, controlled glow, and color-reversal hover/focus states.

The visual references influenced hierarchy and pattern selection only. The website uses original EZ Kyosk copy, layouts, component compositions, CSS illustrations, and owner-supplied assets.

## Information architecture

The primary navigation is Product, How It Works, Solutions, Industries, About, and Request a Demo. The homepage follows the approved sequence and places How It Works immediately before the FAQ. Product content is available in HTML at all times; desktop visitors use accessible tabs while mobile visitors see vertically stacked sections.

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

The build, static verification, 48 responsive route/viewport checks, keyboard interactions, inquiry states, image loading, browser errors, network failures, and axe checks all pass. Generated QA screenshots and reports remain excluded from Git.
