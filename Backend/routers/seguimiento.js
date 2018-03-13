var express = require('express');
var router = express.Router();
var seguimientoCtrl = require('../controllers/seguimientoCtrl');

router.post('/', seguimientoCtrl.crearSeguimiento );
router.get('/:idSeguimiento', seguimientoCtrl.getSeguimiento );
router.post('/guardar/:idSeguimiento', seguimientoCtrl.guardarSeguimiento );

module.exports = router;