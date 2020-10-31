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
  isFontLoaded?: boolean;
}

const initialValue = { theme: 'theme-dark', isFontLoaded: false };

export const ThemeContext = createContext<Partial<ContextProps>>(initialValue);

export default function ThemeProvider({ children }: ContextProps): JSX.Element {
  const [theme, setTheme] = useState(initialValue.theme);
  const { isFontLoaded } = useFontFaceObserver();

  function toggleTheme() {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isFontLoaded,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
