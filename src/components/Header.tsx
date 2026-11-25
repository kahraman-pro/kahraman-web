"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import { bookingProps, contactHref, nav, site } from "@/content/site";
import { btnPrimary, btnPrimarySm } from "@/lib/ui";

// The header is the top strip of the letter sheet. On the home page the letterhead carries the
// monogram, so the small mark only appears once the letterhead has scrolled away.
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isCurrent = (href: string) => !href.includes("#") && pathname.startsWith(href);
  const home = pathname === "/";
  const showMark = !home || scrolled;
  // Desktop row follows the letterhead: section links on the left, About and the one ink button on the right.
  // The button already opens contact, so the Contact link stays in the mobile menu and the footer.
  const sectionLinks = nav.filter((item) => item.href !== "/about" && item.href !== "/contact");
  const about = nav.find((item) => item.href === "/about");
  const linkClass =
    "relative cursor-pointer rounded-md px-3 py-2 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-stamp aria-[current=page]:text-ink aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:bottom-1 aria-[current=page]:after:h-px aria-[current=page]:after:bg-ink aria-[current=page]:after:content-['']";

  return (
    <header
      className={`sticky top-0 z-50 rounded-t-[6px] bg-paper transition-[border-color] duration-300 ease-soft border-b ${
        scrolled || open || !home ? "border-ink/12" : "border-transparent"
      }`}
    >
      <div className="flex h-16 items-center px-5 sm:px-10 lg:h-[76px] lg:px-14">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className={`flex shrink-0 cursor-pointer items-center gap-3 overflow-hidden rounded-md transition-[opacity,max-width,margin] duration-500 ease-soft hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-stamp ${
            showMark ? "max-w-[260px] opacity-100 lg:mr-4" : "max-w-0 opacity-0 focus-visible:max-w-[260px] focus-visible:opacity-100"
          }`}
        >
          <LogoMark className="h-[18px] w-auto text-ink" />
          <span className="whitespace-nowrap font-serif text-[1.05rem] leading-none max-[379px]:hidden">{site.name}</span>
        </Link>
        <nav aria-label="Sections" className="-ml-3 hidden items-center gap-1 text-[0.95rem] text-ink/75 lg:flex">
          {sectionLinks.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-3 text-[0.95rem] text-ink/75 lg:flex">
          {about && (
            <Link href={about.href} aria-current={isCurrent(about.href) ? "page" : undefined} className={linkClass}>
              {about.label}
            </Link>
          )}
          <a href={contactHref()} {...bookingProps} className={btnPrimarySm}>
            {site.bookingUrl ? "Book a call" : "Get in touch"}
          </a>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
          className="ml-auto inline-flex h-10 shrink-0 cursor-pointer items-center gap-2.5 rounded-[10px] border border-ink/20 px-3.5 text-[0.9rem] font-medium transition-colors hover:bg-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stamp lg:hidden"
        >
          <span aria-hidden="true" className="flex w-3.5 flex-col gap-[3px]">
            <i className={`h-[1.5px] bg-ink transition-transform duration-300 ease-soft ${open ? "translate-y-[2.25px] rotate-45" : ""}`} />
            <i className={`h-[1.5px] bg-ink transition-transform duration-300 ease-soft ${open ? "-translate-y-[2.25px] -rotate-45" : ""}`} />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`${open ? "flex" : "hidden"} flex-col border-t border-ink/12 px-5 pb-5 pt-2 sm:px-10 lg:hidden`}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={isCurrent(item.href) ? "page" : undefined}
            className="cursor-pointer border-b border-ink/10 py-3.5 font-serif text-[1.25rem] transition-colors hover:text-ink-deep aria-[current=page]:text-ink"
          >
            {item.label}
          </Link>
        ))}
        <a href={contactHref()} {...bookingProps} className={`${btnPrimary} mt-5`}>
          {site.bookingUrl ? "Book a free 30 minute call" : "Get in touch"}
        </a>
      </nav>
    </header>
  );
}
