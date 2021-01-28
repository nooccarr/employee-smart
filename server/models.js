const db = require('../database/index.js');

module.exports = {
  readEmployees: (params) => {
    let queryStr = 'select * from employees';
    return db.many(queryStr, params)
      // .then(hello => console.log(hello))
      .catch(err => console.log(err));
  }
};