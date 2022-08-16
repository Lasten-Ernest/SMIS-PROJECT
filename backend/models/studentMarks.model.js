module.exports = (sequelize, Sequelize) => {
    const Mark = sequelize.define("student_marks", {
      markId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      status: {
        type: Sequelize.STRING
      },
      marks: {
        type: Sequelize.INTEGER
      }
    });
    return Mark;
  };