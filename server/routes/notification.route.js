const router = require('express').Router();

const controller = require('../controllers/notification');

router.route('/').get(controller.subscribe);

router.route('/unsubscribe').get(controller.unsubscribe);

module.exports = router;

