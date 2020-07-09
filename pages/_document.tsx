import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import config from '@/config/website';

export default class Document extends NextDocument {
  render() {
    const { siteMetadata } = config;
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          {/* <link rel="manifest" href="/site.webmanifest" /> */}
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta
            key="description"
            name="description"
            content={siteMetadata.description}
          />
          <meta key="title" name="title" content={siteMetadata.title} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
