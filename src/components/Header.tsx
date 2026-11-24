"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";
import { bookingProps, contactHref, nav, site } from "@/content/site";
import { btnPrimary, btnPrimarySm } from "@/lib/ui";

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto max-w-[1200px] rounded-2xl border transition-[background-color,border-color,box-shadow] duration-300 ease-soft ${
          solid ? "border-ink/10 bg-paper/85 shadow-card backdrop-blur-xl backdrop-saturate-150" : "border-transparent"
        }`}
      >
        <div className="flex h-14 items-center gap-4 pl-4 pr-2.5 sm:pl-5">
          <Link
            href="/"
            aria-label={`${site.name}, home`}
            className="mr-auto flex cursor-pointer items-center gap-3 font-semibold tracking-[-0.02em] transition-opacity hover:opacity-75"
          >
            <LogoMark className="h-[19px] w-auto text-ink" />
            <span className="whitespace-nowrap leading-none">{site.name}</span>
          </Link>
          <nav aria-label="Sections" className="hidden items-center gap-0.5 text-[0.875rem] text-ink/65 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className={`cursor-pointer rounded-lg px-3 py-1.5 transition-colors hover:bg-ink/5 hover:text-ink ${
                  isCurrent(item.href) ? "bg-mint-soft text-ink" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-2 hidden md:block">
            <a href={contactHref()} {...bookingProps} className={btnPrimarySm}>
              {site.bookingUrl ? "Book a call" : "Get in touch"}
            </a>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-[10px] border border-ink/15 bg-paper px-3.5 text-[0.85rem] font-medium transition-colors hover:bg-mint-soft md:hidden"
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
          className={`${open ? "flex" : "hidden"} flex-col border-t border-ink/10 px-4 pb-4 pt-2 md:hidden`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg px-2 py-3 text-[1.05rem] transition-colors hover:bg-mint-soft"
            >
              {item.label}
            </Link>
          ))}
          <a href={contactHref()} {...bookingProps} className={`${btnPrimary} mt-3`}>
            {site.bookingUrl ? "Book a free 30 minute call" : "Get in touch"}
          </a>
        </nav>
      </div>
    </header>
  );
}
