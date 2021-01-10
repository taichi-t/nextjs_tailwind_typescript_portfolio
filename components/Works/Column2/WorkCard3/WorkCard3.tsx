import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/utils/themeContext';
import Tags from '@/components/Tags/Tags';

export default function WorkCard3({ data }): JSX.Element {
  const { id, tags, title, thumbnail } = data;
  const [isImgisFontLoaded, setIsImgisFontLoaded] = useState(false);
  const imgRef = useRef(null);
  const { isFontLoaded } = useTheme();
  useEffect(() => {
    if (imgRef.current.complete) setIsImgisFontLoaded(true);
  }, []);

  const handleLoad = () => setIsImgisFontLoaded(true);

  return (
    <Link href="/work/[id]" as={`/work/${id}`}>
      <div className="group bg-paper custom-border hover:bg-opacityGreen h-full">
        <div className="m-8 tablet:m-6 mobile:m-4">
          <div
            className={`w-9/12 tablet:w-full my-0 mx-auto mb-6 mobile:w-full mobile:mb-3`}
          >
            <img
              src={thumbnail.src}
              alt={thumbnail.alt}
              className={`shadow ${isImgisFontLoaded ? 'block' : 'hidden'}`}
              width="100%"
              height="100%"
              ref={imgRef}
              onLoad={handleLoad}
            />
            <div
              className={`${isImgisFontLoaded ? 'hidden' : 'skeleton'}`}
              style={{ paddingTop: '67%' }}
            />
          </div>
          <ul>
            <li className="mb-5 text-primaryText mobile:mb-2">
              <span
                className={`font-bold font-display text-2xl inline-block group-hover:bg-paper ${
                  !isFontLoaded && 'skeleton text-transparent'
                }`}
              >
                {title}
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
