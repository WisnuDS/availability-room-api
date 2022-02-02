module.exports = {
  uri: process.env.DB_URI || 'mysql://root@127.0.0.1/room_availability',
  options: {
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    logging: true
  }
}
