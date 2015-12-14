'use strict';

/**
 * @ngdoc service
 * @name socialMediaProfileApp.user
 * @description
 * # user
 * Service in the socialMediaProfileApp.
 */
angular.module('socialMediaProfileApp')
  .service('user', function ($q, $firebaseArray) {
    
    this.getUserList = function () {      
      var userList = $firebaseArray(firebaseRef.child('users'));
      var q = $q.defer();

      userList.$loaded().then(function () {
          q.resolve(userList);
      }, function (e) {
        q.reject(e);
      });

      return q.promise;
    };
    
  });
