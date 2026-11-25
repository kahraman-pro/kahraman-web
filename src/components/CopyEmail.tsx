"use client";

import { useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setLabel("Copied");
    } catch {
      setLabel("Copy failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setLabel("Copy"), 1800);
  };

  return (
    <span className="inline-flex h-12 items-center gap-1 rounded-[10px] border border-ink/20 pl-4 pr-1.5">
      <a href={`mailto:${email}`} className="cursor-pointer pr-2 font-medium underline decoration-ink/25 underline-offset-[0.22em] transition-[text-decoration-color] hover:decoration-ink">{email}</a>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className={`h-9 min-w-[4.25rem] cursor-pointer rounded-[7px] px-3 text-[0.85rem] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stamp ${
          label === "Copied" ? "bg-ink text-paper" : "bg-wash text-ink/80 hover:bg-ink/10 hover:text-ink"
        }`}
      >
        {label}
      </button>
    </span>
  );
}
