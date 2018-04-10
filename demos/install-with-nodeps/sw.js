const version = 'v1.0.1';

self.addEventListener('install', function(event) {
  console.log('nodeps', version, 'now installing...');

  event.waitUntil(
    caches.open('pwa-studio').then(function(cache) {
      cache.addAll([
        './images/circle.gif',
        'http://image.uc.cn/s/uae/g/3o/broccoli/dll/react.min.bundle.js?v=20170720'
      ]);
      return cache.addAll([
        './css/style.css',
        './images/show.png',
        './js/app.js'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('nodeps', version, 'now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
  console.log('nodeps', version, 'linsten a fetch event', event.request.url);
});
