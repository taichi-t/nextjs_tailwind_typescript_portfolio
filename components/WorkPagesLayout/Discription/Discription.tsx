import { useEffect, useState } from 'react';
import { useTheme } from '@/utils/themeContext';
import Launch from '@/public/icons/launch.svg';

export default function WorkCard1({ contentHtml, title, webLink, githubLink }) {
  const { loaded } = useTheme();
  const [height, setHeight] = useState(null);

  return (
    <div>
      <h1 className={`inner-wrap font-bold text-2xl font-display`}>
        <span className={`inline-block ${!loaded && 'skeleton'}`}>{title}</span>
      </h1>
      <article className="mt-5">
        <div
          className={`text-sm mt-2 leading-relaxed inline-block ${
            !loaded && 'skeleton'
          }`}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <a
          href={webLink}
          target="_blank"
          className={`font-bold text-indigo-400 inline-block mt-5`}
        >
          <span
            className={`inline-block underline mr-1 ${!loaded && 'skeleton'}`}
          >
            VISIT WEBSITE
          </span>
          <span>
            <Launch className="inline-block fill-current" width="1rem" />
          </span>
        </a>
        <br />
        <a
          href={githubLink}
          target="_blank"
          className={`font-bold text-indigo-400 inline-block mt-2`}
        >
          <span
            className={`inline-block underline mr-1 ${!loaded && 'skeleton'}`}
          >
            VISIT GIT
          </span>
          <span>
            <Launch className="inline-block fill-current" width="1rem" />
          </span>
        </a>
      </article>
    </div>
  );
}
