import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/utils/themeContext';
import useCreateTagElements from '@/hooks/useCreateTagElements';
export default function WorkCard2() {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);
  const { loaded } = useTheme();
  const tags = ['typeScript', 'nextJs', 'tailwind'];
  const { elements } = useCreateTagElements(tags);
  useEffect(() => {
    if (imgRef.current.complete) setIsImgLoaded(true);
  }, []);

  const handleLoad = () => setIsImgLoaded(true);

  return (
    <Link href="/work/[id]" as={`/work/portfolio`}>
      <div className="group bg-paper custom-border hover:bg-opacityGreen h-full">
        <div className="m-8 tablet:m-6 mobile:m-4">
          <div
            className={`w-9/12 tablet:w-full my-0 mx-auto mb-6 mobile:w-full mobile:mb-3 ${
              !isImgLoaded && 'skeleton'
            }`}
          >
            <img
              src="/mac.jpg"
              alt="mac"
              className={`${!isImgLoaded && 'invisible'}`}
              width="100%"
              height="100%"
              ref={imgRef}
              onLoad={handleLoad}
            />
          </div>
          <ul>
            <li className="mb-5 text-primaryText mobile:mb-2">
              <span
                className={`font-bold font-display text-2xl inline-block group-hover:bg-paper ${
                  !loaded && 'skeleton text-transparent'
                }`}
              >
                Portfolio
              </span>
            </li>
            <li>
              <ul className="flex flex-wrap">{elements}</ul>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}
