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
    const moment = require('moment')
    const { v4 } = require('uuid')
    await queryInterface.bulkInsert('reservation', [{
      order_id: v4(),
      customer_name: 'Dedik Sunandar',
      booked_room_count: 1,
      checkin_date: moment('2022-02-14').toDate(),
      checkout_date: moment('2022-02-17').toDate(),
      hotel_id: 1
    }], {});
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
