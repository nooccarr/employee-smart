const pgp = require('pg-promise')();
const { config } = require('./config.js');

const db = pgp(`postgres://${config}@localhost:5432/employee_smart`);

module.exports = db;