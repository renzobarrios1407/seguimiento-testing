var express = require('express');
var router = express.Router();
var rolCtrl = require('../controllers/rolCtrl');
var autenticacion = require("../middlewares/autenticacion");

router.get("/all", rolCtrl.getRoles);

module.exports = router;
