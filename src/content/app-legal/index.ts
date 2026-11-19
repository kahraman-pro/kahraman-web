import type { App, LegalDoc } from './shared';
import englishVocabulary from './english-vocabulary-words-flutter';
import marketHours from './market-hours-forex-stocks-flutter';
import passportIdPhoto from './passport-id-photo-flutter';
import setupbook from './setupbook-flutter';
import simpleNote from './simple-note-flutter';

// The documents every mobile app gets, keyed by their URL segment: /<doc>/<repo>.
export const APP_LEGAL_DOCS: Record<LegalDoc, { title: string; description: (name: string) => string }> = {
  privacy: { title: 'Privacy Policy', description: (name: string) => `How ${name} handles your data: what it collects, why, who receives it, how long it is kept and your rights.` },
  terms: { title: 'Terms of Use', description: (name: string) => `The terms for using ${name}, including subscriptions and purchases, refunds, acceptable use and the App Store terms.` },
  'delete-account': { title: 'Delete Account', description: (name: string) => `How to delete your ${name} account and data, in the app or by email, and what is deleted or kept.` },
  support: { title: 'Support', description: (name: string) => `Help with ${name}: contact, purchases and subscriptions, refunds, account deletion and common questions.` },
};

// One entry per app, named after its GitHub repository.
export const APPS: App[] = [englishVocabulary, marketHours, simpleNote, passportIdPhoto, setupbook];

export const findApp = (repo: string) => APPS.find((app) => app.repo === repo);

export const findAppByProject = (slug: string) => APPS.find((app) => app.project === slug);

export type { App, LegalDoc, Section } from './shared';
