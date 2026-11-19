import Link from "next/link";
import { services } from "@/content/services";

export function ServiceRows() {
  return (
    <div className="border-t border-ink/10">
      {services.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className="cursor-pointer group grid gap-2 border-b border-ink/10 py-6 md:grid-cols-2 md:gap-8"
        >
          <h3 className="flex items-baseline gap-2 text-[1.15rem] font-medium leading-[1.3] tracking-[-0.02em] md:text-[1.2rem]">
            {s.title}
            <span aria-hidden="true" className="-translate-x-1.5 opacity-0 transition duration-300 ease-soft group-hover:translate-x-0 group-hover:opacity-100">
              →
            </span>
          </h3>
          <p className="m-0 text-ink/60">{s.short}</p>
        </Link>
      ))}
    </div>
  );
}
