let FontFaceObserver = require('fontfaceobserver');

const useFontFaceObserver = (setLoaded) => {
  let fontFamilies = {
    Montserrat: [{ weight: 300 }, { weight: 400 }, { weight: 700 }],
    Signika: [{ weight: 300 }, { weight: 400 }, { weight: 700 }],

    // Etc.
  };

  var fontObservers = [];
  Object.keys(fontFamilies).forEach(function (family) {
    fontObservers.push(
      fontFamilies[family].map(function (config) {
        return new FontFaceObserver(family, config).load();
      })
    );

    Promise.all(fontObservers).then(
      function () {
        console.log('seccess');
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
