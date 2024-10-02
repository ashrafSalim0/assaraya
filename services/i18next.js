import i18next from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import en from '../component/locales/en.json'
import ar from '../component/locales/ar.json'

export const languageResources = {
    en: {translation: en},
    ar: {translation: ar}
}

i18next.use(initReactI18next).init({
    compatibilityJSON:"V3",
    lng: 'en',
    fallbackLng: 'en',
    resources:languageResources,
})



export default i18next;