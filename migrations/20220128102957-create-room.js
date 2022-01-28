'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('room', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      hotel_id: {
        type: Sequelize.BIGINT
      },
      room_type_id: {
        type: Sequelize.BIGINT
      },
      room_number: {
        type: Sequelize.INTEGER
      },
      room_status: {
        type: Sequelize.INTEGER,
        comment: '(1: available, 0: out of service)'
      }
  });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
