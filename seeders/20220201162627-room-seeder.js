'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = []
    for (let i = 1; i < 4; i++) {
      for (let j = 11; j < 100; j++) {
        data.push({
          hotel_id: 1,
          room_type_id: i,
          room_number: `${i}${j}`,
          room_status: 1
        })
      }
    }
    await queryInterface.bulkInsert('Room', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
