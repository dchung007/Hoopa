'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    ownerId: {
      type: DataTypes.INTEGER,
      references: { model: 'Users' },
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Question.associate = function (models) {
    // associations can be defined here
    Question.belongsTo(models.User, { foreignKey: 'ownderId' });
    Question.hasMany(models.Answer, { foreignKey: 'questionId', onDelete: 'CASCADE', hooks: true })
  };
  return Question;
};
