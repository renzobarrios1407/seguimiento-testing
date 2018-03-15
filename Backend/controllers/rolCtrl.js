var rol = require('../models').rol;
var getRoles = function(req, res, next){
    rol.findAll().then(
        roles => {
            res.status(200).send(roles)
        }
    )
}

module.exports = {
    getRoles
}