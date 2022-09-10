'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proveedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Proveedor.init({
    id_proveedor: DataTypes.STRING,
    nombre_proveedor: DataTypes.STRING,
    apellido_proveedor: DataTypes.STRING,
    ciudad_proveedor: DataTypes.STRING,
    telefono_proveedor: DataTypes.STRING,
    forma_pago: DataTypes.STRING,
    descuento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proveedor',
  });
  return Proveedor;
};