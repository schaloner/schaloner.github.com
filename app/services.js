'use strict';

/* Services */

var deadboltServices = angular.module('deadboltServices', ['ngResource']);

deadboltServices.factory('Version', ['$resource',
  function($resource){
    return $resource('./versions.json', {}, {
      query: {method:'GET', isArray: false}
  });
}]);
deadboltServices.factory('PlayVersions', ['$resource',
 function($resource){
  return $resource('./play-versions.json', {}, {
    query: {method:'GET', isArray: true}
  });
}]);
