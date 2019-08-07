module.exports = function(app) {
    var questionDao = require ("../daos/question.dao.server.js")

    function createQuestion(req,res) {
        let question = req.body;
        questionDao.createQuestion(question).then(response => res.send(response))
    }
    function findAllQuestions(req, res) {
        questionDao.findAllQuestions().then(response => res.send(response))

    }
    function findQuestionById(req, res) {
        let qid = req.params['qid']
        questionDao.findQuestionById(qid).then(response => res.send(response))
    }
    function deleteQuestion(req,res){
        let qid = req.params['qid'];
        questionDao.deleteQuestion(qid).then(status => res.send(status))
    }
    function updateQuestion(req,res){
        let question = req.body;
        let qid = req.params['qid'];
        questionDao.updateQuestion(qid, question).then(status => res.send(status))
    }

    app.post("/api/questions", createQuestion);
    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:qid", findQuestionById);
    app.delete("/api/questions/:qid", deleteQuestion);
    app.put("/api/questions/:qid", updateQuestion);
}
