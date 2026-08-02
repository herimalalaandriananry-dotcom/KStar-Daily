const cacheName="kstar-cache-v1";


const files=[

"/",
"/index.html",
"/css/style.css",
"/js/main.js",
"/offline.html"

];



self.addEventListener("install",event=>{


event.waitUntil(

caches.open(cacheName)

.then(cache=>cache.addAll(files))

);


});




self.addEventListener("fetch",event=>{


event.respondWith(

fetch(event.request)

.catch(()=>caches.match("/offline.html"))

);


});