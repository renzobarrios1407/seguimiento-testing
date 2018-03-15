var express = require('express');
var router = express.Router();
var seguimientoCtrl = require('../controllers/seguimientoCtrl');

router.post('/crear', seguimientoCtrl.crearSeguimiento );
router.get('/get/:idSeguimiento/:testerId', seguimientoCtrl.getSeguimiento );
router.get('/getAll/:testerId', seguimientoCtrl.getSeguimientos );
router.post('/guardar/:idSeguimiento', seguimientoCtrl.guardarSeguimiento );

module.exports = router;