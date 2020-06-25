export default function useCreateTagElements(tags) {
  const elements = tags.map((tag, index) => (
    <li
      className={`bg-inner mb-1 ${
        tag === tags[tags.length - 1] ? '' : 'mr-1'
      } tag-font font-bold `}
      key={index}
    >
      <span className={`text-opacity-50 text-${tag}`}>#</span>
      <span className={`text-${tag}`}>{tag}</span>
    </li>
  ));

  return { elements };
}
