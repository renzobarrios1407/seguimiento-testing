
var opciones = require("../config/opciones");
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const Defects = sequelize.define('defects', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        // Defecto detectado asignado al ciclo\sprint
        defectoDetectAsignAlCicOSpr: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Defecto detectado asignado al release
        defectoDetectAsignAlRel: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Los defectos encontrados tienen estado final
        defctsEncontTienenEstFinal: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Defectos asignado a subject
        defctsAsignASubject: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Análisis de riesgo por Bugs en estado "Not Resolved"
        analisisDeRiesgoxBugsEnEstNotResolved: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        }
    });

    Defects.associate = function (models) {

    };
    return Defects;
}