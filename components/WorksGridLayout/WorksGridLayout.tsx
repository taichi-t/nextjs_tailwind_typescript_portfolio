import WorksItem from './WorksItem/WorksItem';
import { IWork } from '@/types/works';

type Props = {
  works: IWork[];
};

export default function WorksGridLayout({ works }: Props) {
  const contents = works.map((item) => <WorksItem item={item} key={item.id} />);

  return <div className="grid grid-cols-12 gap-4 tablet:gap-2">{contents}</div>;
}
