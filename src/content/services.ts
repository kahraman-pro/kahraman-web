export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  painsTitle: string;
  painsLede: string;
  pains: { title: string; text: string }[];
  buildsLede: string;
  builds: { title: string; text: string }[];
  related: string[];
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom software, designed and built end to end.",
    short: "Web apps, internal tools, backends, APIs and mobile apps. Whatever the job needs, built properly, tested and handed over with notes.",
    intro:
      "I am a software engineer, not a one-framework developer. I have built stores with millions of monthly visits, backend services, platform migrations, mobile apps and an AI product of my own. I choose the stack that fits your job and your team, and I build it to last: clean architecture, tests, and code your next developer can read.",
    painsTitle: "When off-the-shelf stops fitting.",
    painsLede: "Most teams hit the same wall: the tools they bought cover most of the job, and people do the rest by hand.",
    pains: [
      { title: "Templates that almost fit", text: "A ready-made tool covers 80% of the job and the other 20% is done by hand, every day." },
      { title: "A product idea, no team", text: "You know what to build, but hiring a full team for the first version is too slow and too expensive." },
      { title: "Software nobody can change", text: "Every small change needs the one developer who built it, and they are gone." },
      { title: "Slow pages, lost sales", text: "Visitors leave before the page loads, and search engines rank you lower for it." },
      { title: "Seats for every person", text: "Per-seat software costs more every year for a job a small tool you own could do." },
      { title: "Built in a hurry", text: "Payments, sign-in and data handling that work most of the time, until they do not." },
    ],
    buildsLede: "Production software, built by one engineer who owns the whole result.",
    builds: [
      { title: "Web apps and SaaS products", text: "Customer portals, dashboards and full products, from the first screen to payments and many languages." },
      { title: "Internal tools", text: "One tool for the job your team does by hand, on your data, owned by you." },
      { title: "Backends and APIs", text: "Services, data processing and APIs that stay up on the busiest day of the year." },
      { title: "Mobile apps", text: "iOS and Android apps from one codebase, with offline use, notifications and in-app purchases." },
      { title: "Online stores", text: "Stores built for campaign days, with speed and search ranking treated as features." },
      { title: "Architecture and migrations", text: "Old systems moved step by step to a modern setup, as with 8 brand sites moved to a microservice-based architecture." },
    ],
    related: ["setupbook", "market-hours", "retail-ecommerce"],
    metaDescription:
      "Custom software designed and built end to end: web apps, internal tools, backends, APIs and mobile apps, by one software engineer who owns the result.",
  },
  {
    slug: "ai-agents",
    title: "AI agents and AI features that work with your own data.",
    short: "Assistants that answer from your database, helpers that sort and tag records, reports written by AI. Small, safe jobs, with a person checking.",
    intro:
      "Most teams do not need a big AI project. They need one job done faster: an answer found, a record tagged, a report written. I build LLM features that do those small jobs on your own data, and I add a human check where a mistake would cost money.",
    painsTitle: "Where the hours go.",
    painsLede: "None of this needs a person. It just needs someone to connect the AI to the right data.",
    pains: [
      { title: "Answers hidden in the database", text: "Someone runs the same query or opens the same three screens to answer a simple question." },
      { title: "Records nobody tags", text: "Orders, tickets or trades pile up without categories, so reports never tell the full story." },
      { title: "Reports written by hand", text: "Every Monday someone exports, pastes and writes the same summary." },
      { title: "AI tools that guess", text: "A generic chatbot answers from the internet, not from your business, and nobody trusts it." },
      { title: "Fear of the wrong answer", text: "AI that can send, pay or delete without a person saying yes is a risk nobody wants." },
      { title: "Prompts in a notebook", text: "Good prompts live in one person's head instead of inside a tool the whole team uses." },
    ],
    buildsLede: "Each one runs on your own data, with clear limits on what the AI can and cannot do.",
    builds: [
      { title: "An assistant for your data", text: "Ask a question in plain words and get the answer from your own database, with the numbers it used." },
      { title: "Sort and tag helpers", text: "AI suggests tags, categories or priorities for new records. A person confirms with one click." },
      { title: "Weekly reports by AI", text: "A written review of the week from your real numbers, ready before the team starts." },
      { title: "Daily planning helpers", text: "Small AI helpers that review the day and plan the next one, as in SetupBook's Setup AI." },
      { title: "Safe limits", text: "The AI reads and suggests. Anything that costs money waits for a person's yes." },
      { title: "Model choice that fits", text: "Gemini, Claude or another model, chosen for the job and the budget, not for the hype." },
    ],
    related: ["setupbook", "passport-ai"],
    metaDescription:
      "AI agents and AI features built on your own data: assistants, tagging helpers and AI-written reports, with a human check where it matters.",
  },
  {
    slug: "ai-consulting",
    title: "AI consulting: where AI helps your team, and where it does not.",
    short: "I look at how your team works, show where AI can save time and where it cannot, and give you a simple plan in the order to build it.",
    intro:
      "You hear that AI will change everything, but nobody tells you what to change on Monday. I look at the work your team does, find the parts AI can really take over, and tell you plainly which parts it cannot. You leave with a short plan you can act on, with me or without me.",
    painsTitle: "Why AI plans stall.",
    painsLede: "Most AI projects fail before the first line of code, because nobody asked what the work actually is.",
    pains: [
      { title: "Tools bought, nothing changed", text: "The team has AI subscriptions, but the same work still takes the same hours." },
      { title: "A big project, no first step", text: "The plan is too large to start, so nothing starts." },
      { title: "Hype instead of numbers", text: "No one has counted how much time a job really takes, so no one knows what AI would save." },
      { title: "Wrong job for AI", text: "Some work needs rules, not a language model. Using AI there adds cost and mistakes." },
      { title: "Data in the wrong place", text: "AI cannot help if the data it needs is spread across files and inboxes." },
      { title: "No one to build it", text: "A consultant leaves a slide deck and the team still has to find a developer." },
    ],
    buildsLede: "A short engagement that ends with a clear plan, and the option to have me build it.",
    builds: [
      { title: "A look at your process", text: "We go through the jobs your team repeats: who does them, how often and what they cost." },
      { title: "Where AI fits", text: "A plain list of the jobs AI can take over, the ones that need simple automation and the ones to leave alone." },
      { title: "A plan in build order", text: "What to build first, what it needs and roughly what it costs. Small steps, each one useful on its own." },
      { title: "Risk check", text: "Where a wrong answer would cost money, and where a human check has to stay." },
      { title: "Tool advice", text: "Which models, APIs and tools fit your budget and the software you already pay for." },
      { title: "Built by the same person", text: "If you want, I build the plan myself. No handoff between the person who advised and the person who builds." },
    ],
    related: ["setupbook", "retail-ecommerce"],
    metaDescription:
      "AI consulting for small teams: find where AI saves time and where it does not, and get a simple plan in the order to build it.",
  },
  {
    slug: "integrations",
    title: "Integrations and automation that keep your systems in sync.",
    short: "Your store, app, CRM, marketplaces, analytics and payment tools connected, so data moves on its own and your team stops copying it.",
    intro:
      "When your tools do not talk to each other, your team does the talking: copying orders, updating prices, exporting reports. I connect them. I have integrated 15+ third-party APIs for retail brands and synced trades from 16 platforms into my own product, so I know where integrations break and how to make them fail loudly instead of quietly.",
    painsTitle: "Where your team becomes the integration.",
    painsLede: "Copy and paste between tools is the most expensive job nobody has on their job description.",
    pains: [
      { title: "Data typed twice", text: "Prices, stock and customers are updated in one system, then again in every other one." },
      { title: "Syncs that break quietly", text: "A connection stops on Friday night and nobody notices until the numbers are wrong." },
      { title: "Reports from exports", text: "Marketing and management see last week's numbers because the data comes from a spreadsheet." },
      { title: "Plug-ins that half work", text: "A paid connector does half the job, and nobody can fix the other half." },
      { title: "The CRM is always behind", text: "Leads and orders reach the CRM late or not at all." },
      { title: "Every change needs a developer", text: "A new campaign message or a new report waits in the developer's queue." },
    ],
    buildsLede: "Integrations on the systems you already use, with problems flagged instead of hidden.",
    builds: [
      { title: "System-to-system sync", text: "Orders, stock, customers and prices kept the same across every tool you use." },
      { title: "Marketplaces and sales channels", text: "Your store connected to the marketplaces and platforms you sell on." },
      { title: "Analytics and tracking", text: "Sales and campaign data that reaches your dashboards in real time, not next week." },
      { title: "CRM, email and messaging", text: "Leads and customers in your CRM as they happen, and campaign tools your team runs without a developer." },
      { title: "Payments and subscriptions", text: "Checkouts and subscriptions connected to the rest of your systems and tested end to end." },
      { title: "Monitoring and alerts", text: "Every sync watched, with a clear alert when something fails instead of silent bad data." },
    ],
    related: ["retail-ecommerce", "setupbook"],
    metaDescription:
      "Integrations and automation: store, app, CRM, marketplaces, analytics and payment tools connected, with failures flagged instead of hidden.",
  },
  {
    slug: "fixes",
    title: "Rescue and modernisation of existing software.",
    short: "Slow pages, broken integrations and old sites that need a newer setup. I find the cause, fix it and write down what I changed.",
    intro:
      "Not every problem needs a new build. Often the fastest win is fixing what you have: a page that loads too slowly, an integration that fails at night, an old site on a setup nobody wants to touch. I read the code, find the cause, fix it and leave short notes so it stays fixed.",
    painsTitle: "Problems that cost more every month.",
    painsLede: "Old code does not get cheaper to fix. Every month it waits, more work is built on top of it.",
    pains: [
      { title: "A slow store", text: "Mobile visitors wait for images and scripts that load before the product." },
      { title: "Night-time failures", text: "A sync job fails at 3 am and someone fixes the data by hand in the morning." },
      { title: "An old framework", text: "The site runs on a version nobody updates, and every change risks breaking it." },
      { title: "No one knows how it works", text: "The developer left, the notes did not exist and the team is afraid to touch it." },
      { title: "Errors nobody sees", text: "Customers hit errors that never reach a log or an alert." },
      { title: "Half-finished AI code", text: "AI-written code was shipped without tests and now behaves in strange ways." },
    ],
    buildsLede: "A clear diagnosis first, then the fix, then notes your team can read.",
    builds: [
      { title: "Speed audit and fix", text: "Core Web Vitals, images, scripts and rendering, measured before and after." },
      { title: "Integration repair", text: "Broken connections found, fixed and given alerts." },
      { title: "Move to a newer setup", text: "Old sites moved step by step to a modern, component-based stack." },
      { title: "Code review", text: "A read of your code with a list of real risks, in order of what to fix first." },
      { title: "AI code check", text: "AI-written code read, tested and cleaned up before it costs you." },
      { title: "Short notes", text: "Every fix comes with notes on what changed and why." },
    ],
    related: ["retail-ecommerce", "market-hours"],
    metaDescription:
      "Fixes for existing code: slow pages, broken integrations and old sites that need a newer setup, with notes your team can read.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
