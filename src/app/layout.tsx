import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Young_Serif } from "next/font/google";
import { Header } from "@/components/Header";
import { WebMcp } from "@/components/WebMcp";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import { env } from "@/lib/env";
import { jsonLd } from "@/lib/seo";
import "./globals.css";

const sans = Schibsted_Grotesk({ subsets: ["latin", "latin-ext"], variable: "--font-schibsted", display: "swap" });
const serif = Young_Serif({ weight: "400", subsets: ["latin", "latin-ext"], variable: "--font-young-serif", display: "swap" });

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
  themeColor: "#eceff3",
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
      description: "Software engineer and AI consultant in İzmir, Türkiye who designs and builds software, AI features and integrations for small and medium teams.",
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
      address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" },
      sameAs: [site.linkedin, site.github, site.upwork],
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
      address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: site.email,
        availableLanguage: ["English", "Turkish"],
        ...(site.bookingUrl ? { url: site.bookingUrl } : {}),
      },
      sameAs: [site.linkedin, site.github, site.upwork],
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
      address: { "@type": "PostalAddress", addressLocality: "İzmir", addressCountry: "TR" },
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
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth scroll-pt-24 motion-reduce:scroll-auto [scrollbar-color:rgb(28_47_110/0.3)_transparent]`}>
      <body className="overflow-x-clip bg-envelope font-sans text-base leading-[1.6] text-ink caret-stamp antialiased selection:bg-ink selection:text-paper">
        <a
          href="#main"
          className="absolute -left-[999px] top-0 z-[200] rounded-[10px] bg-ink px-4 py-2 text-paper focus:left-4 focus:top-3"
        >
          Skip to content
        </a>
        {/* The letter: one sheet on the envelope ground. The footer sits outside it. */}
        <div className="mx-auto w-full max-w-[1296px] px-2 pt-2 sm:px-4 sm:pt-4 lg:px-6 lg:pt-7">
          <div className="rounded-[6px] bg-paper shadow-sheet">
            <Header />
            <main id="main">{children}</main>
          </div>
        </div>
        <Footer />
        <WebMcp />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />
      </body>
    </html>
  );
}
