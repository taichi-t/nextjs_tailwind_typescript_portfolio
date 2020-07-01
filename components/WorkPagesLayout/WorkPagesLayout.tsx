import { useEffect, useRef, useState } from 'react';
import Layout from '@/components/Layout/Layout';
import Discription from './Discription/Discription';
import Aside from './Aside/Aside';
import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';

export default function WorkPagesLayout({
  contentHtml,
  tags,
  image,
  role,
  links,
  title,
  webLink,
  githubLink,
}) {
  const { loaded } = useTheme();

  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current.complete) setIsImgLoaded(true);
  }, []);

  const handleLoad = () => {
    setIsImgLoaded(true);
  };
  return (
    <Layout title={`works/${title}`}>
      <main className="mt-3">
        <div className="grid grid-cols-12 gap-8 text-primaryText tablet:px-3 mobile:gap-1">
          <div className="col-span-8 mobile:col-span-12">
            <Discription
              contentHtml={contentHtml}
              title={title}
              webLink={webLink}
              githubLink={githubLink}
              tags={tags}
              role={role}
            />
          </div>
          <div className="col-span-4 mobile:hidden">
            <Aside tags={tags} role={role} />
          </div>
        </div>
        <div className={`mt-5 inner-wrap ${!isImgLoaded && 'skeleton'}`}>
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

        <ul className="flex font-bold justify-around text-indigo-400 mt-20 inner-wrap">
          <li className="text-left">
            <p className="text-xl">👈</p>
            <Link href="/work/[id]" as={`${links.prev.src}`}>
              <a className={`underline inline-block ${!loaded && 'skeleton'}`}>
                <span className="text-base">{links.prev.title}</span>
              </a>
            </Link>
          </li>
          <li className="text-right">
            <p className="text-xl">👉</p>
            <Link href="/work/[id]" as={`${links.next.src}`}>
              <a className={`underline inline-block ${!loaded && 'skeleton'}`}>
                <span className="text-base">{links.next.title}</span>
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
