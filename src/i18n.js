// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import hiTranslation from "./locales/hi.json";
import guTranslation from "./locales/gu.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
    gu: {
      translation: guTranslation,
    },
  },
  fallbackLng: "en", // Default language
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n; // Export the configured i18n instance
