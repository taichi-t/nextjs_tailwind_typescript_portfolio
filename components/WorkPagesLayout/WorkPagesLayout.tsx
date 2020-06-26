import { useEffect, useRef, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Discription from './Discription/Discription';
import Aside from './Aside/Aside';
import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';

export default function WorkPagesLayout({
  discription,
  tags,
  image,
  role,
  links,
  pageTitle,
  webLink,
  githubLink,
}) {
  const { loaded } = useTheme();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      if (imgRef.current.complete) setIsImgLoaded(true);
    }, 500);
  }, []);

  const handleLoad = () => {
    setTimeout(() => {
      setIsImgLoaded(true);
    }, 500);
  };
  return (
    <Layout title={pageTitle}>
      <main>
        <div className="grid grid-cols-12 gap-8 w-full text-primaryText">
          <div className="col-span-8">
            <Discription
              discription={discription}
              webLink={webLink}
              githubLink={githubLink}
            />
          </div>
          <div className="col-span-4">
            <Aside tags={tags} role={role} />
          </div>
        </div>
        <div className={`-mt-10 inner-wrap ${!isImgLoaded && 'skeleton'}`}>
          <img
            src={image.src}
            alt={image.alt}
            ref={imgRef}
            width="100%"
            height="100%"
            onLoad={handleLoad}
            className={`${!isImgLoaded && 'invisible'}`}
          />
        </div>

        <ul className="text-indigo-400 text-center mt-20 font-bold text-xl">
          <li className="inline-block mr-10">
            <Link href={links.prev.src}>
              <span
                className={`underline inline-block ${!loaded && 'skeleton'}`}
              >
                👈 {links.prev.title}
              </span>
            </Link>
          </li>
          <li className="inline-block">
            <Link href={links.next.src}>
              <span
                className={`underline inline-block ${!loaded && 'skeleton'}`}
              >
                {links.next.title} 👉
              </span>
            </Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
