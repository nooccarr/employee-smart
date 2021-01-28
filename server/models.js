const db = require('../database/index.js');

module.exports = {
  readEmployees: (params) => {
    let queryStr = 'select * from employees';
    if (params[0]) {
      queryStr += ' where name like $1';
      if (params[1]) {
        queryStr += ' and age = $2';
      };
      if (params[2]) {
        queryStr += ' and department = $3';
      };
    } else if (params[1]) {
      queryStr += ' where age = $2';
      if (params[2]) {
        queryStr += 'where department = $3';
      }
    } else if (params[2]) {
      queryStr += ' where department = $3';
    };
    return db.many(queryStr, params)
      .catch(err => console.log(err));
  }
};