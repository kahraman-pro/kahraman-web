import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { AiCoachPanel, SpeedPanel, SyncPanel } from "@/components/Panels";
import { ServiceRows } from "@/components/ServiceRows";
import { bookingProps, brands, contactHref, ctaLabel, principles, profiles, results, site, stats, steps } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight } from "@/components/Icon";
import { btnPrimary, card, centerHead, chip, h1, h2, h2Split, h3, headP, lede, linkUnderline, section, splitHead, wrap } from "@/lib/ui";

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
  "RAG and chatbots",
  "MCP servers",
  "Integrations and automation",
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
  const [lead, ...rest] = cases;
  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-36 text-center md:pb-20 md:pt-48">
        <div className={wrap}>
          <h1 className={`${h1} mx-auto max-w-[15ch]`}>Software and AI, built for how your team works.</h1>
          <p className={`${lede} mx-auto mt-7 max-w-[54ch]`}>
            I am a software engineer. I look at how your business runs, show where software and AI save the most time and
            where they do not, then design and build it myself, end to end.
          </p>
          <div className="mt-10 flex justify-center">
            <a className={btnPrimary} href={contactHref()} {...bookingProps}>
              {ctaLabel()}
              <ArrowRight className="size-4 transition-transform duration-300 ease-soft group-hover/btn:translate-x-0.5" />
            </a>
          </div>
          <ul className={`${card} mx-auto mt-16 grid max-w-[980px] grid-cols-2 text-left sm:grid-cols-4`}>
            {stats.map((s, i) => (
              <li
                key={s.label}
                className={`flex flex-col gap-1.5 p-5 sm:p-6 ${i % 2 ? "border-l border-ink/10" : ""} ${i > 1 ? "border-t border-ink/10 sm:border-t-0" : ""} ${i === 2 ? "sm:border-l" : ""}`}
              >
                <strong className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold leading-none tracking-[-0.04em]">{s.value}</strong>
                <span className="text-balance text-[0.8125rem] leading-snug text-ink/60">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Brands */}
      <section aria-label="Brands" className="pb-4 pt-6">
        <div className={`${wrap} flex flex-col items-center gap-5 md:flex-row md:gap-10`}>
          <p className="shrink-0 text-[0.8125rem] text-ink/60 md:w-40 md:text-left">15+ brands I have built software for</p>
          <ul className="flex flex-1 flex-wrap justify-center gap-x-8 gap-y-2.5 border-ink/10 md:justify-between md:border-l md:pl-10">
            {brands.map((b) => (
              <li key={b} className="whitespace-nowrap text-[1.05rem] font-semibold tracking-[-0.02em] text-ink/55 sm:text-[1.12rem]">{b}</li>
            ))}
          </ul>
        </div>
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
          <div className="grid gap-5 lg:grid-cols-2">
            <CaseCard c={lead} wide />
            {rest.map((c) => <CaseCard key={c.title} c={c} />)}
          </div>
          <p className="mt-6 text-[0.8125rem] text-ink/60">
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
          <div className="grid gap-10 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] md:gap-14 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-20">
            <figure className="m-0 max-w-[240px] self-start md:sticky md:top-28 md:max-w-none">
              <div className="rounded-[24px] bg-mint p-2.5">
                <Image
                  src="/brand/mustafa-kahraman.webp"
                  alt="Mustafa Kahraman smiling on a wooden balcony at sunset"
                  width={900}
                  height={1125}
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 240px"
                  className="aspect-[4/5] w-full rounded-[16px] object-cover"
                />
              </div>
              <figcaption className="mt-4 flex flex-col px-1">
                <b className="text-[1.1rem] font-semibold tracking-[-0.015em]">{site.name}</b>
                <span className="text-[0.8125rem] text-ink/60">{site.role}, {site.location}</span>
                <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.8125rem]">
                  {profiles.map((p) => (
                    <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className={linkUnderline}>{p.label}</a>
                  ))}
                </span>
              </figcaption>
            </figure>
            <div className="md:pt-4">
              <h2 className={`${h2Split} mb-8`}>Who you work with.</h2>
              <div className="max-w-[60ch] text-[1.05rem] leading-[1.7] text-ink/75 md:text-[1.1rem]">
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
              </div>
              <ul aria-label="What I build" className="mt-8 flex flex-wrap gap-2">
                {capabilities.map((t) => (
                  <li key={t} className={chip}>{t}</li>
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
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title} className="relative border-t border-ink/12 pt-6 before:absolute before:-top-px before:left-0 before:h-0.5 before:w-10 before:bg-pine before:content-['']">
                <h3 className="mb-2.5 text-[1.08rem] font-semibold tracking-[-0.02em]">{p.title}</h3>
                <p className="m-0 text-[0.95rem] text-ink/65">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className={section}>
        <div className={wrap}>
          <div className={centerHead}><h2 className={h2}>Numbers from the work.</h2></div>
          <div className={`${card} grid md:grid-cols-3`}>
            {results.map((r, i) => (
              <div key={r.value} className={`flex flex-col p-7 lg:p-9 ${i ? "border-t border-ink/10 md:border-l md:border-t-0" : ""}`}>
                <strong className="mb-5 block text-[clamp(2rem,3.4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.04em]">{r.value}</strong>
                <p className="mb-6 text-[1.02rem] leading-[1.6] text-ink/80">{r.text}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-[0.8125rem] text-pine before:size-1.5 before:rounded-full before:bg-pine before:content-['']">{r.who}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className={section}>
        <div className={wrap}>
          <div className={centerHead}><h2 className={h2}>From first message to handover.</h2></div>
          <ol className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.when} className={`${card} relative flex flex-col p-6`}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-md bg-mint px-2 py-0.5 text-[0.8125rem] font-medium">{s.when}</span>
                  {i < steps.length - 1 && <span aria-hidden="true" className="hidden h-px flex-1 lg:block bg-[repeating-linear-gradient(90deg,rgb(19_21_19/0.2)_0_4px,transparent_4px_8px)]" />}
                </div>
                <h3 className={`${h3} mb-2`}>{s.title}</h3>
                <p className="text-[0.95rem] text-ink/65">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Contact showProfiles />
    </>
  );
}

function CaseCard({ c, wide = false }: { c: (typeof cases)[number]; wide?: boolean }) {
  return (
    <Link
      href={c.href}
      className={`${card} group flex cursor-pointer flex-col p-2.5 transition duration-500 ease-soft hover:-translate-y-1 hover:shadow-lift ${
        wide ? "lg:col-span-2 lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-center" : ""
      }`}
    >
      <div className={`rounded-[14px] bg-mint p-4 sm:p-5 ${wide ? "lg:order-2 lg:p-8" : ""}`}>{c.panel}</div>
      <div className={`px-3 pb-3 pt-6 ${wide ? "lg:px-8 lg:py-8" : ""}`}>
        <div className="mb-3 flex items-center gap-2.5 text-[0.875rem]">
          <b className="font-semibold">{c.who}</b>
          <span className="rounded-md border border-ink/12 px-2 py-0.5 text-[0.78rem] text-ink/65">{c.tag}</span>
          <span aria-hidden="true" className="ml-auto flex size-9 items-center justify-center rounded-full border border-ink/12 text-ink/60 transition duration-300 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <ArrowRight className="size-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5" />
          </span>
        </div>
        <h3 className={`${h3} mb-3 ${wide ? "text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.2]" : "text-[1.3rem]"}`}>{c.title}</h3>
        <p className="m-0 max-w-[52ch] text-[0.95rem] text-ink/70">{c.text}</p>
      </div>
    </Link>
  );
}
