import { useTheme } from '@/utils/themeContext';
import { useIntl } from 'react-intl';
export default function Aside(): JSX.Element {
  const { formatMessage: f } = useIntl();
  const { isFontLoaded } = useTheme();
  return (
    <div className="p-3 text-primaryText h-full flex flex-col justify-around">
      <ul className="align-baseline">
        <li>
          <h2 className="text-secondaryText font-bold list-font">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.aside.location.title' })}
            </span>
          </h2>
          <p className="item-font">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.aside.location' })}
            </span>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h2 className="text-secondaryText font-bold list-font">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.aside.hometown.title' })}
            </span>
          </h2>
          <p className="item-font">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.aside.hometown' })}
            </span>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h2 className="text-secondaryText font-bold list-font">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.aside.work.title' })}
            </span>
          </h2>
          <p className="item-font">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.aside.work' })}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
}
