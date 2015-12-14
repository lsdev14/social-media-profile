'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('socialMediaProfileApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('controller should exist', function () {
    expect(MainCtrl).toBeDefined();
  });
  
  it('scope should exist', function () {
    expect(scope).toBeDefined();
  });
  
  it('changeStatus function should exist', function () {
    expect(scope.changeStatus).toBeDefined();
  });
  
  it('sendPost function should exist', function () {
    expect(scope.changeStatus).toBeDefined();
  });
  
});
