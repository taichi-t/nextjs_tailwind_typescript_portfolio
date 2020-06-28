import GithubSvg from '@/public/icons/github.svg';
import LinkedInSvg from '@/public/icons/linkedin.svg';
import TwitterSvg from '@/public/icons/twitter.svg';
import InstaGraSvg from '@/public/icons/instagram.svg';
import MyBlogSvg from '@/public/icons/my-blog.svg';
import { useTheme } from '@/utils/themeContext';

export default function Profile() {
  const { loaded } = useTheme();

  return (
    <div className="p-3 text-primaryText h-full flex flex-col justify-between">
      <div className="inline-block align-top">
        <p className="text-2xl font-bold font-display">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            Taichi @code 🧑‍💻
          </span>
        </p>
        <p className="text-secondaryText text-xs">
          <span className={`inline-block ${!loaded && 'skeleton'}`}>
            I love learing new technologies 💻
          </span>
        </p>
      </div>

      <ul className="flex">
        <li className="w-5 mr-3">
          <a href="">
            <GithubSvg className="svgs" />
          </a>
        </li>
        <li className="w-5 mr-3">
          <a href="">
            <LinkedInSvg className="svgs" />
          </a>
        </li>
        <li className="w-5 mr-3">
          <a href="">
            <TwitterSvg className="svgs" />
          </a>
        </li>
        <li className="w-5 mr-3">
          <a href="">
            <InstaGraSvg className="svgs" />
          </a>
        </li>
        <li className="w-5 self-center mr-3">
          <a href="">
            <MyBlogSvg className="svgs" />
          </a>
        </li>
      </ul>
    </div>
  );
}
