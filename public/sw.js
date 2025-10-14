
const CACHE_NAME = 'hill-clear-v2';
const urlsToCache = [
  '/',
  '/manifest.json'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  // Skip caching for module scripts and assets during development
  if (event.request.url.includes('/@') || 
      event.request.url.includes('.js?') || 
      event.request.url.includes('.tsx') ||
      event.request.url.includes('vite') ||
      event.request.destination === 'script') {
    return;
  }

  event.respondWith(
    // Network first for navigations
    if (event.request.mode === 'navigate') {
      fetch(event.request).catch(() => {
        return caches.match('/');
      });
    } else {
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        });
    }
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control immediately
      self.clients.claim()
    ])
  );
});

// Background Sync for offline orders
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle offline order sync
  return new Promise((resolve) => {
    // Sync logic here
    resolve();
  });
}
