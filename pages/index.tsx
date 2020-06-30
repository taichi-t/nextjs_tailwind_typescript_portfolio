import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Hero/Hero';
import Introduction from '@/components/Introduction/Introduction';
import Works from '@/components/Works/Works';

export default function IndexPage() {
  return (
    <Layout title="home">
      <main>
        <Hero />
        <Introduction />
        <Works />
      </main>
    </Layout>
  );
}
