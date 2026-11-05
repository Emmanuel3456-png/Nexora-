// NEXORA Service Worker
// Built by Emmanuel Abraham & Njoku for Softnet Technology Academy
// Team Phantom - Dream Big, Study Hard, Achieve More

const CACHE_NAME = 'nexora-v1-team-phantom';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/team-phantom.jpg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/offline.html'
];

// Install - cache core assets
self.addEventListener('install', event => {
  console.log('[NEXORA SW] Installing - Made by Emmanuel Abraham & Njoku');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[NEXORA SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - Network first, cache fallback, offline page
self.addEventListener('fetch', event => {
  // Skip Groq API calls - always network
  if (event.request.url.includes('api.groq.com') || event.request.url.includes('/api/chat')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache successful responses
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Offline fallback
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Return offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/offline.html') || 
                   new Response(`
                     <html>
                       <head><title>NEXORA Offline</title>
                       <meta name="viewport" content="width=device-width, initial-scale=1">
                       <style>
                         body { background: #0a0a0f; color: white; font-family: sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; text-align: center; padding: 20px; }
                         .card { background: linear-gradient(135deg, #7c3aed, #3b82f6); padding: 40px; border-radius: 24px; max-width: 400px; }
                         img { width: 100%; border-radius: 16px; margin-bottom: 20px; }
                       </style>
                       </head>
                       <body>
                         <div class="card">
                           <img src="/team-phantom.jpg" alt="Team Phantom" />
                           <h1>NEXORA Offline</h1>
                           <p>I am NEXORA, made by Emmanuel Abraham and Njoku for Softnet Technology Academy</p>
                           <p>Team Phantom - Knowledge • Focus • Success</p>
                           <p><small>Connect to internet to continue learning</small></p>
                         </div>
                       </body>
                     </html>`, { headers: { 'Content-Type': 'text/html' } });
          }
          return new Response('Offline', { status: 503 });
        });
      })
  );
});

// Push notifications for assignments (future)
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'NEXORA - Team Phantom';
  const options = {
    body: data.body || 'New assignment from NEXORA - Made by Emmanuel Abraham & Njoku',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    image: '/team-phantom.jpg',
    vibrate: [100, 50, 100],
    data: { url: data.url || '/' }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
