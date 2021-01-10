import WorkCard1 from './WorkCard1/WorkCard1';
export default function Column1({ card1 }): JSX.Element {
  console.log(card1);
  return <WorkCard1 data={card1} />;
}
