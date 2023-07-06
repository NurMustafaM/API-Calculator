const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController');
const divideController = require('../controllers/divideController');
const multiplyController = require('../controllers/multiplyController');
const subtractController = require('../controllers/subtractController');

router.post('/add', addController);
router.get('/divide/:a/:b', divideController);
router.get('/multiply/:a/:b', multiplyController);
router.get('/subtract/:a/:b', subtractController);

module.exports = router;
