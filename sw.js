var CACHE = 'ebike-battery-v7';
var FILES = ['index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      // cache:'reload' salta la cache HTTP e scarica sempre i file freschi
      return Promise.all(FILES.map(function(f){
        return fetch(new Request(f, {cache: 'reload'})).then(function(r){
          if(r.ok) return c.put(f, r);
        });
      }));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  // Pagine: prima la rete (versione aggiornata), cache solo se offline
  if(e.request.mode === 'navigate' || /index\.html$/.test(e.request.url)){
    e.respondWith(
      fetch(e.request, {cache: 'no-cache'}).then(function(r){
        var copy = r.clone();
        caches.open(CACHE).then(function(c){ c.put('index.html', copy); });
        return r;
      }).catch(function(){ return caches.match('index.html'); })
    );
    return;
  }
  // Resto: cache, poi rete
  e.respondWith(caches.match(e.request).then(function(r){ return r || fetch(e.request); }));
});
