import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { WorkCard } from "@/components/WorkCard";
import { projects } from "@/content/work";
import { absoluteUrl, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { crumbs, h1Page, lede, pageHero, wrap } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: "My Work: Software and AI Projects",
  description:
    "Projects by Mustafa Kahraman: SetupBook with its AI coach, software for 15 retail brands, Market Hours, Passport.AI, Simple Note and Vocabulary.",
  path: "/work",
});

const listLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "My work",
  itemListElement: projects.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: absoluteUrl(`/work/${p.slug}`) })),
};

export default function WorkPage() {
  return (
    <>
      <section className={pageHero}>
        <div className={wrap}>
          <div className={crumbs}><Link className="cursor-pointer" href="/">Home</Link><span aria-hidden="true" className="text-ink/30">/</span><span className="text-ink">My work</span></div>
          <h1 className={`${h1Page} max-w-[18ch]`}>Things I have built.</h1>
          <p className={`${lede} mt-6 max-w-[60ch]`}>
            My own products, and years of software for retail and corporate brands. Every project here was designed, built and
            tested by me.
          </p>
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <div className={`${wrap} grid gap-6 md:grid-cols-2`}>
          {projects.map((p, i) => <WorkCard key={p.slug} p={p} priority={i < 2} />)}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([listLd, breadcrumbLd([{ name: "Home", path: "/" }, { name: "My work", path: "/work" }])])}
      />
      <Contact />
    </>
  );
}
