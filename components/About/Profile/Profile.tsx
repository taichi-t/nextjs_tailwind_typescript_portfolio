import { useTheme } from '@/utils/themeContext';
import Sns from '@/components/Sns/Sns';

export default function Profile() {
  const { loaded } = useTheme();

  return (
    <div className="p-3 text-primaryText h-full flex flex-col justify-between mobile:p-1">
      <div className="inline-block align-top">
        <p className="text-2xl font-bold font-display mobile:text-lg mobile:text-center">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            Taichi @code 🧑‍💻
          </span>
        </p>
        <p className="text-secondaryText text-xs mobile:text-center">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            I love learing <br className="tablet:hidden desktop:hidden" /> new
            technologies 💻
          </span>
        </p>
      </div>
      <div className="mobile:mt-2 mobile:text-center mobile:my-0 mobile:mx-auto">
        <Sns />
      </div>
    </div>
  );
}
