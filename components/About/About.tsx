import ProfileImage from './ProfileImage/ProfileImage';
import Profile from './Profile/Profile';
import Aside from './Aside/Aside';
import HardSkill from './HardSkill/HardSkill';
import SoftSkill from './SoftSkill/SoftSkill';

export default function About() {
  return (
    <main>
      <div className="bg-paper custom-border-thick">
        <div className="m-3 grid grid-cols-12 grid-rows-6 gap-3">
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
      </div>
      <HardSkill />
      <SoftSkill />
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
