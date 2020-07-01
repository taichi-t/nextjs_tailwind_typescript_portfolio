import { useTheme } from '@/utils/themeContext';

export default function Hero() {
  const { loaded } = useTheme();

  return (
    <div className="h-screen">
      <div className={`max-w-xs mx-auto`}></div>
    </div>
  );
}
