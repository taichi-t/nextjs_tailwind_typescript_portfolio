import { useTheme } from '@/utils/themeContext';
import Config from '@/next.config';
import Layout from '@/components/Layout/Layout';

export default function IndexPage() {
  const { loaded, toggleTheme } = useTheme();
  const { siteMetadata } = Config;

  return (
    <Layout title="home">
      <div className="hero h-screen">
        <h1
          className={`title text-primaryText inline-block ${
            !loaded && 'skeleton'
          }`}
        >
          <span>{siteMetadata.title}</span>
        </h1>

        <button
          onClick={toggleTheme}
          className={`font-display text-4xl text-primaryText inline-block focus:outline-none ${
            !loaded && 'skeleton'
          }`}
        >
          <span>
            Hi there! My name is Taichi Tsujioka.
            <br />
            I'm a junior developer based in Vancouver, Canada
          </span>
        </button>
      </div>
    </Layout>
  );
}
