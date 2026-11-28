import {
  acceptableUseSection, accountSection, appleSection, availabilitySection, changesSection, childrenSection, contactSection,
  deletionSections, disclaimerSection, docPath, generalSection, googlePlaySection, ipSection, lawSection, legalBasesSection,
  liabilitySection, licenseSection, mailtoLink, noSelling, privacyIntro, processorsSection, refundsSection, rightsSection,
  securitySection, subscriptionSection, supportSections, termsChangesSection, termsContactSection, termsIntro,
  terminationSection, thirdPartySection, transfersSection, EMAIL,
  type App,
} from './shared';

const app: App = {
  repo: 'chart-ai-flutter',
  // The case study (src/content/work.ts slug) that links to these documents.
  project: 'prechart',
  name: 'PreChart',
  platforms: 'iOS and Android',
  updated: '2026-11-28',
};

app.privacy = [
  privacyIntro(app, 'PreChart reads a screenshot of your own chart and draws the analysis on top of it. Because the chart image is sent to an AI service, this policy explains exactly when that happens and what is kept.'),
  {
    heading: 'Your charts',
    body: `**Your charts stay on your phone.** The original screenshot, the analysis result and your chat with the app are saved on your device only, in the app's storage. There is no cloud backup of them, and they stay until you delete them.

**The chart is read on your phone first.** Before anything is sent, the app reads the symbol, timeframe and price axis on the device with Google's ML Kit text recognition, and calculates the price scale itself. You confirm or correct that reading. Image information such as location (EXIF) is removed from the copy that is prepared for analysis.

**The image is sent for analysis only with your consent.** When you ask for an analysis, a reduced copy of the image you approved, after your crop and any areas you hid, is sent to our server function and from there to Google's Gemini API, which returns the levels, zones and scenarios. The app asks for your explicit permission on a consent screen before the first analysis. The same applies to the image and your question when you chat about a chart. The image is processed in memory to produce the answer and is **not stored** by us afterwards; our servers don't write the image to logs.

**You can withdraw consent** at any time in **Settings › Data & privacy**. New analyses are then unavailable, and your history stays on your device.

**Hide what is private.** The crop screen lets you cut the picture down and cover details such as an account number, balance or name before it is sent. Please do that: anything left visible in the image is sent to the AI service.`,
  },
  {
    heading: 'Other data we collect',
    body: `**Anonymous ID and account.** You can use the app without signing up: it creates an anonymous ID (Firebase Authentication). If you choose to link an account, we also store the sign-in method and the email address you give us, using Google, Apple or an emailed sign-in link. Passwords are not used for that, and we never see your Google or Apple password.

**Usage counter.** Our server keeps how many analyses and chat messages your ID has used today, to apply the daily limits and prevent abuse.

**Subscription status.** Your plan and its renewal status, through RevenueCat, linked to your anonymous ID. Payment details stay with Apple or Google; we never receive card numbers.

**Reports.** If you report an analysis that looks wrong, the report is sent from within the app so we can look at it.

**Usage and crash logs.** Firebase Analytics and Crashlytics record events and crashes (which screens were used, device model, app version, error details). They don't contain your chart images or chat text.

**App integrity.** Firebase App Check (Play Integrity on Android, App Attest on iOS) checks that requests come from the genuine app.

**Settings on your device.** Language, theme and your analysis preferences.

The app has no advertising. Camera and photo library access are used only when you take or pick a chart.`,
  },
  {
    heading: 'How we use it',
    body: `- To produce the analysis and answer your questions about a chart.
- To apply the daily limits of your plan and keep the service secure.
- To verify your subscription and give you access to Pro.
- To find and fix crashes and improve the app, and to review analyses you report.
- To answer your support requests.`,
  },
  legalBasesSection([
    `**Contract** — to provide the service you asked for: the analysis, chat, daily limits and your plan, as described in the [terms](${docPath('terms', app)}).`,
    '**Explicit consent** — for sending your chart image to the AI service. You give it on the in-app consent screen and can withdraw it in Settings › Data & privacy.',
    '**Legitimate interests** — to keep the service secure, prevent abuse, measure stability and improve the app. You can object at any time.',
    '**Legal obligation** — to keep purchase records required by tax and accounting law and to answer lawful requests.',
  ]),
  noSelling('- We don\'t store your chart images, and Google processes them under its paid Gemini API terms, which don\'t allow it to use them to train its models.'),
  processorsSection([
    { name: 'Google Gemini API', role: 'reads the chart image you approve and produces the analysis and chat answers; the image is not stored by us', data: 'Google LLC' },
    { name: 'Google Firebase / Google Cloud', role: 'anonymous sign-in (Authentication), usage counters (Cloud Firestore), server functions (Cloud Functions), App Check, Remote Config, Analytics and Crashlytics', data: 'Google LLC / Google Ireland Ltd.' },
    { name: 'RevenueCat', role: 'manages subscriptions and plan status', data: 'RevenueCat, Inc., USA' },
    { name: 'Apple and Google', role: 'sign-in with Apple or Google if you link an account, and payment for plans bought in the App Store or Google Play' },
  ]),
  transfersSection('Our server functions and usage counters are hosted by Google Cloud in the European Union (Belgium, europe-west1). The chart image you send is processed by Google\'s Gemini API, and Firebase and RevenueCat may process data in the United States and other countries where they operate.'),
  {
    heading: 'How long we keep it',
    body: `- **Chart images, analyses and chats**: on your device until you delete them. We don't keep the image on our servers after the answer is produced.
- **Usage counter and plan records**: until you delete your account.
- **Purchase records**: as long as tax and accounting law requires (Apple, Google and RevenueCat keep their own records under their policies).
- **Analytics and crash logs**: for the standard retention period of Firebase.
- **Server logs**: up to 30 days.`,
  },
  rightsSection(app, `In the app you can delete your analyses in **Settings › Data & privacy** and delete your account in **Settings › Account › Delete account** ([how](${docPath('delete-account', app)})). To get a copy of the data we hold, or to use any other right, email us.`),
  securitySection('The AI service is reached only through our server function, which checks your ID, your plan and App Check; no AI key is stored in the app.'),
  childrenSection(18),
  {
    heading: 'Not investment advice',
    body: 'PreChart describes the chart you give it. It does not give buy or sell signals, price targets or personal investment advice, and what it shows is not a recommendation.',
  },
  changesSection(),
  contactSection(app),
];

app.terms = [
  termsIntro(app, 18),
  licenseSection(),
  accountSection('You can use PreChart without signing up, with an anonymous ID. If you delete the app before linking an account, we may not be able to restore your plan; use “Restore purchases” with the same store account.'),
  subscriptionSection(app, {
    plans: 'PreChart is free to try with **1 full analysis and 3 chat messages**, no signup. **PreChart Pro** is an auto-renewing subscription (weekly, monthly or yearly) that raises the limit to **10 analyses and 50 chat messages per day**. Plans, their prices and what they include are shown in the app before you buy.',
    extra: 'The monthly and yearly plans include a **3-day free trial**; the weekly plan has none. A free trial is available once per subscriber. We send a reminder before the trial ends.',
  }),
  refundsSection(),
  {
    heading: 'Not investment advice',
    body: `PreChart uses AI to describe the chart image you upload and draws the result on top of your chart. It shows levels, zones and conditional scenarios for information and learning. **Nothing in the app is a buy or sell signal, a price target or personal investment advice**, and it does not take your finances or goals into account. You alone are responsible for your trading and investment decisions. Trading carries a risk of loss.

The analysis can be wrong or incomplete. Check the reading of the symbol, timeframe and price axis before you analyze, and check every level against your own chart.`,
  },
  {
    heading: 'Your charts',
    body: 'You keep all rights to the charts you add and to the analyses made from them. You give us a limited license to process the image you approve only to produce the answer you asked for. You confirm that you have the right to use every image you add, and that you have hidden any personal data of others that you do not want processed.',
  },
  acceptableUseSection([
    'send images that contain other people\'s personal data or account details without their permission',
    'send automated or bulk requests, or work around the daily limits',
    'use the app to present its output as advice from a licensed adviser, or to sell it as such',
  ]),
  ipSection(),
  availabilitySection(),
  thirdPartySection('Apple, Google, Firebase, the Google Gemini API and RevenueCat'),
  disclaimerSection('In particular, we don\'t warrant that an analysis is accurate or complete, or that it will lead to any result.'),
  liabilitySection('To the extent the law permits, we accept no liability for losses arising from decisions made on the basis of an analysis.'),
  terminationSection(app),
  appleSection(),
  googlePlaySection(),
  lawSection(),
  termsChangesSection(),
  generalSection(),
  termsContactSection(app),
];

app['delete-account'] = deletionSections(app, {
  steps: [
    'Open **Settings** and go to **Account**.',
    'Tap **Delete account**.',
    'Read what will be deleted and confirm. If you haven\'t signed in recently, the app may ask you to sign in again first.',
  ],
  beforeYouGo: 'Cancel an active plan in the App Store or Google Play first. Your analyses and chats live on your phone only, so export or share any you want to keep before you delete.',
  deleted: [
    'Your account: the anonymous ID and, if you linked one, the email address and sign-in method.',
    'Your usage counter and plan records on our servers. This happens automatically when the account is deleted.',
  ],
  kept: [
    '**Subscriptions and purchase records.** Apple, Google and RevenueCat keep the transaction history they need for billing, refunds and tax law. Deleting your account doesn\'t cancel a plan.',
    '**Reports** you sent about an analysis, until we have handled them. Ask us by email to delete them sooner.',
    '**Analytics and crash logs**, which are not linked to your name, for the standard Firebase retention period.',
    '**Server logs**, up to 30 days.',
    '**Copies on your device** — your analyses, chats and saved images — until you delete them or the app.',
  ],
  timing: 'Deleting in the app takes effect immediately and can\'t be undone. Requests by email are completed within 30 days.',
  partial: 'To remove your charts and analyses but keep your account, delete them in **Settings › Data & privacy**. The images are not stored on our servers, so this clears everything the app keeps.',
});

app.support = supportSections(app, {
  intro: 'Something wrong with an analysis, your plan or the app? Use the report button on the analysis screen, or email us.',
  faqs: [
    {
      q: 'The app read my chart wrongly',
      a: 'On the reading check screen you can correct the symbol and timeframe by hand. If the price axis could not be read, tap **Calibrate** and tap two prices on the chart. Use a screenshot that shows the whole price axis on the right.',
    },
    {
      q: 'What the daily limits are',
      a: 'The free trial is 1 full analysis and 3 chat messages. PreChart Pro gives 10 analyses and 50 chat messages per day.',
    },
    {
      q: 'An analysis looks wrong',
      a: `Use the report button on the analysis screen, or email ${mailtoLink(EMAIL, `${app.name}: analysis looks wrong`)} with a screenshot. The analysis is a description of your chart, not advice, so always check it against the chart yourself.`,
    },
    {
      q: 'Hiding private details',
      a: 'On the **Crop and check** screen, cut the picture down to the chart and price axis, and use **Hide info** to cover an account number, balance or name before you continue.',
    },
  ],
});

export default app;
