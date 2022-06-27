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
  // const id = await PokemonRepository.create(req.body);
  // console.log(`-----------------${id}-------------------`);
  // return res.redirect(`${req.baseUrl}/${id}`);
  const { ownerId, title, description } = req.body;
  const question = await Question.create({
    ownerId,
    title,
    description
  })
  return res.redirect(`${req.baseUrl}/${question.id}`)
}));

// questionsRouter.put('/:id(\\d+)', asyncHandler(async (req, res) => {
//   const question = await Question.findByPk(req.params.id);
//   question
// }));

// questionsRouter.delete('/:id(\\d+)', asyncHandler(async (req, res) => {

// }));

module.exports = questionsRouter;
