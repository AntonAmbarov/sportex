import i18n from "i18next";
import resources from './resources';

const defaultLng = 'ru';

i18n
    .init({
        resources,
        lng: defaultLng,
        fallbackLng: defaultLng,
        interpolation:
            { escapeValue: false },
    })

export default i18n;