---
name: Mustafa Kahraman
description: A personal letter from one software engineer, set on one bond-white sheet in fountain-pen ink.
colors:
  envelope: "#eceff3"
  paper: "#fcfcfb"
  wash: "#eef2f8"
  ink: "#1c2f6e"
  ink-deep: "#14235a"
  stamp: "#c23a2b"
typography:
  display:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.5rem, 5.6vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.03
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.022em"
  headline-margin:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.9rem, 2.9vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-0.022em"
  figure:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.1rem, 3.6vw, 3rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Young Serif, Georgia, Times New Roman, serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.012em"
  lede:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, system-ui, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  button:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1
rounded:
  mark: "4px"
  inner: "5px"
  sheet: "6px"
  chip: "6px"
  card: "8px"
  control: "10px"
  circle: "9999px"
spacing:
  sheet-inset-sm: "8px"
  sheet-inset-md: "16px"
  sheet-inset-lg: "28px"
  margin-sm: "20px"
  margin-md: "40px"
  margin-lg: "56px"
  column-gap-sm: "32px"
  column-gap-md: "48px"
  column-gap-lg: "64px"
  section-sm: "56px"
  section-lg: "80px"
components:
  sheet:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.sheet}"
    width: "1296px"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.paper}"
  button-primary-sm:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "40px"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
  chip:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "4px 10px"
  card-enclosure:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "10px"
  arrow-circle:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "36px"
  arrow-circle-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
---

# Design System: Mustafa Kahraman

## Overview

**Creative North Star: "The Personal Letter"**

The site is one letter written by one person. A single long bond-white sheet lies on a cool envelope-grey ground; everything that matters is written on that sheet in one fountain-pen blue, and the only other colour is the red of a postmark. It opens with a centred letterhead (monogram, name, role, a short hairline), speaks in the first person, lists its figures plainly on ruled lines, and ends with a signed close. The mood is calm, direct and personal: one person writing, not an agency presenting.

Density is generous and quiet. Hierarchy comes from size and space, not weight or colour: the serif has one weight, the ink has one hue, and structure is drawn with hairline ink rules rather than boxes. Sections set their heading in the letter's left margin and their content in the body column, the way a letter or a printed report sets marginal heads.

The system rejects the agency template (a floating translucent nav bar, rows of cards under soft shadows) and the previous ledger-blue and bordo look set in Onest. Depth exists exactly once, under the sheet.

**Key Characteristics:**
- One paper sheet (6px corners) on an envelope ground; the footer sits outside the sheet, on the envelope.
- One ink for type, logo, rules and the one filled button; red only as the postmark, focus rings and tiny markers.
- Young Serif for headings, figures and the name; Schibsted Grotesk for everything else.
- Hairline ink rules at 15% build lists, figure rows and statements; no nested boxes.
- 10px controls, 8px enclosures, circular arrow buttons.
- One authored motion moment (the postmark stamping in); everything else is colour, underline and small translation transitions.

## Colors

A near-monochrome letter: blue-black ink on warm white, set on cool grey, with one red that only ever behaves like a stamp.

### Primary
- **Fountain-Pen Ink** (ink): all text, the MK monogram, hairline rules (as ink at 10 to 20% alpha), the filled primary button, the active state of arrow circles, chat bubbles and dark pills inside illustration panels, and the selection highlight. Secondary text is the same ink at reduced alpha, never a different grey.
- **Deep Ink** (ink-deep): the hover state of the primary button and of mobile nav links. It exists only as a pressed-darker ink, never as a second colour.

### Secondary
- **Postmark Red** (stamp): the postmark SVG on the home letterhead (at 0.82 opacity, multiply blend), every focus-visible outline, the text caret, 6px dot markers before a source or status line, and the short dash before Markdown list items (at 70%). Nothing else.

### Neutral
- **Envelope Grey** (envelope): the page ground around the sheet, the footer's ground, and the browser theme colour.
- **Bond White** (paper): the letter sheet, the sticky header strip, ghost buttons, enclosure cards, and text on ink.
- **Blotting Wash** (wash): wells and hover fills: service row hover, ghost button hover, the Copy button at rest, inline code, screenshot frames and highlighted phrases in panels.

### Named Rules
**The One Ink Rule.** Every piece of type, rule and fill is the ink at some alpha. Readable secondary text never drops below ink at 70%; lower alphas (30 to 35%) are reserved for aria-hidden separators such as breadcrumb slashes and middle dots.

**The Postmark Rule.** Red is a stamp, not an accent. It appears as the postmark, focus rings and dot or dash markers no larger than 6px. Never red text, red buttons, red headings or red fills.

## Typography

**Display Font:** Young Serif (with Georgia, Times New Roman)
**Body Font:** Schibsted Grotesk, variable (with Helvetica Neue, system-ui)

**Character:** A sturdy, slightly old-fashioned single-weight serif writes the voice of the letter (headings, the name, figures); a plain, newsy grotesk carries everything that is read or operated.

### Hierarchy
- **Display** (400, clamp 2.5 to 4.5rem, 1.03): the home letterhead's one sentence, balanced, about 17ch wide.
- **Headline** (400, clamp 2 to 3rem, 1.06): full-width section heads and the contact close. Inner-page heroes use a slightly smaller step (clamp 2.3 to 3.6rem).
- **Headline, margin** (400, clamp 1.9 to 2.6rem, 1.06): headings that sit in the left margin of a margin-head section; a smaller step (clamp 1.6 to 2.05rem) serves secondary pages.
- **Figure** (400, clamp 2.1 to 3rem, 1): the ruled figure row under the letterhead; result statements use clamp 1.75 to 2.2rem, process numerals 3.25rem at ink 85%.
- **Title** (400, 1.35rem, 1.25): item headings inside lists, principles and process steps; card and case titles step up to 1.5 to 1.7rem.
- **Lede** (400, 1.125rem rising to 1.2rem, 1.6, ink 80%): the paragraph under a display or headline, capped near 48 to 56ch.
- **Body** (400, 1.05rem rising to 1.1rem, 1.75, ink 80%): running prose, capped at 62ch.
- **Label** (400, 0.8 to 0.9rem, ink 75%): captions, breadcrumbs, source lines, role lines, footer. Sentence case.
- **Button** (500, 1rem; 0.9rem small): the only routine use of a heavier grotesk weight, with item kinds in meta lines.

### Named Rules
**The Single Weight Rule.** Young Serif has one weight, and it is never faked bold. Hierarchy is size, measure and space alone; headings track tight (-0.012 to -0.025em) and balance their lines.

**The Sentence Case Rule.** UI labels, captions and metadata are sentence case at normal tracking. The only capitals with open letterspacing are the place name and time zone set on the postmark's arcs, because that is what a postmark is.

## Layout

The page is a centred sheet up to 1296px wide, inset from the viewport by 8px, 16px and 28px at small, medium and large widths (top inset matches). Inside the sheet, a single margin system applies everywhere: 20px, 40px and 56px side margins. Reading pages (posts, legal) narrow to a 780px column.

Sections breathe at 56px vertical padding, 80px from the md breakpoint. The signature arrangement is the margin-head grid: one part heading, two parts content (1fr to 2fr), with 32, 48 and 64px gaps; from md upward the heading column is sticky 96px from the top so the margin head travels with its content. Full-width sections (results, process) put the headline above ruled content instead.

The letterhead is centred; everything after it is left-aligned until the signed close, which returns to centre. Figure rows run 2 columns on small screens and 4 on large, divided by hairline verticals; process steps run 1, 2, then 4 columns. Breakpoints are Tailwind defaults (640, 768, 1024, 1280px); the desktop nav appears at 1024px.

## Elevation & Depth

The system is flat on the sheet. Depth exists once: the sheet itself lifts off the envelope with a hairline top edge and a long, faint, ink-tinted drop beneath it. Everything on the sheet is separated by hairline rules, the wash, or the ink, never by shadow.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 0 rgb(28 47 110 / 0.06), 0 40px 80px -52px rgb(28 47 110 / 0.4)`): the letter sheet only.
- **Highlighter underline** (`box-shadow: inset 0 -1px 0 rgb(28 47 110 / 0.25)`): a marker stroke under highlighted phrases inside illustration panels. It reads as ink on paper, not as elevation.

### Named Rules
**The One Sheet Rule.** Only the letter sheet casts a shadow. Cards, panels, buttons and menus on the sheet stay flat and use a hairline border instead.

## Shapes

Corners are small and graded by size: 4px for inline code and marks, 5px for images inside an enclosure, 6px for the sheet, the portrait and chips, 8px for enclosure cards, panels and wash hover fills, 10px for every control (buttons, the email field, the menu button, store badges). Circles appear only as 36px arrow buttons and 6px dot markers. Borders are 1px ink hairlines: 10 to 12% inside panels, 15% for structural rules and cards, 20% for interactive outlines, rising to 40 to 45% on hover. Icons are drawn at 1.75px on a 20px grid with square caps and mitred joins, matching the MK monogram's straight strokes.

## Components

### Buttons
Quiet and solid, like a stamped reply envelope.
- **Shape:** gently rounded (10px), 48px tall (40px small), content centred with a 10px icon gap.
- **Primary:** ink fill, paper text, 500 weight. One per view region: the header's reply button, the hero and the close.
- **Hover / Focus:** fill deepens to deep ink over 300ms on the soft ease; a trailing arrow nudges 2px right; focus is a 2px postmark-red outline offset 3px; active presses down 1px.
- **Ghost:** paper fill, ink text, 20% ink hairline; hover raises the border to 45% and fills with wash.
- **Copy email:** a 48px, 10px-cornered outlined field holding an underlined mailto link and an inner 36px wash button (7px corners) that turns ink when copied.

### Chips
- **Style:** transparent, 15% ink hairline, 6px corners, 0.85rem text at ink 80%, 4px by 10px padding. Used for capability and stack lists; on case pages a 20% border, full ink and 500 weight marks metrics.
- **State:** static; chips are never interactive.

### Cards / Containers
- **Enclosure card (work):** paper, 15% hairline, 8px corners, 10px inner padding around a 16:10 image with 5px corners, then meta line, title and summary. Hover raises the border to 40% and slowly scales the image 2.5%.
- **Illustration panel:** a single hairline block (12%, 8px corners) with a ruled head and ruled rows; contents are ink, wash and one red status dot. Never nested inside another card.
- **Shadow Strategy:** none; see Elevation & Depth.

### Lists and Statements
- **Ruled list (services):** rows between 15% hairlines; title in the serif, summary in ink 75%, an arrow circle at the right. Hover fades in an 8px-cornered wash fill that bleeds 16px past the rule ends.
- **Ruled statement (results):** a definition list on hairlines: figure in the serif, meaning at ink 80%, and source with a red dot marker, right-aligned on wide screens.
- **Arrow circle:** 36px circle, 20% hairline, ink 70% arrow; on the parent's hover it fills ink with a paper arrow.

### Navigation
- **Header:** a sticky paper strip at the top of the sheet (64px, 76px from lg), 6px top corners, its bottom hairline appearing once scrolled or off the home page. Section links sit left, About and the small primary button right, at 0.95rem in ink 75%. Current page is full ink with a 1px ink underline inset under the label. Below 380px the header drops the name and keeps only the monogram, so the Menu button always keeps its full width.
- **Monogram:** on the home page the header mark is hidden while the letterhead is visible and fades and widens in after 260px of scroll; elsewhere it is always shown.
- **Mobile:** an outlined Menu button with a two-line glyph that crosses; the menu opens inside the strip as serif links on ruled lines, then a full primary button.
- **Breadcrumbs:** 0.875rem, ink 70%, slashes at ink 30% and hidden from assistive tech.
- **Footer:** outside the sheet on the envelope: monogram, serif name, role and an underlined email, a link grid, and a hairline above the copyright.

### Links
Inline links are ink with a 1px underline at 30% ink, offset 0.22em; on hover the underline becomes full ink. Colour never changes.

### Postmark (signature)
A red SVG postmark (two rings, place on the top arc, time zone on the bottom, the monogram centred, five wavy cancel lines trailing left) sits rotated -12deg over the right end of the home figure row. It stamps in once on load (from 1.35 scale with 3px blur to rest at 0.82 opacity, 0.9s, 0.45s delay) only when motion is allowed. It is decorative and aria-hidden; the same facts are in the text.

### Signed Close
Every major page ends with the contact close: a hairline, a centred headline and lede, the primary button beside the copy-email field, then a signature block of monogram, serif name and a one-line availability note.

## Do's and Don'ts

### Do:
- **Do** keep every page on the one paper sheet over the envelope ground, with the footer outside it.
- **Do** draw structure with 1px ink hairlines (15% for structure, 20% for interactive outlines) before reaching for a box.
- **Do** put section headings in the left margin column (1fr to 2fr, sticky from md) when a section has a heading and a body.
- **Do** set headings, figures and the name in Young Serif at its single weight, and everything else in Schibsted Grotesk.
- **Do** keep readable secondary text at ink 70% or stronger.
- **Do** use a postmark-red 2px outline, offset 2 to 3px, for every focus-visible state.
- **Do** gate the postmark stamp behind reduced-motion preferences and keep all other motion to colour, underline and 2px translations on the soft ease (cubic-bezier(0.22, 1, 0.36, 1)).
- **Do** end pages with the signed close.

### Don't:
- **Don't** put a shadow on anything but the sheet: no card shadows, no floating or translucent glass header.
- **Don't** use postmark red for text, buttons, headings or fills; it is the stamp, focus and 6px markers only.
- **Don't** fake a bold Young Serif or introduce a second display face.
- **Don't** add uppercase, letterspaced kicker or eyebrow labels above headings.
- **Don't** nest cards inside cards; a panel is one hairline block.
- **Don't** add a second ink colour or a neutral grey for text; lighten the ink with alpha instead.
- **Don't** reshape the MK monogram; only its colour follows the palette.
