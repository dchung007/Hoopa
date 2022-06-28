const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");
const { Question } = db;

const questionsRouter = express.Router();

questionsRouter.get('/', asyncHandler(async (req, res) => {
  const questions = await Question.findAll();
  // console.log(questions);
  return res.json(questions);
}));

questionsRouter.post('/', asyncHandler(async (req, res) => {
  const { ownerId, title, description } = req.body;
  const question = await Question.create({
    ownerId,
    title,
    description
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

module.exports = questionsRouter;
