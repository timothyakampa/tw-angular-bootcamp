'use strict';

/**
 * @ngdoc function
 * @name twAngularBootcampApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the twAngularBootcampApp
 */
angular.module('twAngularBootcampApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
