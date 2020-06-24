export default function useCreateTagElements(tags) {
  const elements = tags.map((tag, index) => (
    <li
      className={`bg-${tag} rounded-sm ${
        tag === tags[tags.length - 1] ? '' : 'mr-1'
      } tag-font font-bold `}
      key={index}
    >
      <span className={`text-opacity-75 text-white`}>#</span>
      <span className={`text-white`}>{tag}</span>
    </li>
  ));

  return { elements };
}
