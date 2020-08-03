const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const logSymbols = require('log-symbols');
// const config = require('config');
// require('dotenv').config();
const helpers = require('./helpers/helpers');
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(helpers.compressHandler);
app.use(helpers.loggerHandler);

// Backend /api routes
app.use('/api', require('./routes'));

// Frontend Hosting
app.use(helpers.frontendStaticFilesHandler);
app.use(helpers.reactHosting);

module.exports = app;
