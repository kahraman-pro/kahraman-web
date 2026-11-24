import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { crumbs, h1Page, lede, linkUnderline, narrow, pageHero } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How kahraman.pro handles your data: no tracking, no analytics, no forms. Emails are used only to reply.",
  path: "/privacy",
});

const h2 = "mb-3 mt-12 border-t border-ink/10 pt-8 text-2xl font-semibold tracking-[-0.03em]";
const p = "leading-[1.75] text-ink/75";

export default function Privacy() {
  return (
    <section className={`${pageHero} pb-24`}>
      <div className={narrow}>
        <div className={crumbs}><Link className="cursor-pointer" href="/">Home</Link><span aria-hidden="true" className="text-ink/30">/</span><span className="text-ink">Privacy</span></div>
        <h1 className={h1Page}>Privacy.</h1>
        <p className={`${lede} mt-6`}>Short version: this site does not track you and does not store your data.</p>
        <h2 className={h2}>What this site collects</h2>
        <p className={p}>This site has no forms, no accounts, no analytics and no advertising cookies. The hosting provider may keep standard server logs, such as IP addresses and request times, for security.</p>
        <h2 className={h2}>When you email me</h2>
        <p className={p}>If you write to {site.email}, I use your message only to reply and to discuss your project. I do not share it or add you to a mailing list.</p>
        <h2 className={h2}>Contact</h2>
        <p className={p}>Questions about your data: <a className={linkUnderline} href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </div>
    </section>
  );
}
