import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: ['fr', 'de', 'it', 'pt', 'es', 'en'],
        supportedLngs: ['fr', 'de', 'it', 'pt', 'es', 'en'],
        debug: true,
        backend: {
            loadPath: `${import.meta.env.BASE_URL}locale/{{lng}}/translation.json`
        },
        interpolation: {
        escapeValue: false, // React already escapes by default
        },
        detection: {
            order: ["localStorage", "cookie", "navigator", "htmlTag"],
            caches: ["localStorage"],
        }
    })

export default i18n;