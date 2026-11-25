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
          <ul className="m-0 list-none border-t border-ink/15 p-0">
            {posts.map((p) => (
              <li key={p.slug} className="border-b border-ink/15">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group relative isolate grid cursor-pointer gap-2 py-7 pr-14 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stamp md:grid-cols-[11rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-10"
                >
                  <span aria-hidden="true" className="absolute -inset-x-4 inset-y-1.5 -z-10 rounded-[8px] bg-wash opacity-0 transition-opacity duration-300 ease-soft group-hover:opacity-100" />
                  <time dateTime={p.date} className="text-[0.9rem] tabular-nums text-ink/75 md:pt-1.5">{formatDate(p.date)}</time>
                  <h2 className="font-serif text-[1.35rem] font-normal leading-[1.25] tracking-[-0.012em] md:text-[1.45rem]">{p.title}</h2>
                  <p className="m-0 text-ink/75">{p.summary}</p>
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
