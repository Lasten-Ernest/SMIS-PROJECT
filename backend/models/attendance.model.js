module.exports = (sequelize, Sequelize) => {
    const SAtttendance = sequelize.define("student_attendance", {
      attendenceId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      absentDate: {
        type: Sequelize.DATE
      },
      absentReason: {
          type: Sequelize.STRING
      },
      presentDate: {
        type: Sequelize.DATE
      }
    });
    return SAtttendance;
  };