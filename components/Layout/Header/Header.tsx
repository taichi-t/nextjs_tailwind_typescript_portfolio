import { useState, useRef, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';
import { useRouter } from 'next/router';

export default function Header(): JSX.Element {
  const { loaded, toggleTheme, theme } = useTheme();
  const { pathname } = useRouter();
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = useRef(null);
  useEffect(() => {
    if (imgRef.current.complete) setIsImgLoaded(true);
  }, []);

  const handleLoad = () => setIsImgLoaded(true);

  return (
    <header>
      <nav className="flex justify-between items-center py-4 text-primaryText mobile:flex-wrap mobile:py-2 ">
        <ul>
          <li className={`mobile:grow-1 mobile:w-12 w-16`}>
            <Link href="/">
              <div>
                <img
                  src="/images/logo.png"
                  alt="me"
                  className={`${isImgLoaded ? 'block' : 'hidden'}`}
                  width="100%"
                  height="100%"
                  ref={imgRef}
                  onLoad={handleLoad}
                />
                <div
                  className={`${isImgLoaded ? 'hidden' : 'block '}`}
                  style={{ paddingTop: '100%', height: 'auto' }}
                />
              </div>
            </Link>
          </li>
        </ul>
        <ul className="inline-flex w-full justify-end">
          <li>
            <Link href="/">
              <a
                className={`hover:text-yellow font-bold text-xs mr-4 mobile:mr-2 ${
                  pathname === '/' && 'text-yellow'
                }`}
              >
                <span className={`inline-block ${!loaded && 'skeleton'}`}>
                  home
                </span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a
                className={`hover:text-yellow font-bold text-xs mr-4 mobile:mr-2 ${
                  pathname === '/about' && 'text-yellow'
                }`}
              >
                <span className={`inline-block ${!loaded && 'skeleton'}`}>
                  about
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/work/works">
              <a
                className={`hover:text-yellow font-bold text-xs  ${
                  pathname === '/work/works' && 'text-yellow'
                }`}
              >
                <span className={`inline-block ${!loaded && 'skeleton'}`}>
                  works
                </span>
              </a>
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <button onClick={toggleTheme} className="focus:outline-none">
              <span
                className={`font-bold text-lg inline-block ${
                  !loaded && 'skeleton'
                }`}
              >
                {theme === 'theme-dark' ? '🌞' : '🌚'}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
