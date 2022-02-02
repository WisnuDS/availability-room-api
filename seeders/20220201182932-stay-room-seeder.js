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
    const date = moment('2022-02-14')
    const data = []
    while (date.isSameOrBefore(moment('2022-02-17'))) {
      data.push({
        stay_id: 1,
        room_id: 50,
        date: date.toDate()
      })
      date.add(1, 'day')
    }
    await queryInterface.bulkInsert('stay_room', data, {});
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
