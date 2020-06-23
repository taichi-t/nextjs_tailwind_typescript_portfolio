import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';
const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Header() {
  const { loaded } = useTheme();

  return (
    <nav>
      <ul className="flex justify-between items-center p-4">
        <li>
          <Link href="/">
            <a className="no-underline text-primaryText inline-block">
              <span
                className={`font-bold text-xs ${
                  !loaded && 'skeleton text-opacity-0 text-transparent'
                }`}
              >
                Home
              </span>
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4 text-xs font-bold">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline text-primaryText">
                <span
                  className={`font-bold text-xs ${
                    !loaded && 'skeleton text-opacity-0 text-transparent'
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          ))}
          <li>
            <button>
              <span
                className={`font-bold text-xs ${
                  !loaded && 'skeleton text-opacity-0 text-transparent'
                }`}
              >
                darkmode
              </span>
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
