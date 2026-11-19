// Shared Tailwind class sets, so pages stay consistent.
export const wrap = "mx-auto w-full max-w-[1260px] px-5 sm:px-8 lg:px-10";
export const narrow = "mx-auto w-full max-w-[900px] px-5 sm:px-8 lg:px-10";
export const section = "py-16 md:py-24 lg:py-[108px]";

const btnBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink active:translate-y-0";
const btnMd = "h-[46px] px-5 text-[0.95rem]";
const primary = "bg-ink text-bg hover:-translate-y-px hover:bg-[#2a2a28]";
export const btnPrimary = `${btnBase} ${btnMd} ${primary}`;
export const btnPrimarySm = `${btnBase} h-9 px-4 text-[0.85rem] ${primary}`;
export const btnGhost = `${btnBase} ${btnMd} border border-ink/20 text-ink hover:bg-ink/5`;

export const heading = "font-medium leading-[1.05] tracking-[-0.035em] text-balance";
export const h1 = `${heading} text-[clamp(2.6rem,7.2vw,5.75rem)] tracking-[-0.045em]`;
export const h1Page = `${heading} text-[clamp(2.4rem,5.6vw,4.5rem)] tracking-[-0.045em]`;
export const h2 = `${heading} text-[clamp(2.2rem,5.4vw,4.25rem)]`;
export const h2Split = `${heading} text-[clamp(2.1rem,4.3vw,3.6rem)]`;
export const h2Small = `${heading} text-[clamp(1.8rem,3vw,2.5rem)]`;
export const h3 = "text-xl font-medium leading-[1.3] tracking-[-0.02em] text-balance";

export const lede = "text-lg leading-[1.55] tracking-[-0.01em] text-ink/80 md:text-xl";
export const headP = "text-lg leading-[1.55] tracking-[-0.01em] text-ink/80 md:text-xl";
export const splitHead = "mb-10 grid gap-5 md:mb-14 md:grid-cols-[1.15fr_1fr] md:items-end md:gap-x-16";
export const centerHead = "mx-auto mb-10 max-w-[760px] text-center md:mb-14";
export const linkUnderline = "cursor-pointer border-b border-ink/20 transition-colors hover:border-ink hover:text-ink";
export const crumbs = "mb-6 flex flex-wrap gap-2 text-[0.8125rem] text-ink/60";
export const pageHero = "pt-32 pb-12 md:pt-40 md:pb-16";
export const mintCard = "rounded-3xl border border-ink/10 bg-mint p-3";
