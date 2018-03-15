var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 's3gu1m13nt0_t3st1ng';

exports.crearToken = function(usuario){
    var payload = {
        id: usuario.id,
        nombre: usuario.nombre,
        cedula: usuario.cedula,
        primerApellido: usuario.primerApellido,
        segundoApellido: usuario.segundoApellido,
        lugarTrabajo: usuario.lugarTrabajo,
        usuario: usuario.usuario,
        rolId: usuario.rolId,
        iat: moment.unix(),
        exp: moment().add(30, 'days').unix()
    };

    return jwt.encode(payload, secret);
}