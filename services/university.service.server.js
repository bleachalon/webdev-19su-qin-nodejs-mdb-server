module.exports = function(app) {
	var universityDao = require('../daos/university.dao.server.js')

    function truncateDatabase(req, res) {
        universityDao.truncateDatabase().then(status => res.send(status))
    }

    function populateDatabase(req, res){
	    let students= req.body.students
        let questions= req.body.questions
        let answers= req.body.answers

        universityDao.populateDatabase(students, questions, answers).then(response => res.send(response))
    }

    app.post("/api/populate", populateDatabase)
    app.delete("/api/all", truncateDatabase);
}
