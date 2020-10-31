import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';
export default function WorksLink(): JSX.Element {
  const { isFontLoaded } = useTheme();
  return (
    <Link href="/work/works">
      <div className="group bg-paper custom-border h-full hover:bg-yellow">
        <div className="m-3 ">
          <div className="text-lg font-bold text-indigo-400">
            <span
              className={`inline-block underline group-hover:bg-paper ${
                !isFontLoaded && 'skeleton'
              }`}
            >
              VIEW MORE 👉
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
