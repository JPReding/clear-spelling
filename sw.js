const CACHE = 'clear-spelling-v9';
const assets = ['./', './index.html', './styles.css', './overrides.css', './app.js', './lists-data.js', './manifest.webmanifest'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE)
    .then(cache => cache.addAll(assets.map(url => new Request(url, {cache: 'reload'}))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request, {cacheName: CACHE})
    .then(response => response || fetch(event.request)));
});
