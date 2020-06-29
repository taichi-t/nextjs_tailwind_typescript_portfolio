import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';

export default function Header() {
  const { loaded, toggleTheme, theme, setHeight } = useTheme();

  const headerRef = useRef(null);

  useEffect(() => {
    setHeight(headerRef.current.clientHeight);
  }, []);

  return (
    <header>
      <nav ref={headerRef}>
        <ul className="flex justify-between items-center p-4 text-primaryText">
          <li></li>
          <ul className="flex justify-between items-center space-x-4 text-xs font-bold">
            <li>
              <Link href="/">
                <a>
                  <span
                    className={`font-bold text-xs hover:bg-yellow inline-block ${
                      !loaded && 'skeleton'
                    }`}
                  >
                    home
                  </span>
                </a>
              </Link>
            </li>
            <span className="mx-2 font-bold text-primaryText">/</span>

            <li>
              <Link href="/about">
                <a>
                  <span
                    className={`font-bold text-xs hover:bg-yellow inline-block ${
                      !loaded && 'skeleton'
                    }`}
                  >
                    about
                  </span>
                </a>
              </Link>
            </li>
            <span className="mx-2 font-bold text-primaryText">/</span>

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
