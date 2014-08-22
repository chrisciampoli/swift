'use strict';

/**
 * @ngdoc function
 * @name swiftApp.controller:LocationsCtrl
 * @description
 * # LocationsCtrl
 * Controller of the swiftApp
 */
var locations = [
	{
		name: 'Mission Valley',
		address: '123 Smart Land'
	},
	{
		name: 'Mission Valley',
		address: '123 Smart Land'
	},
	{
		name: 'Mission Valley',
		address: '123 Smart Land'
	},
];

angular.module('swiftApp')
  .controller('LocationsCtrl', function ($scope) {

    $scope.locationName = 'Test';
    $scope.locationAddress = 'Default address';

    $scope.hasLocations = false;
    $scope.locations = locations;
    
    if($scope.locations) {
    	$scope.hasLocations = true;
    }
    
    $scope.add = function(locationName, locationAddress){
    	// Location is going to be a package that comes
    	// from the frontside that has the complete new location object
    	// to be pushed onto the locations array
    	var location = {
    		name: locationName,
    		address: locationAddress
    	};

    	$scope.locations.push(location);
        $scope.save($scope.locations);
    };

    $scope.save = function() {
    	console.log('Locations saved to database!');
    };
    
    $scope.remove = function(location){
    	$scope.locations.splice(locations.indexOf(location),1);
        // API call out to save locations with the locations removed
        $scope.save($scope.locations);
    };
  });

