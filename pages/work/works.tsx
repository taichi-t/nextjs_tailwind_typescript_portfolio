import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getSortedWorksData } from '@/utils/work';
import WorksGridLayout from '@/components/WorksGridLayout/WorksGridLayout';

export default function Works({ allWorksData }): React.ReactElement {
  return (
    <>
      <Head>
        <title>{'works'}</title>
      </Head>
      <main className="mt-3">
        <WorksGridLayout allWorksData={allWorksData} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allWorksData,
    },
  };
};

Works.Layout = Layout;
