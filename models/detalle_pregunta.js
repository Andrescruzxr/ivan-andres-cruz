'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detalle_pregunta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Detalle_pregunta.init({
    id_detalle: DataTypes.STRING,
    id_usuario: DataTypes.STRING,
    fecha: DataTypes.STRING,
    hora: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Detalle_pregunta',
  });
  return Detalle_pregunta;
};