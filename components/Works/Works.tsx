import { useTheme } from '@/utils/themeContext';
import Column1 from './Column1/Column1';
import Column2 from './Column2/Column2';

export default function Hero() {
  const { loaded } = useTheme();

  return (
    <div className="mt-20 grid grid-cols-12 gap-3">
      <h2
        className={`text-primaryText font-bold text-xs col-span-12 inner-wrap`}
      >
        <span className={`inline-block ${!loaded && 'skeleton'}`}>
          Recent works
        </span>
      </h2>
      <div className="col-span-12">
        <Column1 />
      </div>
      <div className="col-span-12">
        <Column2 />
      </div>
    </div>
  );
}
