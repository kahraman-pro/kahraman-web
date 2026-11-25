import Link from "next/link";
import { LogoMark } from "./Logo";
import { profiles, site } from "@/content/site";

// The back of the envelope: outside the letter sheet, on the grey ground.
export function Footer() {
  const link = "cursor-pointer transition-colors hover:text-ink";
  return (
    <footer className="mx-auto w-full max-w-[1296px] px-5 pb-10 pt-14 text-[0.9rem] text-ink/75 sm:px-12 lg:px-20">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <LogoMark className="mt-1 h-[20px] w-auto text-ink" />
          <div>
            <b className="block font-serif text-[1.1rem] font-normal text-ink">{site.name}</b>
            <span>{site.role}, {site.location}</span>
            <a href={`mailto:${site.email}`} className={`mt-1 block w-fit ${link} text-ink underline decoration-ink/30 underline-offset-[0.22em] hover:decoration-ink`}>{site.email}</a>
          </div>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2.5 sm:grid-cols-3">
          {profiles.map((p) => (
            <a key={p.label} className={link} href={p.href} target="_blank" rel="noopener noreferrer">{p.label}</a>
          ))}
          <Link className={link} href="/services">Services</Link>
          <Link className={link} href="/work">My work</Link>
          <Link className={link} href="/blog">Blog</Link>
          <Link className={link} href="/about">About</Link>
          <Link className={link} href="/contact">Contact</Link>
          <Link className={link} href="/privacy">Privacy</Link>
        </nav>
      </div>
      <p className="mt-12 border-t border-ink/12 pt-6 text-[0.8125rem]">&copy; {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
