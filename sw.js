const CACHE_NAME = 'calcupress-v1';
// Add all the files you want cached for offline use
const ASSETS = [
  './',
  './index.html',
  './style.css',  // Make sure this matches your exact CSS filename
  './script.js', // Make sure this matches your exact JS filename
  './manifest.json'
];

// Install Service Worker and cache core assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});

