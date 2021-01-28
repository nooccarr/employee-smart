const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join('./dist')));

// app.get('/', (req, res) => {
//   res.send('Hello server');
// });

app.listen(port, () => console.log(`Listening to port ${port}`));