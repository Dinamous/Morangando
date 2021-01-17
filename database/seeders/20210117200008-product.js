'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Products', [
      {
        name: 'Morango Novo',
        inStorage: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Morango Velho',
        inStorage: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Batata',
        inStorage: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};
