// backend/routes/notificationRoutes.js
const express = require('express');
const { sendNotification } = require('../controller/notificationController');
const router = express.Router();

// POST request to send a notification
router.post('/send-notification', sendNotification);

module.exports = router;
