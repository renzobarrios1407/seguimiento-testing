var tester = require('../models').tester;
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
        .then( tester => {
            seguimiento.create(req.body.seguimiento).then(
                seguimiento => {
                    tester.addSeguimiento(seguimiento);
                    res.status(200).send(seguimiento)
                }
            )
        })
    };
var getSeguimiento = function (req, res, next) {
    seguimiento.findById(req.params.idSeguimiento).then(
        seguimiento => res.status(200).send(seguimiento)
    )
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
    seguimiento.findById(idSeguimiento)
    .then( seguimiento => {
        // quitar la busqueda del tester aquí, o dejarla, pero hacerla de otra manera, **Separar en funciones**
        tester.findById(req.body.tester.id)
        .then( tester => {
            agendaDeAmbiente.create(
                req.body.agendaDeAmbiente
            )
            .then( agendaDeAmbiente => {
                seguimiento.setAgendaDeAmbiente(agendaDeAmbiente);
                cartaDeCertificacion.create(req.body.cartaDeCertificacion)
                .then( cartaDeCertificacion => {
                    seguimiento.setCartaDeCertificacion(cartaDeCertificacion);
                    defects.create(req.body.defects)
                    .then( defects => {
                        seguimiento.setDefects(defects);
                        doDDdTVSTS.create(req.body.doDDdTVSTS)
                        .then( doDDdTVSTS => {
                            seguimiento.setDoDDdTVSTS(doDDdTVSTS);
                            releases.create(req.body.releases)
                            .then( releases => {
                                seguimiento.setReleases(releases);
                                repositorio.create(req.body.repositorio)
                                .then( repositorio => {
                                    seguimiento.setRepositorio(repositorio);
                                    requirements.create(req.body.requirements)
                                    .then( requirements => {
                                        seguimiento.setRequirements(requirements);
                                        testLab.create(req.body.testLab)
                                        .then( testLab => {
                                            seguimiento.setTestLab(testLab);
                                            usd.create(req.body.usd)
                                            .then( usd => {
                                                seguimiento.setUsd(usd);
                                                res.status(200).send({ mensaje: "Guardado con exito", seguimiento: seguimiento})
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
};

module.exports = {
    guardarSeguimiento: guardarSeguimiento,
    crearSeguimiento: crearSeguimiento,
    getSeguimiento: getSeguimiento
};