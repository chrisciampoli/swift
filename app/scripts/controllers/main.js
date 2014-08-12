'use strict';

/**
 * @ngdoc function
 * @name swiftApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swiftApp
 */
angular.module('swiftApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
