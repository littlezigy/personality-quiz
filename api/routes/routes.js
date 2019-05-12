const test = require('./test');
const quiz = require('./quiz');
module.exports = (app) => {
    app.get('/test', test);
    app.get('/start-quiz', quiz.getQuestions);
    app.post('/results', quiz.evaluate);
}