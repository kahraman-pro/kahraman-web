import { site } from "@/content/site";

// A route handler instead of robots.ts, because the metadata API cannot emit Content-Signal.
// Search and AI answers may use the site; training AI models on it is not allowed.
export const dynamic = "force-static";

export function GET() {
  const body = [
    "User-agent: *",
    "Content-Signal: search=yes, ai-input=yes, ai-train=no",
    "Allow: /",
    "",
    `Sitemap: ${site.url}/sitemap.xml`,
    `Host: ${site.url}`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
