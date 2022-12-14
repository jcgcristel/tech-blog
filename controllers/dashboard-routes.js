const router = require('express').Router();

const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    if (req.session.user_id) {
        Post.findAll({
            attributes: [
                'id',
                'title',
                'text',
                'created_at'
            ],
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                model: Comment,
                attributes: ['id', 'text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
                },
                {
                model: User,
                attributes: ['username']
                }
            ]
            })
            .then(dbPostData => {
                const posts = dbPostData.map(post => post.get({ plain: true }));
                
                // pass a single post object into the homepage template
                res.render('dashboard', {
                    posts,
                    loggedIn: req.session.loggedIn
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
    else {
        res.redirect('/login');
    }
});

router.get('/new', (req, res) => {
    if (req.session.user_id) {
        res.render('new-post', { loggedIn: req.session.user_id });
    }
    else {
        res.redirect('/login');
    }
})

module.exports = router;