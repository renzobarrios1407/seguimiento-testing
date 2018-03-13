
var opciones = require("../config/opciones");
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const Releases = sequelize.define('releases', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        // ID Release en QC
        idReleaseQC: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: {
                    args: [1, 10],
                    msg: "El ID de Release en QC debe tener una longitud entre 1 y 10"
                }
            }
        },
        // Estandar de nombramiento de Release
        estandarNomDeRelease: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Release ID = Agenda de ambiente
        releaseIdEqAgendaAmbiente: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Tiene Fecha Real Cierre
        tieneFechaRealCierre: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Tiene Definición de terminado en Sprint\Release
        tieneDefDeTermiEnSprORel: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Estado de Sprint
        estadoDeSprint: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Requerimientos asignados al ciclo
        reqsAsignsAlCiclo: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Carpetas de set de pruebas asignadas al ciclo
        carptsSetPruebasAsignsAlCiclo: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        }
    });

    Releases.associate = function (models) {
        //Releases pertenece a un Seguimiento
        models.releases.belongsTo(models.seguimiento);
    };
    return Releases;
}