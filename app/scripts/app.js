var module = angular.module('tw', ['tw.shops', 'ngRoute']);

module.config(function($routeProvider){
	$routeProvider
	.when('/shops', {
		templateUrl: '/views/shops.html'
	})
	.when('/categories', {
		templateUrl: '/views/categories.html'
	})
	.otherwise(function(){
		redirectTo: '/shops'
	})

});

