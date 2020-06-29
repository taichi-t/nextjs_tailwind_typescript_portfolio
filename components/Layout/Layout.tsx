import { useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Head from 'next/head';
import { useTheme } from '@/utils/themeContext';

export default function Layout({ children, title, pathname }) {
  const { theme } = useTheme();
  useEffect(() => {
    theme === 'theme-dark'
      ? (document.body.style.backgroundColor = '#15202b')
      : (document.body.style.backgroundColor = '#ffffff');
  }, [theme]);

  return (
    <div className={`${theme} bg-background content-transition`}>
      <div className="wrap">
        <Head>
          <title>{title || 'portfolio'}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
