// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import các file ngôn ngữ
import translationEN from './locales/en/translation.json';
import translationVN from './locales/vn/translation.json';

// Cấu hình i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    vn: {
      translation: translationVN,
    },
  },
  lng: 'vn', // Ngôn ngữ mặc định
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React đã tự động thoát các giá trị
  },
});

export default i18n;
