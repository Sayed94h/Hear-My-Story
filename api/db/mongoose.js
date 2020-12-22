const mongoose = require('mongoose');
const { MONGO_CONNECTION_URI } = require('./config.js');

const mongoUri = MONGO_CONNECTION_URI;
mongoose.connect(mongoUri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongoUri}`);
  }
});

module.export = mongoose;
