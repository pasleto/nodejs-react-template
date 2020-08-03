const compression = require('compression');
const rfs = require('rotating-file-stream');
const path = require('path');
const morgan = require('morgan');
var express = require('express');
var router = express.Router();

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) { return false; }
  return compression.filter(req, res);
};

var accessLogStream = rfs.createStream(`morgan-log-${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}.log`, {
  interval: '1d',
  path: path.join(__dirname, '../logs')
});

const compressHandler = compression({ filter: shouldCompress, threshold: 0 });
const loggerHandler = morgan('common', { stream: accessLogStream });
const frontendStaticFilesHandler = express.static(path.join(__dirname, '../frontend/build'));
const reactHosting = router.use('*', (req, res) => { res.sendFile(path.join(__dirname, '../frontend/build/index.html')); });

module.exports = {
  compressHandler,
  loggerHandler,
  frontendStaticFilesHandler,
  reactHosting
};
