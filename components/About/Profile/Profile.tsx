import { useTheme } from '@/utils/themeContext';
import Sns from '@/components/Sns/Sns';

export default function Profile() {
  const { loaded } = useTheme();

  return (
    <div className="p-3 text-primaryText h-full flex flex-col justify-between">
      <div className="inline-block align-top">
        <p className="text-2xl font-bold font-display">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            Taichi @code 🧑‍💻
          </span>
        </p>
        <p className="text-secondaryText text-xs">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            I love learing new technologies 💻
          </span>
        </p>
      </div>

      <Sns />
    </div>
  );
}
