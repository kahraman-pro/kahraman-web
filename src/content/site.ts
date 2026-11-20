import { env } from "@/lib/env";

export const site = {
  name: "Mustafa Kahraman",
  shortName: "Kahraman",
  url: env.siteUrl,
  role: "Software engineer and AI consultant",
  location: "Istanbul",
  timezone: "UTC+3",
  email: "hello@kahraman.pro",
  bookingUrl: env.bookingUrl,
  linkedin: "https://www.linkedin.com/in/mustafa--kahraman",
  github: "https://github.com/kahramanX",
  title: "Software Engineer and AI Consultant, Mustafa Kahraman",
  description:
    "Software engineer and AI consultant in Istanbul. I find where software and AI save your team the most time, then design and build it end to end.",
};

export function contactHref(subject = "Project inquiry") {
  if (site.bookingUrl) return site.bookingUrl;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

/** Booking links leave the site; email links do not. */
export const bookingProps = site.bookingUrl ? ({ target: "_blank", rel: "noopener noreferrer" } as const) : {};

export const ctaLabel = () => (site.bookingUrl ? "Book a free 30 minute call" : "Send me a short message");

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "My work" },
  { href: "/#results", label: "Results" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "2021", label: "Building software since" },
  { value: "15+", label: "Brands built for" },
  { value: "3M", label: "Monthly visits served" },
  { value: "5", label: "Own products built" },
];

export const brands = [
  "New Balance",
  "Vitra",
  "Arçelik",
  "İpekyol",
  "Suwen",
  "Monster Notebook",
  "Lescon",
  "Sporthink",
  "Machka",
  "Twist",
];

export const principles = [
  {
    title: "Business first, code second",
    text: "I ask how your business works before I write a line. The right tool and the right stack follow from the job, not the other way round.",
  },
  {
    title: "Honest about AI",
    text: "If something is not worth building, or AI is the wrong tool for it, I tell you. Even when it means less work for me.",
  },
  {
    title: "A person checks the AI",
    text: "AI suggests, sorts and drafts. Where a mistake would cost money, a person on your team confirms before it counts.",
  },
  {
    title: "Tested, then handed over",
    text: "I read and test everything before you see it. Short notes come with the code, so your team can continue after me.",
  },
];

export const results = [
  {
    value: "3.8 s → 1.5 s",
    text: "Largest Contentful Paint on a retail brand's store, after rendering and Core Web Vitals work. Mobile Lighthouse went from 52 to 86.",
    who: "Retail ecommerce, Istanbul",
  },
  {
    value: "8 sites",
    text: "Legacy brand websites moved to a microservice-based architecture, with a new component-based frontend.",
    who: "Retail and corporate brands",
  },
  {
    value: "1 person",
    text: "SetupBook, from idea to live product: AI coach, 16 platform integrations, payments and 9 languages, designed and built alone.",
    who: "SetupBook, live at setupbook.io",
  },
];

export const steps = [
  {
    when: "Step 1",
    title: "Short message or call",
    text: "Tell me about your project, your tools and your goal. If AI or a new build is not the right fix, you hear that first.",
  },
  {
    when: "Step 2",
    title: "Plan",
    text: "A simple plan in the order to build it: what it does, how long it takes and what it may cost. You decide whether to start.",
  },
  {
    when: "Step 3",
    title: "Build",
    text: "I build it myself and you see working pieces on your own data. I read and test everything before you get it.",
  },
  {
    when: "Step 4",
    title: "Handover",
    text: "You own the code and the access. Short notes explain how it works, so you or your team can continue without me.",
  },
];
