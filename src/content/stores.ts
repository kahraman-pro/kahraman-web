// App Store and Google Play links for the project pages, keyed by project slug.
// Leave a link empty until the app is published: its button then shows as "Coming soon".
// Paste the full store URL when it goes live and the button turns into a working link.
export type StoreLinks = { appStore: string; googlePlay: string };

export const STORE_LINKS: Record<string, StoreLinks> = {
  setupbook: {
    appStore: "", // https://apps.apple.com/app/...
    googlePlay: "", // https://play.google.com/store/apps/details?id=...
  },
  "market-hours": { appStore: "", googlePlay: "" },
  "passport-ai": { appStore: "", googlePlay: "" },
  prechart: { appStore: "", googlePlay: "" },
  "english-vocabulary": { appStore: "", googlePlay: "" },
};
