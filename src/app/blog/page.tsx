import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { ServiceRows } from "@/components/ServiceRows";
import { steps } from "@/content/site";
import { breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";
import { crumbs, h1Page, h2Small, lede, linkUnderline, pageHero, section, wrap } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: "Blog: what I can do for your team",
  description:
    "What a software engineer and AI consultant can do for a small team: custom software, AI agents, AI consulting, integrations and fixes, and how to reach me.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className={pageHero}>
        <div className={wrap}>
          <div className={crumbs}><Link className="cursor-pointer" href="/">Home</Link><span aria-hidden="true" className="text-ink/30">/</span><span className="text-ink">Blog</span></div>
          <h1 className={`${h1Page} max-w-[16ch]`}>What I can do for your team.</h1>
          <p className={`${lede} mt-6 max-w-[60ch]`}>
            I am one engineer who advises and builds. This page lists what I take on, how a project starts and how to reach me.
          </p>
        </div>
      </section>

      <section>
        <div className={wrap}>
          <h2 className={`${h2Small} mb-8 max-w-[24ch]`}>What I take on.</h2>
          <ServiceRows />
        </div>
      </section>

      <section className={`${section} pt-0`}>
        <div className={wrap}>
          <h2 className={`${h2Small} mb-8 max-w-[24ch]`}>How a project starts.</h2>
          <ol className="border-t border-ink/10">
            {steps.map((s, i) => (
              <li key={s.title} className="grid gap-2 border-b border-ink/10 py-7 md:grid-cols-[4rem_1fr_1.4fr] md:gap-10">
                <span className="text-[0.9rem] font-medium tabular-nums text-accent">{i + 1}</span>
                <h3 className="text-[1.15rem] font-semibold leading-[1.3] tracking-[-0.02em] md:text-[1.25rem]">{s.title}</h3>
                <p className="m-0 max-w-[60ch] text-ink/65">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-[60ch] text-ink/65">
            Want to see proof first? Read <Link className={linkUnderline} href="/work">my work</Link> or <Link className={linkUnderline} href="/about">who you work with</Link>.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]))}
      />
      <Contact title="How to reach me." showProfiles />
    </>
  );
}
