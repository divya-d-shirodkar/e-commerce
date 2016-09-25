angular.module('ecommerce')
		.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.when('', '/login' );

			$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: './views/login.html',
				controller: 'LoginController',
				controllerAs: 'login'
			})	
			.state('home', {
				url: '/home',
				templateUrl: './views/home.html'
			})		

		});