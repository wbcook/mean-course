'use strict';

var express = require('express');
var Question = require('../models/questions')
// var todos = require('../../mock/questions.json')

var router = express.Router();

router.get('/questions', function(req, res) {
  Question.find({}, function(err, questions) {
    if (err) {
      return res.status(500).json({message: err.message});
    } else {
      res.json({questions: questions});
    }
  });
});

router.post('/questions', function(req, res) {
  var question = req.body;
  Question.create(question, function(err, question) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'question': question, message: 'Question created, Yippee!'});
  });
});

router.put('/questions/:id', function(req, res) {
  var id = req.params.id;
  var question = req.body;
  if(question && question._id !== id){
    return res.status(500).json({err: "Ids don't match!"});
  }
  Question.findByIdAndUpdate(id, question, {new: true}, function(err, question) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
    res.json({'question': question, message: 'Question updated, Hooray!'});
  });
});

router.delete('/questions/:id', function(req, res) {
  var id = req.params.id;
  Question.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Question Deleted' });
  });
});

module.exports = router;
