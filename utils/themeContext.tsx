import { useState, useContext, createContext, useEffect } from 'react';
import useFontFaceObserver from '@/hooks/useFontFaceObserver';
const initialValue = { theme: 'theme-light', loaded: false };

type ContextProps = {
  toggleTheme(): void;
  setHeight(num: number): void;
  theme: string;
  loaded: boolean;
  headerHeight: number;
};

export const ThemeContext = createContext<Partial<ContextProps>>(initialValue);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<string>('theme-dark');
  const [loaded, setLoaded] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number>(null);

  useEffect(() => {
    useFontFaceObserver(setLoaded);
  }, []);

  function toggleTheme() {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  }
  function setHeight(num) {
    setHeaderHeight(num);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setHeight,
        loaded,
        headerHeight,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
