'use strict';
logger('sw open');
const version = '0.0.2';

const STATIC_CACHE_NAME = 'shell-content - ' + version;

const staticUrls = [
  "index.html"
];

self.addEventListener('install', evt => {
  logger('installed');
});

self.addEventListener('push', ev => {
  const data = ev.data.json();
  console.log('Got push', data);
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon || 'http://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png'
  });
});


function logger(msg, isError = false) {
  isError
    ? console.error("[[Service Worker]] : " + msg)
    : console.log("[[Service Worker]] : " + msg);
}

