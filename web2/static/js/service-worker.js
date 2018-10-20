'use strict';

const version = '0.0.1';

const STATIC_CACHE_NAME = 'shell-content - ' + version;

const staticUrls = [
  "index.html"
];

console.log(caches);

self.addEventListener('install', evt => {
  logger('installed');
  logger('start cashing');
  evt.waitUntil(
    preCache()
      .then(() => self.skipWaiting()
        .then(() => logger('files was cashed'))
        .catch(err => logger("Cache error " + err, true))
      ));

});

self.addEventListener('push', ev => {
  const data = ev.data.json();
  console.log('Got push', data);
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon || 'http://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png'
  });
});

function preCache() {
  return Promise.all([
    caches.open(STATIC_CACHE_NAME).then(cache => cache.addAll(staticUrls))
  ]);
}

function logger(msg, isError = false) {
  isError
    ? console.error("[[Service Worker]] : " + msg)
    : console.log("[[Service Worker]] : " + msg);
}

