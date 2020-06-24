import { useTheme } from '@/utils/themeContext';
import Config from '@/next.config';
import Layout from '@/components/Layout/Layout';

export default function IndexPage() {
  const { loaded } = useTheme();
  const { siteMetadata } = Config;

  return (
    <Layout title="home">
      <main className="hero h-screen">
        <h2 className="title text-primaryText inline-block">
          <span className={`${!loaded && 'skeleton'}`}>
            Hi there! I'm Taichi.
          </span>
          <br />
          <span className={`${!loaded && 'skeleton'}`}>
            I'm a junior developer based in Vancouver, Canada
          </span>
        </h2>
      </main>
    </Layout>
  );
}
