
var opciones = require("../config/opciones").opciones;
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const AgendaDeAmbiente = sequelize.define('agendaDeAmbiente', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        // ID Agenda de ambiente
        iDAgendaDeAmbiente: {
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
        // Última versión formato
        ultimaVersionFormato: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Estandar de nombramiento
        estandarDeNombramiento: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Presenta agendamiento de ambientes y se encuentra en estado 'Aprobado'
        presntAgendDeAmbntsYSeEncntrEnEstAprob: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Diligenciamiento de sharepoint
        diligenDeSharepoint: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        }
    });

    AgendaDeAmbiente.associate = function (models) {
        //Agenda de Ambiente pertenece a un Seguimiento
        models.agendaDeAmbiente.belongsTo(models.seguimiento);
        models.agendaDeAmbiente.belongsTo(models.usuario, {as: 'auditor', foreignKey: 'auditorId'});
    };
    return AgendaDeAmbiente;
}