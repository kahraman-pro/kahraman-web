# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: founders and managers of small and medium teams looking for one engineer who can find where software and AI save time, then build it end to end. Close second: Upwork clients who open the site from the profile to check that the person is real and capable. Also in scope: companies considering a full-time hire.

## Product Purpose

kahraman.pro is the consulting site of Mustafa Kahraman, a software engineer and AI consultant in İzmir, Türkiye. It shows what he builds, proves it with real work and numbers, and asks the visitor to send a short message (hello@kahraman.pro) or book a call. Success: a qualified visitor gets in touch.

## Positioning

One engineer who does the whole job himself: advice first, then the build, tested and handed over with notes. No account managers, no handoffs. Honest about where AI does and does not help.

## Operating Context

Visitors come from search, LinkedIn, GitHub and Upwork, usually comparing several freelancers or consultants. They scan the home page, open a case study or service, and decide whether to write.

## Capabilities and Constraints

- Next.js 15 App Router, fully static, no database; TypeScript strict.
- Tailwind CSS v4 utilities only; no hand-written CSS rules. Colours and fonts are theme variables in `src/app/globals.css`; shared class sets in `src/lib/ui.ts`.
- English only. Content lives as typed data in `src/content`.
- Includes app legal pages (`/privacy|terms|delete-account|support/[app]`) for the mobile apps.

## Brand Commitments

- Name: Mustafa Kahraman. Logo: "MK" monogram where the M's right leg is the K's stem (`src/components/Logo.tsx`, `public/brand/`).
- Voice: plain, direct, first person, outcome first; no hype; stack names only as supporting detail.
- All copy stays as written (user requirement for the 2026-11 redesign).
- Layout preference (2026-11-24): the category standard (centred hero, figures, clear sections), executed at the craft level of Linear, Vercel and Stripe. Originality comes from type, tone, component and section design, not from an unusual concept.
- Palette family kept: cream ground, soft mint, near-black ink. Tones may shift and one related tone may be added; the result must not be a copy of the reference site it came from (borandabak.com).

## Evidence on Hand

- Case studies with screenshots: SetupBook, retail ecommerce work, Market Hours, Passport.AI, Simple Note, Vocabulary (`src/content/work.ts`, `public/work/`).
- Real numbers: 3M monthly visits, 50K+ products synced, 1M+ members, $20K+ daily sales, LCP 3.8 s to 0.5 s, 8 sites migrated.
- Brand names worked for (New Balance, Vitra, Arçelik, İpekyol, ...). Portrait photo `public/brand/mustafa-kahraman.webp`.
- No testimonials, no client logos files, no pricing: do not invent them.

## Product Principles

1. Prove with real work and numbers before claiming.
2. One person, direct contact: the page should feel made by an individual, not an agency.
3. Calm and trustworthy, never salesy.
4. Fast and accessible: static, light, keyboard and reduced-motion friendly.

## Accessibility & Inclusion

Skip link, visible focus states, real buttons and links, aria labels, reduced motion support must be preserved.
