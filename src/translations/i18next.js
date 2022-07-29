import i18next from 'i18next';
import common_fr from './fr/common.json';
import common_en from './en/common.json';
import common_ro from './ro/common.json';
import common_es from './es/common.json';
import common_it from './it/common.json';

// languages
i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng:  'en', // language to use
    resources: {
        en: {
            common: common_en // 'common' is our custom namespace
        },
        fr: {
            common: common_fr
        },
        ro: {
            common: common_ro
        },
        es: {
            common: common_es
        },
        it: {
            common: common_it
        },
    },
});

export default i18next