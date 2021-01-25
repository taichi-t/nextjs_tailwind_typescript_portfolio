import * as React from 'react';
import { useTheme } from '@/utils/themeContext';
import { IWork } from '@/types/works';
import Column1 from './Column1/Column1';
import Column2 from './Column2/Column2';
import { useIntl } from 'react-intl';

type Props = {
  works: {
    [key: string]: IWork;
  };
};

export default function Works({ works }: Props) {
  const { isFontLoaded } = useTheme();
  const { formatMessage: f } = useIntl();
  return (
    <div className="mt-20 grid grid-cols-12 gap-3">
      <h2
        className={`text-primaryText font-bold text-xs col-span-12 inner-wrap`}
      >
        <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
          {f({ id: 'works.title' })}
        </span>
      </h2>
      <div className="col-span-12">
        <Column1 card1={works['card1']} />
      </div>
      <div className="col-span-12">
        <Column2 card2={works['card2']} card3={works['card3']} />
      </div>
    </div>
  );
}
