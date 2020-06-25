import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';
export default function WorksLink() {
  const { loaded } = useTheme();
  return (
    <div className="group bg-paper custom-border h-full hover:bg-yellow">
      <div className="m-3 ">
        <Link href="/works/work2">
          <div className="text-primaryText text-lg font-bold">
            <span
              className={`inline-block group-hover:underline group-hover:bg-paper group-hover:text-indigo-400 ${
                !loaded && 'skeleton'
              }`}
            >
              VIEW MORE 👉
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
