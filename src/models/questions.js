'use strict';

var mongoose = require('mongoose');

// question.prompt
// question.completed

var questionSchema = new mongoose.Schema({
  prompt: String,
  completed: Boolean
});

var model = mongoose.model('Question', questionSchema);

module.exports = model;
