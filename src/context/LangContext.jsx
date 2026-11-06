import { createContext, useEffect, useState } from 'react';

export const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'fr'
  });

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}