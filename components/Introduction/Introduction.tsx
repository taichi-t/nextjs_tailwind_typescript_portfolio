import { useTheme } from '@/utils/themeContext';

export default function Hero() {
  const { loaded } = useTheme();

  return (
    <div>
      <main className="hero h-screen">
        <h2 className="title text-primaryText inline-block">
          <span className={`${!loaded && 'skeleton'}`}>
            Hi there! I'm Taichi.
          </span>
          <br />
          <span className={`${!loaded && 'skeleton'}`}>
            I'm a junior developer based in Vancouver, Canada
          </span>
        </h2>
      </main>
    </div>
  );
}
