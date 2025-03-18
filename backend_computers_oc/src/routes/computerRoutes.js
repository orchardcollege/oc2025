const express = require('express');
const router = express.Router();
const computerController = require('../controllers/computerController');

// Route to get all computers
router.get('/computers', computerController.getAllComputers);

module.exports = router;
