import { useTheme } from '@/utils/themeContext';
import useCreateTagElements from '@/hooks/useCreateTagElements';

export default function WorkCard1() {
  const { loaded } = useTheme();

  const tags = ['reactHook', 'redux', 'localStorage', 'materialUi'];
  const { elements } = useCreateTagElements(tags);

  return (
    <div className="col-span-12 h-48 bg-paper custom-border flex justify-center items-center">
      <div className="bg-yellow  works-container grid grid-cols-12 gap-8">
        <div className="col-span-5 bg-green">image container</div>
        <div className="col-span-7 bg-green">
          <ul className="flex flex-col justify-center h-full">
            <li className="mt-auto mb-auto text-primaryText">
              <span
                className={`font-bold text-xl inline-block font-display ${
                  !loaded && 'skeleton text-transparent'
                }`}
              >
                My Work Space
              </span>
            </li>
            <li>
              <ul className="flex">{elements}</ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
