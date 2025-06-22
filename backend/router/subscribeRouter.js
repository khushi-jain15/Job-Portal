const express = require('express');
const router = express.Router();
const { handleSubscription, checkSubscription } = require('../controller/subscriptionController');

// POST /api/subscribe - for subscribing a new email
router.post('/subscribe', handleSubscription);

// POST /api/check-subscription - for checking if an email is already subscribed
router.post('/check-subscription', checkSubscription);

module.exports = router;
