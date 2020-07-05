import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Hero/Hero';
import Introduction from '@/components/Introduction/Introduction';
import Works from '@/components/Works/Works';

export default function IndexPage({ children }) {
  return (
    <main>
      <Hero />
      <Introduction />
      <Works />
    </main>
  );
}

IndexPage.Layout = Layout;
