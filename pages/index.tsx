import { useTheme } from '@/utils/themeContext';
import Config from '@/next.config';
import Layout from '@/components/Layout/Layout';

export default function IndexPage() {
  const { siteMetadata } = Config;
  const { toggleTheme } = useTheme();

  return (
    <Layout title="home">
      <div className="hero">
        <h1 className="title text-primaryText skeleton inline-block">
          <span>{siteMetadata.title}</span>
        </h1>
      </div>

      <button
        onClick={toggleTheme}
        className="font-display text-6xl text-primaryText skeleton inline-block"
      >
        <span>{siteMetadata.description}</span>
      </button>
    </Layout>
  );
}
