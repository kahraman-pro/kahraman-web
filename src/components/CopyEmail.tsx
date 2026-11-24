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
    <span className="inline-flex h-12 items-center gap-1 rounded-xl border border-ink/12 bg-paper/70 pl-4 pr-1.5">
      <a href={`mailto:${email}`} className="cursor-pointer pr-2 font-medium transition-colors hover:text-pine">{email}</a>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className={`h-9 cursor-pointer rounded-[9px] px-3 text-[0.8rem] font-medium transition-colors ${
          label === "Copied" ? "bg-pine text-paper" : "bg-ink/5 text-ink/75 hover:bg-ink/10 hover:text-ink"
        }`}
      >
        {label}
      </button>
    </span>
  );
}
