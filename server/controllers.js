const models = require('./models.js');
const bodyParser = require('./index.js')

module.exports = {
  getEmployees: (req, res) => {
    let name = req.query.name;
    let params = [
      `${name.charAt(0).toUpperCase()}${name.slice(1)}%`,
      req.query.age,
      req.query.department
    ];
    models.readEmployees(params)
      .then(employees => res.json(employees))
      .catch(err => res.sendStatus(404));
  }
};