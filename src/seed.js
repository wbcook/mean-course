'use strict';

var Question = require('./models/questions');

var questions = [
  'What is your favorite color?',
  'What is the capital of Australia?',
  'What is your quest?',
  'Why is the sky blue?',
  'How would you implement Google Maps?'
];

questions.forEach(function (question, index) {
  Question.find({ 'prompt': question }, function(err, questions) {
  	if (!err && !questions.length) {
      Question.create({ completed: false, prompt: question });
  	}
  });
});
