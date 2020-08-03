const express = require('express');
const router = express.Router();
const middlewares = require('../helpers/middlewares');

// api - basic informations
router.get('/', function (req, res) {
  var date = new Date();
  var outputDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  res.send({ message: 'NodeJS Server hosting React JS Application - API', author: '© 2020 Tomáš Pásler - pasleto', timestamp: outputDate });
});

// api routes
// router.use('/v1', require('./v1'));
// router.use('/v2', require('./v2'));

// middlewares - notFound & errorHandler
router.use(middlewares.notFound);
router.use(middlewares.errorHandler);

module.exports = router;
