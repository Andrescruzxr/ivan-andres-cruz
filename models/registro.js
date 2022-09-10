'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Registro.init({
    id: DataTypes.INTEGER,
    nombre_usuario: DataTypes.STRING,
    apellido_usuario: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    tipo_usuario: DataTypes.STRING,
    ubicacion - usuario: DataTypes.STRING,
    correo: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    cedula: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Registro',
  });
  return Registro;
};