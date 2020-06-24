import { useTheme } from '@/utils/themeContext';

export default function Hero() {
  const { loaded } = useTheme();

  return (
    <div className="h-screen bg-teal-100">
      <div></div>
    </div>
  );
}
