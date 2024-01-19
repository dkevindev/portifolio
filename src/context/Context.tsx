import React, { createContext, useState, useContext } from 'react';

interface LanguageContextType {
  isEnglish: boolean;
  toggleLanguage: (bol:boolean) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  isEnglish: false,
  toggleLanguage: () => {},
});

const LanguageProvider = ({children}: React.PropsWithChildren) => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = (bol:boolean) => {
    setIsEnglish(bol);
  };

  const contextValue: LanguageContextType = {
    isEnglish,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
