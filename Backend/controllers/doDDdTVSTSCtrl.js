var auditor = require('../models').usuario;
var doDDdTVSTS = require('../models').doDDdTVSTS;
var seguimiento = require('../models').seguimiento;
var upsert = require('../services/upsert');
//peticion
/* 
    {
        "auditorId": 1,
        "id": 1
    }
*/

var revisar = function (req, res, next) {
    doDDdTVSTS.findById(req.body.id)
        .then(
            instanceBloque => {
                auditor.findById(req.body.auditorId).then(
                    auditor => {
                        instanceBloque.setAuditor(auditor).then(
                            bloque => {
                                bloque.get({json: true}).auditor=auditor;
                                var result = bloque.get({json: true});   
                                res.status(200).send({ mensaje: "Revisado con éxito", result });
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
    //     doDDdTVSTS: this.doDDdTVSTS
    //}
    var params = req.body;
    seguimiento.findById(params.seguimientoId)
        .then(seguimiento => {
            upsert.upsert(doDDdTVSTS, params.doDDdTVSTS, { id: params.doDDdTVSTS.id })
                .then(bloque => {
                    seguimiento.setDoDDdTVST(bloque).then(result => {
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