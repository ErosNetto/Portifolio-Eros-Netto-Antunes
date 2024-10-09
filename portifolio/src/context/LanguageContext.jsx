import { createContext, useContext, useState } from "react";
import websiteTranslations from "../translations/websiteTranslations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");

  const t = (component, key) => {
    const componentTranslations = websiteTranslations[component][language];
    return componentTranslations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ t, setLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
