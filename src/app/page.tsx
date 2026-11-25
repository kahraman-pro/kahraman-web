import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/Contact";
import { CopyEmail } from "@/components/CopyEmail";
import { ArrowRight } from "@/components/Icon";
import { LogoMark } from "@/components/Logo";
import { AiCoachPanel, SpeedPanel, SyncPanel } from "@/components/Panels";
import { Postmark } from "@/components/Postmark";
import { ServiceRows } from "@/components/ServiceRows";
import { bookingProps, brands, contactHref, ctaLabel, principles, profiles, results, site, stats, steps } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import { body, btnPrimary, chip, h1, h2, h2Margin, h3, headP, lede, linkUnderline, marginGrid, marginHead, section, wrap } from "@/lib/ui";

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
    who: "Retail brands",
    tag: "Performance",
    title: "Pages that load in half the time.",
    text: "Rendering and Core Web Vitals work across the brand stores I worked on took LCP from 3.8 s to 1.5 s and mobile Lighthouse from 52 to 86.",
  },
];

export default function Home() {
  return (
    <>
      {/* Letterhead */}
      <section className="relative pb-14 pt-6 text-center md:pb-20 md:pt-4">
        <div className={wrap}>
          <div className="flex flex-col items-center">
            <LogoMark className="h-9 w-auto text-ink md:h-12" />
            <p className="mt-4 font-serif text-[1.45rem] leading-none md:mt-5 md:text-[1.7rem]">{site.name}</p>
            <p className="mt-2.5 text-[0.9rem] text-ink/75">{site.role}, {site.location}</p>
            <span aria-hidden="true" className="mt-7 block h-px w-44 bg-ink/20" />
          </div>
          <h1 className={`${h1} mx-auto mt-8 max-w-[17ch] md:mt-9`}>Software and AI,<br className="max-sm:hidden" /> built for how your team works.</h1>
          <p className={`${lede} mx-auto mt-6 max-w-[56ch]`}>
            I am a software engineer. I look at how your business runs, show where software and AI save the most time and
            where they do not, then design and build it myself, end to end.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a className={btnPrimary} href={contactHref()} {...bookingProps}>
              {ctaLabel()}
              <ArrowRight className="size-4 transition-transform duration-300 ease-soft group-hover/btn:translate-x-0.5" />
            </a>
            <CopyEmail email={site.email} />
          </div>

          <div className="relative mx-auto mt-16 max-w-[1080px] md:mt-20">
            <Postmark className="pointer-events-none absolute -right-1 -top-14 w-[112px] rotate-[-12deg] text-stamp opacity-[0.82] mix-blend-multiply motion-safe:animate-stamp sm:-top-20 sm:w-[150px] md:-top-24 md:w-[190px] lg:-right-8" />
            <ul className="m-0 grid list-none grid-cols-2 border-t border-ink/15 p-0 text-left lg:grid-cols-4">
              {stats.map((s, i) => (
                <li
                  key={s.label}
                  className={`flex flex-col gap-2 py-6 pr-4 lg:py-7 ${i % 2 ? "border-l border-ink/15 pl-5 sm:pl-7" : ""} ${i > 1 ? "border-t border-ink/15 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-7" : ""}`}
                >
                  <strong className="font-serif text-[clamp(2.1rem,3.6vw,3rem)] font-normal leading-none tracking-[-0.025em]">{s.value}</strong>
                  <span className="text-balance text-[0.9rem] leading-snug text-ink/75">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section aria-label="Brands" className="pb-6">
        <div className={`${wrap} text-center`}>
          <p className="text-[0.9rem] text-ink/75">15+ brands I have built software for</p>
          <ul className="mx-auto mt-5 flex max-w-[1000px] list-none flex-wrap justify-center gap-x-8 gap-y-3 p-0">
            {brands.map((b) => (
              <li key={b} className="whitespace-nowrap font-serif text-[1.15rem] text-ink/70 md:text-[1.3rem]">{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work */}
      <section id="work" className={section}>
        <div className={`${wrap} ${marginGrid}`}>
          <div className={marginHead}>
            <h2 className={h2Margin}>Real systems, running on real data.</h2>
            <p className={`${headP} mt-5`}>
              An AI coach that answers from a user&apos;s own trades, systems that keep 15 brands in sync, stores that load in
              half the time. I design and build each one myself, from the first question to the handover.
            </p>
            <Link className={`${linkUnderline} mt-5 inline-block text-[0.95rem] font-medium`} href="/work">See all my work.</Link>
          </div>
          <div>
            <div className="border-t border-ink/15">
              {cases.map((c) => <CaseRow key={c.title} c={c} />)}
            </div>
            <p className="mt-5 text-[0.875rem] text-ink/75">Panels are illustrations. Figures in them come from the projects.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={section}>
        <div className={`${wrap} ${marginGrid}`}>
          <div className={marginHead}>
            <h2 className={h2Margin}>What I can build for you.</h2>
            <p className={`${headP} mt-5`}>
              From a plan for AI to the software that runs your business. The stack follows the job.{" "}
              <Link className={linkUnderline} href="/services">See all services.</Link>
            </p>
          </div>
          <ServiceRows />
        </div>
      </section>

      {/* About */}
      <section id="about" className={section}>
        <div className={`${wrap} ${marginGrid}`}>
          <div className={marginHead}>
            <h2 className={h2Margin}>Who you work with.</h2>
            <figure className="m-0 mt-8 max-w-[260px]">
              <Image
                src="/brand/mustafa-kahraman.webp"
                alt="Mustafa Kahraman smiling on a wooden balcony at sunset"
                width={900}
                height={1125}
                sizes="(min-width: 768px) 260px, 220px"
                className="aspect-[4/5] w-full rounded-[6px] object-cover"
              />
              <figcaption className="mt-4 flex flex-col">
                <b className="font-serif text-[1.15rem] font-normal">{site.name}</b>
                <span className="text-[0.875rem] text-ink/75">{site.role}, {site.location}</span>
                <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.875rem]">
                  {profiles.map((p) => (
                    <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer" className={linkUnderline}>{p.label}</a>
                  ))}
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="md:pt-1">
            <div className={`${body} max-w-[62ch]`}>
              <p className="mb-5">
                I have built software professionally since 2021. At an agency in Istanbul I worked on stores, backend services,
                integrations and platform migrations for 15 retail and corporate brands, with about 3M monthly visits in total.
                Today I also build and run my own products, including SetupBook, a live AI product.
              </p>
              <p className="mb-5">
                I am not tied to one language or framework. I pick the tools that fit your job and your team, and I use AI every
                day to build faster, while checking and testing everything myself before it reaches you.
              </p>
              <p className="mb-0">
                I work alone, so you talk to me directly and I do the work myself. No account managers, no handoffs.
              </p>
            </div>
            <ul aria-label="What I build" className="mt-9 flex list-none flex-wrap gap-2 p-0">
              {capabilities.map((t) => (
                <li key={t} className={chip}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className={section}>
        <div className={`${wrap} ${marginGrid}`}>
          <div className={marginHead}>
            <h2 className={h2Margin}>Advice, then the build.</h2>
          </div>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="border-t border-ink/15 pt-6">
                <h3 className={`${h3} mb-3`}>{p.title}</h3>
                <p className="m-0 text-[1rem] leading-[1.65] text-ink/75">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className={section}>
        <div className={wrap}>
          <h2 className={`${h2} max-w-[18ch]`}>Numbers from the work.</h2>
          {/* A ruled statement: figure, what it means, where it comes from. */}
          <dl className="m-0 mt-10 border-t border-ink/15 md:mt-14">
            {results.map((r) => (
              <div key={r.value} className="grid gap-3 border-b border-ink/15 py-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.7fr)_minmax(0,0.8fr)] md:items-baseline md:gap-10 md:py-8">
                <dt className="font-serif text-[clamp(1.75rem,2.6vw,2.2rem)] leading-[1.1] tracking-[-0.02em]">{r.value}</dt>
                <dd className="m-0 max-w-[60ch] text-[1.02rem] leading-[1.6] text-ink/80">{r.text}</dd>
                <dd className="m-0 inline-flex items-center gap-2 text-[0.875rem] text-ink/75 before:size-1.5 before:flex-none before:rounded-full before:bg-stamp before:content-[''] md:justify-self-end md:text-right">{r.who}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Process */}
      <section id="process" className={section}>
        <div className={wrap}>
          <h2 className={`${h2} max-w-[18ch]`}>From first message to handover.</h2>
          <ol className="m-0 mt-10 grid list-none gap-x-10 p-0 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.when} className="flex flex-col border-t border-ink/15 pb-8 pt-6">
                <span aria-hidden="true" className="font-serif text-[3.25rem] leading-none tracking-[-0.03em] text-ink/85">{i + 1}.</span>
                <span className="sr-only">{s.when}: </span>
                <h3 className={`${h3} mb-2.5 mt-6`}>{s.title}</h3>
                <p className="m-0 text-[1rem] leading-[1.65] text-ink/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Contact showProfiles />
    </>
  );
}

function CaseRow({ c }: { c: (typeof cases)[number] }) {
  return (
    <Link
      href={c.href}
      className="group grid cursor-pointer gap-6 border-b border-ink/15 py-8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stamp sm:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] sm:items-center sm:gap-8 lg:gap-10"
    >
      <div className="transition-transform duration-500 ease-soft group-hover:-translate-y-0.5">{c.panel}</div>
      <div>
        <div className="flex items-start gap-4">
          <h3 className="mb-3 flex-1 font-serif text-[clamp(1.4rem,2vw,1.7rem)] font-normal leading-[1.2] tracking-[-0.015em] text-balance">{c.title}</h3>
          <span aria-hidden="true" className="flex size-9 flex-none items-center justify-center rounded-full border border-ink/20 text-ink/70 transition-colors duration-300 ease-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
            <ArrowRight className="size-4 transition-transform duration-300 ease-soft group-hover:translate-x-0.5" />
          </span>
        </div>
        <p className="m-0 max-w-[48ch] text-[0.975rem] leading-[1.6] text-ink/75">{c.text}</p>
        <p className="mb-0 mt-4 inline-flex items-center gap-2 text-[0.875rem] text-ink/75 before:size-1.5 before:flex-none before:rounded-full before:bg-stamp before:content-['']">
          <span className="font-medium text-ink">{c.who}</span>
          <span aria-hidden="true" className="text-ink/35">·</span>
          {c.tag}
        </p>
      </div>
    </Link>
  );
}
