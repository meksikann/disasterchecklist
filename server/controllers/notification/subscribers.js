const _ = require('lodash');

const msg = {
    exist: 'THIS SUBSCRIBER ALREADY EXIST',
    notExist: 'THIS SUBSCRIBER NOT EXIST',
    success: 'SUCCESS OPERATION'
};
const subscriptions = []; // list of exist subscriptions

const createSubscriber = async subscriber => {
    subscriptions.push(subscriber);
    return msg.success;
};

const removeSubscriber = async subscriber => {
   const index = _.findIndex(subscriptions, subscriber);
   if (!index) return msg.notExist;
   delete subscriptions[index];
   return msg.success;
};

const existSubscriber = async subscriber => {
    _.includes(subscriptions, subscriber);
    return msg.success;
};

module.exports = {
    createSubscriber,
    removeSubscriber,
    existSubscriber,
};

