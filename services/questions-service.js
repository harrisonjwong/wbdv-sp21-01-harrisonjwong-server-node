let questionsDao = require('../daos/questions-dao');

const findQuestionsForQuiz = (quizId) =>
  questionsDao.findQuestionsForQuiz(quizId);

module.exports = {
  findQuestionsForQuiz
};