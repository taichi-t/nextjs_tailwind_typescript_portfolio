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
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a
              className={`no-underline text-primaryText inline-block ${
                !loaded && 'skeleton'
              }`}
            >
              <span>Home</span>
            </a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className={`btn-blue no-underline text-primaryText inline-block ${
                  !loaded && 'skeleton'
                }`}
              >
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
