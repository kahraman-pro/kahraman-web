import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/work";

export function WorkCard({ p, priority = false }: { p: Project; priority?: boolean }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className="cursor-pointer group flex flex-col rounded-3xl border border-ink/10 bg-mint p-3 transition-transform duration-500 ease-soft hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-ink">
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
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-bg">
            <strong className="text-[clamp(1.5rem,3vw,2.4rem)] font-normal leading-[1.1] tracking-[-0.04em]">
              15 brands, 3M monthly visits, 8 sites re-architected.
            </strong>
            <span className="mt-2 text-[0.85rem] text-bg/65">{p.kind}</span>
          </div>
        )}
      </div>
      <div className="px-2.5 pb-2.5 pt-5">
        <div className="mb-2 flex flex-wrap items-baseline gap-x-2.5 text-[0.9rem]">
          <b className="font-medium">{p.kind}</b>
          <span className="text-[0.85rem] text-ink/60">{p.year}</span>
        </div>
        <h3 className="mb-2 text-[1.4rem] font-medium leading-[1.3] tracking-[-0.02em]">{p.name}</h3>
        <p className="m-0 text-[0.95rem] text-ink/80">{p.summary}</p>
      </div>
    </Link>
  );
}
