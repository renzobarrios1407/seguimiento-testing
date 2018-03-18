
var opciones = require("../config/opciones").opciones;
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const Requirements = sequelize.define('requirements', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        // Tiene Alcance/Estrategia acorde al Sprint/Release finalizado
        tieneAlcOEstratAcrdAlSprORelFin: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Tiene riesgos de producto por Sprint\Release
        tieneRiesgosDeProdPorSprORel: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Tiene un analisis de riesgos acorde al alcance probado
        tieneAnalisisRiesgosAcrdAlcProb: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Estado del Riesgo = Cerrado
        estadoRiesgoEqCerrado: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        }
    });

    Requirements.associate = function (models) {
        //Requirements pertenece a un Seguimiento
        models.requirements.belongsTo(models.seguimiento);
        models.requirements.belongsTo(models.usuario, {foreignKey: 'auditorId'});
    };
    return Requirements;
}