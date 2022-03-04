const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
// route for users
router.use('/user', userRoutes);
// route for posts
router.use('/post', postRoutes);
//route for comments
router.use('/comment', commentRoutes);

module.exports = router;