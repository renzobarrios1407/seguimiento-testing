var auditor = require('../models').usuario;
var testLab = require('../models').testLab;
var seguimiento = require('../models').seguimiento;
var upsert = require('../services/upsert');
//peticion
/* 
    {
        "auditorId": 1
    }
*/

var revisar = function (req, res, next) {
    testLab.findById(req.params.id)
        .then(
            instanceBloque => {
                auditor.findById(req.body.auditorId).then(
                    auditor => {
                        instanceBloque.setAuditor(auditor).then(
                            result => {
                                res.status(200).send({ mensaje: "Revisado con éxito" });
                            }
                        ).catch(
                            err => {
                                res.status(500).send({ mensaje: "No se pudo revisar" });
                            }
                        )
                    }
                ).catch(
                    err => {
                        res.status(500).send({ mensaje: "No se pudo revisar" });
                    }
                )
            }
        ).catch(
            err => {
                res.status(500).send({ mensaje: "No se pudo revisar" });
            }
        )
}

var guardar = function (req, res, next) {
    //{
    //     seguimientoId: seguimiento.id,
    //     testLab: this.testLab
    //}
    var params = req.body;
    seguimiento.findById(params.seguimientoId)
        .then(seguimiento => {
            upsert.upsert(testLab, params.testLab, { id: params.testLab.id })
                .then(bloque => {
                    seguimiento.setTestLab(bloque).then(result => {
                        res.status(200).send({ mensaje: "Guardado con exito", seguimiento: seguimiento })
                    }).catch(error => {
                        res.status(500).send({ mensaje: "Fallo al guardar", seguimiento: seguimiento })
                    });
                }).catch(error => {
                    res.status(500).send({ mensaje: "Fallo al guardar", seguimiento: seguimiento })
                });

        })
}

module.exports = {
    revisar,
    guardar
}