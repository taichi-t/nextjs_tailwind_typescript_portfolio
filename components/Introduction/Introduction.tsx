import { useTheme } from '@/utils/themeContext';

export default function Hero() {
  const { loaded } = useTheme();

  return (
    <div className="mt-20 inner-wrap">
      <h2 className="title text-primaryText ">
        <span
          className={`font-display font-bold text-4xl inline-block ${
            !loaded && 'skeleton'
          }`}
        >
          Hi there! I'm Taichi 🕺
        </span>
        <br />
        <span
          className={`text-2xl leading-tight inline-block ${
            !loaded && 'skeleton'
          }`}
        >
          who is a junior developer based in Vancouver, Canada, seeking an
          opportunity that I work as web developer.
        </span>
      </h2>
    </div>
  );
}
