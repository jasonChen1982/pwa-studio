const version = 'v1.0.1';

self.addEventListener('install', function(event) {
  console.log('deps', version, 'now installing...');
  event.waitUntil(
    caches.open('pwa-studio').then(function(cache) {
      return cache.addAll([
        './index.html',
        './css/style.css',
        './images/show.png',
        './js/app.js'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('deps', version, 'now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
  console.log('deps', version, 'linsten a fetch event', event.request.url);
});
