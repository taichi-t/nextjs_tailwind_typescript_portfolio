import config from '@/next.config';

export default function useImagesObserver(refs, setIsImgLoaded) {
  console.log(refs.current);
}

// const { font } = config;
// let fontFamilies = font;

// var fontObservers = [];
// Object.keys(fontFamilies).forEach(function (family) {
//   fontObservers.push(
//     fontFamilies[family].map(function (config) {
//       return new FontFaceObserver(family, config).load();
//     })
//   );

//   Promise.all(fontObservers).then(
//     function () {
//       setLoaded(true);
//     },
//     function () {
//       console.log('error');
//       setLoaded(false);
//     }
//   );
// }, []);
