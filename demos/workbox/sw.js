importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

console.log(location);

const hostURL = location.href;
const cacheName = 'broccoli-assets-cache';

workbox.precaching.precacheAndRoute([
  '/',
  'https://image.uc.cn/s/uae/g/3o/js/es6.promise.polyfill.js?v=20170720',
  'https://image.uc.cn/s/uae/g/3o/broccoli/dll/react.min.bundle.js?v=20170720',
  'https://image.uc.cn/s/uae/g/1y/broccoli/morphstars/index/bundle.d1ae563761c2a3028716.js',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/fish.json',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/uc.json',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/sm.json',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/9game.json',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/youku.json',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/fish-ball.json',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/kv.json',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/gradient.png',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/uc.svg',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/fishball.svg',
  'https://image.uc.cn/s/uae/g/01/tofu_test/images/group.png',
]);

workbox.routing.registerRoute(
  // Cache CSS files
  /.*index\.html/,
  // Use cache but update in the background ASAP
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName,
  })
);

workbox.routing.registerRoute(
  // Cache image files
  /.*\/\/image\.uc\.cn.*/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName,
  })
);
