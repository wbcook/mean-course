'use strict';

var angular = require('angular');

angular.module('meanCourseApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/week/:weekId/module/:moduleId', {
    templateUrl: function(urlattr){
      return 'templates' + '/week' + urlattr.weekId + '/module' + urlattr.moduleId + '.html';
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
