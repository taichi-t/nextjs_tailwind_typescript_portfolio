import WorkPagesLayout from '@/components/WorkPagesLayout/WorkPagesLayout';
import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllWorkIds, getWorkData } from '@/utils/work';
import { Work as WorkType } from '@/types/works';

type WorkData = {
  workData: WorkType;
};

export default function Work({ workData }: WorkData): JSX.Element {
  return (
    <>
      <Head>
        <title>{`works/${workData.title}`}</title>
      </Head>
      <WorkPagesLayout {...workData} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = getAllWorkIds(locales);
  return {
    ...paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const workData = await getWorkData(params.id as string, locale);
  return {
    props: {
      workData,
    },
  };
};

Work.Layout = Layout;
