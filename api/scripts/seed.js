const faker = require('faker');

const User = require('../models/User')



 const seedUsers = async () => {
    try{
        const usersCollections = await User.find()
        if(usersCollections.length > 0) {
            return
        }
        const quantity = 2
        const users = []
        for (let i=0 ; i < quantity; i++){
            users.push(
                new User({
                    name: faker.name.findName(),
                    email: faker.internet.email(),
                    password: faker.internet.password()
                })
            )
        }
        await User.remove()
       users.forEach(user => {
           User.create(user);
       })
    } catch (error) {
        console.log(error)

    }
}

module.exports = seedUsers;