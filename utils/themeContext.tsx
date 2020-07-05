import { useState, useContext, createContext, useEffect } from 'react';
import useFontFaceObserver from '@/hooks/useFontFaceObserver';
const initialValue = { theme: 'theme-light', loaded: false };

type ContextProps = {
  toggleTheme(): void;

  theme: string;
  loaded: boolean;
};

export const ThemeContext = createContext<Partial<ContextProps>>(initialValue);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<string>('theme-light');
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    useFontFaceObserver(setLoaded);
  }, []);

  function toggleTheme() {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        loaded,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
