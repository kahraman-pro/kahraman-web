// Shared Tailwind class sets, so pages stay consistent.
export const wrap = "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10";
export const narrow = "mx-auto w-full max-w-[880px] px-5 sm:px-8 lg:px-10";
export const section = "py-16 md:py-24";

const btnBase =
  "group/btn inline-flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-xl font-medium tracking-[-0.01em] transition duration-300 ease-soft focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent active:scale-[0.98]";
const btnMd = "h-12 px-5 text-[0.95rem]";
const primary = "bg-ink text-paper shadow-[0_1px_0_rgb(255_255_255/0.12)_inset,0_8px_20px_-10px_rgb(20_33_61/0.5)] hover:bg-accent";
export const btnPrimary = `${btnBase} ${btnMd} ${primary}`;
export const btnPrimarySm = `${btnBase} h-9 rounded-[10px] px-3.5 text-[0.85rem] ${primary}`;
export const btnGhost = `${btnBase} ${btnMd} border border-ink/15 bg-paper text-ink hover:border-ink/30 hover:bg-band-soft`;

export const heading = "font-semibold leading-[1.04] tracking-[-0.035em] text-balance";
export const h1 = `${heading} text-[clamp(2.6rem,7vw,5.5rem)] tracking-[-0.04em]`;
export const h1Page = `${heading} text-[clamp(2.4rem,5.4vw,4.25rem)] tracking-[-0.04em]`;
export const h2 = `${heading} text-[clamp(2.1rem,5vw,3.75rem)]`;
export const h2Split = `${heading} text-[clamp(2rem,4.1vw,3.35rem)]`;
export const h2Small = `${heading} text-[clamp(1.7rem,2.8vw,2.35rem)]`;
export const h3 = "text-xl font-semibold leading-[1.3] tracking-[-0.02em] text-balance";

export const lede = "text-lg leading-[1.6] tracking-[-0.005em] text-ink/75 md:text-xl";
export const headP = "text-lg leading-[1.6] tracking-[-0.005em] text-ink/70 md:text-[1.15rem]";
export const splitHead = "mb-10 grid gap-5 md:mb-14 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-x-16";
export const centerHead = "mb-10 max-w-[44rem] md:mb-14";
export const linkUnderline =
  "cursor-pointer underline decoration-ink/25 decoration-1 underline-offset-[0.22em] transition-colors hover:text-accent hover:decoration-accent";
export const crumbs = "mb-7 flex flex-wrap items-center gap-2 text-[0.8125rem] text-ink/60 [&_a]:transition-colors [&_a:hover]:text-accent";
export const pageHero = "pt-36 pb-12 md:pt-44 md:pb-16";
export const card = "rounded-[20px] border border-ink/10 bg-paper shadow-card";
export const bandCard = "rounded-[20px] bg-band p-3";
export const chip = "rounded-lg border border-ink/12 bg-paper px-2.5 py-1 text-[0.8rem] text-ink/75";
