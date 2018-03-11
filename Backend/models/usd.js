
var opciones = require("../config/opciones");
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const DoDDdTVSTS = sequelize.define('doDDdTVSTS', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        // # de Orden de Cambio
        numOrdenCambio: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: {
                    args: [1, 10],
                    msg: "El # de Orden de Cambio debe tener una longitud entre 1 y 10"
                }
            }
        },
        // Campo Código Definición de Terminado
        campoCodDefTermi: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Incidentes por Bugs en estado "Not Resolved"
        incdntsPorBugsEstNotResolved: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        }
    });

    DoDDdTVSTS.associate = function (models) {

    };
    return DoDDdTVSTS;
}