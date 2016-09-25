angular.module('ecommerce')
	.service('UserAuthenticationService', UserAuthenticationService)

	//UserAuthenticationService.$inject(['$http']);

	function UserAuthenticationService($http) {
		var service = {}

		service.authenticate = authenticate

		return service;

		function authenticate(user) {

			//console.log('authenticate');
			$http.get('/api/ecommerce/login', user)
			.success(function(response) {
				console.log(response);
			})
			.error(function(error) {
				console.log(error);
			})
			
		}
	}