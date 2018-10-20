const router = require('express').Router();

const controller = require('../controllers/notification');

router.route('/subscribe')
    .get(controller.exist)
    .post(controller.subscribe);

router.route('/unsubscribe').get(controller.unsubscribe);

module.exports = router;

