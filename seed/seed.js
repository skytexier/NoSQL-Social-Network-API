const connection = require('../config/connection');
const { User, Thought} = require('../models');

connection.once('open', async () => {
    const users= [];

    users.push({
        username: "test",
        email: "skyhamilton@gmail.com",
    })

    await User.collection.insertMany(users);
    console.log(users)
    process.exit(0)
});




