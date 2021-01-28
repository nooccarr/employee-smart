const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const router = require('./routes.js');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join('./client/dist')));
app.use('/', router);

app.listen(port, () => console.log(`Listening to port ${port}`));