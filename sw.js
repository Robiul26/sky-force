self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./src/style.css",
                "./src/app.js",
                "./img/bg.jpg",
                // "./audio/sound.wav",
                "./img/plane.png",
                "./img/icon_192x192.png",
                "./img/icon_512x512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});