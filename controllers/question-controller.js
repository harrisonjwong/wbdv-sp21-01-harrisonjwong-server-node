const questionsService = require('../services/questions-service');

module.exports = (app) => {
  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params['qid'];
    questionsService.findQuestionsForQuiz(quizId)
      .then(questions => res.json(questions));
  }

  app.get('/api/quizzes/:qid/questions', findQuestionsForQuiz);
}