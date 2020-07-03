import GithubSvg from '@/public/icons/github.svg';
import LinkedInSvg from '@/public/icons/linkedin.svg';
import InstaGramSvg from '@/public/icons/instagram.svg';
const config = require('@/next.config');

export default function Sns() {
  const { sns } = config;

  return (
    <ul className="flex flex-wrap">
      <li className="w-5 mr-3">
        <a href={sns.github} target="_blank">
          <GithubSvg className="svgs" />
        </a>
      </li>
      <li className="w-5 mr-3">
        <a href={sns.linkedIn} target="_blank">
          <LinkedInSvg className="svgs" />
        </a>
      </li>
      <li className="w-5 mr-3">
        <a href={sns.instagram} target="_blank">
          <InstaGramSvg className="svgs" />
        </a>
      </li>
    </ul>
  );
}
