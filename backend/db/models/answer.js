'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Questions' }
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Answer.associate = function (models) {
    // associations can be defined here
    Answer.belongsTo(models.User, { foreignKey: 'userId' });
    Answer.belongsTo(models.Question, { foreignKey: 'questionId' });
  };
  return Answer;
};
