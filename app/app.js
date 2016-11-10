'use strict';

var angular = require('angular');

angular.module('meanCourseApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/week/:weekId/module/:moduleId', {
    // When templateUrl is a function it takes an Array[] of route params.
    templateUrl: function(urlparams){
      return 'templates' + '/week' + urlparams.weekId + '/module' + urlparams.moduleId + '.html';
    },
    // templateUrl: 'templates/module.html',
    controller: 'mainCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
  // use the HTML5 History API
  $locationProvider.html5Mode(true);
}]);

require('./scripts/controllers/main.js');
require('../node_modules/angular-route/angular-route.js');
