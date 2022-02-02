const Validator = require('../validators/validator')
const { Op } = require('sequelize')
const moment = require('moment')
const {
  Room,
  RoomType,
  Price,
  StayRoom
} = require('../factories/sequelize').models

class MainService {
  async index (req, res) {
    // Validation Request
    const validation = await Validator.availableRoomValidator(req.query)
    if (validation.error) {
      res.send({
        status_code: 400,
        message: validation.error.message
      })
      return
    }

    try {
      // Get Query
      const params = req.query

      // Find Not Available Room
      const notAvailableRoom = await StayRoom.findAll({
        where: {
          date: {
            [Op.between]: [
              moment(params.checkin_date).toDate(),
              moment(params.checkout_date).toDate()
            ]
          }
        }
      })

      // Find Available Room
      const availableRoom = await Room.findAll({
        include: [
          {
            model: RoomType,
            include: [
              {
                model: Price,
                where: {
                  date: {
                    [Op.between]: [
                      moment(params.checkin_date).toDate(),
                      moment(params.checkout_date).toDate()
                    ]
                  }
                }
              }
            ]
          }
        ],
        where: {
          room_type_id: params.room_type_id,
          id: {
            [Op.notIn]: notAvailableRoom.map(i => i.room_id)
          }
        }
      })

      // Calculate Total Price
      let total = 0
      if (availableRoom) {
        for (const item of availableRoom[0].RoomType.Prices) {
          total += item.price
        }
      }

      // Create Format Response
      const formatted = {
        room_qty:params.room_qty,
        room_type_id:params.room_type_id,
        checkin_date:params.checkin_date,
        checkout_date:params.checkout_date,
        total_price: total,
        available_room: availableRoom.map(i => {
          return {
            room_id: i.id,
            room_number: i.room_number,
            price: i.RoomType.Prices.map(j => {
              return {
                date: j.date,
                price: j.price
              }
            })
          }
        })
      }

      // Send Response
      res.send(formatted)
    } catch (e) {
      res.send(e)
    }
  }
}

module.exports = new MainService()
