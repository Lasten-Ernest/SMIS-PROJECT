module.exports = (sequelize, Sequelize) => {
    const School = sequelize.define("schools", {
      schoolId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      schoolName: {
        type: Sequelize.STRING
      },
      schoolAdress: {
        type: Sequelize.STRING
      },
      schoolPhoneNo: {
        type: Sequelize.INTEGER
      },
      schoolLocation: {
        type: Sequelize.STRING
      }
    });
    return School;
  };