const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const questionsRouter = require('./questions');
const asyncHandler = require('express-async-handler');
const db = require("../../db/models");

const { Question } = db;

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/questions', questionsRouter);

router.get('/', asyncHandler(async (req, res) => {
  const questions = await Question.findAll({
    limit: 10
  });
  // console.log(questions);
  return res.json(questions);
}))

// router.post('/test', function (req, res) {
//   res.json({ requestBody: req.body });
// });

// // test route GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: 'Demo-lition'
//     }
//   });
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// // test route GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// // test route GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;
