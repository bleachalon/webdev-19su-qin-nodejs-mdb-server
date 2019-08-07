var studentModel = require("../models/student.model.server.js");

function createStudent(student) {
    return studentModel.create(student)
}

function deleteStudent(sid) {
    return studentModel.remove({_id: sid})
}

function updateStudent(sid, student){
    return studentModel.update(
        {_id: sid},
        {$set: student}
    )
}

function findAllStudents() {
    return studentModel.find()
}


function findStudentById(sid) {
    return studentModel.findById(sid)
}

function truncateStudents(){
    return studentModel.deleteMany({})
}

function populateStudents(students){
    return studentModel.insertMany(students)
}

module.exports = {
    createStudent, findAllStudents, findStudentById, updateStudent, deleteStudent,truncateStudents,populateStudents
};
