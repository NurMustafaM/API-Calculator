const express = require('express');
const router = express.Router();
const divideController = require('../controllers/divideController');

router.get('/divide/:a/:b', divideController);

module.exports = router;
