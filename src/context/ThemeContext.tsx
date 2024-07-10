import React, { createContext, useContext, useState } from 'react';

export type DarkMode = boolean;

type ThemeContextType = {
  darkMode: DarkMode;
  setDarkMode: React.Dispatch<React.SetStateAction<DarkMode>>;
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<DarkMode>(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Theme context should be within the Provider');
  }
  return context;
}
