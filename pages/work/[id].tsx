import WorkPagesLayout from '@/components/WorkPagesLayout/WorkPagesLayout';
import Layout from '@/components/Layout/Layout';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllWorkIds, getWorkData } from '@/utils/work';

export default function Work({ workData }) {
  return <WorkPagesLayout {...workData} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllWorkIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const workData = await getWorkData(params.id as string);
  return {
    props: {
      workData,
    },
  };
};

Work.Layout = Layout;
