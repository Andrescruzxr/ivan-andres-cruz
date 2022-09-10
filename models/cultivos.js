'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cultivos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cultivos.init({
    id_cultivos: DataTypes.STRING,
    tipo_cultivo: DataTypes.STRING,
    pregunta1: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cultivos',
  });
  return cultivos;
};