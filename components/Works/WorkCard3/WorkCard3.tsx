import { useTheme } from '@/utils/themeContext';

export default function WorkCard3() {
  const { loaded } = useTheme();

  return (
    <div className="col-span-4 h-48 bg-paper custom-border relative">
      <div className="bg-yellow  works-container">WorkCard3</div>
    </div>
  );
}
