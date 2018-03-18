var express = require('express');
var router = express.Router();
var seguimientoCtrl = require('../controllers/seguimientoCtrl');

router.post('/crear', seguimientoCtrl.crearSeguimiento );
router.get('/get/:idSeguimiento/:testerId', seguimientoCtrl.getSeguimientoTester ); //ruta para obtener un seguimiento de un tester
router.get('/get/:idSeguimiento', seguimientoCtrl.getSeguimiento ); //ruta para obtener un seguimiento para revisión
router.get('/getAll/:testerId', seguimientoCtrl.getSeguimientosTester );
router.get('/getAll', seguimientoCtrl.getSeguimientos );
// router.post('/guardar/:idSeguimiento', seguimientoCtrl.guardarSeguimiento ); // será eliminada

//rutas para guardar cada parte del seguimiento
router.post("/guardar/agendaDeAmbiente", seguimientoCtrl.guardarAgendaDeAmbiente);
router.post("/guardar/cartaDeCertificacion", seguimientoCtrl.guardarCartaDeCertificacion);
router.post("/guardar/defects", seguimientoCtrl.guardarDefects);
router.post("/guardar/doDDdTVSTS", seguimientoCtrl.guardarDoDDdTVSTS);
router.post("/guardar/releases", seguimientoCtrl.guardarReleases);
router.post("/guardar/repositorio", seguimientoCtrl.guardarRepositorio);
router.post("/guardar/requirements", seguimientoCtrl.guardarRequirements);
router.post("/guardar/testLab", seguimientoCtrl.guardarTestLab);
router.post("/guardar/usd", seguimientoCtrl.guardarUsd);
module.exports = router;