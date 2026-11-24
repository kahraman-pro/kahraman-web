import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { formatDate, getPost, posts } from "@/content/blog";
import { site } from "@/content/site";
import { absoluteUrl, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { crumbs, h1Page, linkUnderline, pageHero, wrap } from "@/lib/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: p.title.replace(/\.$/, ""), description: p.summary, path: `/blog/${p.slug}`, type: "article" });
}

export default async function PostPage({ params }: Params) {
  const p = getPost((await params).slug);
  if (!p) notFound();

  const postLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title.replace(/\.$/, ""),
    description: p.summary,
    datePublished: p.date,
    dateModified: p.date,
    url: absoluteUrl(`/blog/${p.slug}`),
    mainEntityOfPage: absoluteUrl(`/blog/${p.slug}`),
    inLanguage: "en",
    author: { "@type": "Person", "@id": `${site.url}/#person`, name: site.name },
    publisher: { "@id": `${site.url}/#person` },
  };
  const crumbsLd = breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: p.title.replace(/\.$/, ""), path: `/blog/${p.slug}` },
  ]);

  return (
    <>
      <section className={pageHero}>
        <div className={wrap}>
          <div className={crumbs}>
            <Link className="cursor-pointer" href="/">Home</Link><span aria-hidden="true" className="text-ink/30">/</span><Link className="cursor-pointer" href="/blog">Blog</Link>
          </div>
          <h1 className={`${h1Page} max-w-[18ch]`}>{p.title}</h1>
          <p className="mt-6 text-[0.9rem] text-ink/60">
            <time dateTime={p.date}>{formatDate(p.date)}</time> · {site.name}
          </p>
        </div>
      </section>

      <article className="pb-16 md:pb-24">
        <div className={`${wrap} max-w-[760px] text-[1.05rem] leading-[1.75] text-ink/75 md:text-[1.1rem]`}>
          {p.body.map((b, i) =>
            b.type === "p" ? (
              <p key={i} className="mb-6">{b.text}</p>
            ) : (
              <ul key={i} className="mb-6 border-t border-ink/10">
                {b.items.map((it) => (
                  <li key={it.title} className="border-b border-ink/10 py-4">
                    <Link className={`${linkUnderline} font-semibold text-ink`} href={it.href}>{it.title}</Link>
                    <span className="block text-ink/65">{it.text}</span>
                  </li>
                ))}
              </ul>
            ),
          )}
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([postLd, crumbsLd])} />
      <Contact showProfiles />
    </>
  );
}
