const express = require('express');
const { sampleController } = require('../controllers/sampleController');
const router = express.Router();

router.get('/sample', sampleController);

module.exports = router;
