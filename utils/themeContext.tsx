import { useState, useContext, createContext, useEffect,ReactNode,FC } from 'react';
import useFontFaceObserver from '@/hooks/useFontFaceObserver';

interface ContextProps {
  toggleTheme(): void;
  theme: string;
  loaded: boolean;
  children:ReactNode
};

const initialValue = { theme: 'theme-light', loaded: false };

export const ThemeContext = createContext<Partial<ContextProps>>(initialValue);

export default function ThemeProvider({ children }:ContextProps){
  const [theme, setTheme] = useState('theme-dark');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    useFontFaceObserver(setLoaded);
  }, []);

  function toggleTheme(){
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
