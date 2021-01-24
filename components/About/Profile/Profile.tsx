import { useTheme } from '@/utils/themeContext';
import Sns from '@/components/Sns/Sns';
import { useIntl } from 'react-intl';

export default function Profile(): JSX.Element {
  const { isFontLoaded } = useTheme();
  const { formatMessage: f } = useIntl();
  return (
    <div className="p-3 text-primaryText h-full flex flex-col justify-between mobile:p-1">
      <div className="inline-block align-top">
        <p className="text-2xl font-bold font-display mobile:text-lg mobile:text-center">
          <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
            {f({ id: 'about.profile.name' })}
          </span>
        </p>
        <p className="text-secondaryText text-xs mobile:text-center">
          <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
            {f({ id: 'about.profile.description' })}
          </span>
        </p>
      </div>
      <div className="mobile:mt-2 mobile:text-center mobile:my-0 mobile:mx-auto">
        <Sns />
      </div>
    </div>
  );
}
