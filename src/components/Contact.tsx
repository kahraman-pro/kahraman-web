import { CopyEmail } from "./CopyEmail";
import { ArrowUpRight } from "./Icon";
import { bookingProps, contactHref, ctaLabel, profiles, site } from "@/content/site";
import { btnPrimary, h2, lede, wrap } from "@/lib/ui";

type Props = { title?: string; text?: string; subject?: string; showProfiles?: boolean };

export function Contact({
  title = "Have work that should take less time?",
  text = "Send a short message with your project, your tools and your goal. I will tell you what I can do, how long it takes and what it may cost.",
  subject,
  showProfiles = false,
}: Props) {
  return (
    <section id="contact" className="pt-10 md:pt-16">
      <div className={wrap}>
        <div className="relative overflow-hidden rounded-[28px] bg-band px-6 py-20 text-center sm:px-10 md:py-28">
          <span aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-[20px] border border-ink/10" />
          <h2 className={`${h2} relative mx-auto max-w-[14ch]`}>{title}</h2>
          <p className={`${lede} relative mx-auto mt-6 max-w-[46ch] text-ink/75`}>{text}</p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
            <a className={btnPrimary} href={contactHref(subject)} {...bookingProps}>{ctaLabel()}</a>
            <CopyEmail email={site.email} />
          </div>
          {showProfiles && (
            <ul aria-label="Profiles" className="relative mt-8 flex flex-wrap items-center justify-center gap-2">
              {profiles.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-[10px] border border-ink/12 bg-paper/70 px-3.5 text-[0.9rem] font-medium transition-colors hover:border-ink/30 hover:bg-paper hover:text-accent"
                  >
                    {p.label}
                    <ArrowUpRight className="size-3.5 text-ink/50 transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <small className="relative mt-8 block text-[0.8125rem] text-ink/65">
            Based in {site.location}, {site.timezone}. I reply within one working day.
          </small>
        </div>
      </div>
    </section>
  );
}
