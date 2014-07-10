'use strict';

/* App Module */

var deadboltIo = angular.module('deadbolt', [
  'ngRoute',
  'deadboltControllers',
  'deadboltServices',
  'deadboltDirectives',
]);

deadboltIo.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      })
    .when('/java-docs', {
        templateUrl: 'partials/java-docs.html',
        controller: 'JavaDocsCtrl'
      })
    .when('/scala-docs', {
        templateUrl: 'partials/scala-docs.html',
        controller: 'ScalaDocsCtrl'
      })
    .otherwise({
        redirectTo: '/home'
      });
  }]);
