let questions = require('./questions.json');

const findQuestionsForQuiz = (quizId) =>
  questions.filter(question => question.quizId === quizId);

module.exports = {
  findQuestionsForQuiz
};