import { useState, useContext, createContext } from 'react';
const initialValue = { theme: 'theme-light' };

type ContextProps = {
  toggleTheme(): void;
  theme: string;
};

export const ThemeContext = createContext<Partial<ContextProps>>(initialValue);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState<string>('theme-light');

  function toggleTheme() {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
