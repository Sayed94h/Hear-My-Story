require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.DB_URI
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
});

db.once('open', () => {
    console.log('Database Connection Established!')
});

module.exports = db;