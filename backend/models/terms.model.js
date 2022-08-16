module.exports = (sequelize, Sequelize) => {
    const Term = sequelize.define("terms", {
      termId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      termName: {
        type: Sequelize.STRING
      }
    });
    return Term;
  };