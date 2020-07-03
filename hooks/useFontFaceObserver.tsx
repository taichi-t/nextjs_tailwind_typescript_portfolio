const config = require('@/next.config');
let FontFaceObserver = require('fontfaceobserver');

const useFontFaceObserver = (setLoaded) => {
  const { font } = config;
  let fontFamilies = font;

  var fontObservers = [];
  Object.keys(fontFamilies).forEach(function (family) {
    fontObservers.push(
      fontFamilies[family].map(function (config) {
        return new FontFaceObserver(family, config).load();
      })
    );

    Promise.all(fontObservers).then(
      function () {
        setLoaded(true);
      },
      function () {
        console.log('error');
        setLoaded(false);
      }
    );
  }, []);
};

export default useFontFaceObserver;
