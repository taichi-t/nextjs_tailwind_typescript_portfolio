import { useTheme } from '@/utils/themeContext';
import Launch from '@/public/icons/launch.svg';
import { theme } from '@/tailwind.config';
export default function Footer() {
  const { loaded } = useTheme();
  return (
    <footer className="mt-20">
      <div className="inner-wrap">
        <h3
          className={`text-primaryText font-bold font-display text-2xl tracking-wide`}
        >
          <span
            className={`inline-block
            ${!loaded && 'skeleton text-transparent'}
          `}
          >
            Drop me a line 📮
          </span>
        </h3>
        <a
          className={`text-xl leading-tight inline-block text-primaryText`}
          href="mailto:t.tujioka.0925@gmail.com"
        >
          <span
            className={`inline-block underline mr-1 ${
              !loaded && 'skeleton bg-skeleton text-transparent'
            }`}
          >
            t.tujioka.0925@gmail.com
          </span>
          <span>
            <Launch className="inline-block fill-current" width="1rem" />
          </span>
        </a>
      </div>
      <div className="mt-8 pb-32 inner-wrap">
        <button className="text-base text-primaryText font-bold mr-3  hover:text-primaryText hover:bg-yellow focus:outline-none">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>about</span>
        </button>
        <button className="text-base text-primaryText font-bold hover:text-primaryText hover:bg-yellow focus:outline-none">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            resume📄
          </span>
        </button>
      </div>
    </footer>
  );
}
