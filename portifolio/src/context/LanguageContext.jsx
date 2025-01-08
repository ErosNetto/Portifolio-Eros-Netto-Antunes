import { createContext, useContext, useState } from "react";
import websiteTranslations from "../translations/websiteTranslations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("pt");

  // Funcão translate
  const t = (component, key) => {
    const componentTranslations =
      websiteTranslations[component][currentLanguage];
    return componentTranslations[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ t, setCurrentLanguage, currentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
