import React, { useEffect } from 'react';
import Router from 'next/router';
import * as gtag from '@/utils/gtag';
import '@/styles/index.css';
import ThemeProvider from '@/utils/themeContext';
import { useTheme } from '@/utils/themeContext';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  const { theme } = useTheme();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className={`${theme}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
