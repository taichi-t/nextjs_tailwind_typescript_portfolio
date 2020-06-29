import Layout from '@/components/Layout/Layout';
import { GetStaticProps } from 'next';
import { getSortedWorksData } from '@/utils/work';
import WorksGridLayout from '@/components/WorksGridLayout/WorksGridLayout';

export default function Posts({ allWorksData }) {
  return (
    <Layout title="works">
      <main>
        <WorksGridLayout allWorksData={allWorksData} />
      </main>
    </Layout>
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
