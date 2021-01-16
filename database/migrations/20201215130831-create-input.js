'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inputs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_provider: {
        type: Sequelize.INTEGER,
        references: {
          model:'Providers',
            key: 'id',
        },
      },
      id_product: {
        type: Sequelize.INTEGER,
        references: {
          model:'Products',
            key: 'id',
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      
      observation: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Inputs');
  }
};