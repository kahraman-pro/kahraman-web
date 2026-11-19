import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // One host for every URL, so canonical links, the sitemap and search consoles agree.
      { source: "/:path*", has: [{ type: "host", value: "www.kahraman.pro" }], destination: "https://kahraman.pro/:path*", permanent: true },
      // People look for the site's terms at /terms.
      { source: "/terms", destination: "/privacy", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        // Project images never change in place.
        source: "/work/:path*.:ext(webp|png|jpg)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
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
