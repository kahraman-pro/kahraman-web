"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import { bookingProps, contactHref, nav, site } from "@/content/site";
import { btnPrimary, btnPrimarySm, wrap } from "@/lib/ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isCurrent = (href: string) => !href.includes("#") && pathname.startsWith(href);
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-ink/10 bg-bg/85 backdrop-blur-xl backdrop-saturate-150" : "border-transparent"
      }`}
    >
      <div className={`${wrap} flex h-[68px] items-center gap-4`}>
        <Link href="/" aria-label={`${site.name}, home`} className="cursor-pointer mr-auto flex items-center gap-3 font-medium tracking-[-0.02em] transition-opacity hover:opacity-75">
          <LogoMark className="h-[22px] w-auto text-ink" />
          <span className="whitespace-nowrap border-l border-ink/20 pl-3 leading-none">{site.name}</span>
        </Link>
        <nav aria-label="Sections" className="mr-2 hidden gap-6 text-[0.88rem] text-ink/60 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={`cursor-pointer transition-colors hover:text-ink ${isCurrent(item.href) ? "text-ink" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href={contactHref()} {...bookingProps} className={btnPrimarySm}>
            {site.bookingUrl ? "Book a call" : "Get in touch"}
          </a>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-9 cursor-pointer items-center rounded-full border border-ink/20 px-4 text-[0.85rem] font-medium transition-colors hover:bg-ink/5 md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`${open ? "flex" : "hidden"} flex-col border-t border-ink/10 bg-bg px-5 pb-6 pt-2 sm:px-8 md:hidden`}
      >
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="cursor-pointer border-b border-ink/10 py-3 text-[1.05rem] transition-colors hover:text-ink/60">
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
