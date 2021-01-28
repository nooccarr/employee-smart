const models = require('./models.js');
const bodyParser = require('./index.js')

module.exports = {
  getEmployees: (req, res) => {
    let params = req.body;
    models.readEmployees(params)
      .then(employees => res.json(employees))
      .catch(err => res.sendStatus(404));
  }
};