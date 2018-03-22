var express = require('express');
var router = express.Router();
var revisionCtrl = require('../controllers/revisionCtrl');
var autenticacion = require("../middlewares/autenticacion");


// router.put("/agendaDeAmbiente", autenticacion.comprobarAuth, revisionCtrl.revisarAgendaDeAmbiente);
router.put("/agendaDeAmbiente", revisionCtrl.revisarAgendaDeAmbiente);
router.put("/cartaDeCertificacion", revisionCtrl.revisarCartaDeCertificacion);
router.put("/defects", revisionCtrl.revisarDefects);
router.put("/doDDdTVSTS", revisionCtrl.revisarDoDDdTVSTS);
router.put("/releases", revisionCtrl.revisarReleases);
router.put("/repositorio", revisionCtrl.revisarRepositorio);
router.put("/requirements", revisionCtrl.revisarRequirements);
router.put("/testLab", revisionCtrl.revisarTestLab);
router.put("/usd", revisionCtrl.revisarUsd);

module.exports = router;