module.exports = (sequelize, Sequelize) => {
    const ClassLessons = sequelize.define("classLessons", {
      lessonId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      lessonName: {
        type: Sequelize.STRING
      },
      lesson_date: {
        type: Sequelize.DATE
      },
      lesson_startTime: {
        type: Sequelize.TIME
      },
      lesson_endTime: {
        type: Sequelize.TIME
      }
    });
    return ClassLessons;
  };