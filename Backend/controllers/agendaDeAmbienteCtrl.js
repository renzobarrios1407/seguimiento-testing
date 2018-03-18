var auditor = require('../models').usuario;
var agendaDeAmbiente = require('../models').agendaDeAmbiente;
//peticion
/* 
    {
        "auditorId": 1
    }
*/

var revisar = function (req, res, next) {
    agendaDeAmbiente.findById(req.params.id)
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

module.exports = {
    revisar
}