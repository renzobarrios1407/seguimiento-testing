
var opciones = require("../config/opciones");
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const DoDDdTVSTS = sequelize.define('doDDdTVSTS', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        // DoD
        doD: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: {
                    args: [1, 10],
                    msg: "El DoD debe tener una longitud entre 1 y 10"
                }
            }
        },
        // Estandar de nombramiento de la carta en el DoD\Ddt
        estandarDeNombCartDoDDdt: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Existe Carta en el DoD
        existCartDoD: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Tipo de carta en el DoD de acuerdo al tipo de certificación
        tipoCartDoDAcrdTipoDeCert: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // El DoD tiene la fecha de vencimiento de la carta y coincide con la que está en la carta
        elDoDTieneFechaDeVencCartaYCoincdConCart: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Existe aprobación de usuario en el DoD
        existeAprobUserEnDoD: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Existe aprobación de jefe de Certificación en el DoD
        existeAprobJefeEnCertDoD: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Closed
        closed: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        }
    });

    DoDDdTVSTS.associate = function (models) {
        //DoDDdTVSTS pertenece a un Seguimiento
        models.doDDdTVSTS.belongsTo(models.seguimiento);
    };
    return DoDDdTVSTS;
}