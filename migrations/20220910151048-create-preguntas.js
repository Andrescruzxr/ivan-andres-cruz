'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Preguntas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuariopregunta_id: {//refencia al id de la tabla usuario
        type: Sequelize.STRING
      },
      clasificacion_id: {//refencia al id de la tabla
        type: Sequelize.STRING
      },
      ubicacion_pregunta: { //Descripcion del lugar
        type: Sequelize.STRING
      },
      detalle_p1: {//!!!!!!!!!!!!!!!
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Preguntas');
  }
};