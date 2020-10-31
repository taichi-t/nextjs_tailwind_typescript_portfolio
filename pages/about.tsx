import Layout from '@/components/Layout/Layout';
import Head from 'next/head';

import About from '@/components/About/About';
export default function AboutPage(): React.ReactElement {
  return (
    <>
      <Head>
        <title>{'about'}</title>
      </Head>
      <About />
    </>
  );
}

AboutPage.Layout = Layout;
