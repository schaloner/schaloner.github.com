'use strict';

/* Controllers */

var deadboltControllers = angular.module('deadboltControllers', []);

function setMenuChoice(activeId) {
    $('.menuLink').removeClass('active');
    $('#'+activeId).addClass('active').blur();
}

deadboltControllers.controller('HomeCtrl', ['$scope', 'Version', 'PlayVersions', 'DeadboltUsers',
  function($scope, Version, PlayVersions, DeadboltUsers) {

    setMenuChoice('homeLink');

    $scope.availableLanguages = [{value:'java', label:'Java'}, {value:'scala', label:'Scala'}, {value:'all', label:'All'}]
    $scope.currentLanguage = $scope.availableLanguages[0];

    Version.query({}, function(versions) {
      $scope.javaVersions = versions.java;
      $scope.scalaVersions = versions.scala;
    });

    $scope.deadboltUsers = DeadboltUsers.query({}, function(deadboltUsers) {
      $scope.choppedUsers = [];
      var currentSubset = {added:false, content:[]};
      for (var i = 0, len = deadboltUsers.length; i < len; i++) {
        if (currentSubset.content.length <= 2) {
          currentSubset.content.push(deadboltUsers[i]);
        } else {
          currentSubset = {added:false, content:[]};
          currentSubset.content.push(deadboltUsers[i]);
        }
        if (!currentSubset.added) {
          currentSubset.added = true;
          $scope.choppedUsers.push(currentSubset.content);
        }
      }
    });

    $scope.availableVersions = PlayVersions.query({}, function(playVersions) {
      $scope.currentPlayVersion = playVersions[playVersions.length - 1];
    });
  }]);

deadboltControllers.controller('JavaDocsCtrl', ['$scope', 'Version', 'PlayVersions',
  function($scope, Version, PlayVersions) {
    setMenuChoice('javaDocsLink');

    $scope.availableLanguages = [{value:'java', label:'Java'}, {value:'scala', label:'Scala'}, {value:'all', label:'All'}]
    $scope.currentLanguage = $scope.availableLanguages[0];

    Version.query({}, function(versions) {
      $scope.javaVersions = versions.java;
      $scope.scalaVersions = versions.scala;
    });

    $scope.availableVersions = PlayVersions.query({}, function(playVersions) {
      $scope.currentPlayVersion = playVersions[playVersions.length - 1];
    });

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
