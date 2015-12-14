'use strict';

/**
 * @ngdoc service
 * @name socialMediaProfileApp.feed
 * @description
 * # feed
 * Service in the socialMediaProfileApp.
 */
angular.module('socialMediaProfileApp')
    .service('feed', function ($q, $firebaseArray) {
    
    this.getFeedList = function () {      
      var feedList = $firebaseArray(firebaseRef.child('feeds'));
      var q = $q.defer();

      feedList.$loaded().then(function () {
          q.resolve(feedList);
      }, function (e) {
        q.reject(e);
      });

      return q.promise;
    };
    
  });

