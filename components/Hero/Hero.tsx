import { useEffect, useState } from 'react';
import { useTheme } from '@/utils/themeContext';
import HeroSVG from '@/public/hero.svg';

export default function Hero() {
  const { loaded, headerHeight } = useTheme();
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const fullscreen = window.innerHeight;
    setHeight(fullscreen - headerHeight);
  }, [headerHeight]);

  return (
    <div
      className={`text-center ${!loaded && 'h-screen skeleton'}`}
      style={{ height: `${height}px` }}
    >
      <HeroSVG className="inline-block" />
    </div>
  );
}
