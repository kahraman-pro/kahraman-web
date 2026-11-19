import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Search engines and AI assistants are all welcome: the site is meant to be found.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
