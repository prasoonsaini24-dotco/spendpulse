self.addEventListener('install', (e) => {
  console.log('[SpendPulse] Service Worker Installed');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[SpendPulse] Service Worker Activated');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => new Response('Offline'))
  );
});
