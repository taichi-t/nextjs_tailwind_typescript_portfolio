import Footer from './Footer/Footer';
import Header from './Header/Header';
import { useTheme } from '@/utils/themeContext';

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={`${theme} bg-background`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
