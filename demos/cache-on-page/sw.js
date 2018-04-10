// caches API 可通过页面以及服务工作线程获取，这意味着我们不需要通过服务工作线程向缓存添加内容。

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

  // 查看所有缓存池
  caches.keys().then(cacheNames => {
    console.log(cacheNames);
  });

  // 打开缓存池，清楚旧资源. ps: 其实旧资源的清楚也可以在其他地方
  caches.open('pwa-studio').then(function(cache) {
    console.log('cache', cache);
    cache.delete('./images/circle.gif').then(stats => {
      console.log('had delete ?', stats);
    });
  });
  console.log(caches);
  // remove some cache which you want to remove, but remember that caches are shared across the origin
});

self.addEventListener('fetch', event => {
  console.log('nodeps', version, 'linsten a fetch event', event.request.url);
});
