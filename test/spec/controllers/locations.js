'use strict';

describe('Controller: LocationsCtrl', function () {

  // load the controller's module
  beforeEach(module('swiftApp'));

  var LocationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LocationsCtrl = $controller('LocationsCtrl', {
      $scope: scope
    });
    scope.locations = [
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
  }));

  it('should attach a list of locations to the scope', function () {
    expect(scope.locations.length).toBe(3);
  });

  it('should have a method of name add to the scope', function() {
    expect(scope.add).toBeDefined();
  });

  it('should have a method of name save to the scope', function() {
    expect(scope.save).toBeDefined();
  });

  it('should have a method of name remove to the scope', function() {
    expect(scope.remove).toBeDefined();
  });

  it('should have a new location when adding the mock using the add method', function() {
     scope.add('test','testing');
     expect(scope.locations.length).toBe(4);
  });

  it('should have one less location when removing from the mock using the remove method', function() {
     scope.remove(0);
     expect(scope.locations.length).toBe(2);
  });

});
