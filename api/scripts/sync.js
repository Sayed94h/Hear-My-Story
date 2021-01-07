const db = require('../db/mongoose');
const seedUsers = require('./seed.js');

seedUsers().then(() => {
  console.log('all done');
  process.exit();
});
