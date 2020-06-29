import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';
export default function WorksLink() {
  const { loaded } = useTheme();
  return (
    <Link href="/work/works">
      <div className="group bg-paper custom-border h-full hover:bg-yellow">
        <div className="m-3 ">
          <div className="text-primaryText text-lg font-bold">
            <span
              className={`inline-block underline group-hover:bg-paper text-indigo-400 ${
                !loaded && 'skeleton'
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
