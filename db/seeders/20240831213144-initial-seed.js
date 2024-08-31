'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [];
    for (let i = 0; i < 1000000; i++) {
      users.push({
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        age: Math.floor(Math.random() * 60) + 18,
        gender: i % 2 === 0 ? 'male' : 'female',
        hasProblems: Math.random() > 0.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('Users', users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
