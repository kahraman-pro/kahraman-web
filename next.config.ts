import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // One host for every URL, so canonical links, the sitemap and search consoles agree.
      { source: "/:path*", has: [{ type: "host", value: "www.kahraman.pro" }], destination: "https://kahraman.pro/:path*", permanent: true },
      // Old SetupBook legal URLs (the repo was renamed) keep working.
      { source: "/:doc(privacy|terms|delete-account|support)/setupbook-flutter", destination: "/:doc/setupbook-reactnative", permanent: true },
      // People look for the site's terms at /terms.
      { source: "/terms", destination: "/privacy", permanent: false },
    ];
  },
  async rewrites() {
    // Agents that ask for Markdown get a Markdown twin of the page (see src/lib/markdown.ts).
    const accept = [{ type: "header" as const, key: "accept", value: ".*text/markdown.*" }];
    return {
      beforeFiles: [
        { source: "/", has: accept, destination: "/md" },
        ...["about", "contact", "services", "work", "services/:slug", "work/:slug"].map((p) => ({ source: `/${p}`, has: accept, destination: `/md/${p}` })),
      ],
    };
  },
  async headers() {
    return [
      {
        // Project images never change in place.
        source: "/work/:path*.:ext(webp|png|jpg)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // Points agents at the machine-readable versions of the site.
        source: "/",
        headers: [
          { key: "Vary", value: "Accept" },
          {
            key: "Link",
            value: [
              '</llms.txt>; rel="alternate"; type="text/plain"; title="llms.txt"',
              '</sitemap.xml>; rel="sitemap"',
              '</.well-known/mcp/server-card.json>; rel="mcp-server-card"',
            ].join(", "),
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
