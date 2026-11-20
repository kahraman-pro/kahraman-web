import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { pageMetadata } from "@/lib/seo";
import { crumbs, h1Page, pageHero, wrap } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Book a free 30 minute call or send a short message about your project. Replies within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className={pageHero}>
        <div className={wrap}>
          <div className={crumbs}><Link className="cursor-pointer hover:text-ink" href="/">Home</Link><span>/</span><span>Contact</span></div>
          <h1 className={`${h1Page} max-w-[16ch]`}>Let&apos;s talk about your project.</h1>
        </div>
      </section>
      <Contact title="Tell me what should take less time." />
    </>
  );
}
