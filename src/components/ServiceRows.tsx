import Link from "next/link";
import { ArrowRight } from "./Icon";
import { services } from "@/content/services";

export function ServiceRows() {
  return (
    <div className="border-t border-ink/10">
      {services.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className="group relative isolate grid cursor-pointer gap-2 border-b border-ink/10 py-7 pr-14 transition-colors duration-300 ease-soft md:grid-cols-[1fr_1fr] md:gap-10"
        >
          <span aria-hidden="true" className="absolute inset-x-[-14px] inset-y-1.5 -z-10 rounded-2xl bg-mint-soft opacity-0 transition-opacity duration-300 ease-soft group-hover:opacity-100" />
          <h3 className="text-[1.15rem] font-semibold leading-[1.3] tracking-[-0.02em] md:text-[1.25rem]">{s.title}</h3>
          <p className="m-0 text-ink/65">{s.short}</p>
          <span
            aria-hidden="true"
            className="absolute right-0 top-7 flex size-9 items-center justify-center rounded-full border border-ink/12 bg-paper text-ink/60 transition duration-300 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
          >
            <ArrowRight className="size-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
