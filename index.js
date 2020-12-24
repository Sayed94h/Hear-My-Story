// this is the main entry point for your full app
// it serves your frontend & provides access to your API

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = require('./api/server');
require('./api/db/mongoose')

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.method + ': ' + req.path);
  next();
});

app.use('/', express.static(__dirname + '/client/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/public/index.html');
});

app.use('/api', api);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
