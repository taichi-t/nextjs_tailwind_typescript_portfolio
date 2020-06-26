import Layout from '@/components/Layout/Layout';
export default function WorkPagesLayout({
  discription,
  tags,
  imageSrc,
  links,
  pageTitle,
}) {
  return (
    <Layout title={pageTitle}>
      <div>
        <p>here is {pageTitle} pages </p>
      </div>
    </Layout>
  );
}
