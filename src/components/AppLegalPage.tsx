import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Markdown } from "./Markdown";
import { APP_LEGAL_DOCS, APPS, findApp, type LegalDoc } from "@/content/app-legal";
import { getProject } from "@/content/work";
import { site } from "@/content/site";
import { btnGhost, crumbs, h1Page, pageHero, wrap } from "@/lib/ui";
import { jsonLd, pageMetadata } from "@/lib/seo";

// The privacy policy, terms, account deletion and support pages of each mobile app, at
// /<doc>/<GitHub repo name> (e.g. /privacy/simple-note-flutter). The App Store, Google Play and the
// apps themselves link to these URLs, so each one is a real, server-rendered page that names its app.

export type AppParams = { params: Promise<{ app: string }> };

export const appLegalParams = () => APPS.map((app) => ({ app: app.repo }));

export async function appLegalMetadata(doc: LegalDoc, { params }: AppParams): Promise<Metadata> {
  const app = findApp((await params).app);
  if (!app) return {};
  const { title, description } = APP_LEGAL_DOCS[doc];
  const path = `/${doc}/${app.repo}`;
  return pageMetadata({ title: `${app.name} ${title}`, description: description(app.name), path, type: "article" });
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export async function AppLegalPage({ doc, params }: { doc: LegalDoc } & AppParams) {
  const app = findApp((await params).app);
  if (!app) notFound();
  const sections = app[doc] ?? [];
  const project = getProject(app.project);
  const { title } = APP_LEGAL_DOCS[doc];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      ...(project ? [{ "@type": "ListItem", position: 2, name: app.name, item: `${site.url}/work/${project.slug}` }] : []),
      { "@type": "ListItem", position: project ? 3 : 2, name: title, item: `${site.url}/${doc}/${app.repo}` },
    ],
  };

  return (
    <section className={`${pageHero} pb-20`}>
      <div className={wrap}>
        <div className={crumbs}>
          <Link className="cursor-pointer" href="/">Home</Link>
          <span aria-hidden="true" className="text-ink/30">/</span>
          {project ? <Link className="cursor-pointer" href={`/work/${project.slug}`}>{app.name}</Link> : <span>{app.name}</span>}
          <span aria-hidden="true" className="text-ink/30">/</span>
          <span className="text-ink">{title}</span>
        </div>
        <h1 className={h1Page}>{title}.</h1>
        <p className="mt-4 text-[0.9rem] text-ink/75">{app.name} · Last updated: {formatDate(app.updated)}</p>

        <nav aria-label={`${app.name} documents`} className="mt-8 inline-flex flex-wrap gap-1 rounded-[10px] border border-ink/15 p-1">
          {(Object.keys(APP_LEGAL_DOCS) as LegalDoc[]).map((key) => (
            <Link
              key={key}
              href={`/${key}/${app.repo}`}
              aria-current={key === doc ? "page" : undefined}
              className={`cursor-pointer rounded-[7px] px-3.5 py-1.5 text-[0.875rem] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stamp ${
                key === doc ? "bg-ink text-paper" : "text-ink/75 hover:bg-wash hover:text-ink"
              }`}
            >
              {APP_LEGAL_DOCS[key].title}
            </Link>
          ))}
        </nav>

        <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <ol className="sticky top-24 flex flex-col gap-2 border-t border-ink/15 pt-4">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#s-${i}`} className="block cursor-pointer py-0.5 text-[0.875rem] text-ink/75 transition-colors hover:text-ink">{s.heading}</a>
                </li>
              ))}
            </ol>
          </aside>
          <div className="border-t border-ink/15">
            {sections.map(({ heading, body }, i) => (
              <section key={heading} id={`s-${i}`} className="scroll-mt-24 border-b border-ink/15 py-8">
                <h2 className="mb-4 font-serif text-[1.45rem] font-normal leading-[1.3] tracking-[-0.012em]">{heading}</h2>
                <Markdown content={body} />
              </section>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {project && <Link className={btnGhost} href={`/work/${project.slug}`}>About {app.name}</Link>}
          <Link className={btnGhost} href="/">Back to home</Link>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbLd)} />
    </section>
  );
}
