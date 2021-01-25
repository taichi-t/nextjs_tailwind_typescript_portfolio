import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import About from '@/components/About/About';
import { useIntl } from 'react-intl';
export default function AboutPage(): JSX.Element {
  const { formatMessage: f } = useIntl();
  return (
    <>
      <Head>
        <title>{f({ id: 'about' })}</title>
      </Head>
      <About />
    </>
  );
}

AboutPage.Layout = Layout;
