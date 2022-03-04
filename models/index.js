const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//decaring foreign key, a user has posts
Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
//decaring foreign key, a post can have many comments
Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});
//decaring foreign key, a comment is associated with a specific user
Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};