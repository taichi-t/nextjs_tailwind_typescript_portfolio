import { useTheme } from '@/utils/themeContext';
import Config from '@/next.config';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Hero/Hero';

export default function IndexPage() {
  const { loaded } = useTheme();
  const { siteMetadata } = Config;

  return (
    <Layout title="home">
      <Hero />
    </Layout>
  );
}
