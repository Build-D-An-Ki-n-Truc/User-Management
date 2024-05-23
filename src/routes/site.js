var express = require('express');
var router = express.Router();
const SiteController = require('../app/controllers/SiteController');

// path cap 2 va function handler
router.use('/search', SiteController.search);

// luon dua xuong duoi
router.use('/', SiteController.index);

module.exports = router;
