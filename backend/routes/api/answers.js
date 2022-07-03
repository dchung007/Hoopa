const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");
const { Answer, User } = db;

const answersRouter = express.Router();

// Answers feature routes
answersRouter.get('/:questionId(\\d+)', asyncHandler(async (req, res) => {
  const answers = await Answer.findAll({
    include: [User],
    where: {
      questionId: req.params.questionId
    }
  });
  // console.log(answers);
  return res.json(answers);
}))

answersRouter.post('/:questionId(\\d+)', asyncHandler(async (req, res) => {
  const { userId, questionId, answer } = req.body;
  const newAnswer = await Answer.create({
    userId,
    questionId,
    answer
  })
  // console.log(newAnswer)
  return res.json(newAnswer);
}));


answersRouter.delete('/:questionId(\\d+)', asyncHandler(async (req, res) => {
  if (req.body.answer) {
    const answer = await Answer.findByPk(req.body.answer.id);
    const deletedId = answer.id;
    await answer.destroy();
    return res.json(deletedId);
  }
}));

module.exports = answersRouter;
