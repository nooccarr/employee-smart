const controllers = require('./controllers.js');
const router = require('express').Router();

router.get('/employees', controllers.getEmployees);

module.exports = router;