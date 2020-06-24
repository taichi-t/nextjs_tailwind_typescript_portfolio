import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Hero/Hero';
import Introduction from '@/components/Introduction/Introduction';

export default function IndexPage() {
  return (
    <Layout title="home">
      <main>
        <Hero />
        <Introduction />
      </main>
    </Layout>
  );
}
