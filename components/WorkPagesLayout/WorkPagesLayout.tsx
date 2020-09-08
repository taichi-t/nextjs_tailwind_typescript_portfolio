import { useEffect, useRef, useState } from 'react';
import Description from './Description/Description';
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
    <main className="mt-3">
      <div className="grid grid-cols-12 gap-8 text-primaryText tablet:px-3 mobile:gap-1">
        <div className="col-span-8 mobile:col-span-12">
          <Description
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
      <div className={`mt-5 inner-wrap`}>
        <img
          src={image.src}
          alt={image.alt}
          ref={imgRef}
          width="100%"
          height="100%"
          onLoad={handleLoad}
          className={`${isImgLoaded ? 'block' : 'hidden'}`}
        />
        <div
          className={`skeleton ${isImgLoaded ? 'hidden' : 'block'}`}
          style={{ paddingTop: '58%' }}
        ></div>
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
  );
}
