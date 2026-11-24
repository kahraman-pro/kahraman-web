export type PostBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: { title: string; text: string; href: string }[] };

export type Post = {
  slug: string;
  title: string;
  /** One sentence shown on the blog index and used as the meta description. */
  summary: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  body: PostBlock[];
};

// Newest first.
export const posts: Post[] = [
  {
    slug: "what-i-can-do-for-your-team",
    title: "What I can do for your team.",
    summary: "One engineer who advises and builds: custom software, AI agents, AI consulting, integrations and fixes.",
    date: "2026-11-24",
    body: [
      {
        type: "p",
        text: "I am one engineer who advises and builds. If a job in your team takes hours by hand, there is often software or AI that does it in minutes. Here is what I take on.",
      },
      {
        type: "list",
        items: [
          { title: "Custom software", text: "Web apps, internal tools, backends, APIs and mobile apps.", href: "/services/custom-software" },
          { title: "AI agents and AI features", text: "Assistants that answer from your own data, with a person checking where a mistake costs money.", href: "/services/ai-agents" },
          { title: "AI consulting", text: "Where AI helps your team and where it does not, with a plan in build order.", href: "/services/ai-consulting" },
          { title: "Integrations", text: "Your store, CRM, email and payment tools kept in sync.", href: "/services/integrations" },
          { title: "Fixes", text: "Slow pages, stopped workflows and old code, fixed and written down.", href: "/services/fixes" },
        ],
      },
      {
        type: "p",
        text: "It starts with a short message or call. If AI or a new build is not the right fix, you hear that first. Then a simple plan, the build, and a handover with notes. My email and profiles are below.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
