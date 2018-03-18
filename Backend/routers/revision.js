var express = require('express');
var router = express.Router();
var revisionCtrl = require('../controllers/revisionCtrl');
var autenticacion = require("../middlewares/autenticacion");


router.put("/:id/agendaDeAmbiente", autenticacion.comprobarAuth, revisionCtrl.revisarAgendaDeAmbiente);
router.put("/:id/cartaDeCertificacion", revisionCtrl.revisarCartaDeCertificacion);
router.put("/:id/defects", revisionCtrl.revisarDefects);
router.put("/:id/doDDdTVSTS", revisionCtrl.revisarDoDDdTVSTS);
router.put("/:id/releases", revisionCtrl.revisarReleases);
router.put("/:id/repositorio", revisionCtrl.revisarRepositorio);
router.put("/:id/requirements", revisionCtrl.revisarRequirements);
router.put("/:id/testLab", revisionCtrl.revisarTestLab);
router.put("/:id/usd", revisionCtrl.revisarUsd);

module.exports = router;