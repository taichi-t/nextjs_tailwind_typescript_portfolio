import { useTheme } from '@/utils/themeContext';
import useCreateTagElements from '@/hooks/useCreateTagElements';

export default function Aside({ tags, role }) {
  const { loaded } = useTheme();
  const { elements } = useCreateTagElements(tags);

  return (
    <aside className="flex justify-center items-center">
      <div className="inline-block">
        <h2 className="text-secondaryText text-xs font-bold">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>Role</span>
        </h2>
        <ul>
          {role &&
            role.map((item, index) => (
              <li className="role-font text-secondaryText" key={index}>
                <span className={`inline-block ${!loaded && 'skeleton'}`}>
                  {item}
                </span>
              </li>
            ))}
        </ul>
        <h2 className="text-secondaryText text-xs font-bold mt-5">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            Technology
          </span>
        </h2>
        <ul className="flex flex-wrap">{elements}</ul>
      </div>
    </aside>
  );
}
