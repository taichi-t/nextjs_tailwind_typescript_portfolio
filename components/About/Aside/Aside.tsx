import { useTheme } from '@/utils/themeContext';
export default function Aside(): JSX.Element {
  const { loaded } = useTheme();
  return (
    <div className="p-3 text-primaryText h-full flex flex-col justify-around">
      <ul className="align-baseline">
        <li>
          <h2 className="text-secondaryText font-bold list-font">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              LOCATION
            </span>
          </h2>
          <p className="item-font">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Vancouver, Canada
            </span>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h2 className="text-secondaryText font-bold list-font">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              HOMETOWN
            </span>
          </h2>
          <p className="item-font">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Japan
            </span>
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <h2 className="text-secondaryText font-bold list-font">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              WORK
            </span>
          </h2>
          <p className="item-font">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Frontend Developer
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
}
