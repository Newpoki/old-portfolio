import { LANGUAGES, LANGUAGE_LS_KEY } from "@/settings/settings-constants";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ENGLISH_ABOUT } from "./en/about";
import { ENGLISH_EXPERIENCIES } from "./en/experiencies";
import { ENGLISH_HEADER } from "./en/header";
import { ENGLISH_HOME } from "./en/home";
import { ENGLISH_PROJECTS } from "./en/projects";
import { ENGLISH_SETTINGS } from "./en/settings";
import { FRENCH_ABOUT } from "./fr/about";
import { FRENCH_EXPERIENCIES } from "./fr/experiencies";
import { FRENCH_HEADER } from "./fr/header";
import { FRENCH_HOME } from "./fr/home";
import { FRENCH_PROJECTS } from "./fr/projects";
import { FRENCH_SETTINGS } from "./fr/settings";

const LanguageDetector = {
  type: "languageDetector",
  detect: () => {
    const languageCodeFromLS = localStorage.getItem(LANGUAGE_LS_KEY);

    if (languageCodeFromLS === LANGUAGES.fr.code || languageCodeFromLS === LANGUAGES.en.code) {
      return languageCodeFromLS;
    }

    if (/^fr\b/.test(navigator.language)) {
      return LANGUAGES.fr.code;
    }

    return LANGUAGES.en.code;
  },
  init: () => ({}),
  cacheUserLanguage: () => ({}),
} as const;

const resources = {
  en: {
    ...ENGLISH_SETTINGS,
    ...ENGLISH_HOME,
    ...ENGLISH_HEADER,
    ...ENGLISH_ABOUT,
    ...ENGLISH_PROJECTS,
    ...ENGLISH_EXPERIENCIES,
  },
  fr: {
    ...FRENCH_SETTINGS,
    ...FRENCH_HOME,
    ...FRENCH_HEADER,
    ...FRENCH_ABOUT,
    ...FRENCH_PROJECTS,
    ...FRENCH_EXPERIENCIES,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: LANGUAGES.en.code,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
