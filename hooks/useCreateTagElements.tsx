export default function useCreateTagElements(tags) {
  const elements = tags.map((tag, index) => (
    <li
      className={`bg-inner mb-1 ${
        tag === tags[tags.length - 1] ? '' : 'mr-1'
      } tag-font font-bold `}
      key={index}
    >
      <span
        className={`tag-hash text-${
          tag === 'nextJs' || tag === 'contentful' ? 'primaryText' : tag
        }`}
      >
        #
      </span>
      <span
        className={`text-${
          tag === 'nextJs' || tag === 'contentful' ? 'primaryText' : tag
        }`}
      >
        {tag}
      </span>
    </li>
  ));

  return { elements };
}
