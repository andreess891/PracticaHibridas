youRadioApp.controller('LoginCtrl', ['$scope', '$state', 'loginService', LoginCtrl]);

  function LoginCtrl($scope, $state, loginService) {
  	$scope.submit = function() {
  		var response = loginService.login($scope.username, $scope.password);
  		if (response) {
  			$state.go('home');
  		} else {
  			alert('Login fallido');
  		}
  	}
  }