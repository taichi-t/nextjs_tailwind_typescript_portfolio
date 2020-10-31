import {
  useState,
  useContext,
  createContext,
  useEffect,
  ReactNode,
} from 'react';
import useFontFaceObserver from '@/hooks/useFontFaceObserver';

interface ContextProps {
  toggleTheme?(): void;
  children: ReactNode;
  theme?: string;
  loaded?: boolean;
}

const initialValue = { theme: 'theme-dark', loaded: false };

export const ThemeContext = createContext<Partial<ContextProps>>(initialValue);

export default function ThemeProvider({ children }: ContextProps): JSX.Element {
  const [theme, setTheme] = useState(initialValue.theme);
  const [loaded, setLoaded] = useState(initialValue.loaded);

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
