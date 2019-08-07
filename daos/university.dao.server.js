var answerDao = require ("../daos/answer.dao.server.js")
var questionDao = require ("../daos/question.dao.server.js")
var studentDao = require ("../daos/student.dao.server.js")

function truncateDatabase (){
	return answerDao.truncateAnswers().then(()=>questionDao.truncateQuestions().then(()=> studentDao.truncateStudents()))
}

function populateDatabase(students, questions, answers){
		return studentDao.populateStudents(students).then(questionDao.populateQuestions(questions).then(answerDao.populateAnswers(answers)))
}

module.exports = {
	truncateDatabase, populateDatabase

};
