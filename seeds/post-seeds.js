const sequelize = require('../config/connection');
const { Post } = require('../models');

const postData = [
    {
        title: "Post 1",
        text: "My first post.",
        user_id: 1
    },
    {
        title: "Post 2",
        text: "My second post.",
        user_id: 1
    },
    {
        title: "My Post",
        text: "The coolest post.",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData, {individualHooks: true});

module.exports = seedPosts;