// Cache only public static assets, never authenticated HTML or API responses.
const CACHE='sv-static-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['/favicon.svg','/icon-192.png','/manifest.webmanifest']))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===self.location.origin&&/\.(png|svg|woff2)$/.test(new URL(e.request.url).pathname))e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));});
