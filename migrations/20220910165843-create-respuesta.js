'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Respuesta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      ubicacion_respuesta: {
        type: Sequelize.STRING
      },
      calificacion_respuesta: {
        type: Sequelize.STRING
      },
      nombre_usarioR: {
        type: Sequelize.STRING
      },
      fecha_respuesta: {
        type: Sequelize.STRING
      },
      hora_respuesta: {
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
    await queryInterface.dropTable('Respuesta');
  }
};