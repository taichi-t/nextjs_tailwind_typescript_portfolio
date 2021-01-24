import React, { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import * as gtag from '@/utils/gtag';
import '@/styles/index.css';
import ThemeProvider from '@/utils/themeContext';
import { useTheme } from '@/utils/themeContext';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { IntlProvider } from 'react-intl';
import dictionary from '@/dictionary.json';

function MyApp({ Component, pageProps }: AppProps<typeof Layout>) {
  const { locale, defaultLocale } = useRouter();
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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          key="description"
          name="description"
          content={dictionary[locale]['metadata.title']}
        />
        <meta
          key="title"
          name="title"
          content={dictionary[locale]['metadata.description']}
        />
      </Head>
      <IntlProvider
        locale={locale}
        messages={dictionary[locale]}
        defaultLocale={defaultLocale}
      >
        <ThemeProvider>
          <div className={`${theme}`}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </ThemeProvider>
      </IntlProvider>
    </>
  );
}

export default MyApp;
