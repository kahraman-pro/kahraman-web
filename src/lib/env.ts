// Every environment variable the site reads, in one place. See .env.example.
// NEXT_PUBLIC_* values are inlined at build time, so they must be set before `npm run build`.

function required(name: string, value: string | undefined): string {
  if (!value) throw new Error(`Missing environment variable ${name}. Set it in the hosting panel or .env.local (see .env.example).`);
  return value;
}

export const env = {
  /** Public URL of the site, e.g. https://kahraman.pro (a trailing slash is removed). */
  siteUrl: required("NEXT_PUBLIC_SITE_URL", process.env.NEXT_PUBLIC_SITE_URL).replace(/\/$/, ""),
  /** Optional Calendly / Cal.com link; turns contact buttons into "Book a call". */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || undefined,
  /** Optional Google Search Console meta tag token. */
  googleVerification: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  /** Optional Bing Webmaster Tools meta tag token. */
  bingVerification: process.env.BING_SITE_VERIFICATION || undefined,
};
