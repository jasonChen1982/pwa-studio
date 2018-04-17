importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

console.log(location);

const swhost = location.href;
const home = swhost.replace('sw.js', '');

workbox.precaching.precacheAndRoute([
  home,
  '//image.uc.cn/s/uae/g/3o/js/es6.promise.polyfill.js?v=20170720',
  '//image.uc.cn/s/uae/g/3o/broccoli/dll/react.min.bundle.js?v=20170720',
  '//image.uc.cn/s/uae/g/1y/broccoli/morphstars/index/bundle.d1ae563761c2a3028716.js',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/fish.json',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/uc.json',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/sm.json',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/9game.json',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/youku.json',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/fish-ball.json',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/kv.json',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/gradient.png',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/uc.svg',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/fishball.svg',
  '//image.uc.cn/s/uae/g/01/tofu_test/images/group.png',
]);

workbox.routing.registerRoute(
  // Cache image files
  home,
  // Use cache but update in the background ASAP
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  // Cache image files
  /.*\/\/image\.uc\.cn.*/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst()
);
