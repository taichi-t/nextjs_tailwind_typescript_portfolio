import { useTheme } from '@/utils/themeContext';

export default function WorkCard2() {
  const { loaded } = useTheme();

  return (
    <div className="col-span-8 h-48 bg-paper custom-border relative">
      <div className="bg-yellow  works-container">WorkCard2</div>
    </div>
  );
}
