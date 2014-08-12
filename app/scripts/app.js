'use strict';

/**
 * @ngdoc overview
 * @name twAngularBootcampApp
 * @description
 * # twAngularBootcampApp
 *
 * Main module of the application.
 */
angular
  .module('twAngularBootcampApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
