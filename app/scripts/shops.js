var shops = angular.module('tw.shops', []);

var shopController = function ($scope, ShopsService) {
	ShopsService.shops().then(function (response) {
		$scope.shops = response.data;
	});

	ShopsService.categories().then(function (responses) {
		$scope.categories = responses;
	});
}

shops.controller('ShopsController', shopController);

shops.factory('ShopsService', function($http, $q){
	var getCategoriesPromises = function (response){
			return response.data.map(function (data) {
			return $http.jsonp('http://shop-keeper.herokuapp.com/shops/'+data.id+'/categories.js?callback=JSON_CALLBACK', {cache: true})
		});
	};

	return {
		shops: function(){
			return $http.jsonp('http://shop-keeper.herokuapp.com/shops.js?callback=JSON_CALLBACK');
		},
		categories: function () {
			return this.shops()
			.then(getCategoriesPromises)
			.then(function (categoriesPromises) {
				return $q.all(categoriesPromises);
			});
		},
		// products: function () {
		// 	return this.categories()
		// 	.then(function (responses) {

		// 	});
		// }

	}
});

shops.directive('magnifyMe', function(){
	return {
		link: function(scope, elem, attr){
			elem.bind('mouseover', function(){
				elem.css('font-size', '27px')
			});

			elem.bind('mouseout', function(){
				elem.css('font-size', '12px')
			})
		}
	}
});


