// Hard-coded, replace with your public key
const publicVapidKey = 'BEg8fDDy7YAz3PQoDCgQ84BAVNZl7AIPFwRCHaTGaOleKWA36WHpOkCiuRtU9tBePLwGIhj13jJEFpQLWIpltD8';


if ('serviceWorker' in navigator) {
  console.log('Registering service worker');
  run().catch(error => console.log(error));
}

async function run() {
  try {
  console.log('Registering service worker');
  const registration = await navigator.serviceWorker.register(`/static/js/service-worker.js`);
  console.log('Registered service worker');
  console.log('Registering push');
  let subscription;
    subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
  console.log('Registered push');

  console.log('Sending push');
  await fetch('http://localhost:3000/notifications/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json'
    }
  });
  console.log('Sent push');
  } catch (e) {
    console.log(e);
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
