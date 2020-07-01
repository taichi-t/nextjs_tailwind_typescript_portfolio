import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';
import { useRouter } from 'next/router';

export default function Header() {
  const { loaded, toggleTheme, theme } = useTheme();

  const { pathname } = useRouter();

  return (
    <header>
      <nav>
        <ul className="flex justify-between items-center py-4 text-primaryText mobile:flex-wrap mobile:py-2 ">
          <li className={`mobile:grow-1 mobile:w-12 w-16 `}>
            <Link href="/">
              <img src="/logo.png" alt="me" width="100%" height="100%" />
            </Link>
          </li>
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
            <span className="mx-2">/</span>
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
        </ul>
      </nav>
    </header>
  );
}
