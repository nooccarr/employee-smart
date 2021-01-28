const pgp = require('pg-promise')();
const { config } = require('./config.js');

const db = pgp(config);

module.exports = db;