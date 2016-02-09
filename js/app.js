var app = angular.module('teaStore', ['ngRoute']);

app.directive('singleTea', function() {
	return {
		templateUrl: './templates/teaTemplate.html',
		link: function(scope,element, attributes){
		}
	};
});

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "./views/selection.html",
		controller: "Selection"
	}).when('/checkout', {
		templateUrl: "./partials/checkout.html",
		controller: "Checkout"
	});
})
