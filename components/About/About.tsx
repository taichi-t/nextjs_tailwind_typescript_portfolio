// import ReactSvg from '@/public/icons/react.svg';
// import TypeScriptSvg from '@/public/icons/typescript.svg';
// import ReduxSvg from '@/public/icons/redux.svg';
// import JavascriptSvg from '@/public/icons/javascript.svg';
import ProfileImage from './ProfileImage/ProfileImage';
import Profile from './Profile/Profile';
import Aside from './Aside/Aside';

export default function About() {
  return (
    <main className="bg-paper custom-border-thick">
      <div className="m-3 grid grid-cols-12 grid-rows-6 h-full gap-3">
        <div className="row-span-6 col-span-3">
          <ProfileImage />
        </div>
        <div className="row-span-6 col-span-6 ">
          <Profile />
        </div>
        <div className="row-span-6 col-span-3 ">
          <Aside />
        </div>
      </div>
    </main>
  );
}

{
  /* <ul className="flex">
            <li className="w-16">
              <span>
                <ReactSvg fill="#61DAFB" />
              </span>
            </li>
            <li className="w-16">
              <TypeScriptSvg fill="#007acc" />
            </li>
            <li className="w-16">
              <ReduxSvg fill="#764ABC" />
            </li>
            <li className="w-16">
              <JavascriptSvg fill="#f7df1e" />
            </li>
          </ul> */
}
