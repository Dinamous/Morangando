'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Clients', [
      {
        name: 'Serasa',
        cnpj: '1254.2658.1578-269',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Horti-fruti Central',
        cnpj: '1254.2658.1578-269',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Mercado Central',
        cnpj: '1254.2658.1578-269',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Centro de Distribuição Municipal P.A',
        cnpj: '1254.2658.1578-269',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Clients', null, {});

  }
};
