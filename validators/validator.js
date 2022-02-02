const Joi = require('joi')

class Validator {
  availableRoomValidator (params) {
    const Schema = Joi.object({
      checkin_date: Joi.date()
        .required(),
      checkout_date: Joi.date()
        .required(),
      room_qty: Joi.number()
        .required(),
      room_type_id: Joi.number()
        .required()
    })

    return Schema.validate(params)
  }
}

module.exports = new Validator()
