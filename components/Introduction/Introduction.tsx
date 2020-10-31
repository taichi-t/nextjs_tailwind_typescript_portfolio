import { useTheme } from '@/utils/themeContext';

export default function Hero(): JSX.Element {
  const { isFontLoaded } = useTheme();

  return (
    <div className="inner-wrap mt-20">
      <h2 className="title text-primaryText ">
        <span
          className={`font-display font-bold text-3xl inline-block mobile:text-lg ${
            !isFontLoaded && 'skeleton'
          }`}
        >
          Hi, I'm Taichi 🕺,
        </span>
        <br />
        <span
          className={`text-2xl leading-tight inline-block mobile:text-sm ${
            !isFontLoaded && 'skeleton'
          }`}
        >
          a junior developer based in Vancouver, Canada, seeking an opportunity
          to work as front-end developer.
        </span>
      </h2>
    </div>
  );
}
