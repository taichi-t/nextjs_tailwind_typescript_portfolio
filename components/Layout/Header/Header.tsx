import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';
const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Header() {
  const { loaded, toggleTheme, theme } = useTheme();
  console.log(theme);

  return (
    <nav>
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
