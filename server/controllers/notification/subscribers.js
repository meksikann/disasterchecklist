const _ = require('lodash');

const msg = {
    exist: 'THIS SUBSCRIBER ALREADY EXIST',
    notExist: 'THIS SUBSCRIBER NOT EXIST',
    success: 'SUCCESS OPERATION'
};
const subscriptions = [
    '{"endpoint":"https://fcm.googleapis.com/fcm/send/cbi7apmkjFU:APA91bEd1nGFOqobUUBCS8or2ZsRG83oTWaIYDjNSYLmVQjb_mmYOJtWwZ-oquU3bOQyXvdpZnmIWrQIPL5fiBjrNDYULlS0A58R7_0wmdarCZLs1zUs75mbxByUvd0ou66FQyOZNzBS","expirationTime":null,"keys":{"p256dh":"BNjPRLCkcy0SXKU3hrMpfVC7OS9fFQ97YFPByS56SvwY9UxJWLae7XE0Ndod5BWYiEeT8uYMI1jM3ePpvIqFl_U","auth":"-Phjjst4N1Ur4UeCQqZzqw"}}'
]; // list of exist subscriptions

const createSubscriber = async subscriber => {
    subscriptions.push(subscriber);
    console.log(subscriptions);
    return msg.success;
};

const removeSubscriber = async subscriber => {
   const index = _.findIndex(subscriptions, subscriber);
   if (!index) return msg.notExist;
   delete subscriptions[index];
   return msg.success;
};

const existSubscriber = async subscriber => _.includes(subscriptions, subscriber);

const getSubscribersList = async () => subscriptions;

module.exports = {
    createSubscriber,
    removeSubscriber,
    existSubscriber,
    getSubscribersList,
};

