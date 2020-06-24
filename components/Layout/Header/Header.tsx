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
    <nav ref={headerRef}>
      <ul className="flex justify-between items-center p-4 text-primaryText">
        <li></li>
        <ul className="flex justify-between items-center space-x-4 text-xs font-bold">
          <li>
            <Link href="/">
              <a>
                <span
                  className={`font-bold text-xs hover:bg-yellow ${
                    !loaded && 'skeleton'
                  }`}
                >
                  about
                </span>
              </a>
            </Link>
          </li>

          <li>
            <button onClick={toggleTheme} className="focus:outline-none">
              <span
                className={`font-bold text-xs hover:bg-yellow ${
                  !loaded && 'skeleton'
                }`}
              >
                {theme === 'theme-dark' ? 'light' : 'dark'}
              </span>
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
