require('dotenv').config();
const mongoose = require('mongoose');
const seedUsers = require('../scripts/seed')

const uri = process.env.DB_URI
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
seedUsers();
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})


db.once('open', () => {
    console.log('Database Connection Established!')
})