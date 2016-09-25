angular.module('ecommerce')
	.controller('LoginController', LoginController)

	

	function LoginController($scope, UserAuthenticationService) {
		var vm = this;

		_resetCredentials = function() {

		}

		vm.login = function(user) {

			UserAuthenticationService.authenticate().then(function(response) {
				console.log('UserAuthentication success');
			},
			function(error){
				console.log('UserAuthentication error');
			});

		};

		

	}

