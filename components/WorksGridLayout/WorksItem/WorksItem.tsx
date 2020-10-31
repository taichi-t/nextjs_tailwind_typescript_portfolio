import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';
import Tags from '@/components/Tags/Tags';
import { Work as WorkType } from '@/types/works';

type Item = {
  item: WorkType;
};

export default function WorksGridLayout({ item }: Item) {
  const { thumbnail, id, title, tags } = item;
  const { isFontLoaded } = useTheme();
  const [isImgisFontLoaded, setIsImgisFontLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current.complete) setIsImgisFontLoaded(true);
  }, []);

  const handleLoad = () => setIsImgisFontLoaded(true);

  return (
    <Link href="/work/[id]" as={`/work/${id}`}>
      <div className="col-span-4 text-primaryText bg-paper p-3 border border-divider tablet:p-2 mobile:col-span-12 ">
        <div className="border border-divider">
          <img
            src={thumbnail.src}
            alt={thumbnail.alt}
            onLoad={handleLoad}
            ref={imgRef}
            className={`${isImgisFontLoaded ? 'block' : 'hidden'}`}
          />
        </div>
        <div
          className={`${isImgisFontLoaded ? 'hidden' : 'skeleton'}`}
          style={{ paddingTop: '67%', height: 'auto' }}
        />
        <h2 className="font-bold font-display mt-3">
          <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
            {title}
          </span>
        </h2>
        <ul className="flex flex-wrap mt-3">
          <Tags tags={tags} />
        </ul>
      </div>
    </Link>
  );
}
