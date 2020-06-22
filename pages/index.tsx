import { useTheme } from '@/utils/themeContext';
import Config from '@/next.config';
import Layout from '@/components/Layout/Layout';

export default function IndexPage() {
  const { siteMetadata } = Config;
  const { toggleTheme } = useTheme();

  return (
    <Layout>
      <div className="hero">
        <h1 className="title text-primaryText font-body ">
          {siteMetadata.title}
        </h1>
      </div>
      <div className="bg-paper">
        <button
          onClick={toggleTheme}
          className="font-display text-6xl text-primaryText"
        >
          It's Just Me, Jeremy!
        </button>
      </div>
    </Layout>
  );
}
