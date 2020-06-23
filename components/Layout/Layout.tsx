import Footer from './Footer/Footer';
import Header from './Header/Header';
import MetaLinks from './MetaLinks/MetaLinks';
import { useTheme } from '@/utils/themeContext';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className="wrap">
      <MetaLinks />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
