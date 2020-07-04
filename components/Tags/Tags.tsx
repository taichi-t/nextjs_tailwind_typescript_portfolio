export default function Tags({ tags }) {
  return tags.map((tag, index) => (
    <li
      className={`bg-inner mb-1 ${
        tag === tags[tags.length - 1] ? '' : 'mr-1'
      } tag-font font-bold `}
      key={index}
    >
      <span className={`tag-hash`} style={{ color: `var(--color-${tag})` }}>
        #
      </span>
      <span style={{ color: `var(--color-${tag})` }}>{tag}</span>
    </li>
  ));
}
