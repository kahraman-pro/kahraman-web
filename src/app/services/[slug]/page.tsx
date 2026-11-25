import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { WorkCard } from "@/components/WorkCard";
import { contactHref, ctaLabel, site } from "@/content/site";
import { absoluteUrl, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { getService, services } from "@/content/services";
import { getProject } from "@/content/work";
import { ArrowRight } from "@/components/Icon";
import { btnGhost, btnPrimary, crumbs, h1Page, h2, h2Margin, h3, headP, lede, marginGrid, marginHead, pageHero, section, wrap } from "@/lib/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.title.replace(/\.$/, ""), description: s.metaDescription, path: `/services/${s.slug}` });
}

// Pains read as a ruled list; what I build sits in blotting-blue wells.
function Items({ items, wells = false }: { items: { title: string; text: string }[]; wells?: boolean }) {
  return (
    <div className={`grid gap-x-10 sm:grid-cols-2 ${wells ? "gap-y-3" : "gap-y-0"}`}>
      {items.map((c) => (
        <div key={c.title} className={wells ? "rounded-[8px] bg-wash p-6 sm:p-7" : "border-t border-ink/15 py-6"}>
          <h3 className={`${h3} mb-2`}>{c.title}</h3>
          <p className="m-0 text-[1rem] leading-[1.6] text-ink/75">{c.text}</p>
        </div>
      ))}
    </div>
  );
}

export default async function ServicePage({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const related = s.related.map(getProject).filter((p) => p !== undefined);
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title.replace(/\.$/, ""),
    description: s.metaDescription,
    url: absoluteUrl(`/services/${s.slug}`),
    serviceType: s.title.replace(/\.$/, ""),
    provider: { "@type": "Person", "@id": `${site.url}/#person`, name: site.name },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "What I build",
      itemListElement: s.builds.map((b) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: b.title, description: b.text } })),
    },
  };
  const crumbsLd = breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.title.replace(/\.$/, ""), path: `/services/${s.slug}` },
  ]);

  return (
    <>
      <section className={pageHero}>
        <div className={wrap}>
          <div className={crumbs}>
            <Link className="cursor-pointer" href="/">Home</Link><span aria-hidden="true" className="text-ink/30">/</span><Link className="cursor-pointer" href="/services">Services</Link>
          </div>
          <h1 className={`${h1Page} max-w-[18ch]`}>{s.title}</h1>
          <p className={`${lede} mt-6 max-w-[62ch]`}>{s.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className={btnPrimary} href={contactHref(s.title)}>{ctaLabel()}<ArrowRight className="size-4 transition-transform duration-300 ease-soft group-hover/btn:translate-x-0.5" /></a>
            <Link className={btnGhost} href="/work">See my work</Link>
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={wrap}>
          <div className={marginGrid}>
            <div className={marginHead}><h2 className={h2Margin}>{s.painsTitle}</h2><p className={`${headP} mt-5`}>{s.painsLede}</p></div>
            <Items items={s.pains} />
          </div>
        </div>
      </section>

      <section className={section}>
        <div className={wrap}>
          <div className={marginGrid}>
            <div className={marginHead}><h2 className={h2Margin}>What I build.</h2><p className={`${headP} mt-5`}>{s.buildsLede}</p></div>
            <Items items={s.builds} wells />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={section}>
          <div className={wrap}>
            <h2 className={h2}>Where I have done it.</h2>
            <p className={`${headP} mt-5`}>Projects I designed and built myself.</p>
            <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
              {related.map((p) => <WorkCard key={p.slug} p={p} />)}
            </div>
          </div>
        </section>
      )}

      <Contact subject={s.title} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([serviceLd, crumbsLd])} />
    </>
  );
}
