'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Outputs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_client: {
        type: Sequelize.INTEGER,
        references: {
          model:'Clients',
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
        type: Sequelize.INTEGER
      },
      cut: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      value: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('Outputs');
  }
};