const { sendNotification } = require('./index');
const { getSubscribersList } = require('./subscribers');

async function init() {
    const subscribers = await getSubscribersList();
    subscribers.forEach(item => {
        const subscriber = JSON.parse(item);
        const msg = {
            title: 'TEST SEND TO ALL',
            body: 'Disaster Notification'
        };
        sendNotification(subscriber, msg);
    })
}

init();