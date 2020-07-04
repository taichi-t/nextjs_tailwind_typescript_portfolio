import GithubSvg from '@/public/images/icons/github.svg';
import LinkedInSvg from '@/public/images/icons/linkedin.svg';
import InstaGramSvg from '@/public/images/icons/instagram.svg';
const config = require('@/config/website');

export default function Sns() {
  const { sns } = config;

  return (
    <ul className="flex flex-wrap">
      <li className="w-5 mr-3">
        <a href={sns.github} target="_blank" rel="noopener">
          <GithubSvg className="svgs" />
        </a>
      </li>
      <li className="w-5 mr-3">
        <a href={sns.linkedIn} target="_blank" rel="noopener">
          <LinkedInSvg className="svgs" />
        </a>
      </li>
      <li className="w-5 mr-3">
        <a href={sns.instagram} target="_blank" rel="noopener">
          <InstaGramSvg className="svgs" />
        </a>
      </li>
    </ul>
  );
}
