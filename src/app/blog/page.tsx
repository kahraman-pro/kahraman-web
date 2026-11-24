import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { ArrowRight } from "@/components/Icon";
import { formatDate, posts } from "@/content/blog";
import { absoluteUrl, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { crumbs, h1Page, lede, pageHero, wrap } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: "Blog: software and AI for small teams",
  description: "Short posts by Mustafa Kahraman on what software and AI can do for a small team.",
  path: "/blog",
});

const listLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Blog",
  itemListElement: posts.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title.replace(/\.$/, ""), url: absoluteUrl(`/blog/${p.slug}`) })),
};

export default function BlogPage() {
  return (
    <>
      <section className={pageHero}>
        <div className={wrap}>
          <div className={crumbs}><Link className="cursor-pointer" href="/">Home</Link><span aria-hidden="true" className="text-ink/30">/</span><span className="text-ink">Blog</span></div>
          <h1 className={`${h1Page} max-w-[16ch]`}>Blog.</h1>
          <p className={`${lede} mt-6 max-w-[60ch]`}>Short posts on what software and AI can do for a small team.</p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className={wrap}>
          <div className="border-t border-ink/10">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group relative isolate grid cursor-pointer gap-2 border-b border-ink/10 py-7 pr-14 transition-colors duration-300 ease-soft md:grid-cols-[11rem_1fr_1fr] md:gap-10"
              >
                <span aria-hidden="true" className="absolute inset-x-[-14px] inset-y-1.5 -z-10 rounded-2xl bg-band-soft opacity-0 transition-opacity duration-300 ease-soft group-hover:opacity-100" />
                <time dateTime={p.date} className="text-[0.9rem] tabular-nums text-ink/60 md:pt-1">{formatDate(p.date)}</time>
                <h2 className="text-[1.15rem] font-semibold leading-[1.3] tracking-[-0.02em] md:text-[1.25rem]">{p.title}</h2>
                <p className="m-0 text-ink/65">{p.summary}</p>
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-7 flex size-9 items-center justify-center rounded-full border border-ink/12 bg-paper text-ink/60 transition duration-300 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
                >
                  <ArrowRight className="size-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([listLd, breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])])}
      />
      <Contact />
    </>
  );
}
