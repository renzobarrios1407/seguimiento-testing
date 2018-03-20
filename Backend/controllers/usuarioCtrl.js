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
        "email": "felipito.rocotundo@prueba.com",
        "password": "nomelase",
        "passwordConfirm": "nomelase",
        "rolId": "1",
        "id": "0"
    }
    */
    var params = req.body;
    if (params.password) {
        if (params.passwordConfirm === params.password) {
            if (params.rolId) {
                //encriptar contraseña
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    params.password = hash;
                    //Crear usuario, Se puede agregar el rolId directamente en la tabla, si ese rol no existe no crea el usuario
                    usuario.create(params).then(usuario => {
                        res.status(200).send({ mensaje: "Usuario creado con éxito", usuario: usuario });
                    }).catch(error => {
                        console.log(error);
                        
                        res.status(400).send({ mensaje: "No se pudo crear el Usuario!!!: " + error.message.toString().replace(/\n/g, "") });
                    });
                });
            } else {
                res.status(500).send({ mensaje: "Ingrese un rol" });
            }

        } else {
            res.status(500).send({ mensaje: "Las contraseñas deben coincidir" });
        }

    } else {
        res.status(500).send({ mensaje: "Ingrese una contraseña" })
    }
}

var loginUsuario = function (req, res, next) {
    /*
    {
        "usuario": "felipito.rocotundo",
        "password": "nomelase",
        "rolId": "1",
        "getHash": true
    }
    */
    var params = req.body;
    console.log(params);
// agregar a email
    usuario.findOne({ where: { usuario: params.usuario } }).then(usuario => {
        if (usuario) {
            usuario.getRol().then(
                rol => {
                    if (rol.id == params.rolId) {
                        bcrypt.compare(params.password, usuario.password, (err, correcta) => {
                            if (correcta) {
                                if (params.getHash) {
                                    //devolver Token JWT
                                    res.status(200).send({ token: jwt.crearToken(usuario) });
                                } else {
                                    res.status(200).send({ mensaje: "Contraseña correcta", usuario: usuario });
                                }

                            } else {
                                res.status(403).send({ mensaje: "La contraseña NO es correcta!!!" });
                            }

                        })
                    } else {
                        res.status(403).send({ mensaje: "Rol INCORRECTO!!!" });
                    }
                }
            )
        } else {
            res.status(404).send({ mensaje: "Usuario no encontrado" });
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