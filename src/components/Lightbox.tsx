"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "./Icon";

export type LightboxImage = { src: string; alt: string; width?: number; height?: number };

type Props = {
  images: LightboxImage[];
  cover?: LightboxImage;
  showGallery: boolean;
  /** Keep the cover in the viewer but do not render it as a thumbnail. */
  hideCover?: boolean;
};

// Cover and gallery share one viewer: click any image to open it full screen,
// then use the arrows, swipe, or the keyboard (← → Esc).
export function ProjectMedia({ images, cover, showGallery, hideCover = false }: Props) {
  const all = cover ? [cover, ...images] : images;
  const [index, setIndex] = useState<number | null>(null);
  const [touchX, setTouchX] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + all.length) % all.length)), [all.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, close, step]);

  const current = index === null ? null : all[index];
  const offset = cover ? 1 : 0;

  return (
    <>
      {cover && !hideCover && (
        <button
          type="button"
          onClick={() => setIndex(0)}
          className="block w-full cursor-zoom-in overflow-hidden rounded-[8px] border border-ink/15 bg-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-stamp"
          aria-label={`Open image: ${cover.alt}`}
        >
          <Image src={cover.src} alt={cover.alt} width={1920} height={1200} priority sizes="(max-width: 1260px) 100vw, 1180px" className="h-auto w-full" />
        </button>
      )}

      {showGallery && images.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {images.map((img, i) => (
            <figure key={img.src} className="m-0 rounded-[8px] bg-wash p-2 sm:p-2.5">
              <button
                type="button"
                onClick={() => setIndex(i + offset)}
                className="block w-full cursor-zoom-in overflow-hidden rounded-[5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stamp"
                aria-label={`Open image: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width ?? 800}
                  height={img.height ?? 1600}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                  className="h-auto w-full transition-transform duration-500 ease-soft hover:scale-[1.03]"
                />
              </button>
              <figcaption className="px-1 pb-0.5 pt-2.5 text-[0.8rem] leading-[1.45] text-ink/75">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {current && index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[100] flex cursor-zoom-out flex-col bg-ink/[0.97]"
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            setTouchX(null);
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 text-sm text-paper/70 sm:px-6">
            <span className="tabular-nums">{index + 1} / {all.length}</span>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="cursor-pointer rounded-[10px] border border-paper/25 px-4 py-1.5 font-medium text-paper transition-colors hover:bg-paper/10"
            >
              Close
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 pb-3 sm:px-20">
            <div className="relative h-full w-full cursor-default" onClick={(e) => e.stopPropagation()}>
              <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            {all.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={(e) => { e.stopPropagation(); step(-1); }}
                  className="absolute left-3 top-1/2 hidden cursor-pointer size-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/25 text-xl text-paper transition-colors hover:bg-paper/10 sm:flex"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={(e) => { e.stopPropagation(); step(1); }}
                  className="absolute right-3 top-1/2 hidden cursor-pointer size-11 -translate-y-1/2 items-center justify-center rounded-full border border-paper/25 text-xl text-paper transition-colors hover:bg-paper/10 sm:flex"
                >
                  <ArrowRight className="size-5" />
                </button>
              </>
            )}
          </div>
          <p className="px-5 pb-5 text-center text-[0.85rem] text-paper/70" onClick={(e) => e.stopPropagation()}>
            {current.alt}
            <span className="mt-1 block text-[0.75rem] text-paper/70 sm:hidden">Swipe to see more</span>
          </p>
        </div>
      )}
    </>
  );
}
