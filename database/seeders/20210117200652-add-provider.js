'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Providers', [
      {
        name: 'Maria Silva',
        city: 'Bom Repouso',
        neighborhood: 'centro',
        email: 'maria.silva@gmail.com',
        phone: '(35) 99847-4589',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Marcelo Assis',
        city: 'Bom Repouso',
        neighborhood: 'centro',
        email: 'marcelo.assis@gmail.com',
        phone: '(35) 99847-4589',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Renato Marcus',
        city: ' Pouso Alegre',
        neighborhood: 'centro',
        email: 'mrenato.marcus@gmail.com',
        phone: '(35) 99847-4589',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Eliza Oliveira',
        city: ' Pouso Alegre',
        neighborhood: 'centro',
        email: 'eliza.oliveira@gmail.com',
        phone: '(35) 99847-4589',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Providers', null, {});

  }
};
