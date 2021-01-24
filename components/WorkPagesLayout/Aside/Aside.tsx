import { useTheme } from '@/utils/themeContext';
import Tags from '@/components/Tags/Tags';
import { Work as WorkType } from '@/types/works';
import { useIntl } from 'react-intl';

export default function Aside({ tags, role }: Partial<WorkType>) {
  const { isFontLoaded } = useTheme();
  const { formatMessage: f } = useIntl();
  return (
    <aside className="flex justify-center items-center mobile:justify-start">
      <div className="inline-block">
        <h2 className="text-secondaryText text-xs font-bold">
          <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
            {f({ id: 'workpages.aside.role.title' })}
          </span>
        </h2>
        <ul>
          {role &&
            role.map((item, index) => (
              <li className="role-font text-secondaryText" key={index}>
                <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
                  {item}
                </span>
              </li>
            ))}
        </ul>
        <h2 className="text-secondaryText text-xs font-bold mt-5 mobile:mt-1">
          <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
            {f({ id: 'workpages.aside.technology.title' })}
          </span>
        </h2>
        <ul className="flex flex-wrap">
          <Tags tags={tags} />
        </ul>
      </div>
    </aside>
  );
}
