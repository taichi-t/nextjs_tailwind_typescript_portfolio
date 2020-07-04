import { useState, useRef, useEffect } from 'react';
export default function ProfileImage() {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current.complete) setIsImgLoaded(true);
  }, []);

  const handleLoad = () => setIsImgLoaded(true);
  return (
    <div className="p-3 mobile:p-1">
      <div className={`inline-block ${!isImgLoaded && 'skeleton circle'}`}>
        <img
          src="/images/me.JPG"
          alt="me"
          className={`circle ${!isImgLoaded && 'invisible'}`}
          width="100%"
          height="100%"
          ref={imgRef}
          onLoad={handleLoad}
        />
      </div>
    </div>
  );
}
