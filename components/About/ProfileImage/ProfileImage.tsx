import { useState, useRef, useEffect } from 'react';
export default function ProfileImage(): JSX.Element {
  const [isImgisFontLoaded, setIsImgisFontLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current.complete) setIsImgisFontLoaded(true);
  }, []);

  const handleLoad = () => setIsImgisFontLoaded(true);
  return (
    <div className={`p-3 mobile:p-1 `}>
      <img
        src="/images/me.JPG"
        alt="me"
        className={`circle ${isImgisFontLoaded ? 'block' : 'hidden'}`}
        width="100%"
        height="100%"
        ref={imgRef}
        onLoad={handleLoad}
      />
      <div
        className={`${isImgisFontLoaded ? 'hidden' : 'skeleton circle'}`}
        style={{ paddingTop: '100%', height: 'auto' }}
      ></div>
    </div>
  );
}
