import Link from "next/link";
import { ArrowRight } from "./Icon";
import { services } from "@/content/services";

// Services as a ruled list, like the itemised part of a letter.
export function ServiceRows() {
  return (
    <ul className="m-0 list-none border-t border-ink/15 p-0">
      {services.map((s) => (
        <li key={s.slug} className="border-b border-ink/15">
          <Link
            href={`/services/${s.slug}`}
            className="group relative isolate grid cursor-pointer gap-2 py-7 pr-14 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stamp md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10"
          >
            <span aria-hidden="true" className="absolute -inset-x-4 inset-y-1.5 -z-10 rounded-[8px] bg-wash opacity-0 transition-opacity duration-300 ease-soft group-hover:opacity-100" />
            <h3 className="font-serif text-[1.3rem] font-normal leading-[1.25] tracking-[-0.012em] md:text-[1.4rem]">{s.title}</h3>
            <p className="m-0 text-ink/75">{s.short}</p>
            <span
              aria-hidden="true"
              className="absolute right-0 top-7 flex size-9 items-center justify-center rounded-full border border-ink/20 bg-paper text-ink/70 transition-colors duration-300 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
            >
              <ArrowRight className="size-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
