import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { body, crumbs, h1Page, lede, linkUnderline, narrow, pageHero, section } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Mustafa Kahraman is a software engineer and AI consultant in İzmir, Türkiye who designs and builds software, AI features and integrations himself, end to end.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className={pageHero}>
        <div className={narrow}>
          <div className={crumbs}><Link className="cursor-pointer" href="/">Home</Link><span aria-hidden="true" className="text-ink/30">/</span><span className="text-ink">About</span></div>
          <h1 className={`${h1Page} max-w-[16ch]`}>Who you work with.</h1>
          <p className={`${lede} mt-6 max-w-[60ch]`}>{site.role}, {site.location}. I work alone, so you talk to me directly and I do the work myself.</p>
        </div>
      </section>
      <section className={`${section} pt-0`}>
        <div className={`${narrow} ${body}`}>
          <p className="mb-4">
            I have built software professionally since 2021. At an agency in Istanbul I worked on stores, backend services,
            integrations and platform migrations for 15 retail and corporate brands, with about 3M monthly visits in total.
            Today I also build and run my own products, including SetupBook, a live AI product.
          </p>
          <p className="mb-4">
            I am not tied to one language or framework. I pick the tools that fit your job and your team, and I use AI every
            day to build faster, while checking and testing everything myself before it reaches you.
          </p>
          <p className="mb-4">
            I work mostly with small and medium teams. My main industries are retail and e-commerce (15 brands) and trading and
            finance (my own AI product). I also work with teams in marketing, sales, support and operations.
          </p>
          <p className="mb-4">
            Tools I use: Python, FastAPI, Node.js, TypeScript, C#, REST APIs, webhooks, Claude, Claude Code, OpenAI, Gemini,
            LangChain, LangGraph, MCP, vector databases, Next.js, React, Flutter, Google Cloud and Firebase.
          </p>
          <p className="mb-4">
            I am in {site.location} ({site.timezone}). English is my second language, so I keep my messages short and clear.
          </p>
          <p>
            See <Link className={linkUnderline} href="/services">what I build</Link> and <Link className={linkUnderline} href="/work">my work</Link>.
          </p>
        </div>
      </section>
      <Contact showProfiles />
    </>
  );
}
