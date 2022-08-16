module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teachers", {
        teacherId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        firstname: {
            type: Sequelize.STRING
        },
        middlename: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      joinDate: {
          type: Sequelize.DATE
      }
      

    });
    return Teacher;
  };