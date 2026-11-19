import { CopyEmail } from "./CopyEmail";
import { contactHref, ctaLabel, site } from "@/content/site";
import { btnPrimary, h2, lede, wrap } from "@/lib/ui";

type Props = { title?: string; text?: string; subject?: string };

export function Contact({
  title = "Have work that should take less time?",
  text = "Send a short message with your project, your tools and your goal. I will tell you what I can do, how long it takes and what it may cost.",
  subject,
}: Props) {
  return (
    <section id="contact" className="border-t border-ink/10 py-24 text-center md:py-36">
      <div className={wrap}>
        <h2 className={`${h2} mx-auto max-w-[14ch]`}>{title}</h2>
        <p className={`${lede} mx-auto mt-6 max-w-[46ch]`}>{text}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <a className={btnPrimary} href={contactHref(subject)}>{ctaLabel()}</a>
          <CopyEmail email={site.email} />
        </div>
        <small className="mt-6 block text-[0.8125rem] text-ink/60">
          Based in {site.location}, {site.timezone}. I reply within one working day.
        </small>
      </div>
    </section>
  );
}
