'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insumos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Insumos.init({
    id_indumos: DataTypes.STRING,
    nombre_insumos: DataTypes.STRING,
    tipo_insumos: DataTypes.STRING,
    proveedor_insumos: DataTypes.STRING,
    marca_insumos: DataTypes.STRING,
    id_cultivo_insumos: DataTypes.STRING,
    clasificacion_insumos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Insumos',
  });
  return Insumos;
};