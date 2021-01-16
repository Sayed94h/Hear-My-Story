// this file allows you to develop/test your api without the frontend

const express = require('express');
const devServer = express();
const api = require('./server.js');
const cors = require("cors");

devServer.use((req, res, next) => {
  console.log(req.method + ': ' + req.path);
  next();
});

devServer.use('/api', cors({ origin: true }), api);

devServer.get('/', (req, res) => {
  res.send('frontend');
});

const port = 5000;
devServer.listen(port, () => console.log(`listening at http://localhost:${port}`));
