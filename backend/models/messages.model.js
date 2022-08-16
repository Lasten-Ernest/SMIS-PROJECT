module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define("messages", {
        messageId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        messageSender: {
            type: Sequelize.INTEGER
        },
        MessageReceiver: {
            type: Sequelize.INTEGER
        },
        messageBody: {
            type: Sequelize.STRING
        },
        sentDate: {
            type: Sequelize.DATE
        },
        sentTime: {
            type: Sequelize.TIME
        }
      

    });
    return Message;
  };