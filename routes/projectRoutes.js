const express = require('express');
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Correctly use the function reference for the route handler
router.post('/', authMiddleware, projectController.createProject);

module.exports = router;
