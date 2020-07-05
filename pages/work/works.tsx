import Layout from '@/components/Layout/Layout';
import { GetStaticProps } from 'next';
import { getSortedWorksData } from '@/utils/work';
import WorksGridLayout from '@/components/WorksGridLayout/WorksGridLayout';

export default function Works({ allWorksData }) {
  return (
    <main className="mt-3">
      <WorksGridLayout allWorksData={allWorksData} />
    </main>
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
