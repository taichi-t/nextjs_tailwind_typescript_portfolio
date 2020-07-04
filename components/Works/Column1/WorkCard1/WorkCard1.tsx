import Link from 'next/link';
import { useTheme } from '@/utils/themeContext';
import useCreateTagElements from '@/hooks/useCreateTagElements';
import WordCard1SVG from '@/public/images/task.svg';

export default function WorkCard1() {
  const { loaded } = useTheme();
  const tags = ['reactHook', 'redux', 'materialUi', 'localStorage'];
  const { elements } = useCreateTagElements(tags);

  // const { elements } = useCreateTagElements(tags);

  return (
    <Link href="/work/[id]" as={`/work/my-work-space`}>
      <div className="group  bg-paper custom-border flex justify-center items-center hover:bg-opacityBlue">
        <div className="m-12 grid grid-cols-12 gap-8 tablet:gap-6 tablet:m-10 mobile:gap-2 mobile:m-4">
          <div className="col-span-6 mobile:col-span-12 mobile:mb-3">
            <div>
              <WordCard1SVG className="h-full" />
            </div>
          </div>
          <div className="col-span-6 mobile:col-span-12">
            <ul className="flex flex-col justify-center h-full">
              <li className="mt-auto mb-auto text-primaryText mobile:mb-2">
                <span
                  className={`font-bold text-2xl  inline-block font-display group-hover:bg-paper text-primaryText ${
                    !loaded && 'skeleton text-transparent'
                  }`}
                >
                  My Work Space
                </span>
              </li>
              <li>
                <ul className="flex flex-wrap">{elements}</ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
