var express = require('express');
var router = express.Router();
var seguimientoCtrl = require('../controllers/seguimientoCtrl');

router.post('/crear', seguimientoCtrl.crearSeguimiento );
router.get('/get/:idSeguimiento/:testerId', seguimientoCtrl.getSeguimientoTester );
router.get('/get/:idSeguimiento', seguimientoCtrl.getSeguimiento );
router.get('/getAll/:testerId', seguimientoCtrl.getSeguimientosTester );
router.get('/getAll', seguimientoCtrl.getSeguimientos );
router.post('/guardar/:idSeguimiento', seguimientoCtrl.guardarSeguimiento );

module.exports = router;