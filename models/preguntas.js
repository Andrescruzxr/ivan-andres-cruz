'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preguntas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Preguntas.init({
    id_preunta: DataTypes.STRING,
    nombre_usuariopregunta: DataTypes.STRING,
    clasificacion: DataTypes.STRING,
    ubicaion_pregunta: DataTypes.STRING,
    detalle_p1: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Preguntas',
  });
  return Preguntas;
};