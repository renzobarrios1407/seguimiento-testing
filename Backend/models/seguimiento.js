
var opciones = require("../config/opciones");
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const Seguimiento = sequelize.define('seguimiento', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        // PMO Incidente Caso Problema Soporte Estructural Versionamiento Vulnerabilidad
        pmo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 15],
                    msg: "El PMO debe tener una longitud entre 1 y 15"
                }
            }
        },
        // Sprint\Release
        sprORel: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: {
                    args: [1, 10],
                    msg: "El Sprint\\Release debe tener una longitud entre 1 y 10"
                }
            }
        },
        // Saved
        saved: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    Seguimiento.associate = function (models) {
        //Seguimiento tiene un releases
        models.seguimiento.hasOne(models.releases);
        //Seguimiento tiene un requirements
        models.seguimiento.hasOne(models.requirements);
        //Seguimiento tiene un testLab
        models.seguimiento.hasOne(models.testLab);
        //Seguimiento tiene un defects
        models.seguimiento.hasOne(models.defects);
        //Seguimiento tiene un Agenda De Ambiente
        models.seguimiento.hasOne(models.agendaDeAmbiente);
        //Seguimiento tiene un Carta De Certificacion
        models.seguimiento.hasOne(models.cartaDeCertificacion);
        //Seguimiento tiene un repositorio
        models.seguimiento.hasOne(models.repositorio);
        //Seguimiento tiene un DoDDdTVSTS
        models.seguimiento.hasOne(models.doDDdTVSTS);
        //Seguimiento tiene un usd
        models.seguimiento.hasOne(models.usd);
        //Seguimiento pertenece a un usuario
        models.seguimiento.belongsTo(models.usuario, {foreignKey: 'testerId'});
    };
    return Seguimiento;
}