'use strict';

const moment = require("moment");
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
    const moment = require('moment')
    const data = []
    for (let i = 1; i < 4; i++) {
      const today = moment()
      for (let j = 0; j < 50; j++) {
        data.push({
          date:today.toDate(),
          room_type_id: i,
          price: Math.floor(Math.random() * (1000000 - 200000 + 1) + 200000)
        })
        today.add(1, 'day')
      }
    }
    await queryInterface.bulkInsert('Price', data, {});
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
