const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: "joyce",
        password: "garnett"
    },
    {
        username: "lilun",
        password: "heart"
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;