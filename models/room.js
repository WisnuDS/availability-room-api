const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Room', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    hotel_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    room_type_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    room_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    room_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "(1: available, 0: out of service)"
    }
  }, {
    sequelize,
    tableName: 'room',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
