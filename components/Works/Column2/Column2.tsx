import { IWork } from '@/types/works';
import WorkCard2 from './WorkCard2/WorkCard2';
import WorkCard3 from './WorkCard3/WorkCard3';
import WorksLink from './WorksLink/WorksLink';

type Props = {
  card2: IWork;
  card3: IWork;
};

export default function Column2({ card2, card3 }: Props) {
  return (
    <div className="grid grid-rows-4 grid-cols-12 gap-3">
      <div className="row-span-4 col-span-7 mobile:col-span-12">
        <WorkCard2 {...card2} />
      </div>
      <div className="row-span-3 col-span-5 mobile:col-span-12">
        <WorkCard3 {...card3} />
      </div>
      <div className="row-span-1 col-span-5 mobile:col-span-12">
        <WorksLink />
      </div>
    </div>
  );
}
