import { useTheme } from '@/utils/themeContext';
import ReactSvg from '@/public/images/icons/react.svg';
import TypeScriptSvg from '@/public/images/icons/typescript.svg';
import JavascriptSvg from '@/public/images/icons/javascript.svg';
export default function HardSkill(): JSX.Element {
  const { loaded } = useTheme();
  return (
    <div className="text-primaryText text-sm mt-5 mx-auto grid grid-cols-12 gap-3 mobile:gap-1 mobile:mt-8">
      <div className="col-span-6 mobile:col-span-12">
        <h2 className="text-secondaryText font-bold">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            Specialists:
          </span>
        </h2>
        <ul className="flex ml-2 mobile:pt-3 mobile:ml-0 mobile:justify-between">
          <li className="w-16 mr-5 mobile:mr-0">
            <span>
              <ReactSvg fill="#61DAFB" />
            </span>
          </li>
          <li className="w-16 mr-5 mobile:mr-0">
            <TypeScriptSvg fill="#007acc" />
          </li>

          <li className="w-16 mr-5 mobile:mr-0">
            <JavascriptSvg fill="#f7df1e" />
          </li>
        </ul>
      </div>
      <div className="col-span-6 mobile:col-span-12 mobile:mt-1">
        <h2 className="text-secondaryText font-bold block mobile:pt-3 ">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            Other skills:
          </span>
        </h2>
        <dl className="flex flex-col">
          <dt className="font-bold text-secondaryText mobile:mt-1">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Langueges
            </span>
          </dt>
          <dd>
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Node.js, Scss/Sass, CSS3, HTML5
            </span>
          </dd>
          <dt className="font-bold text-secondaryText mobile:mt-1">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Frameworks
            </span>
          </dt>
          <dd>
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Gatsby.js, Next.js, Redux, Material-UI, TailwindCSS,
              styled-components
            </span>
          </dd>
          <dt className="font-bold text-secondaryText mobile:mt-1">
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Others
            </span>
          </dt>
          <dd>
            <span className={`inline-block ${!loaded && 'skeleton'}`}>
              Firebase, MongoDB, Figma
            </span>
          </dd>
        </dl>
      </div>
    </div>
  );
}
