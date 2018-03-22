var tester = require('../models').usuario;
var seguimiento = require('../models').seguimiento;
var releases = require('../models').releases;
var agendaDeAmbiente = require('../models').agendaDeAmbiente;
var cartaDeCertificacion = require('../models').cartaDeCertificacion;
var defects = require('../models').defects;
var doDDdTVSTS = require('../models').doDDdTVSTS;
var repositorio = require('../models').repositorio;
var requirements = require('../models').requirements;
var testLab = require('../models').testLab;
var usd = require('../models').usd;
var upsert = require('../services/upsert');

// metodos de guardar cada bloque del seguimiento
var guardarAgendaDeAmbiente = require("./agendaDeAmbienteCtrl").guardar;
var guardarCartaDeCertificacion = require("./cartaDeCertificacionCtrl").guardar;
var guardarDefects = require("./defectsCtrl").guardar;
var guardarDoDDdTVSTS = require("./doDDdTVSTSCtrl").guardar;
var guardarReleases = require("./releasesCtrl").guardar;
var guardarRepositorio = require("./repositorioCtrl").guardar;
var guardarRequirements = require("./requirementsCtrl").guardar;
var guardarTestLab = require("./testLabCtrl").guardar;
var guardarUsd = require("./usdCtrl").guardar;

var crearSeguimiento = function (req, res, next) {
    console.log(req.body.seguimiento);
    tester.findById(req.body.testerId)
        .then(tester => {
            seguimiento.create(req.body.seguimiento).then(
                seguimiento => {
                    tester.addSeguimiento(seguimiento);
                    res.status(200).send(seguimiento)
                }
            )
        })
};
var getSeguimientoTester = function (req, res, next) {
    seguimiento.findOne({ where: { testerId: req.params.testerId, id: req.params.idSeguimiento }, include: [{ all: true }] }).then(
        resultado => {
            var respuesta = {
                seguimiento: {
                    id: resultado.id,
                    pmo: resultado.pmo,
                    sprORel: resultado.sprORel,
                    saved: resultado.saved
                },
                agendaDeAmbiente: resultado.agendaDeAmbiente,
                cartaDeCertificacion: resultado.cartaDeCertificacion,
                defects: resultado.defect,
                doDDdTVSTS: resultado.doDDdTVST,
                releases: resultado.release,
                repositorio: resultado.repositorio,
                requirements: resultado.requirement,
                testLab: resultado.testLab,
                usd: resultado.usd,
            };
            res.status(200).send(respuesta)
        }
    ).catch(error => {
        res.status(404).send({ mensaje: "No se encontró el seguimiento" })
    })
};
var getSeguimiento = function (req, res, next) {
    seguimiento.findOne({ where: { id: req.params.idSeguimiento }, include: [
        { model: agendaDeAmbiente, include: [{ model: tester, as: "auditor" }] }, 
        { model: cartaDeCertificacion, include: [{ model: tester, as: "auditor" }] }, 
        { model: defects, include: [{ model: tester, as: "auditor" }] }, 
        { model: doDDdTVSTS, include: [{ model: tester, as: "auditor" }] }, 
        { model: releases, include: [{ model: tester, as: "auditor" }] }, 
        { model: repositorio, include: [{ model: tester, as: "auditor" }] }, 
        { model: requirements, include: [{ model: tester, as: "auditor" }] }, 
        { model: testLab, include: [{ model: tester, as: "auditor" }] }, 
        { model: usd, include: [{ model: tester, as: "auditor" }] }, 
    ] }).then(
        resultado => {
            var respuesta = {
                seguimiento: {
                    id: resultado.id,
                    pmo: resultado.pmo,
                    sprORel: resultado.sprORel,
                    saved: resultado.saved
                },
                agendaDeAmbiente: resultado.agendaDeAmbiente,
                cartaDeCertificacion: resultado.cartaDeCertificacion,
                defects: resultado.defect,
                doDDdTVSTS: resultado.doDDdTVST,
                releases: resultado.release,
                repositorio: resultado.repositorio,
                requirements: resultado.requirement,
                testLab: resultado.testLab,
                usd: resultado.usd,
            };
            res.status(200).send(respuesta)
        }
    ).catch(error => {
        console.log(error);
        
        res.status(404).send({ mensaje: "No se encontró el seguimiento", error })
    })
};
var getSeguimientosTester = function (req, res, next) {
    seguimiento.findAll({ where: { testerId: req.params.testerId } }).then(
        resultado => {
            res.status(200).send(resultado)
        }
    ).catch(error => {
        res.status(404).send({ mensaje: "No se encontraron seguimientos" })
    })
};

var getSeguimientos = function (req, res, next) {
    seguimiento.findAll().then(
        resultado => {
            res.status(200).send(resultado)
        }
    ).catch(error => {
        res.status(404).send({ mensaje: "No se encontraron seguimientos" })
    })
};

 // será eliminado o cambiado
var guardarSeguimiento = function (req, res, next) {
    // {
    //     agendaDeAmbiente: this.agendaDeAmbiente,
    //     cartaDeCertificacion: this.cartaDeCertificacion,
    //     defects: this.defects,
    //     doDDdTVSTS: this.doDDdTVSTS,
    //     releases: this.releases,
    //     repositorio: this.repositorio,
    //     requirements: this.requirements,
    //     testLab: this.testLab,
    //     usd: this.usd
    // };
    var idSeguimiento = req.params.idSeguimiento;
    var params = req.body;
    console.log(params);
    
    seguimiento.findById(idSeguimiento)
        .then(seguimiento => {
            if (
                (params.agendaDeAmbiente.id === undefined) ||
                (params.cartaDeCertificacion.id === undefined) ||
                (params.defects.id === undefined) ||
                (params.doDDdTVSTS.id === undefined) ||
                (params.releases.id === undefined) ||
                (params.repositorio.id === undefined) ||
                (params.requirements.id === undefined) ||
                (params.testLab.id === undefined) ||
                (params.usd.id === undefined)
            ) {
                Promise.all([
                    upsert.upsert(agendaDeAmbiente, params.agendaDeAmbiente, { id: params.agendaDeAmbiente.id }),
                    upsert.upsert(cartaDeCertificacion, params.cartaDeCertificacion, { id: params.cartaDeCertificacion.id }),
                    upsert.upsert(defects, params.defects, { id: params.defects.id }),
                    upsert.upsert(doDDdTVSTS, params.doDDdTVSTS, { id: params.doDDdTVSTS.id }),
                    upsert.upsert(releases, params.releases, { id: params.releases.id }),
                    upsert.upsert(repositorio, params.repositorio, { id: params.repositorio.id }),
                    upsert.upsert(requirements, params.requirements, { id: params.requirements.id }),
                    upsert.upsert(testLab, params.testLab, { id: params.testLab.id }),
                    upsert.upsert(usd, params.usd, { id: params.usd.id })
                ]).then(values => {
                    seguimiento.setAgendaDeAmbiente(values[0]);
                    seguimiento.setCartaDeCertificacion(values[1]);
                    seguimiento.setDefect(values[2]);
                    seguimiento.setDoDDdTVST(values[3]);
                    seguimiento.setRelease(values[4]);
                    seguimiento.setRepositorio(values[5]);
                    seguimiento.setRequirement(values[6]);
                    seguimiento.setTestLab(values[7]);
                    seguimiento.setUsd(values[8]);
                    res.status(200).send({ mensaje: "Guardado con exito", seguimiento: seguimiento })
                }).catch(error => {
                    res.status(500).send({ mensaje: "Fallo al guardar", seguimiento: seguimiento })
                });
            } else {
                res.status(500).send({ mensaje: "Fallo al guardar, llene todos los campos", seguimiento: seguimiento })
            }

        })
};




module.exports = {
    guardarSeguimiento,
    crearSeguimiento,
    getSeguimiento,
    getSeguimientoTester,
    getSeguimientos,
    getSeguimientosTester,
    guardarAgendaDeAmbiente,
    guardarCartaDeCertificacion,
    guardarDefects,
    guardarDoDDdTVSTS,
    guardarReleases,
    guardarRepositorio,
    guardarRequirements,
    guardarTestLab,
    guardarUsd
};