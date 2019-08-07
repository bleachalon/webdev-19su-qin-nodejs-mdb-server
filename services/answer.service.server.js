module.exports = function(app) {
    var answerDao = require ("../daos/answer.dao.server.js")

    function answerQuestion(req, res){
        let answer = req.body;
        answerDao.answerQuestion(answer).then(response => res.send(response))
    }

    function findAllAnswers(req, res) {
        answerDao.findAllAnswers().then(response => res.send(response))
    }

    function findAnswersForStudentByQid(req, res){
        let qid = req.params['qid'];
        let sid = req.params['sid'];
        answerDao.findAnswersForStudentByQid(sid, qid).then(response => res.send(response))
    }
    function findAnswersForQuestionBySid(req, res){
        let qid = req.params['qid'];
        let sid = req.params['sid'];
        answerDao.findAnswersForQuestionBySid(qid, sid).then(response => res.send(response))
    }

    app.post("/api/answerQuestion", answerQuestion);
    app.get("/api/answers", findAllAnswers);
    app.get("/api/students/:sid/questions/:qid/answers", findAnswersForStudentByQid);
    app.get("/api/questions/:qid/students/:sid/answers", findAnswersForQuestionBySid);

}
