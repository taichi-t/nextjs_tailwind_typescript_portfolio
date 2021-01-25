import { useTheme } from '@/utils/themeContext';

export default function Hero(): JSX.Element {
  const { isFontLoaded } = useTheme();

  return (
    <div className="flex justify-center items-center mt-20">
      <h1 className="hero-text-container">
        <p className={`hero-text uppercase`}>
          <span
            className={`inline-block  ${
              !isFontLoaded && 'skeleton disable-hero-text'
            }`}
          >
            welcome
          </span>
        </p>
        <p className={`hero-text uppercase`}>
          <span
            className={`inline-block  ${
              !isFontLoaded && 'skeleton disable-hero-text'
            }`}
          >
            to
          </span>
        </p>
        <p className={`hero-text uppercase whitespace-no-wrap`}>
          <span
            className={`inline-block ${
              !isFontLoaded && 'skeleton disable-hero-text'
            }`}
          >
            my portfolio
          </span>
        </p>
        <p
          className={`text-sm text-right -mt-2 text-secondaryText mobile:text-xs -mr-1 whitespace-no-wrap`}
        >
          <span
            className={`inline-block  ${
              !isFontLoaded && 'skeleton disable-hero-text'
            }`}
          >
            Have fun🤟
          </span>
        </p>
      </h1>
    </div>
  );
}
