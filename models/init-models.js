var DataTypes = require("sequelize").DataTypes;
var _Hotel = require("./hotel");
var _Price = require("./price");
var _Reservation = require("./reservation");
var _Room = require("./room");
var _RoomType = require("./room_type");
var _Stay = require("./stay");
var _StayRoom = require("./stay_room");

function initModels(sequelize) {
  var Hotel = _Hotel(sequelize, DataTypes);
  var Price = _Price(sequelize, DataTypes);
  var Reservation = _Reservation(sequelize, DataTypes);
  var Room = _Room(sequelize, DataTypes);
  var RoomType = _RoomType(sequelize, DataTypes);
  var Stay = _Stay(sequelize, DataTypes);
  var StayRoom = _StayRoom(sequelize, DataTypes);


  return {
    Hotel,
    Price,
    Reservation,
    Room,
    RoomType,
    Stay,
    StayRoom,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
