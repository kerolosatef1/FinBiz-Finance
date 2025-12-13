import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    load: "languageOnly", // prevents en-GB issue

    backend: {
      loadPath: "/Locales/{{lng}}/translation.json",
    },
  });

export default i18n;
