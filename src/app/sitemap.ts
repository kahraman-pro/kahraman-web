import type { MetadataRoute } from "next";
import { APP_LEGAL_DOCS, APPS, type LegalDoc } from "@/content/app-legal";
import { posts } from "@/content/blog";
import { services } from "@/content/services";
import { projects } from "@/content/work";
import { absoluteUrl } from "@/lib/seo";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: Entry["changeFrequency"], extra: Partial<Entry> = {}): Entry => ({
    url: absoluteUrl(path),
    changeFrequency,
    priority,
    ...extra,
  });

  return [
    page("/", 1, "monthly"),
    page("/services", 0.9, "monthly"),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8, "monthly")),
    page("/work", 0.8, "monthly"),
    ...projects.map((p) =>
      page(`/work/${p.slug}`, 0.7, "monthly", {
        images: [p.cover, ...p.gallery.map((g) => g.src)].filter((src): src is string => Boolean(src)).map(absoluteUrl),
      }),
    ),
    page("/blog", 0.6, "weekly"),
    ...posts.map((p) => page(`/blog/${p.slug}`, 0.6, "yearly", { lastModified: new Date(`${p.date}T00:00:00Z`) })),
    page("/about", 0.6, "monthly"),
    page("/contact", 0.6, "monthly"),
    page("/privacy", 0.2, "yearly"),
    // The app documents carry a real "last updated" date.
    ...APPS.flatMap((app) =>
      (Object.keys(APP_LEGAL_DOCS) as LegalDoc[]).map((doc) =>
        page(`/${doc}/${app.repo}`, 0.3, "yearly", { lastModified: new Date(`${app.updated}T00:00:00Z`) }),
      ),
    ),
  ];
}
