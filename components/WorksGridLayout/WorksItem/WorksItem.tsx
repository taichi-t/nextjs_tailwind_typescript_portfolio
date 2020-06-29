import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import useCreateTagElemnts from '@/hooks/useCreateTagElements';
import { useTheme } from '@/utils/themeContext';

export default function WorksGridLayout({ item }) {
  const { thumbnail, id, title, tags } = item;
  const { loaded } = useTheme();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);

  const { elements } = useCreateTagElemnts(tags);

  useEffect(() => {
    if (imgRef.current.complete) setIsImgLoaded(true);
  }, []);

  const handleLoad = () => setIsImgLoaded(true);

  return (
    <Link href="/work/[id]" as={`/work/${id}`}>
      <div className="col-span-4 text-primaryText bg-paper p-3 border border-divider">
        <div className={`${!isImgLoaded && 'skeleton'}`}>
          <img
            src={thumbnail.src}
            alt={thumbnail.alt}
            onLoad={handleLoad}
            ref={imgRef}
            className={`${!isImgLoaded && 'invisible'}`}
          />
        </div>
        <h2 className="font-bold font-display mt-3">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            {title}
          </span>
        </h2>
        <ul className="flex flex-wrap mt-3">{elements}</ul>
      </div>
    </Link>
  );
}
