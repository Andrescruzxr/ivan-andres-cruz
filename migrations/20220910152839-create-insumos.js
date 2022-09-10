'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Insumos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_insumos: {
        type: Sequelize.STRING
      },
      tipo_insumos: { //Foranea a tabla tipo insumos
        type: Sequelize.STRING
      },
      proveedor_insumos_id: {//relacion con el proveedor
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Proveedors'
          },
          key: 'id'
        }
      },
      marca_insumos: {
        type: Sequelize.STRING
      },
      id_cultivo_insumos: {
        type: Sequelize.INTEGER,
        
        references: {
          model: {
            tableName: 'cultivos'
          },
          key: 'id'
        }
        
       
      },
      clasificacion_insumos: {
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
    await queryInterface.dropTable('Insumos');
  }
};