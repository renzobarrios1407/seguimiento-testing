'use strict';

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
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
            unique: {
                args: true,
                msg: "El usuario ya está registrado"
            },
            validate: {
                is: {
                    args: ['^[a-zA-Z0-9\-\.]+$', 'i'],
                    msg: "Ingrese carácteres válidos en usuario"
                },
                len: {
                    args: [3, 50],
                    msg: "El usuario debe tener una longitud entre 3 y 50"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "El usuario ya está registrado"
            },
            validate: {
                isEmail: {
                    msg: "Ingrese un correo valido"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Usuario.associate = function (models) {
        models.usuario.belongsTo(models.rol);
        // Tester
        //Usuario/Tester tiene muchos Seguimientos
        models.usuario.hasMany(models.seguimiento, {foreignKey: 'testerId'});
        // Auditor
        //Usuario/Auditor tiene muchas Revisiones
        //bloque se seguimiento
        //Agenda de ambiente
        models.usuario.hasMany(models.agendaDeAmbiente, {foreignKey: 'auditorId'});
        //Carta de certificación
        models.usuario.hasMany(models.cartaDeCertificacion, {foreignKey: 'auditorId'});
        //defects
        models.usuario.hasMany(models.defects, {foreignKey: 'auditorId'});
        //doDDdTVSTS
        models.usuario.hasMany(models.doDDdTVSTS, {foreignKey: 'auditorId'});
        //releases
        models.usuario.hasMany(models.releases, {foreignKey: 'auditorId'});
        //repositorio
        models.usuario.hasMany(models.repositorio, {foreignKey: 'auditorId'});
        //requirements
        models.usuario.hasMany(models.requirements, {foreignKey: 'auditorId'});
        //testLab
        models.usuario.hasMany(models.testLab, {foreignKey: 'auditorId'});
        //usd
        models.usuario.hasMany(models.usd, {foreignKey: 'auditorId'});
        
    };
    return Usuario;
}