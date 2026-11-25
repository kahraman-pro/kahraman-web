import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./Icon";
import type { Project } from "@/content/work";

// An enclosure: a smaller sheet clipped to the letter, picture first, then the facts.
export function WorkCard({ p, priority = false }: { p: Project; priority?: boolean }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className="group flex cursor-pointer flex-col rounded-[8px] border border-ink/15 bg-paper p-2.5 transition-colors duration-300 ease-soft hover:border-ink/40 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-stamp"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[5px] bg-ink">
        {p.cover ? (
          <Image
            src={p.cover}
            alt={p.coverAlt ?? p.name}
            fill
            priority={priority}
            sizes="(max-width: 820px) 100vw, 600px"
            className="object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.025]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-end bg-ink p-6 text-paper">
            <strong className="max-w-[18ch] font-serif text-[clamp(1.5rem,3vw,2.3rem)] font-normal leading-[1.1] tracking-[-0.02em]">
              15 brands, 3M monthly visits, 8 sites re-architected.
            </strong>
            <span className="mt-2 text-[0.85rem] text-paper/75">{p.kind}</span>
          </div>
        )}
      </div>
      <div className="flex items-start gap-4 px-3 pb-3 pt-5">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.85rem] text-ink/75">
            <span className="font-medium text-ink">{p.kind}</span>
            <span aria-hidden="true" className="text-ink/35">·</span>
            <span className="tabular-nums">{p.year}</span>
          </div>
          <h3 className="mb-2 font-serif text-[1.5rem] font-normal leading-[1.2] tracking-[-0.015em]">{p.name}</h3>
          <p className="m-0 text-[0.975rem] text-ink/75">{p.summary}</p>
        </div>
        <span aria-hidden="true" className="mt-1 flex size-9 flex-none items-center justify-center rounded-full border border-ink/20 text-ink/70 transition-colors duration-300 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
          <ArrowUpRight />
        </span>
      </div>
    </Link>
  );
}
