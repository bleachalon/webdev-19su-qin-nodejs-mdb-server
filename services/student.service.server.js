module.exports = function(app) {
    var studentDao = require ("../daos/student.dao.server.js")

    function createStudent(req, res) {
        var student = req.body;
        studentDao.createStudent(student).then(response => res.send(response))
    }
    function deleteStudent(req, res) {
        var sid = req.params['sid'];
        studentDao.deleteStudent(sid).then(status => res.send(status))
    }
    function findAllStudents(req, res) {
        studentDao.findAllStudents().then(response => res.send(response))
    }
    function findStudentById(req, res) {
        var sid = req.params['sid'];
        studentDao.findStudentById(sid).then(response => res.send(response))
    }
    function updateStudent(req, res){
        var sid = req.params['sid'];
        var studentUpdates = req.body
        studentDao.updateStudent(sid, studentUpdates).then(status => res.send(status))
    }

    app.post("/api/students", createStudent);
    app.get("/api/students", findAllStudents);
    app.get("/api/students/:sid", findStudentById);
    app.delete("/api/students/:sid", deleteStudent);
    app.put("/api/students/:sid", updateStudent);
}
