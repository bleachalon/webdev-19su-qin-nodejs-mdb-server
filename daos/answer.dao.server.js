var answerModel = require("../models/answer.model.server.js")

function answerQuestion(answer){
    return answerModel.create(answer);
}

function findAllAnswers(){
    return answerModel.find();
}

function findAnswerById(aid){
    return answerModel.findById(aid)
}

function findAnswersByStudent(sid){
    return answerModel.find({"student" : sid})
}

function findAnswersByQuestion(qid){
    return answerModel.find({"question" : qid})
}

function findAnswersForStudentByQid(sid, qid){
    return answerModel.find({"student": sid, "question": qid});
}
function findAnswersForQuestionBySid(qid, sid){
    return answerModel.find({"student": sid, "question": qid});
}

function truncateAnswers(){
    return answerModel.deleteMany({})
}

function populateAnswers(answers){
    return answerModel.insertMany(answers)
}

module.exports = {
    answerQuestion,
    findAllAnswers,
    findAnswerById,
    findAnswersByStudent,
    findAnswersByQuestion,
    findAnswersForStudentByQid,
    findAnswersForQuestionBySid,
    truncateAnswers,
    populateAnswers
};
