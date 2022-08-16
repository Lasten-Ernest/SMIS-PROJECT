module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comments", {
      commentId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      commentBody: {
        type: Sequelize.STRING
      }
    });
    return Comment;
  };