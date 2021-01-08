const faker = require('faker');
const User = require('../models/User')

const seedUsers = async () => {
  try{
      const usersCollections = await User.find();
      if(usersCollections.length > 0) {
          return
      }

      const quantity = 2;
      const users = [];
      for (let i=0 ; i < quantity; i++){
          users.push(
              new User({
                  name: faker.name.findName(),
                  email: faker.internet.email(),
                  password: faker.internet.password()
              })
          )
      }

      // Loop over the user so we can wait
      for (const user of users) {
         // First remove any duplicates, user is a mongoose model so we can call remove on it
         await user.remove();

         // user is a mongoose model so we can call save on it
         await user.save();
      }
  } catch (error) {
      console.log(error)
  }
}

module.exports = seedUsers;