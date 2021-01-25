import { useTheme } from '@/utils/themeContext';
import { useIntl } from 'react-intl';

export default function Hero(): JSX.Element {
  const { isFontLoaded } = useTheme();
  const { formatMessage: f } = useIntl();

  return (
    <div className="inner-wrap mt-20">
      <h2 className="title text-primaryText ">
        <span
          className={`font-display font-bold text-3xl inline-block mobile:text-lg ${
            !isFontLoaded && 'skeleton'
          }`}
        >
          {f({ id: 'greeting' })}
        </span>
        <br />
        <span
          className={`text-2xl leading-tight inline-block mobile:text-sm ${
            !isFontLoaded && 'skeleton'
          }`}
        >
          {f({ id: 'introduction' })}
        </span>
      </h2>
    </div>
  );
}
