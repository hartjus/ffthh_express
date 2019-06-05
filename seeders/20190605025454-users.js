'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   const users = [
     {email: 'ironman@avengers.shield', name: 'Tony Stark', password: 'password', isActive: true, createdAt: new Date(), updatedAt: new Date()},
     {email: 'hulk@avengers.shield', name: 'Bruce Banner', password: 'password', isActive: true, createdAt: new Date(), updatedAt: new Date()},
     {email: 'hawkeye@avengers.shield', name: 'Clint Barton', password: 'password', isActive: false, createdAt: new Date(), updatedAt: new Date()},
     {email: 'blackwidow@avengers.shield', name: 'Natasha Romanof', password: 'password', isActive: true, createdAt: new Date(), updatedAt: new Date()},
   ];

    return queryInterface.bulkInsert('users', users);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
