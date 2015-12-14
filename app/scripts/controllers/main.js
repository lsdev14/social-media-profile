'use strict';

/**
 * @ngdoc function
 * @name socialMediaProfileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the socialMediaProfileApp
 */
angular.module('socialMediaProfileApp')
  .controller('MainCtrl', ['$scope', '$log', '$timeout', 'user', 'feed', 'usSpinnerService', function ($scope, $log, $timeout, user, feed, usSpinnerService) {

    var userId = '-K5T-_Cq4ns6c8ZhTkW5';
    var userList = [];
    var feedList = [];

    $scope.feedList = [];
    $scope.friendList = [];
    $scope.post = {};


    function getUserList() {

      usSpinnerService.spin('spinner');
      user.getUserList().then(function (users) {

        userList = users;
        $log.debug('User List:', userList);

        users.forEach(function (user) {
          if (user.$id === userId) {
            $scope.user = user;
            return;
          }
        });

        getFeedList();

        users.forEach(function (user) {
          angular.forEach($scope.user.friends, function (value) {
            if (user.$id === value) {
              $scope.friendList.push(user);
            }
          });
        });

        $log.debug('Friend List:', $scope.friendList);


      }, function (e) {
        usSpinnerService.stop('spinner');
        $log.error(e);
      });

    }

    function getFeedList() {

      usSpinnerService.spin('spinner');
      feed.getFeedList().then(function (feeds) {

        feedList = feeds;

        $scope.feedList = [];
        var friends = [];
        
        friends.push($scope.user.$id);
        for(var i in $scope.user.friends){
          friends.push($scope.user.friends[i]);
        }

        feeds.forEach(function (feed) {
          angular.forEach(friends, function (value) {
            if (feed.userId === value) {
              feed.userName = getUserName(feed.userId);              
              $scope.feedList.push(feed);
            }
          });
        });

   
        $log.debug('Feed List:', $scope.feedList);

        usSpinnerService.stop('spinner');
      }, function (e) {
        usSpinnerService.stop('spinner');
        $log.error(e);
      });

    }

    var sync = $timeout(function () {
		    getUserList();
      $timeout.cancel(sync);
	   }, 1);

    function getUserName(userId) {
      var userName;

      angular.forEach(userList, function (value) {
        if (value.$id === userId) {
          userName = value.firstName + ' ' + value.lastName;
          return;
        }
      });

      return userName;
    }

    $scope.changeStatus = function () {

      $scope.user.status = $scope.user.status === 'Online' ? 'Offline' : 'Online';
      userList.$save($scope.user);
    };

    $scope.sendPost = function () {

      var post = {
        message: $scope.post.message,
        userId: $scope.user.$id,
        date: new Date().toJSON()
      };

      feedList.$add(post);      
      getFeedList();       
    };

  }]);
