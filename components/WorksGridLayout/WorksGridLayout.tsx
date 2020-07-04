import WorksItem from './WorksItem/WorksItem';

export default function WorksGridLayout({ allWorksData }) {
  const contents = allWorksData.map((item) => (
    <WorksItem item={item} key={item.id} />
  ));

  return <div className="grid grid-cols-12 gap-4 tablet:gap-2">{contents}</div>;
}
