'use strict';

describe('Service: feed', function () {

  // load the service's module
  beforeEach(module('socialMediaProfileApp'));

  // instantiate service
  var feed;
  beforeEach(inject(function (_feed_) {
    feed = _feed_;
  }));

  it('should return a promise for getFeedList function', function () {
    expect(typeof feed.getFeedList().then).toBe('function');
  });

});
