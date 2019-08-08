var questionModel = require("../data/models/question.model.server.js")

function createQuestion	(question) {
    return questionModel.create(question)
}
function findAllQuestions() {
    return questionModel.find()
}
function findQuestionById(qid) {
    return questionModel.findById(qid)
}
function deleteQuestion(qid) {
    return questionModel.remove({_id: qid})
}

function updateQuestion(qid, question){
    return questionModel.update(
        {_id: qid},
        {$set: question}
    )
}

function truncateQuestions(){
    return questionModel.deleteMany({})
}

function populateQuestions(questions){
    return questionModel.insertMany(questions)
}

module.exports = {
    createQuestion,
    findAllQuestions,
    findQuestionById,
    deleteQuestion,
    updateQuestion,
    truncateQuestions,
    populateQuestions
};
