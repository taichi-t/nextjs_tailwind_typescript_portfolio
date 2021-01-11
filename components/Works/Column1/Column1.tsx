import { IWork } from '@/types/works';
import React from 'react';
import WorkCard1 from './WorkCard1/WorkCard1';

type Props = {
  card1: IWork;
};

export default function Column1({ card1 }: Props) {
  return <WorkCard1 {...card1} />;
}
