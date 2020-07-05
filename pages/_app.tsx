import React from 'react';
import '@/styles/index.css';
import ThemeProvider from '@/utils/themeContext';
import { useTheme } from '@/utils/themeContext';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  const { theme } = useTheme();
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
