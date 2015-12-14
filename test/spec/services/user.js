'use strict';

describe('Service: user', function () {

  // load the service's module
  beforeEach(module('socialMediaProfileApp'));

  // instantiate service
  var user;
  beforeEach(inject(function (_user_) {
    user = _user_;
  }));

  it('should return a promise for getUserList function', function () {
    expect(typeof user.getUserList().then).toBe('function');
  });

});
