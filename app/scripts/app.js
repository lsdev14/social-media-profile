'use strict';

/**
 * @ngdoc overview
 * @name socialMediaProfileApp
 * @description
 * # socialMediaProfileApp
 *
 * Main module of the application.
 */

var firebaseRef;

angular
  .module('socialMediaProfileApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'angularSpinner'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })      
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function (firebaseUrl) {

    firebaseRef = new Firebase(firebaseUrl);

  });
