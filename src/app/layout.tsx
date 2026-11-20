import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/Header";
import { WebMcp } from "@/components/WebMcp";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { env } from "@/lib/env";
import { jsonLd } from "@/lib/seo";
import "./globals.css";

const geist = Geist({ subsets: ["latin", "latin-ext"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  formatDetection: { email: false, telephone: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // Search console verification from the environment; unset values emit no tag.
  // public/google4e5b42ef971a8daa.html verifies Google by the file method as well.
  verification: {
    google: env.googleVerification,
    ...(env.bingVerification ? { other: { "msvalidate.01": env.bingVerification } } : {}),
  },
  openGraph: { type: "website", siteName: site.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafaf4",
  colorScheme: "light",
};

// Site-wide entities: the person, the consulting service they run and the website.
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      email: `mailto:${site.email}`,
      jobTitle: "Software engineer and AI consultant",
      description: "Software engineer and AI consultant in Istanbul who designs and builds software, AI features and integrations for small and growing teams.",
      knowsLanguage: ["en", "tr"],
      knowsAbout: [
        "Software engineering",
        "Software architecture",
        "AI consulting",
        "AI agents",
        "Large language model applications",
        "Web applications",
        "Mobile applications",
        "System integrations",
        "Web performance",
      ],
      address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
      sameAs: [site.linkedin, site.github],
    },
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/brand/mk-app-icon.png` },
      email: site.email,
      founder: { "@id": `${site.url}/#person` },
      address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: site.email,
        availableLanguage: ["English", "Turkish"],
        ...(site.bookingUrl ? { url: site.bookingUrl } : {}),
      },
      sameAs: [site.linkedin, site.github],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name}, Software and AI Consulting`,
      url: site.url,
      email: site.email,
      description: "Software and AI consulting: custom software, AI agents, integrations and AI strategy for small and growing teams, designed and built by one engineer.",
      founder: { "@id": `${site.url}/#person` },
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
      image: `${site.url}/opengraph-image`,
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: "en",
      publisher: { "@id": `${site.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth scroll-pt-20 motion-reduce:scroll-auto`}>
      <body className="overflow-x-clip bg-bg font-sans text-base leading-[1.6] text-ink antialiased selection:bg-ink selection:text-bg">
        <a
          href="#main"
          className="absolute -left-[999px] top-0 z-[200] rounded-lg bg-ink px-4 py-2 text-bg focus:left-4 focus:top-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WebMcp />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />
      </body>
    </html>
  );
}
