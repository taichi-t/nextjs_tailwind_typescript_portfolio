import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/utils/themeContext';
import Tags from '@/components/Tags/Tags';

export default function WorkCard2() {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);
  const { loaded } = useTheme();

  const tags = [
    'gatsby',
    'scss',
    'react-bootstrap',
    'netlify-functions',
    'contentful',
  ];
  useEffect(() => {
    if (imgRef.current.complete) setIsImgLoaded(true);
  }, []);

  const handleLoad = () => setIsImgLoaded(true);

  return (
    <Link href="/work/[id]" as={`/work/Impactraction`}>
      <div className="group bg-paper custom-border hover:bg-opacityBioret h-full">
        <div className="m-8 tablet:m-6 mobile:m-4">
          <div
            className={`w-9/12 tablet:w-full my-0 mx-auto mb-6 mobile:w-full mobile:mb-3`}
          >
            <img
              src="/MDfiles/Impactraction/Impactraction-mockup.png"
              alt="mockup of Impactraction"
              className={`shadow ${isImgLoaded ? 'block' : 'hidden'}`}
              width="100%"
              height="100%"
              ref={imgRef}
              onLoad={handleLoad}
            />
            <div
              className={`${isImgLoaded ? 'hidden' : 'skeleton'}`}
              style={{ paddingTop: '67%' }}
            />
          </div>
          <ul>
            <li className="mb-5 text-primaryText mobile:mb-2">
              <span
                className={`font-bold text-2xl inline-block font-display group-hover:bg-paper ${
                  !loaded && 'skeleton text-transparent'
                }`}
              >
                Impactraction
              </span>
            </li>
            <li>
              <ul className="flex flex-wrap">
                <Tags tags={tags} />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
