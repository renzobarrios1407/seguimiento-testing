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
    seguimiento.findOne( { where: { testerId: req.params.testerId, id: req.params.idSeguimiento }, include: [{ all: true }]}).then(
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
    ).catch (error => {        
        res.status(404).send({ mensaje: "No se encontró el seguimiento"})
    })
};
var getSeguimientos = function (req, res, next) {
    seguimiento.findAll( { where: { testerId: req.params.testerId }}).then(
        resultado => {
            res.status(200).send(resultado)
        }
    ).catch (error => {        
        res.status(404).send({ mensaje: "No se encontraron seguimientos"})
    })
};


//Uso 
// upsert(userModel, { first_name: 'Taku' }, { id: 1234 }).then(function(result){
    // res.status(200).send({success: true});
// });
function upsert(Model, values, condition) {
    return Model
        .findOne({ where: condition })
        .then(function(obj) {
            if(obj) { // update
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
    seguimiento.findById(idSeguimiento)
    .then( seguimiento => {

        Promise.all([
            upsert(agendaDeAmbiente, req.body.agendaDeAmbiente, { id: req.body.agendaDeAmbiente.id }),
            upsert(cartaDeCertificacion, req.body.cartaDeCertificacion, { id: req.body.cartaDeCertificacion.id }),
            upsert(defects, req.body.defects, { id: req.body.defects.id }),
            upsert(doDDdTVSTS, req.body.doDDdTVSTS, { id: req.body.doDDdTVSTS.id }),
            upsert(releases, req.body.releases, { id: req.body.releases.id }),
            upsert(repositorio, req.body.repositorio, { id: req.body.repositorio.id }),
            upsert(requirements, req.body.requirements, { id: req.body.requirements.id }),
            upsert(testLab, req.body.testLab, { id: req.body.testLab.id }),
            upsert(usd, req.body.usd, { id: req.body.usd.id })
            // agendaDeAmbiente.create(req.body.agendaDeAmbiente),
            // cartaDeCertificacion.create(req.body.cartaDeCertificacion),
            // defects.create(req.body.defects),
            // doDDdTVSTS.create(req.body.doDDdTVSTS),
            // releases.create(req.body.releases),
            // repositorio.create(req.body.repositorio),
            // requirements.create(req.body.requirements),
            // testLab.create(req.body.testLab),
            // usd.create(req.body.usd)
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
            res.status(200).send({ mensaje: "Guardado con exito", seguimiento: seguimiento})
        }).catch(error => {
            res.status(200).send({ mensaje: "Fallo al guardar, llene todos los campos", seguimiento: seguimiento})
        });


        // agendaDeAmbiente.create(req.body.agendaDeAmbiente)
        // .then( agendaDeAmbiente => {
        //     seguimiento.setAgendaDeAmbiente(agendaDeAmbiente);
        //     cartaDeCertificacion.create(req.body.cartaDeCertificacion)
        //     .then( cartaDeCertificacion => {
        //         seguimiento.setCartaDeCertificacion(cartaDeCertificacion);
        //         defects.create(req.body.defects)
        //         .then( defects => {
        //             seguimiento.setDefect(defects); // Se quita la 's' que tiene la tabla al metodo set
        //             doDDdTVSTS.create(req.body.doDDdTVSTS)
        //             .then( doDDdTVSTS => {
        //                 seguimiento.setDoDDdTVST(doDDdTVSTS); // Se quita la 's' que tiene la tabla al metodo set
        //                 releases.create(req.body.releases)
        //                 .then( releases => {
        //                     seguimiento.setRelease(releases); // Se quita la 's' que tiene la tabla al metodo set
        //                     repositorio.create(req.body.repositorio)
        //                     .then( repositorio => {
        //                         seguimiento.setRepositorio(repositorio);
        //                         requirements.create(req.body.requirements)
        //                         .then( requirements => {
        //                             seguimiento.setRequirement(requirements); // Se quita la 's' que tiene la tabla al metodo set
        //                             testLab.create(req.body.testLab)
        //                             .then( testLab => {
        //                                 seguimiento.setTestLab(testLab);
        //                                 usd.create(req.body.usd)
        //                                 .then( usd => {
        //                                     seguimiento.setUsd(usd);
        //                                     res.status(200).send({ mensaje: "Guardado con exito", seguimiento: seguimiento})
        //                                 })
        //                             })
        //                         })
        //                     })
        //                 })
        //             })
        //         })
        //     })
        // })
    })
};

module.exports = {
    guardarSeguimiento: guardarSeguimiento,
    crearSeguimiento: crearSeguimiento,
    getSeguimiento: getSeguimiento,
    getSeguimientos: getSeguimientos
};