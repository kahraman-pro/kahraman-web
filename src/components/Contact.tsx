import { CopyEmail } from "./CopyEmail";
import { ArrowUpRight } from "./Icon";
import { LogoMark } from "./Logo";
import { bookingProps, contactHref, ctaLabel, profiles, site } from "@/content/site";
import { btnPrimary, h2, lede, wrap } from "@/lib/ui";

type Props = { title?: string; text?: string; subject?: string; showProfiles?: boolean };

// The letter's close: the ask, the two ways to reply, and the signature block.
export function Contact({
  title = "Have work that should take less time?",
  text = "Send a short message with your project, your tools and your goal. I will tell you what I can do, how long it takes and what it may cost.",
  subject,
  showProfiles = false,
}: Props) {
  return (
    <section id="contact" className="pb-14 pt-10 md:pb-20 md:pt-16">
      <div className={wrap}>
        <div className="border-t border-ink/15 pt-16 text-center md:pt-24">
          <h2 className={`${h2} mx-auto max-w-[16ch]`}>{title}</h2>
          <p className={`${lede} mx-auto mt-6 max-w-[48ch]`}>{text}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
            <a className={btnPrimary} href={contactHref(subject)} {...bookingProps}>{ctaLabel()}</a>
            <CopyEmail email={site.email} />
          </div>
          {showProfiles && (
            <ul aria-label="Profiles" className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
              {profiles.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex cursor-pointer items-center gap-1.5 py-1 text-[0.95rem] font-medium underline decoration-ink/25 underline-offset-[0.25em] transition-[text-decoration-color] hover:decoration-ink"
                  >
                    {p.label}
                    <ArrowUpRight className="size-3.5 text-ink/60 transition-transform duration-300 ease-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <div className="mx-auto mt-16 flex w-fit flex-col items-center gap-3">
            <LogoMark className="h-[26px] w-auto text-ink" />
            <span className="font-serif text-[1.35rem] leading-none">{site.name}</span>
            <small className="max-w-[36ch] text-[0.875rem] text-ink/75">
              Based in {site.location}, {site.timezone}. I reply within one working day.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
