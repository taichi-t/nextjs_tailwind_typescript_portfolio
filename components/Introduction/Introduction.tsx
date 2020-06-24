import { useTheme } from '@/utils/themeContext';

export default function Hero() {
  const { loaded } = useTheme();

  return (
    <div className="mt-20">
      <h2 className="title text-primaryText inline-block">
        <span
          className={`font-display font-bold text-4xl ${!loaded && 'skeleton'}`}
        >
          Hi there! I'm Taichi.
        </span>
        <br />
        <span className={`text-2xl leading-tight ${!loaded && 'skeleton'}`}>
          I'm a junior developer based in Vancouver, Canada, who seeking an
          opportunity that I work as web developer.
        </span>
      </h2>
    </div>
  );
}
