var mongoose = require('mongoose');
var quizWidgetSchema = require('./quiz-widget.schema.server.js')

var quizWidgetModel =
    mongoose.model(
        'QuizWidgetModel',
        quizWidgetSchema);

module.exports = quizWidgetModel
