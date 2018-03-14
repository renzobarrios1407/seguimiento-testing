'use strict';
var roles = require("../config/opciones").roles;
module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define('rol', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nombre: {
            type: DataTypes.ENUM,
            values: roles,
            allowNull: false,
            unique: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: ["^([a-zñÑáéíóúÁÉÍÓÚ])+(\\s[a-zñÑáéíóúÁÉÍÓÚ]+)*$", 'i'],
                    msg: "Ingrese carácteres válidos en Descripcion"
                },
                len: {
                    args: [3, 50],
                    msg: "La descripción debe tener una longitud entre 3 y 50"
                }
            }
        }
    });

    Rol.associate = function (models) {
        //Rol tiene muchos usuarios
        models.rol.hasMany(models.usuario);
    };
    return Rol;
}