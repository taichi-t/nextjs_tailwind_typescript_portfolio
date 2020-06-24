import { useTheme } from '@/utils/themeContext';
import useCreateTagElements from '@/hooks/useCreateTagElements';
import WordCard1SVG from '@/public/work-card-1.svg';

export default function WorkCard1() {
  const { loaded } = useTheme();

  const tags = ['reactHook', 'redux', 'materialUi', 'localStorage'];
  const { elements } = useCreateTagElements(tags);

  return (
    <div className="group col-span-12 bg-paper custom-border flex justify-center items-center hover:bg-opacityGreen">
      <div className="works-container grid grid-cols-12 gap-8 h-full ">
        <div className="col-span-6">
          <div className={`${!loaded && 'skeleton'}`}>
            <WordCard1SVG width="100%" height="100%" />
          </div>
        </div>
        <div className="col-span-6">
          <ul className="flex flex-col justify-center h-full">
            <li className="mt-auto mb-auto text-primaryText">
              <span
                className={`font-bold text-xl inline-block font-body group-hover:bg-paper ${
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
