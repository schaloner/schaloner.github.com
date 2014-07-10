'use strict';

/* Controllers */

var deadboltControllers = angular.module('deadboltControllers', []);

function setMenuChoice(activeId) {
    $('.menuLink').removeClass('active');
    $('#'+activeId).addClass('active').blur();
}

deadboltControllers.controller('HomeCtrl', ['$scope', 'Version', 'PlayVersions',
  function($scope, Version, PlayVersions) {

    setMenuChoice('homeLink');

    $scope.availableLanguages = [{value:'java', label:'Java'}, {value:'scala', label:'Scala'}, {value:'all', label:'All'}]
    $scope.currentLanguage = $scope.availableLanguages[0];

    Version.query({}, function(versions) {
      $scope.javaVersions = versions.java;
      $scope.scalaVersions = versions.scala;
    });


    $scope.availableVersions = PlayVersions.query({}, function(playVersions) {
      $scope.currentPlayVersion = playVersions[playVersions.length - 1];
    });
  }]);

deadboltControllers.controller('JavaDocsCtrl', ['$scope',
  function($scope) {
    setMenuChoice('javaDocsLink');

    $scope.section = 'intro';
    $scope.setSection = function(section) {
      $scope.section = section;
    };
  }]);


deadboltControllers.controller('ScalaDocsCtrl', ['$scope',
  function($scope) {
    setMenuChoice('scalaDocsLink');

    $scope.section = 'intro';
  }]);
