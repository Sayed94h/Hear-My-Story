const sequelize = require('../db/db.js');
const User = require('../models/User.js');

const createTables = async () => {
  sequelize.sync({ force: true });
}

createTables()
  .then(() => {
    process.exit();
  });
