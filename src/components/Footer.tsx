import Link from "next/link";
import { site } from "@/content/site";
import { wrap } from "@/lib/ui";

export function Footer() {
  const link = "cursor-pointer transition-colors hover:text-ink";
  return (
    <footer className="border-t border-ink/10 py-7 text-[0.88rem] text-ink/60">
      <div className={`${wrap} flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}>
        <span>&copy; {new Date().getFullYear()} {site.name}</span>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <a className={link} href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className={link} href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <Link className={link} href="/services">Services</Link>
          <Link className={link} href="/work">My work</Link>
          <Link className={link} href="/about">About</Link>
          <Link className={link} href="/contact">Contact</Link>
          <Link className={link} href="/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
