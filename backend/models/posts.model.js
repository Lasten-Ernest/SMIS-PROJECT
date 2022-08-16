module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      postTitle: {
        type: Sequelize.STRING
      },
      postBody: {
        type: Sequelize.STRING
      }
    });
    return Post;
  };