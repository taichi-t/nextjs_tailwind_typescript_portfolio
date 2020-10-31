import GithubSvg from '@/public/images/icons/github.svg';
import LinkedInSvg from '@/public/images/icons/linkedin.svg';
import InstaGramSvg from '@/public/images/icons/instagram.svg';
import { SNS } from '@/constants/config';

export default function Sns() {
  return (
    <ul className="flex flex-wrap">
      <li className="w-5 mr-3">
        <a href={SNS.github} target="_blank" rel="noopener">
          <GithubSvg className="svgs" />
        </a>
      </li>
      <li className="w-5 mr-3">
        <a href={SNS.linkedIn} target="_blank" rel="noopener">
          <LinkedInSvg className="svgs" />
        </a>
      </li>
      <li className="w-5 mr-3">
        <a href={SNS.instagram} target="_blank" rel="noopener">
          <InstaGramSvg className="svgs" />
        </a>
      </li>
    </ul>
  );
}
