'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('reservation', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      order_id: {
        type: Sequelize.UUID
      },
      customer_name: {
        type: Sequelize.STRING
      },
      booked_room_count: {
        type: Sequelize.INTEGER
      },
      checkin_date: {
        type: Sequelize.DATEONLY
      },
      checkout_date: {
        type: Sequelize.DATEONLY
      },
      hotel_id: {
        type: Sequelize.BIGINT
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('reservation');
  }
};
