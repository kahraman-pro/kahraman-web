import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { ServiceRows } from "@/components/ServiceRows";
import { services } from "@/content/services";
import { absoluteUrl, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { crumbs, h1Page, lede, pageHero, wrap } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: "Software and AI Consulting Services",
  description:
    "Custom software, AI agents, AI consulting, system integrations and software rescue for growing teams, from one engineer who advises and builds.",
  path: "/services",
});

const listLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services",
  itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.title.replace(/\.$/, ""), url: absoluteUrl(`/services/${s.slug}`) })),
};

export default function ServicesPage() {
  return (
    <>
      <section className={pageHero}>
        <div className={wrap}>
          <div className={crumbs}><Link className="cursor-pointer" href="/">Home</Link><span aria-hidden="true" className="text-ink/30">/</span><span className="text-ink">Services</span></div>
          <h1 className={`${h1Page} max-w-[18ch]`}>Software for the work your team should not do by hand.</h1>
          <p className={`${lede} mt-6 max-w-[60ch]`}>
            Each service starts from a job people do every day and ends with software that does it the same way every time,
            with a person checking where it matters.
          </p>
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <div className={wrap}><ServiceRows /></div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([listLd, breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])])}
      />
      <Contact title="Not sure which one you need?" text="Describe the job in a short message. I will tell you what would fix it, and whether it is worth building at all." />
    </>
  );
}
