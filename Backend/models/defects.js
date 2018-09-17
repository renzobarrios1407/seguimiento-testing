
var opciones = require("../config/opciones").opciones;
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const Defects = sequelize.define('defects', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        //se tomo evidencia de los casos de prueba fallidos
        evidenciaCasosDePrueba: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
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
        //Defects pertenece a un Seguimiento
        models.defects.belongsTo(models.seguimiento);
        models.defects.belongsTo(models.usuario, {as: 'auditor', foreignKey: 'auditorId'});
    };
    return Defects;
}