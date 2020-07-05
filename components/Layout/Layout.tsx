import Footer from './Footer/Footer';
import Header from './Header/Header';

import { useTheme } from '@/utils/themeContext';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <>
      <style global jsx>{`
        body {
          background-color: ${theme === 'theme-dark' ? '#15202b' : '#ffffff'};
        }
      `}</style>
      <div className={`${theme} bg-background content-transition`}>
        <div className="wrap px-2">
          <header>
            <Header />
          </header>
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
