'use strict';

module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const Tester = sequelize.define('usuario', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        cedula: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: "La cédula ya está registrada"
            },
            allowNull: false,
            validate: {
                isNumeric: true,
                len: {
                    args: [5, 10],
                    msg: "La cédula debe tener una longitud entre 5 y 10"
                }
            }
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: ["^([a-zñÑáéíóúÁÉÍÓÚ])+(\\s[a-zñÑáéíóúÁÉÍÓÚ]+)*$", 'i'],
                    msg: "Ingrese carácteres válidos en nombre"
                },
                len: {
                    args: [3, 50],
                    msg: "El nombre debe tener una longitud entre 3 y 50"
                }
            }
        },
        primerApellido: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: ["^[a-zñÑáéíóúÁÉÍÓÚ]+$", 'i'],
                    msg: "Ingrese carácteres válidos en primer apellido"
                },
                len: {
                    args: [3, 50],
                    msg: "El primer apellido debe tener una longitud entre 3 y 50"
                }
            }
        },
        segundoApellido: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                is: {
                    args: ["^[a-zñÑáéíóúÁÉÍÓÚ]+$", 'i'],
                    msg: "Ingrese carácteres válidos en segundo apellido"
                },
                len: {
                    args: [3, 50],
                    msg: "El segundo apellido debe tener una longitud entre 3 y 50"
                }
            }
        },
        lugarTrabajo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: ["^[a-z]+$", 'i'],
                    msg: "Ingrese carácteres válidos en lugar de trabajo"
                },
                len: {
                    args: [3, 50],
                    msg: "El lugar de trabajo debe tener una longitud entre 3 y 50"
                }
            }
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: {
                    msg: "Ingrese carácteres válidos en usuario"
                },
                len: {
                    args: [3, 50],
                    msg: "El usuario debe tener una longitud entre 3 y 50"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Tester.associate = function (models) {
    
    };
    return Tester;
}