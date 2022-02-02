var express = require('express');
var router = express.Router();
const MainService = require('../services/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ message: 'https://youtu.be/dQw4w9WgXcQ' })
});

router.get('/availability-room', MainService.index)

module.exports = router;
