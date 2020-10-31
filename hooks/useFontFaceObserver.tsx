import { FONT } from '@/constants/config';
import { useState, useEffect } from 'react';
let FontFaceObserver = require('fontfaceobserver');

const useFontFaceObserver = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    let fontObservers = [];

    Object.keys(FONT).forEach(function (family) {
      fontObservers.push(
        FONT[family].map(function (config) {
          return new FontFaceObserver(family, config).load();
        })
      );

      Promise.all(fontObservers).then(
        function () {
          setIsFontLoaded(true);
        },
        function () {
          console.error('error fetchig font');
          setIsFontLoaded(false);
        }
      );
    });
  }, []);

  return { isFontLoaded };
};

export default useFontFaceObserver;
