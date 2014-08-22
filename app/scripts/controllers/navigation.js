'use strict';

/**
 * @ngdoc function
 * @name swiftApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the swiftApp
 */
angular.module('swiftApp')
  .controller('NavigationCtrl', function () {
    
    this.currentPage = 'home';
    console.log(this.currentPage);
    this.setPage = function(page) {
    	this.currentPage = page;
    };

    this.checkPage = function(page) {
    	return this.currentPage === page;
    };
  
  });
