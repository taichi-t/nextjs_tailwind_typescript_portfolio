import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();

  const { loaded, toggleTheme, theme, setHeight } = useTheme();

  const headerRef = useRef(null);

  useEffect(() => {
    setHeight(headerRef.current.clientHeight);
  }, []);

  return (
    <header>
      <nav ref={headerRef}>
        <ul className="flex justify-between items-center p-4 text-primaryText">
          <li>icon</li>
          <ul className="flex justify-between items-center ">
            <li>
              <Link href="/">
                <a
                  className={`hover:text-yellow font-bold text-xs mr-4 ${
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
                  className={`hover:text-yellow font-bold text-xs mr-4 ${
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
                  className={`hover:text-yellow font-bold text-xs mr-4 ${
                    pathname === '/work/works' && 'text-yellow'
                  }`}
                >
                  <span className={`inline-block ${!loaded && 'skeleton'}`}>
                    works
                  </span>
                </a>
              </Link>
            </li>
            <span className="mr-4">/</span>
            <li>
              <button onClick={toggleTheme} className="focus:outline-none">
                <span
                  className={`font-bold text-sm inline-block ${
                    !loaded && 'skeleton'
                  }`}
                >
                  {theme === 'theme-dark' ? '🌞' : '🌚'}
                </span>
              </button>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
