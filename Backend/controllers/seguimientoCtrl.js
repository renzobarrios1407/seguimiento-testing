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

var crearSeguimiento = function (req, res, next) {
    console.log(req.body.seguimiento);
    tester.findById(req.body.tester.id)
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
    seguimiento.findOne({ where: { id: req.params.idSeguimiento }, include: [{ all: true }] }).then(
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


//Uso 
// upsert(userModel, { first_name: 'Taku' }, { id: 1234 }).then(function(result){
// res.status(200).send({success: true});
// });
function upsert(Model, values, condition) {
    return Model
        .findOne({ where: condition })
        .then(function (obj) {
            if (obj) { // update
                console.log("actualizar");
                return obj.update(values);
            }
            else { // insert
                console.log("ingresar");
                return Model.create(values);
            }
        })
};
var guardarSeguimiento = function (req, res, next) {
    // {
    //     tester: {
    //       id: this.tester.id
    //     },
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
    seguimiento.findById(idSeguimiento)
        .then(seguimiento => {
            if (
                (params.agendaDeAmbiente.id != undefined) &&
                (params.cartaDeCertificacion.id != undefined) &&
                (params.defects.id != undefined) &&
                (params.doDDdTVST.id != undefined) &&
                (params.releases.id != undefined) &&
                (params.repositorio.id != undefined) &&
                (params.requirements.id != undefined) &&
                (params.testLab.id != undefined) &&
                (params.usd.id != undefined)
            ) {
                Promise.all([
                    upsert(agendaDeAmbiente, params.agendaDeAmbiente, { id: params.agendaDeAmbiente.id }),
                    upsert(cartaDeCertificacion, params.cartaDeCertificacion, { id: params.cartaDeCertificacion.id }),
                    upsert(defects, params.defects, { id: params.defects.id }),
                    upsert(doDDdTVSTS, params.doDDdTVSTS, { id: params.doDDdTVSTS.id }),
                    upsert(releases, params.releases, { id: params.releases.id }),
                    upsert(repositorio, params.repositorio, { id: params.repositorio.id }),
                    upsert(requirements, params.requirements, { id: params.requirements.id }),
                    upsert(testLab, params.testLab, { id: params.testLab.id }),
                    upsert(usd, params.usd, { id: params.usd.id })
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
                    res.status(500).send({ mensaje: "Fallo al guardar, llene todos los campos", seguimiento: seguimiento })
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
    getSeguimientosTester
};