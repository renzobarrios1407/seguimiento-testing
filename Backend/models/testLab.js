
var opciones = require("../config/opciones").opciones;
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const TestLab = sequelize.define('testLab', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        // Los pasos de los casos de prueba están ejecutados
        pasosDeCasosPruebaEjecutados: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Los casos de prueba tienen estado final
        casosPruebaTienenEstadoFinal: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        }
    });

    TestLab.associate = function (models) {
        //Test Lab pertenece a un Seguimiento
        models.testLab.belongsTo(models.seguimiento);
        models.testLab.belongsTo(models.usuario, {foreignKey: 'auditorId'});
    };
    return TestLab;
}