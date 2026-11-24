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
import { btnGhost, btnPrimary, card, crumbs, h1Page, h2Split, headP, lede, pageHero, section, splitHead, wrap } from "@/lib/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.title.replace(/\.$/, ""), description: s.metaDescription, path: `/services/${s.slug}` });
}

function Cards({ items, mint = false }: { items: { title: string; text: string }[]; mint?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <div key={c.title} className={mint ? "rounded-[20px] bg-mint p-6 sm:p-7" : `${card} p-6 sm:p-7`}>
          <span aria-hidden="true" className={`mb-5 block h-0.5 w-8 ${mint ? "bg-ink/70" : "bg-pine"}`} />
          <h3 className="mb-2 text-[1.08rem] font-semibold leading-[1.3] tracking-[-0.02em]">{c.title}</h3>
          <p className={`m-0 text-[0.95rem] ${mint ? "text-ink/75" : "text-ink/65"}`}>{c.text}</p>
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
          <div className={splitHead}><h2 className={h2Split}>{s.painsTitle}</h2><p className={headP}>{s.painsLede}</p></div>
          <Cards items={s.pains} />
        </div>
      </section>

      <section className={section}>
        <div className={wrap}>
          <div className={splitHead}><h2 className={h2Split}>What I build.</h2><p className={headP}>{s.buildsLede}</p></div>
          <Cards items={s.builds} mint />
        </div>
      </section>

      {related.length > 0 && (
        <section className={section}>
          <div className={wrap}>
            <div className={splitHead}><h2 className={h2Split}>Where I have done it.</h2><p className={headP}>Projects I designed and built myself.</p></div>
            <div className="grid gap-6 md:grid-cols-2">
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
