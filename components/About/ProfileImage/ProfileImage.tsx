import { useState, useRef, useEffect } from 'react';
export default function ProfileImage() {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current.complete) setIsImgLoaded(true);
  }, []);

  const handleLoad = () => setIsImgLoaded(true);
  return (
    <div className={`p-3 mobile:p-1 `}>
      <img
        src="/images/me.JPG"
        alt="me"
        className={`circle ${isImgLoaded ? 'block' : 'hidden'}`}
        width="100%"
        height="100%"
        ref={imgRef}
        onLoad={handleLoad}
      />
      <div
        className={`${isImgLoaded ? 'hidden' : 'skeleton circle'}`}
        style={{ paddingTop: '100%', height: 'auto' }}
      ></div>
    </div>
  );
}
