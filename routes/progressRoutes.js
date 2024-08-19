const express = require('express');
const progressController = require('../controllers/progressController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add a progress update to a project (Protected)
router.post('/', authMiddleware, progressController.addProgressUpdate);

module.exports = router;