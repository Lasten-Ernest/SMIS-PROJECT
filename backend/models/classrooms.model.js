module.exports = (sequelize, Sequelize) => {
    const Classrooms = sequelize.define("classrooms", {
      roomId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      roomName: {
        type: Sequelize.STRING
      }
    });
    return Classrooms;
  };