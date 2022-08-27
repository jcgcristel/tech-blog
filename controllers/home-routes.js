const router = require('express').Router();

const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const { format_date } = require('../utils/helpers');

router.get('/', (req, res) => {  
      Post.findAll({
        attributes: [
          'id',
          'title',
          'text',
          'created_at'
        ],
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
          
          console.log(posts[0]);

          // pass a single post object into the homepage template
          res.render('home', {
            posts,
            loggedIn: req.session.loggedIn
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'text',
      'created_at'
    ],
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
  .then(data => {
    postData = data
    
    const stringed = JSON.stringify(postData);
    const post = JSON.parse(stringed);

    // pass a single post object into the homepage template
    res.render('view-post', {
        post,
        loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

  // const commentData = Comment.findAll({
  //   where: {
  //     post_id: req.params.id
  //   },
  //   attributes: [
  //     'id',
  //     'text'
  //   ],
  //   include: [
  //     {
  //       model: User,
  //       attributes: ['username']
  //     }
  //   ]
  // });
    
});

module.exports = router;

