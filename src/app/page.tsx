import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { LogoMark } from "@/components/Logo";
import { AiCoachPanel, SpeedPanel, SyncPanel } from "@/components/Panels";
import { ServiceRows } from "@/components/ServiceRows";
import { brands, contactHref, ctaLabel, principles, results, site, stats, steps } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { btnPrimary, centerHead, h1, h2, h2Split, h3, headP, lede, linkUnderline, section, splitHead, wrap } from "@/lib/ui";

export const metadata: Metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const capabilities = [
  "Web apps and SaaS",
  "Internal tools",
  "Backends and APIs",
  "Mobile apps",
  "AI agents and LLM features",
  "Integrations",
  "Architecture and migrations",
  "Performance and SEO",
  "Payments and subscriptions",
  "Cloud and CI/CD",
];

const cases = [
  {
    href: "/work/setupbook",
    panel: <AiCoachPanel />,
    who: "SetupBook",
    tag: "AI product",
    title: "An AI coach that answers from your own data.",
    text: "Setup AI answers questions from the user's trades, suggests tags and writes a weekly review. The user confirms every suggestion.",
  },
  {
    href: "/work/retail-ecommerce",
    panel: <SyncPanel />,
    who: "Retail brands",
    tag: "Integrations",
    title: "Systems that talk to each other.",
    text: "15+ third-party systems connected for retail brands, so marketing teams follow sales and campaigns in real time and run campaigns without a developer.",
  },
  {
    href: "/work/retail-ecommerce",
    panel: <SpeedPanel />,
    who: "Retail store",
    tag: "Performance",
    title: "Pages that load in half the time.",
    text: "Rendering and Core Web Vitals work took LCP from 3.8 s to 1.5 s and mobile Lighthouse from 52 to 86.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pb-14 pt-32 text-center md:pb-[72px] md:pt-40">
        <div className={wrap}>
          <h1 className={`${h1} mx-auto max-w-[15ch]`}>Software and AI, built for how your team works.</h1>
          <p className={`${lede} mx-auto mt-6 max-w-[54ch]`}>
            I am a software engineer. I look at how your business runs, show where software and AI save the most time and
            where they do not, then design and build it myself, end to end.
          </p>
          <ul className="mx-auto mt-12 grid max-w-[760px] grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
            {stats.map((s) => (
              <li key={s.label} className="flex flex-col-reverse items-center">
                <span className="text-[0.8125rem] text-ink/60">{s.label}</span>
                <strong className="text-[clamp(1.8rem,3vw,2.3rem)] font-normal leading-[1.2] tracking-[-0.04em]">{s.value}</strong>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <a className={btnPrimary} href={contactHref()}>{ctaLabel()}</a>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section aria-label="Brands" className="pb-5 pt-10">
        <p className="mb-6 text-center text-[0.8125rem] text-ink/60">Brands I have built software for</p>
        <ul className={`${wrap} flex max-w-[1000px] flex-wrap justify-center gap-x-9 gap-y-2.5`}>
          {brands.map((b) => (
            <li key={b} className="whitespace-nowrap text-[1.05rem] font-medium tracking-[-0.02em] text-ink/80 sm:text-[1.15rem]">{b}</li>
          ))}
        </ul>
      </section>

      {/* Work */}
      <section id="work" className={section}>
        <div className={wrap}>
          <div className={splitHead}>
            <h2 className={h2Split}>Real systems, running on real data.</h2>
            <p className={headP}>
              An AI coach that answers from a user&apos;s own trades, systems that keep 15 brands in sync, stores that load in
              half the time. I design and build each one myself, from the first question to the handover.
            </p>
          </div>
          <div className="mx-auto grid max-w-[560px] gap-5 lg:max-w-none lg:grid-cols-3">
            {cases.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="cursor-pointer flex flex-col rounded-3xl border border-ink/10 bg-mint p-3.5 transition-transform duration-500 ease-soft hover:-translate-y-1"
              >
                {c.panel}
                <div className="px-2.5 pb-2.5 pt-6">
                  <div className="mb-3 flex items-baseline gap-2.5 text-[0.9rem]">
                    <b className="font-medium">{c.who}</b>
                    <span className="text-[0.85rem] text-ink/60">{c.tag}</span>
                  </div>
                  <h3 className={`${h3} mb-3 text-[1.3rem]`}>{c.title}</h3>
                  <p className="m-0 text-[0.95rem] text-ink/80">{c.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-[0.8125rem] text-ink/60">
            Panels are illustrations. Figures in them come from the projects.{" "}
            <Link className={linkUnderline} href="/work">See all my work.</Link>
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={section}>
        <div className={wrap}>
          <div className={splitHead}>
            <h2 className={h2Split}>What I can build for you.</h2>
            <p className={headP}>
              From a plan for AI to the software that runs your business. The stack follows the job.{" "}
              <Link className={linkUnderline} href="/services">See all services.</Link>
            </p>
          </div>
          <ServiceRows />
        </div>
      </section>

      {/* About */}
      <section id="about" className={section}>
        <div className={wrap}>
          <div className="grid gap-10 rounded-3xl border border-ink/10 bg-mint p-7 sm:p-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:p-14">
            <div>
              <div className="mb-7 grid size-36 place-items-center rounded-[18px] bg-ink text-mint sm:size-[164px]" aria-hidden="true">
                <LogoMark className="h-auto w-[92px]" />
              </div>
              <h2 className={`${h2Split} mb-8`}>Who you work with.</h2>
              <b className="block text-[1.1rem] font-medium">{site.name}</b>
              <span className="text-[0.8125rem] text-ink/60">{site.role}, {site.location}</span>
            </div>
            <div className="text-[1.05rem] leading-[1.65] text-ink/80 md:text-[1.08rem]">
              <p className="mb-4">
                I have built software professionally since 2021. At an agency in Istanbul I worked on stores, backend services,
                integrations and platform migrations for 15 retail and corporate brands, with about 3M monthly visits in total.
                Today I also build and run my own products, including SetupBook, a live AI product.
              </p>
              <p className="mb-4">
                I am not tied to one language or framework. I pick the tools that fit your job and your team, and I use AI every
                day to build faster, while checking and testing everything myself before it reaches you.
              </p>
              <p className="mb-0">
                I work alone, so you talk to me directly and I do the work myself. No account managers, no handoffs.
              </p>
              <ul aria-label="What I build" className="mt-6 flex flex-wrap gap-2">
                {capabilities.map((t) => (
                  <li key={t} className="rounded-full border border-ink/20 px-3 py-1 text-[0.8rem] text-ink/80">{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className={section}>
        <div className={wrap}>
          <div className={centerHead}><h2 className={h2}>Advice, then the build.</h2></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title}>
                <h3 className="mb-2.5 text-[1.05rem] font-medium tracking-[-0.02em]">{p.title}</h3>
                <p className="m-0 text-[0.95rem] text-ink/60">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className={section}>
        <div className={wrap}>
          <div className={centerHead}><h2 className={h2}>Numbers from the work.</h2></div>
          <div className="grid gap-10 md:grid-cols-3">
            {results.map((r) => (
              <div key={r.value}>
                <strong className="mb-4 block text-[clamp(2rem,3.4vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.04em]">{r.value}</strong>
                <p className="mb-3.5 text-[1.05rem] leading-[1.55]">{r.text}</p>
                <span className="text-[0.8125rem] text-ink/60">{r.who}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className={section}>
        <div className={wrap}>
          <div className={centerHead}><h2 className={h2}>From first message to handover.</h2></div>
          <ol className="m-0 grid list-none gap-y-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.when}
                className="relative border-t border-ink/10 pr-7 pt-8 before:absolute before:-top-1 before:left-0 before:size-[7px] before:rounded-full before:bg-ink before:shadow-[0_0_0_4px_var(--color-bg)] before:content-['']"
              >
                <span className="mb-3 block text-[0.8125rem] text-ink/60">{s.when}</span>
                <h3 className={`${h3} mb-2`}>{s.title}</h3>
                <p className="text-[0.95rem] text-ink/60">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Contact />
    </>
  );
}
