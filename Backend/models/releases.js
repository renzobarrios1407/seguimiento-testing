
var opciones = require("../config/opciones").opciones;
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const Releases = sequelize.define('releases', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

        // Ruta del repositorio
        rutaQC: {
            type: DataTypes.STRING,
            allowNull: false
        },
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
        // Tiene Fecha de inicio y cierre
        fechaInicioYCierre: {
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
        // al release le tengo el numero del DoD en el sprint
        tieneElNumeroDelDodEnElSprint: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Estado de Sprint finalizado con carta
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
        },
        // paso de la carpeta "en proceso" a "terminados"
        carpetaDeProcesoATerminados: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        }
    });

    Releases.associate = function (models) {
        //Releases pertenece a un Seguimiento
        models.releases.belongsTo(models.seguimiento);
        models.releases.belongsTo(models.usuario, {as: 'auditor', foreignKey: 'auditorId'});
    };
    return Releases;
}