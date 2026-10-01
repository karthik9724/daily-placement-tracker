
const CACHE_NAME = "placement-tracker-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json"
];


self.addEventListener("install", function(event) {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(function(cache) {

                return cache.addAll(
                    FILES_TO_CACHE
                );

            })

    );

    self.skipWaiting();

});


self.addEventListener("activate", function(event) {

    event.waitUntil(

        caches.keys()
            .then(function(cacheNames) {

                return Promise.all(

                    cacheNames.map(
                        function(cacheName) {

                            if (
                                cacheName !== CACHE_NAME
                            ) {

                                return caches.delete(
                                    cacheName
                                );

                            }

                        }
                    )

                );

            })

    );

    self.clients.claim();

});


/*
    NETWORK FIRST

    Try to get the latest version
    from GitHub Pages first.

    If internet is unavailable,
    use the cached version.
*/

self.addEventListener("fetch", function(event) {

    event.respondWith(

        fetch(event.request)

            .then(function(response) {

                /*
                    Save a copy of the latest
                    response in cache.
                */

                const responseClone =
                    response.clone();


                caches.open(CACHE_NAME)
                    .then(function(cache) {

                        cache.put(
                            event.request,
                            responseClone
                        );

                    });


                return response;

            })

            .catch(function() {

                /*
                    If internet is unavailable,
                    use cached version.
                */

                return caches.match(
                    event.request
                );

            })

    );

});

