const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');
const { Question, Answer, User } = db;


const questionsRouter = express.Router();

questionsRouter.get('/', asyncHandler(async (req, res) => {
  const questions = await Question.findAll({
    include: [User]
  });
  // console.log(questions);
  return res.json(questions);
}));

questionsRouter.post('/', singleMulterUpload("image"), asyncHandler(async (req, res) => {
  const { ownerId, title, description } = req.body;
  const image = await singlePublicFileUpload(req.file);
  const question = await Question.create({
    ownerId,
    title,
    description,
    image
  })
  // console.log(question)
  return res.json(question);
}));

questionsRouter.put('/:id(\\d+)', asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const question = await Question.findByPk(req.params.id);
  // const update = await Question.update(question, {
  //   where: { id: question.id }
  // })
  await question.update({ title, description });
  await question.save();
  // must save after update
  return res.json(question);
}));

questionsRouter.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  const question = await Question.findByPk(req.params.id);
  const deletedId = question.id;
  await question.destroy();
  return res.json(deletedId);
}));

// questionsRouter.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
//   if (req.body.title) {
//     const question = await Question.findByPk(req.params.id);
//     const deletedId = question.id;
//     await question.destroy();
//     return res.json(deletedId);
//   }
//   if (req.body.answer) {
//     const answer = await Answer.findByPk(req.body.answer.id);
//     const deletedId = answer.id;
//     await answer.destroy();
//     return res.json(deletedId);
//   }
// }));

// // Answers feature routes
// questionsRouter.get('/:id(\\d+)', asyncHandler(async (req, res) => {
//   const answers = await Answer.findAll({
//     where: {
//       questionId: req.params.id
//     },
//     include: [User]
//   });
//   // console.log(answers);
//   return res.json(answers);
// }))

// questionsRouter.post('/:id(\\d+)', asyncHandler(async (req, res) => {
//   const { userId, questionId, answer } = req.body;
//   const newAnswer = await Answer.create({
//     userId,
//     questionId,
//     answer
//   })
//   // console.log(newAnswer)
//   return res.json(newAnswer);
// }));

module.exports = questionsRouter;
