export type Project = {
  slug: string;
  name: string;
  kind: string;
  year: string;
  summary: string;
  /** Search snippet, at most ~155 characters. */
  metaDescription: string;
  cover?: string;
  hero?: string;
  challenge: string;
  approach: string;
  outcome: string;
  markers: string[];
  facts: { label: string; value: string }[];
  link?: { href: string; label: string };
  gallery: { src: string; alt: string }[];
  coverAlt?: string;
};

const g = (dir: string, alts: string[]) =>
  alts.map((alt, i) => ({ src: `/work/${dir}/${String(i + 1).padStart(2, "0")}.webp`, alt }));

export const projects: Project[] = [
  {
    slug: "setupbook",
    metaDescription: "SetupBook: a live trading journal with an AI coach built on the Gemini API, 16 broker integrations, payments and 9 languages. Designed and built solo.",
    name: "SetupBook",
    kind: "AI product, trading journal",
    year: "2026",
    summary:
      "A trading journal web app with an AI coach. Setup AI answers questions from the user's own trades, suggests tags, reviews the day and writes a weekly review. Trades sync from 16 broker platforms.",
    cover: "/work/setupbook/cover.jpg",
    coverAlt:
      "SetupBook in a browser and on a phone: the dashboard with net P&L, cost of mistakes, discipline, win rate and the equity curve",
    challenge:
      "Most trading journals are a spreadsheet that stops being filled in by the third week, or a tool that shows a win rate without saying how it got there. The numbers that change how someone trades, such as what breaking a rule cost or whether the A setups really pay, are the ones a spreadsheet never works out. And traders want to ask questions about their own trading, not read charts.",
    approach:
      "Next.js and TypeScript on Firebase and Google Cloud. Every number comes from one module of pure functions, tested against a table worked out by hand: P&L, R, win rate, profit factor, expectancy and drawdown. Setup AI, built with the Gemini API, answers from the user's own trade data and runs small helpers: tag suggestions, a daily review, a session plan and a weekly review. The user confirms every suggestion. Trades sync read-only from 16 platforms, including MetaTrader, cTrader, Interactive Brokers and crypto exchanges, and subscriptions run on Paddle.",
    outcome:
      "SetupBook is live at setupbook.io in 9 languages: a dashboard, trades table and P&L calendar, analytics by symbol, strategy and session, a journal, a playbook, backtesting, trade replay and the AI coach. I built it alone, as founder and full stack developer.",
    markers: ["AI COACH ON YOUR OWN DATA", "16 BROKER PLATFORMS", "9 LANGUAGES"],
    facts: [
      { label: "Year", value: "2026" },
      { label: "Platform", value: "Web; mobile apps coming" },
      { label: "Built with", value: "Next.js, TypeScript, Gemini API, Google Cloud, Paddle" },
      { label: "My role", value: "Founder, design, development" },
      { label: "Status", value: "Live" },
    ],
    link: { href: "https://setupbook.io", label: "setupbook.io" },
    gallery: g("setupbook", [
      "The dashboard on a phone: open positions, net P&L, cost of mistakes, discipline and win rate",
      "The equity curve with losing trades marked, and daily net P&L bars",
      "The trades calendar: each day's net result and trade count",
      "Analytics: net P&L, win rate, profit factor, expectancy, average win and loss",
      "The drawdown chart and results by symbol",
      "A trade's detail: planned against realized R, hold time and prices",
      "The journal: trading days with each day's net P&L",
      "The dashboard in the light theme",
    ]),
  },
  {
    slug: "retail-ecommerce",
    metaDescription: "Stores, backend services, 15+ integrations and a move of 8 sites to microservices for 15 retail brands with about 3M monthly visits.",
    name: "Retail ecommerce",
    kind: "Software for retail brands",
    year: "2023 to 2026",
    summary:
      "Three years of stores, backend services, integrations and platform migrations for 15 retail and corporate brands at Proje Yazılım, Istanbul. About 3M monthly visits in total, including Suwen (1M+ members) and İpekyol ($20K+ daily sales).",
    challenge:
      "Retail brands sell through their own store, marketplaces and ad platforms at the same time, with campaigns that bring sudden traffic. The systems behind them had to share data without people re-typing it, show sales and campaigns in real time, and stay fast and stable on the busiest days. Several brands also ran on old sites that were hard to change.",
    approach:
      "I worked across the whole system, from backend services to the frontend customers see. I built data services that keep the information of 50K+ products in sync across every sales and ad channel, integrated 15+ third-party APIs for marketplaces, tracking, analytics and marketing tools, and built a message template system that 15 brands used to run email and SMS campaigns on their own. I also worked on moving 8 legacy brand sites to a microservice-based architecture with a new component-based frontend. I owned tasks from start to finish, reviewed code and shipped through CI/CD pipelines, working with product managers, designers and brand teams.",
    outcome:
      "Product data now moves on its own, with about 60% less manual work. Marketing teams follow sales and campaigns in real time and launch campaign messages without a developer. Across the brand stores I worked on, rendering and Core Web Vitals work took LCP from 3.8 s to 1.5 s and the mobile Lighthouse score from 52 to 86.",
    markers: ["15 BRANDS, 3M MONTHLY VISITS", "8 SITES MOVED TO MICROSERVICES", "LCP 3.8 S → 1.5 S"],
    facts: [
      { label: "Years", value: "2023 to 2026" },
      { label: "Brands", value: "New Balance, Vitra, Arçelik, İpekyol, Suwen and 10 more" },
      { label: "Scope", value: "Backend services, integrations, frontend, performance" },
      { label: "My role", value: "Software engineer" },
      { label: "Where", value: "Proje Yazılım, Istanbul" },
    ],
    gallery: [],
  },
  {
    slug: "market-hours",
    metaDescription: "Market Hours: a live world map of open stock exchanges and forex sessions, with holidays and alarms. Web app live, mobile apps coming.",
    name: "Market Hours",
    kind: "Web and mobile, fintech",
    year: "2026",
    summary:
      "A live world map and alarm app that shows which forex sessions and stock exchanges are open right now, with holidays, lunch breaks and alerts before the open.",
    cover: "/work/market-hours/cover.jpg",
    coverAlt: "Market Hours dashboard: a dark world map with the day/night line and markers for open and closed exchanges",
    challenge:
      "Markets open and close in local time, shift with daylight saving and shut for holidays nobody remembers. Traders need to see at a glance what is open now and be told, reliably, what opens next.",
    approach:
      "The same market rules built twice: a Next.js dashboard with a live day/night map, and a Flutter app whose alarms keep working in the background. Hours are stored in each exchange's own time zone, so daylight saving is automatic, and holiday and half-day calendars come from a generated data set.",
    outcome:
      "The web dashboard is live at markethours.live and covers nine exchanges, from NYSE and LSE to TSE, HKEX and BIST, plus the four forex sessions. The mobile app with market and news alarms is being prepared for iOS and Android.",
    markers: ["DST-AWARE MARKET ENGINE", "MARKET AND NEWS ALARMS", "LIVE DAY/NIGHT MAP"],
    facts: [
      { label: "Year", value: "2026" },
      { label: "Platforms", value: "Web, iOS and Android" },
      { label: "Built with", value: "Next.js, Flutter, RevenueCat" },
      { label: "My role", value: "Design, development, data" },
      { label: "Status", value: "Web live, mobile in preparation" },
    ],
    link: { href: "https://markethours.live", label: "markethours.live" },
    gallery: g("market-hours", [
      "The 24-hour dial with session arcs and the session-hours chart, dark theme",
      "Session start and end alarms with minutes-before offsets and smart alerts",
      "Settings: theme, home view, time zone, time format and alarm sounds",
      "The clock view in the light theme",
    ]),
  },
  {
    slug: "passport-ai",
    metaDescription: "Passport.AI: an ID and passport photo app with on-device face checks, AI retouching with Gemini and print-ready exports for 250 countries.",
    name: "Passport.AI",
    kind: "AI mobile app, photo",
    year: "2026",
    summary:
      "A photo studio for passport, ID and visa pictures: the face is checked on the phone, then a Gemini image model applies background, outfit and retouching, cropped to the exact size of the document.",
    cover: "/work/passport-ai/cover.png",
    coverAlt: "Passport.AI cover with three phone screens: welcome, style step and finished result",
    challenge:
      "An ID photo can be turned down for small things: uneven light, a tilted head, the wrong background, a size that is slightly off. The brief was to catch those problems before any credits are spent and return a file cropped to the exact size of the chosen document.",
    approach:
      "The face check runs on the phone with Apple Vision and Google ML Kit, plus light and sharpness checks. Nothing is uploaded until the user asks. Then a Cloud Function charges the credits, asks a Gemini image model to apply the chosen style and crops the result. Credits sit in a server-side ledger and come back if generation fails.",
    outcome:
      "The whole path is built: 250 countries and territories, 10 outfits, 10 retouching options and exports as JPEG, PNG or a print-ready A4 PDF, in English and Turkish. Backend launch and store submission come next.",
    markers: ["FACE CHECK ON THE PHONE", "SERVER-SIDE CREDIT LEDGER", "GEMINI IMAGE MODEL"],
    facts: [
      { label: "Year", value: "2026" },
      { label: "Platforms", value: "iOS and Android" },
      { label: "Built with", value: "Flutter, Firebase, Gemini, RevenueCat" },
      { label: "My role", value: "Design, development" },
      { label: "Status", value: "Built, store submission next" },
    ],
    gallery: g("passport-ai", [
      "The welcome screen: a selfie and its finished passport photo",
      "The camera view with the face inside viewfinder brackets and quality checks",
      "A rejected photo with light, sharpness and angle checks",
      "The style step: framing, background colours and the credit cost",
      "The generating screen with a checklist of applied changes",
      "The before-and-after comparison slider",
      "The export step: JPEG, PNG and PDF choices",
    ]),
  },
  {
    slug: "prechart",
    metaDescription: "PreChart: an AI chart-analysis app that draws levels, zones and scenarios on your own chart screenshot, with the price axis read and calibrated on the phone.",
    name: "PreChart",
    kind: "AI mobile app, trading",
    year: "2026",
    summary:
      "A Flutter app for traders: add a screenshot of a chart and the analysis is drawn on top of it as support and resistance, supply and demand zones, structure and an invalidation line, then explored in chat.",
    cover: "/work/prechart/cover.png",
    hero: "/work/prechart/hero.png",
    coverAlt: "PreChart on three phones: the reading check, a chart with levels and zones drawn on it, and a chat about the chart",
    challenge:
      "Most AI chart tools return a wall of text, and language models are weak at reading numbers off an image, so the prices in the text can be invented. A trader needs to see the analysis on the chart itself, with prices that match the chart's axis, and scenarios that say when they stop being true instead of a call to buy or sell.",
    approach:
      "The numbers never come from the model. On the phone, ML Kit reads the symbol, timeframe and price axis, pure Dart code fits the price scale to the axis labels, and the trader confirms the reading or calibrates it by tapping two prices. The Gemini model only returns positions on the image as 0 to 1 coordinates, which the app turns into prices with that scale. A Cloud Function checks the user, plan, daily limit and App Check, and the answer passes a schema and a validator that rejects contradictory levels and trade instructions. The image is sent only after explicit consent and is not stored.",
    outcome:
      "The whole flow is built: add a chart from the gallery, camera, clipboard or the share sheet, crop and hide private details, confirm the reading, then see toggleable layers of levels, zones, patterns and structure with at least two conditional scenarios, and ask follow-ups in chat where tapping a level highlights it on the chart. Free to try with one analysis, Pro raises it to 10 analyses and 50 chat messages a day. Store submission comes next.",
    markers: ["PRICES FROM THE AXIS, NOT THE MODEL", "ANALYSIS DRAWN ON YOUR CHART", "SCENARIOS, NOT TRADE CALLS"],
    facts: [
      { label: "Year", value: "2026" },
      { label: "Platforms", value: "iOS and Android" },
      { label: "Built with", value: "Flutter, Firebase, Gemini, ML Kit, RevenueCat" },
      { label: "My role", value: "Design, development" },
      { label: "Status", value: "Built, store submission next" },
    ],
    gallery: g("prechart", [
      "Crop and check: trim the screenshot to the chart and hide private details",
      "Reading check: the symbol, timeframe and price axis the app read, for the user to confirm",
      "The analysis on the chart: resistance, supply and demand zones and an invalidation level, with layer toggles and two scenarios",
      "Chat about the chart: tapping a level in the answer highlights it on the chart",
    ]),
  },
  {
    slug: "english-vocabulary",
    metaDescription: "Vocabulary: a swipe-card app for the most common English words, with audio, 17 word games and spaced repetition in 24 languages.",
    name: "Vocabulary",
    kind: "Mobile app, language learning",
    year: "2026",
    summary:
      "A swipe-card app for the most common English words, with audio on every card, 17 word games and spaced-repetition review, in 24 languages.",
    cover: "/work/vocabulary/cover.png",
    coverAlt: "Vocabulary app cover: a yellow card titled English Vocabulary with a cat mascot",
    challenge:
      "Make learning vocabulary something people keep doing: a few minutes at a time, in their own language, with every word spoken aloud and nothing to set up first.",
    approach:
      "One Flutter codebase for iOS and Android. Words are swiped as cards, every word and example has audio, and a review schedule brings words back after 1, 2, 4, 7, 15 and 30 days. Firebase handles sign-in and sync, and the learning rules are plain, tested code.",
    outcome:
      "A level test, 17 word games, 44 topic decks, streaks and statistics, with every word translated into 24 languages and a word-of-the-day widget.",
    markers: ["SPACED REPETITION", "17 WORD GAMES", "24 LANGUAGES"],
    facts: [
      { label: "Year", value: "2026" },
      { label: "Platforms", value: "iOS and Android" },
      { label: "Built with", value: "Flutter, Firebase, RevenueCat" },
      { label: "My role", value: "Design, development" },
      { label: "Status", value: "Store release in preparation" },
    ],
    gallery: g("vocabulary", [
      "A swipe card for a word with audio",
      "Word detail with translation, pronunciation and an example",
      "Level test result and a weekly plan",
      "The games screen with 17 word games",
      "A fill-in-the-blank sentence game",
      "44 topic decks",
      "Progress with streaks, badges and weekly statistics",
    ]),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
