'use strict';

/**
 * @ngdoc function
 * @name swiftApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swiftApp
 */
angular.module('swiftApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
