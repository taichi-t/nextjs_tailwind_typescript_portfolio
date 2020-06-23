import Footer from './Footer/Footer';
import Header from './Header/Header';
import MetaLinks from './MetaLinks/MetaLinks';
import { useTheme } from '@/utils/themeContext';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <>
      <MetaLinks />
      <div className="wrap">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
