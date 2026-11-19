import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** Use the title as-is, without the " | Mustafa Kahraman" suffix. */
  absoluteTitle?: boolean;
  image?: { url: string; width: number; height: number; alt: string };
  type?: "website" | "article" | "profile";
};

export const absoluteUrl = (path: string) => `${site.url}${path === "/" ? "" : path}`;

// Every indexable page builds its metadata here, so canonical, Open Graph and Twitter tags agree.
// Pages without their own image fall back to the generated /opengraph-image.
const defaultImage = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}, software engineer and AI consultant` };

export function pageMetadata({ title, description, path, absoluteTitle = false, image = defaultImage, type = "website" }: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: "en_US",
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path) })),
});

// Escaping "<" keeps any text from closing the script tag early.
export const jsonLd = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
