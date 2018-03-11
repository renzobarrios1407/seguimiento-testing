
var opciones = require("../config/opciones");
module.exports = (sequelize, DataTypes) => {
    // const Solicitud = sequelize.import("solicitud", require('../models/solicitud'))
    const CartaDeCertificacion = sequelize.define('cartaDeCertificacion', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        // Último formato de carta
        ultimoFormatoDeCarta: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Estándar de nombramiento
        estandarDeNombramiento: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Diligenciamiento completo de campos en la Carta
        diligenCompletoCamposCarta: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Concepto de pruebas Especializadas en la carta
        concptPruebasEspecialiCarta: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Aprobación en carta
        aprobacionEnCarta: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        },
        // Número(s) de incidente(s) incluído(s) en carta de certificación
        numsIncidntsIncludsCartCert: {
            type: DataTypes.ENUM,
            values: opciones,
            allowNull: false
        }
    });

    CartaDeCertificacion.associate = function (models) {

    };
    return CartaDeCertificacion;
}