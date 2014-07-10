'use strict';

/* Directives */
var deadboltDirectives = angular.module('deadboltDirectives', []);
 
deadboltDirectives.directive('nextSection', function() {
  return {
      restrict: 'A',
      template: '<button type="button" class="btn btn-link" ng-click="setSection(section)">Next - {{label}}</button>',
      transclude:true,
      link: function(scope, element, attrs){
        scope.section = attrs.section;
        scope.label = attrs.label;
        scope.setSection = scope.$parent.setSection;
      }
  };
});