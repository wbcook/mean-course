'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-course', function(err) {
  if (err) {
    console.log("Oops, failed connecting to Mongodb!");
  } else {
    console.log("Great, you've connected to Mongodb!");
  }
});
