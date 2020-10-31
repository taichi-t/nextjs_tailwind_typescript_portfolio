import { useTheme } from '@/utils/themeContext';
import Launch from '@/public/images/icons/launch.svg';
import Link from 'next/link';
import Sns from '@/components/Sns/Sns';
import { useRouter } from 'next/router';

export default function Footer(): JSX.Element {
  const { pathname } = useRouter();
  const { isFontLoaded } = useTheme();

  return (
    <footer className="mt-20">
      <div className="inner-wrap">
        <h3
          className={`text-primaryText font-bold font-display text-2xl tracking-wide mobile:text-sm`}
        >
          <span
            className={`inline-block
            ${!isFontLoaded && 'skeleton text-transparent'}
          `}
          >
            Drop me a line 📮
          </span>
        </h3>
        <a
          className={`text-xl leading-tight inline-block text-primaryText mb-3  mobile:text-xs`}
          href="mailto:t.tujioka.0925@gmail.com"
        >
          <span
            className={`inline-block underline mr-1 ${
              !isFontLoaded && 'skeleton bg-skeleton text-transparent'
            }`}
          >
            t.tujioka.0925@gmail.com
          </span>
          <span>
            <Launch className="inline-block fill-current" width="1rem" />
          </span>
        </a>
        <Sns />
      </div>
      <div className="mt-8 pb-32 inner-wrap text-base text-primaryText mobile:text-sm">
        <button
          className={`font-bold  hover:text-yellow focus:outline-none ${
            pathname === '/about' && 'text-yellow'
          }`}
        >
          <Link href="/about">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'} `}>
              about
            </span>
          </Link>
        </button>
        <span className="mx-2 text-primaryText">/</span>
        <button className={`font-bold  hover:text-yellow focus:outline-none`}>
          <a href="/pdf/taichi-tsujioka-resume.pdf" target="_blank">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'} `}>
              resume📄
            </span>
          </a>
        </button>
      </div>
    </footer>
  );
}
