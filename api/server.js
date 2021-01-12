const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./db/mongoose');
const storiesRoutes = require('./routes/stories');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/home.js'));
app.use('/', require('./routes/login.js'));
app.use('/stories', storiesRoutes)

module.exports = app;
