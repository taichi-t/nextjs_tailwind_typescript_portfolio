import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getSortedWorksData } from '@/utils/work';
import WorksGridLayout from '@/components/WorksGridLayout/WorksGridLayout';
import { IWork } from '@/types/works';

type Props = {
  works: IWork[];
};

export default function Works({ works }: Props) {
  return (
    <>
      <Head>
        <title>{'works'}</title>
      </Head>
      <main className="mt-3">
        <WorksGridLayout works={works} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const works = getSortedWorksData();
  return {
    props: {
      works,
    },
  };
};

Works.Layout = Layout;
