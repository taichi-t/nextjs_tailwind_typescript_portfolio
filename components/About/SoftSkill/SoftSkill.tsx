import { useTheme } from '@/utils/themeContext';
import { useIntl } from 'react-intl';

export default function SoftSkill(): JSX.Element {
  const { formatMessage: f } = useIntl();
  const { isFontLoaded } = useTheme();
  return (
    <div className="p-6 border border-divider bg-paper mt-8 mobile:p-3">
      <div className="grid grid-cols-12 gap-3 text-primaryText table:gap-2 mobile:gap-1">
        <div className="col-span-6 mobile:col-span-12">
          <h2 className="about-list-title ">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.softskill.passionate.title' })}
            </span>
          </h2>
          <p className="about-list-content">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.softskill.passionate' })}
            </span>
          </p>
        </div>
        <div className="col-span-6 mobile:col-span-12 mobile:mt-5">
          <h2 className="about-list-title">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.softskill.ambition.title' })}
            </span>
          </h2>
          <p className="about-list-content">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.softskill.ambition' })}
            </span>
          </p>
        </div>
        <div className="col-span-6 mobile:col-span-12 mobile:mt-5">
          <h2 className="about-list-title">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.softskill.teamwork.title' })}
            </span>
          </h2>
          <p className="about-list-content">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.softskill.teamwork' })}
            </span>
          </p>
        </div>
        <div className="col-span-6 mobile:col-span-12 mobile:mt-5">
          <h2 className="about-list-title">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.softskill.metime.title' })}
            </span>
          </h2>
          <p className="about-list-content">
            <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
              {f({ id: 'about.softskill.metime' })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
