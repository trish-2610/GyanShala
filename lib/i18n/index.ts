import * as Localization from 'expo-localization';
import i18n, { type InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../locales/en.json';
import hi from '../../locales/hi.json';
import bn from '../../locales/bn.json';

export const defaultNS = 'translation';

export const resources = {
  en: { [defaultNS]: en },
  hi: { [defaultNS]: hi },
  bn: { [defaultNS]: bn },
} as const;

export type AppLanguage = keyof typeof resources;

const options: InitOptions = {
  resources,
  lng: (Localization.getLocales?.()[0]?.languageCode as AppLanguage) || 'en',
  fallbackLng: 'en',
  defaultNS,
  ns: [defaultNS],
  interpolation: {
    escapeValue: false,
  },
};

// Initialize i18next only once in the app lifetime
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init(options);
}

export { i18n };
