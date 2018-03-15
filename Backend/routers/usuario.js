var express = require('express');
var router = express.Router();
var usuarioCtrl = require('../controllers/usuarioCtrl');

router.post("/", usuarioCtrl.registrarUsuario);
router.get("/", usuarioCtrl.getUsuarios);
router.post("/login", usuarioCtrl.loginUsuario);
router.post("/registro", usuarioCtrl.registrarUsuario);
// router.post("/:id", usuarioCtrl.findById);

module.exports = router;
