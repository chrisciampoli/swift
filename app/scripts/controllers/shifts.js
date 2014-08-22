'use strict';

/**
 * @ngdoc function
 * @name swiftApp.controller:ShiftsCtrl
 * @description
 * # ShiftsCtrl
 * Controller of the swiftApp
 * shift
 */
var shifts = [
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
  .controller('ShiftsCtrl', function () {
    
    this.locationName = 'Test';
    this.locationAddress = 'Default address';

    this.hasshifts = false;
    this.shifts = shifts;
    
    if(this.shifts) {
    	this.hasshifts = true;
    }
    
    this.add = function(locationName, locationAddress){
    	// shift is going to be a package that comes
    	// from the frontside that has the complete new shift object
    	// to be pushed onto the shifts array
    	var shift = {
    		name: locationName,
    		address: locationAddress
    	};

    	this.shifts.push(shift);
        this.save(this.shifts);
    };

    this.save = function() {
    	console.log('shifts saved to database!');
    };
    
    this.remove = function(shift){
    	this.shifts.splice(shifts.indexOf(shift),1);
        // API call out to save shifts with the shifts removed
        this.save(this.shifts);
    };
  });

