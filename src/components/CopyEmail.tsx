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
    <span className="inline-flex items-center gap-2.5">
      <a href={`mailto:${email}`} className="cursor-pointer border-b border-ink font-medium transition-opacity hover:opacity-70">{email}</a>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className="cursor-pointer rounded-full border border-ink/20 px-3 py-1 text-[0.78rem] font-medium text-ink/80 transition-colors hover:text-ink"
      >
        {label}
      </button>
    </span>
  );
}
