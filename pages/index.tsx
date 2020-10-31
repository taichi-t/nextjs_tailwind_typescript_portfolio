import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import Hero from '@/components/Hero/Hero';
import Introduction from '@/components/Introduction/Introduction';
import Works from '@/components/Works/Works';

export default function IndexPage(): React.ReactElement {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <main>
        <Hero />
        <Introduction />
        <Works />
      </main>
    </>
  );
}

IndexPage.Layout = Layout;
