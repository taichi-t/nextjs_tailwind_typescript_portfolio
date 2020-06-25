import { useTheme } from '@/utils/themeContext';
export default function Footer() {
  const { loaded } = useTheme();
  return (
    <footer className="mt-20">
      <div className="inner-wrap">
        <h3 className="text-primaryText font-bold font-display text-4xl">
          Drop me a line :)
        </h3>
        <a
          className={`text-2xl leading-tight inline-block  text-primaryText `}
          href="mailto:t.tujioka.0925@gmail.com"
        >
          <span
            className={`inline-block bg-yellow ${
              !loaded && 'skeleton bg-skeleton'
            }`}
          >
            t.tujioka.0925@gmail.com
          </span>
        </a>
      </div>
      <div className="mt-8 pb-32">
        <button className="text-base text-primaryText font-bold mr-3 custom-border px-2 hover:bg-yellow focus:outline-none">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>about</span>
        </button>
        <button className="text-base text-primaryText font-bold custom-border px-2 hover:bg-yellow focus:outline-none">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            resume
          </span>
        </button>
      </div>
    </footer>
  );
}
