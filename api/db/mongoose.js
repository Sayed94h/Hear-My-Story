const mongoose = require('mongoose');

const mongo_uri = 'mongodb://localhost/hyf';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

module.export = mongoose;