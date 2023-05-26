const express = require('express');
const router = express.Router();
const subtractController = require('../controllers/subtractController');

router.get('/subtract/:a/:b', subtractController);

module.exports = router;
