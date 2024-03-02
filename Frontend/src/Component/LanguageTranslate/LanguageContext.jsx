import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: require('./translations/en.json'),
  hi: require('./translations/hi.json'),
  mr: require('./translations/mr.json'),
  ta: require('./translations/ta.json')
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translate = (key) => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, translate, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
