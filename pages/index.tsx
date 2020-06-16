import Nav from '../components/nav';
import { useTheme } from '../utils/themeContext';

export default function IndexPage() {
  const { theme } = useTheme();
  return (
    <div className={`${theme}`}>
      <Nav />
      <div className="hero">
        <h1 className="title text-yellow">Next.js + Tailwind CSS</h1>
      </div>
    </div>
  );
}
