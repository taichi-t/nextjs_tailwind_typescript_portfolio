import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import Hero from '@/components/Hero/Hero';
import Introduction from '@/components/Introduction/Introduction';
import Works from '@/components/Works/Works';
import { GetServerSideProps } from 'next';
import { getSelectedWorkData } from '@/utils/work';
import { HIGHTLIGHTED_WORKS } from '@/constants/config';

export default function IndexPage(works): JSX.Element {
  return (
    <>
      <Head>
        <title>home</title>
      </Head>
      <main>
        <Hero />
        <Introduction />
        <Works works={works} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const works = await getSelectedWorkData(HIGHTLIGHTED_WORKS);
  return {
    props: { ...works },
  };
};

IndexPage.Layout = Layout;
