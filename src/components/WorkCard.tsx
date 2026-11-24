import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "./Icon";
import type { Project } from "@/content/work";
import { card } from "@/lib/ui";

export function WorkCard({ p, priority = false }: { p: Project; priority?: boolean }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className={`${card} group flex cursor-pointer flex-col p-2.5 transition duration-500 ease-soft hover:-translate-y-1 hover:shadow-lift`}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[13px] bg-ink">
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
          <div className="absolute inset-0 flex flex-col justify-end bg-pine p-6 text-paper">
            <strong className="max-w-[18ch] text-[clamp(1.5rem,3vw,2.3rem)] font-semibold leading-[1.1] tracking-[-0.035em]">
              15 brands, 3M monthly visits, 8 sites re-architected.
            </strong>
            <span className="mt-2 text-[0.85rem] text-paper/70">{p.kind}</span>
          </div>
        )}
      </div>
      <div className="flex items-start gap-4 px-3 pb-3 pt-5">
        <div className="min-w-0 flex-1">
          <div className="mb-2.5 flex flex-wrap items-center gap-2 text-[0.8125rem]">
            <span className="rounded-md bg-mint px-2 py-0.5 font-medium text-ink">{p.kind}</span>
            <span className="tabular-nums text-ink/55">{p.year}</span>
          </div>
          <h3 className="mb-2 text-[1.4rem] font-semibold leading-[1.25] tracking-[-0.025em]">{p.name}</h3>
          <p className="m-0 text-[0.95rem] text-ink/70">{p.summary}</p>
        </div>
        <span aria-hidden="true" className="mt-1 flex size-9 flex-none items-center justify-center rounded-full border border-ink/12 text-ink/60 transition duration-300 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
          <ArrowUpRight />
        </span>
      </div>
    </Link>
  );
}
