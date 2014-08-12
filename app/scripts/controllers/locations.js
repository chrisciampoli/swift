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

var app = angular.module('swiftApp')
  .controller('LocationsCtrl', function () {
    
    this.locationName = 'Test';
    this.locationAddress = 'Default address';

    this.hasLocations = false;
    this.locations = locations;
    
    if(this.locations) {
    	this.hasLocations = true;
    }
    
    this.add = function(locationName, locationAddress){
    	// Location is going to be a package that comes
    	// from the frontside that has the complete new location object
    	// to be pushed onto the locations array
    	var location = {
    		name: locationName,
    		address: locationAddress
    	};

    	this.locations.push(location);
    };

    this.save = function() {
    	console.log('Locations saved to database!');
    };
    
    this.remove = function(location){
    	this.locations.splice(locations.indexOf(location),1);
    };
  });

app.directive('inlineEdit', function() {

    return function(scope, element) {
        element.bind('click', function(){
            element.toggleClass('inactive');
            if(element.hasClass('inactive')){
                element.blur();
                scope.$parent.locationsCtrl.save(scope.location);
            }
        });
    };

});