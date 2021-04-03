const questionsService = require('../services/questions-service');

module.exports = (app) => {
  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params['qid'];
    const questions = questionsService.findQuestionsForQuiz(quizId);
    res.json(questions);
  }

  app.get('/api/quizzes/:qid/questions', findQuestionsForQuiz);
}