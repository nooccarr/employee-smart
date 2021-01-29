const db = require('../database/index.js');

module.exports = {
  readEmployees: (params) => {
    let queryStr = 'SELECT * FROM employees';
    if (params[0]) {
      queryStr += ' WHERE name LIKE $1';
      if (params[1]) {
        queryStr += ' AND age = $2';
      };
      if (params[2]) {
        queryStr += ' AND department = $3';
      };
    } else if (params[1]) {
      queryStr += ' WHERE age = $2';
      if (params[2]) {
        queryStr += 'WHERE department = $3';
      }
    } else if (params[2]) {
      queryStr += ' WHERE department = $3';
    };
    return db.many(queryStr, params)
      .catch(err => console.log(err));
  }
};