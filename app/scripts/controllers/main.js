'use strict';

/**
 * @ngdoc function
 * @name twAngularBootcampApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twAngularBootcampApp
 */
angular.module('twAngularBootcampApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
