import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { ProjectMedia } from "@/components/Lightbox";
import { StoreButtons } from "@/components/StoreButtons";
import { APP_LEGAL_DOCS, findAppByProject, type LegalDoc } from "@/content/app-legal";
import { site } from "@/content/site";
import { STORE_LINKS } from "@/content/stores";
import { getProject, projects } from "@/content/work";
import { jsonLd, pageMetadata } from "@/lib/seo";
import { btnPrimary, crumbs, h1Page, h2Small, lede, pageHero, section, wrap } from "@/lib/ui";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.name}: ${p.kind}`,
    description: p.metaDescription,
    path: `/work/${p.slug}`,
    type: "article",
    image: p.cover ? { url: p.cover, width: 1920, height: 1200, alt: p.coverAlt ?? p.name } : undefined,
  });
}

export default async function ProjectPage({ params }: Params) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];
  const stores = STORE_LINKS[p.slug];
  const legalApp = findAppByProject(p.slug);
  const projectLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name,
    headline: `${p.name}, ${p.kind}`,
    description: p.summary,
    url: `${site.url}/work/${p.slug}`,
    ...(p.cover ? { image: `${site.url}${p.cover}` } : {}),
    creator: { "@type": "Person", name: site.name, url: site.url },
    ...(p.link ? { sameAs: p.link.href } : {}),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "My work", item: `${site.url}/work` },
      { "@type": "ListItem", position: 3, name: p.name, item: `${site.url}/work/${p.slug}` },
    ],
  };
  const story = [
    { title: "The problem.", text: p.challenge },
    { title: "What I built.", text: p.approach },
    { title: "The result.", text: p.outcome },
  ];

  return (
    <>
      <section className={pageHero}>
        <div className={wrap}>
          <div className={crumbs}>
            <Link className="cursor-pointer hover:text-ink" href="/">Home</Link><span>/</span><Link className="cursor-pointer hover:text-ink" href="/work">My work</Link>
          </div>
          <h1 className={h1Page}>{p.name}</h1>
          <p className={`${lede} mt-6 max-w-[62ch]`}>{p.summary}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.markers.map((m) => (
              <li key={m} className="rounded-full border border-ink/20 px-3 py-1 text-[0.72rem] tracking-[0.04em] text-ink/80">{m}</li>
            ))}
          </ul>
          {(p.link || stores) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {p.link && (
                <a className={btnPrimary} href={p.link.href} target="_blank" rel="noopener noreferrer">Visit {p.link.label}</a>
              )}
              {stores && <StoreButtons links={stores} appName={p.name} />}
            </div>
          )}
          <dl className="mt-12 grid grid-cols-2 gap-6 border-y border-ink/10 py-6 lg:grid-cols-5">
            {p.facts.map((f) => (
              <div key={f.label}>
                <dt className="mb-1 text-[0.8125rem] text-ink/60">{f.label}</dt>
                <dd className="m-0 text-[0.95rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {p.cover && (
        <div className={wrap}>
          <ProjectMedia cover={{ src: p.cover, alt: p.coverAlt ?? p.name, width: 1920, height: 1200 }} images={p.gallery} showGallery={false} />
        </div>
      )}

      <section className={section}>
        <div className={wrap}>
          {story.map((s, idx) => (
            <div key={s.title} className={`grid gap-4 border-b border-ink/10 py-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 ${idx === 0 ? "border-t" : ""}`}>
              <h2 className={h2Small}>{s.title}</h2>
              <p className="m-0 text-[1.05rem] leading-[1.7] text-ink/80 md:text-[1.08rem]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {p.gallery.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className={wrap}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className={h2Small}>Screens.</h2>
              <span className="text-[0.8125rem] text-ink/60">Tap any screen to open it full size.</span>
            </div>
            <ProjectMedia
              cover={p.cover ? { src: p.cover, alt: p.coverAlt ?? p.name, width: 1920, height: 1200 } : undefined}
              images={p.gallery}
              showGallery
              hideCover
            />
          </div>
        </section>
      )}

      {legalApp && (
        <div className={wrap}>
          <nav
            aria-label={`${p.name} legal documents`}
            className="flex flex-col gap-3 border-t border-ink/10 py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-[0.8125rem] text-ink/60">{p.name} app documents</span>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {(Object.keys(APP_LEGAL_DOCS) as LegalDoc[]).map((doc) => (
                <li key={doc}>
                  <Link
                    href={`/${doc}/${legalApp.repo}`}
                    className="group inline-flex cursor-pointer items-center gap-1.5 text-[0.92rem] transition-colors hover:text-ink/60"
                  >
                    {APP_LEGAL_DOCS[doc].title}
                    <span aria-hidden="true" className="transition-transform duration-300 ease-soft group-hover:translate-x-0.5">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <div className={wrap}>
        <Link href={`/work/${next.slug}`} className="cursor-pointer group flex items-center justify-between gap-4 border-t border-ink/10 py-8">
          <div>
            <span className="text-[0.8125rem] text-ink/60">Next project</span>
            <strong className="block text-[clamp(1.4rem,3vw,2.2rem)] font-medium tracking-[-0.03em]">{next.name}</strong>
          </div>
          <span aria-hidden="true" className="text-2xl transition-transform duration-300 ease-soft group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <Contact title="Want something like this for your team?" subject={`About ${p.name}`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd([projectLd, breadcrumbLd])} />
    </>
  );
}
