const status = require('http-status');
const webPush = require('web-push');

const { vapidKeys } = require('../../config');
const { createSubscriber, removeSubscriber, existSubscriber } = require('./subscribers');

webPush.setVapidDetails('mailto:tigermax139@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

const sendNotification = async (subscriber, data) => {
    try {
        const payload = JSON.stringify(data);
        const result = await webPush.sendNotification(subscriber, payload);
        console.log('Success notification send', result);
    } catch (e) {
        console.error('Failure notification send', e);
    }
};

exports.sendNotification = sendNotification;

exports.exist = async (req, res) => {
    res.status(status.OK).json('Use method POST for create subscriptions');
};

exports.subscribe = async (req, res) => {
    console.log('subscribe');
    try {
        const subscriber = JSON.stringify(req.body);
        const exist = await existSubscriber(subscriber);
        console.log('subscribe 1');
        if (!exist) {
            console.log('subscribe 2');
            const create = await createSubscriber(subscriber);
            res.status(status.CREATED).json(create);
            const msg = {
              title: 'Test notify',
              body: 'You success subscribe to notification',
            };
            console.log('subscribe 3');
            return await sendNotification(req.body, msg);
        }
        return res.status(status.NOT_IMPLEMENTED).json(exist);
    }catch (e) {
     console.log(e);
     res.sendStatus(status.NOT_IMPLEMENTED);
    }
};

exports.unsubscribe = async (req, res) => {
    try {
        const subscriber = JSON.stringify(req.body);
        const remove = await removeSubscriber(subscriber);
        res.status(status.OK).json(remove);
    }catch (e) {
        console.error(e);
        res.sendStatus(status.INTERNAL_SERVER_ERROR);
    }
};