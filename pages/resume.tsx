import Layout from '@/components/Layout/Layout';

export default function Resume() {
  return (
    <Layout title="resume">
      <main className="h-screen">
        <iframe
          src="/taichi-tsujioka-resume.pdf"
          width="100%"
          height="100%"
        ></iframe>
      </main>
    </Layout>
  );
}
