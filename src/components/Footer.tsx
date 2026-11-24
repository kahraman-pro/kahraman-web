import Link from "next/link";
import { LogoMark } from "./Logo";
import { profiles, site } from "@/content/site";
import { wrap } from "@/lib/ui";

export function Footer() {
  const link = "cursor-pointer transition-colors hover:text-accent";
  return (
    <footer className="pb-8 pt-16 text-[0.88rem] text-ink/60">
      <div className={wrap}>
        <div className="flex flex-col gap-8 border-t border-ink/10 pt-10 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-3.5">
            <LogoMark className="mt-1 h-[18px] w-auto text-ink" />
            <div>
              <b className="block font-semibold tracking-[-0.01em] text-ink">{site.name}</b>
              <span>{site.role}, {site.location}</span>
            </div>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3">
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
        <p className="mt-10 text-[0.8125rem]">&copy; {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
