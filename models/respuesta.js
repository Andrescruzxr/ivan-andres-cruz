'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Respuesta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Respuesta.init({
    id_respusta: DataTypes.STRING,
    ubicacion_respuesta: DataTypes.STRING,
    calificacion_respuesta: DataTypes.STRING,
    nombre_usarioR: DataTypes.STRING,
    fecha_respuesta: DataTypes.STRING,
    hora_respuesta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Respuesta',
  });
  return Respuesta;
};