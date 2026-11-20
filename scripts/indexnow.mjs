// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver...) which URLs to crawl.
// Usage:
//   npm run indexnow                 submit every URL in the live sitemap
//   npm run indexnow -- /work/x /y   submit only these paths
//   npm run indexnow -- --dry-run    print the request without sending it
// Run it after a deploy. The key file in public/ must already be live.

const KEY = "91d1b2ba26864eefba00fbac8889fb98";
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://kahraman.pro").replace(/\/$/, "");
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const paths = args.filter((a) => a.startsWith("/"));

async function urlsFromSitemap() {
  const res = await fetch(`${SITE}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not read ${SITE}/sitemap.xml (${res.status})`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const urlList = paths.length ? paths.map((p) => `${SITE}${p}`) : await urlsFromSitemap();
const body = { host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList };

if (dryRun) {
  console.log(JSON.stringify(body, null, 2));
  process.exit(0);
}

// The key file must be reachable, or IndexNow rejects the request.
const keyRes = await fetch(body.keyLocation);
if ((await keyRes.text()).trim() !== KEY) throw new Error(`Key file at ${body.keyLocation} is missing or wrong. Deploy first.`);

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
