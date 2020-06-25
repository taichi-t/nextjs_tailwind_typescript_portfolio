import { useTheme } from '@/utils/themeContext';
import WorkCard1 from './WorkCard1/WorkCard1';
import WorkCard2 from './WorkCard2/WorkCard2';
import WorkCard3 from './WorkCard3/WorkCard3';

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
      <WorkCard1 />
      <WorkCard2 />
      <WorkCard3 />
    </div>
  );
}
