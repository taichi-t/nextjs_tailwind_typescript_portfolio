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
    <div style={{ height: `${height}px` }}>
      <div className={`max-w-xs mx-auto`}>
        <HeroSVG />
      </div>
    </div>
  );
}
