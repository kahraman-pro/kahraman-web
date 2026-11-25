// Shared Tailwind class sets, so pages stay consistent.
// The page is one letter sheet; `wrap` is the sheet's inner margin.
export const wrap = "w-full px-5 sm:px-10 lg:px-14";
export const narrow = "mx-auto w-full max-w-[780px] px-5 sm:px-10";
export const section = "py-14 md:py-20";

const btnBase =
  "group/btn inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-[10px] font-medium transition-colors duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-stamp active:translate-y-px";
const primary = "bg-ink text-paper hover:bg-ink-deep";
export const btnPrimary = `${btnBase} h-12 px-5 text-[1rem] ${primary}`;
export const btnPrimarySm = `${btnBase} h-10 px-4 text-[0.9rem] ${primary}`;
export const btnGhost = `${btnBase} h-12 px-5 text-[1rem] border border-ink/20 bg-paper text-ink hover:border-ink/45 hover:bg-wash`;

// Young Serif has one weight; size and space carry the hierarchy.
export const heading = "font-serif font-normal leading-[1.06] tracking-[-0.022em] text-balance";
export const h1 = `${heading} text-[clamp(2.5rem,5.6vw,4.5rem)] leading-[1.03]`;
export const h1Page = `${heading} text-[clamp(2.3rem,4.6vw,3.6rem)]`;
export const h2 = `${heading} text-[clamp(2rem,3.6vw,3rem)]`;
export const h2Margin = `${heading} text-[clamp(1.9rem,2.9vw,2.6rem)]`;
export const h2Small = `${heading} text-[clamp(1.6rem,2.5vw,2.05rem)]`;
export const h3 = "font-serif font-normal text-[1.35rem] leading-[1.25] tracking-[-0.012em] text-balance";

export const lede = "text-lg leading-[1.6] text-ink/80 md:text-[1.2rem]";
export const headP = "text-[1.05rem] leading-[1.65] text-ink/75 md:text-[1.1rem]";
export const body = "text-[1.05rem] leading-[1.75] text-ink/80 md:text-[1.1rem]";
export const linkUnderline =
  "cursor-pointer underline decoration-ink/30 decoration-1 underline-offset-[0.22em] transition-[text-decoration-color] hover:decoration-ink";
export const crumbs = "mb-8 flex flex-wrap items-center gap-2 text-[0.875rem] text-ink/70 [&_a]:transition-colors [&_a:hover]:text-ink";
export const pageHero = "pt-12 pb-12 md:pt-20 md:pb-16";
export const chip = "rounded-md border border-ink/15 px-2.5 py-1 text-[0.85rem] text-ink/80";
export const hairline = "border-ink/15";

// Margin-head layout: the heading sits in the letter's left margin, the content in the body column.
export const marginGrid = "grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12 lg:gap-16";
export const marginHead = "md:sticky md:top-24 md:self-start";
