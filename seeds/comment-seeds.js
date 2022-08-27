const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentdata = [
    {
        text: "My first comment.",
        user_id: 1,
        post_id: 1
    },
    {
        text: "My second comment.",
        user_id: 1,
        post_id: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentdata, {individualHooks: true});

module.exports = seedComments;