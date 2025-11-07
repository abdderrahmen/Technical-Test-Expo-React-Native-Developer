import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";

const LANGUAGE_KEY = "APP_LANGUAGE";
const deviceLocale = Localization.locale ?? "en";

async function getStoredLanguage() {
  const stored = await AsyncStorage.getItem(LANGUAGE_KEY);
  return stored || deviceLocale.split("-")[0] || "en";
}

i18n.use(initReactI18next).init({
  compatibilityJSON: "v4",
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  interpolation: { escapeValue: false },
});

getStoredLanguage().then((lang) => {
  i18n.changeLanguage(lang);
});

export async function changeLanguage(lang: string) {
  await AsyncStorage.setItem(LANGUAGE_KEY, lang);
  await i18n.changeLanguage(lang);
}

export default i18n;
