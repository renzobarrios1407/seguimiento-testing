
var opciones = require("../config/opciones").opciones;
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const Repositorio = sequelize.define('repositorio', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        // Ruta del repositorio
        rutaRepositorio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Estándar de nombramiento
        estandarDeNombramiento: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Carpeta y estructura de carpetas en repositorio
        carptYEstrucCarptsRepo: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Última versión formato Lista de Chequeo P.E.
        ultVerFormatListCheckPE: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Existe Lista de Chequeo P.E en la carpeta funcional (Sprint/Release)
        existeListCheckPEcarptFuncSprORel: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Aprobación de usuario en repositorio por Bugs en estado "Not Resolved"
        aprobUserRepoPorBugsEstNotResolved: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Última versión formato Matriz de riesgo para certificación sin pruebas
        ultVerFormatMatrizRiesgoCertSinPruebas: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Adjuntó Matriz de riesgo para certificación sin pruebas
        AdjuntMatrizRiesgoCertSinPruebas: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        }
    });

    Repositorio.associate = function (models) {
        //Repositorio pertenece a un Seguimiento
        models.repositorio.belongsTo(models.seguimiento);
        models.repositorio.belongsTo(models.usuario, {as: 'auditor', foreignKey: 'auditorId'});
    };
    return Repositorio;
}