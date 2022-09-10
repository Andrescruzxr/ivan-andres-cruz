'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Proveedors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_proveedor: {
        type: Sequelize.STRING
      },
      apellido_proveedor: {
        type: Sequelize.STRING
      },
      ciudad_proveedor: {
        type: Sequelize.STRING
      },
      telefono_proveedor: {
        type: Sequelize.STRING
      },
      forma_pago: {//!
        type: Sequelize.STRING
      },
      descuento: {//!
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
    await queryInterface.dropTable('Proveedors');
  }
};