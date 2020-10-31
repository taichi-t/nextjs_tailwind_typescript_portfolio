import { FONT } from '@/constants/config';
let FontFaceObserver = require('fontfaceobserver');

const useFontFaceObserver = (setLoaded) => {
  var fontObservers = [];
  Object.keys(FONT).forEach(function (family) {
    fontObservers.push(
      FONT[family].map(function (config) {
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
