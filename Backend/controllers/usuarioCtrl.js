var bcrypt = require('bcrypt-nodejs');
var usuario = require('../models').usuario;
var jwt = require('../services/jwt');

var registrarUsuario = function (req, res, next) {
    /*
    { 
        "cedula": "11111",
        "nombre": "felipito",
        "primerApellido": "rocotundo",
        "segundoApellido": "sigilfredo",
        "lugarTrabajo": "medallo",
        "usuario": "felipito.rocotundo",
        "password": "nomelase",
        "passwordConfirm": "nomelase",
        "rolId": "1",
        "id": "0"
    }
    */
    var params = req.body;
    if (params.password) {
        if (params.passwordConfirm === params.password) {
            //encriptar contraseña
            bcrypt.hash(params.password, null, null, (err, hash) => {
                params.password = hash;
                //Crear usuario, Se puede agregar el rolId directamente en la tabla, si ese rol no existe no crea el usuario
                usuario.create(params).then(usuario => {
                    res.status(200).send({ mensaje: "Usuario creado con éxito", usuario: usuario });
                }).catch(error => {
                    res.status(200).send({ mensaje: "No se pudo crear el Usuario!!!", error: error });
                });
            });

        } else {
            res.status(500).send("Las contraseñas deben coincidir");
        }

    } else {
        res.status(500).send("Ingrese una contraseña")
    }
}

var loginUsuario = function (req, res, next) {
    /*
    {
        "usuario": "felipito.rocotundo",
        "password": "nomelase",
        "getHash": true
    }
    */
    var params = req.body;
    usuario.findOne({ where: { usuario: params.usuario } }).then(usuario => {
        if (usuario) {
            bcrypt.compare(params.password, usuario.password, (err, correcta) => {
                if (correcta) {
                    if (params.getHash) {
                        //devolver Token JWT
                        res.status(200).send({ token: jwt.crearToken(usuario) });
                    } else {
                        res.status(200).send({ mensaje: "Usuario encontrado y la contraseña es correcta", usuario: usuario });
                    }

                } else {
                    res.status(200).send({ mensaje: "Usuario encontrado y pero la contraseña NO es correcta!!!", usuario: usuario });
                }

            })
        } else {
            res.status(200).send({ mensaje: "Usuario no encontrado" });
        }

    });
}
var getUsuario = function (req, res, next) {

}
var getUsuarios = function (req, res, next) {
    usuario.findAll().then(usuarios => {
        res.status(200).send(usuarios);
    })
}

module.exports = {
    registrarUsuario,
    getUsuarios,
    loginUsuario

};