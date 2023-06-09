import i18next from "i18next";
import common_fr from "./fr/common.json";
import common_en from "./en/common.json";
import common_ro from "./ro/common.json";
import common_es from "./es/common.json";
import common_it from "./it/common.json";
import { initReactI18next } from "react-i18next";

var sellerLang  = JSON.parse(localStorage.getItem("sellerLang"));
sellerLang      = sellerLang?.code || "en";

// seller languages
i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: sellerLang, // language to use
  resources: {
    en: { translation: common_en },
    fr: { translation: common_fr.common },
    ro: { translation: common_ro.common },
    es: { translation: common_es.common },
    it: { translation: common_it.common },
  },
});

export default i18next;
