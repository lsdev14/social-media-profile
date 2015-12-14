'use strict';

describe('Service: firebase', function () {

  // load the service's module
  beforeEach(module('socialMediaProfileApp'));

  // instantiate service
  var firebase;
  beforeEach(inject(function (firebaseUrl) {
    firebase = firebaseUrl;
  }));

  it('should do something', function () {
    expect(firebase).toBe('https://socialmediaprofile.firebaseio.com/');
  });

});
