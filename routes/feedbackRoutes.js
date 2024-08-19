const express = require('express');
const feedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add feedback to a project (Protected)
router.post('/', authMiddleware, feedbackController.addFeedback);

module.exports = router;