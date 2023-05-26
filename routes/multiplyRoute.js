const express = require('express');
const router = express.Router();
const multiplyController = require('../controllers/multiplyController');

router.get('/multiply/:a/:b', multiplyController);

module.exports = router;
