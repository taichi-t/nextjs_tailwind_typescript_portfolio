export default function Tags({ tags }) {
  return tags.map((tag, index) => (
    <li
      className={`bg-inner mb-1 ${
        tag === tags[tags.length - 1] ? '' : 'mr-1'
      } tag-font font-bold `}
      key={index}
    >
      <span
        className={`tag-hash ${
          tag === 'text-nextJs' || tag === 'text-contentful'
            ? 'primaryText'
            : `text-${tag}`
        }`}
      >
        #
      </span>
      <span
        className={`${
          tag === 'text-nextJs' || tag === 'text-contentful'
            ? 'primaryText'
            : `text-${tag}`
        }`}
      >
        {tag}
      </span>
    </li>
  ));
}
