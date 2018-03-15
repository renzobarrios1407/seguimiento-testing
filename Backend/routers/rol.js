var express = require('express');
var router = express.Router();
var rolCtrl = require('../controllers/rolCtrl');

router.get("/all", rolCtrl.getRoles);

module.exports = router;
