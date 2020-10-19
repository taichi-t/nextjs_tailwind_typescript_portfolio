import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/utils/themeContext';

import Tags from '@/components/Tags/Tags';

export default function WorkCard1() {
  const { loaded } = useTheme();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current.complete) setIsImgLoaded(true);
  }, []);
  const handleLoad = () => setIsImgLoaded(true);
  const tags = ["reactHook",
    "nextJs",
    "mongoDB",
    "nodeJs",
    "semantic-ui"];
  return (
    <Link href="/work/[id]" as={`/work/moving-sale`}>
      <div className="group  bg-paper custom-border flex justify-center items-center hover:bg-opacityBlue">
        <div className="m-12 grid grid-cols-12 gap-8 tablet:gap-6 tablet:m-10 mobile:gap-2 mobile:m-4">
          <div className="col-span-6 mobile:col-span-12 mobile:mb-3">
            <img
              src="/MDfiles/moving-sale/moving-sale-mockup.png"
              alt="mockup of moving sale"
              className={`shadow ${isImgLoaded ? 'block' : 'hidden'}`}
              width="100%"
              height="100%"
              ref={imgRef}
              onLoad={handleLoad}
            />
            <div
              className={`${isImgLoaded ? 'hidden' : 'skeleton'}`}
              style={{ paddingTop: '55%' }}
            ></div>
          </div>
          <div className="col-span-6 mobile:col-span-12">
            <ul className="flex flex-col justify-center h-full">
              <li className="mt-auto mb-auto text-primaryText mobile:mb-2">
                <span
                  className={`font-bold text-2xl  inline-block font-display group-hover:bg-paper ${
                    !loaded && 'skeleton text-transparent'
                  }`}
                >
                  E-commerce website
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
      </div>
    </Link>
  );
}
