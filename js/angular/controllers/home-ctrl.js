youRadioApp.controller('HomeCtrl', ['$scope', '$state', 'homeService', HomeCtrl]);

  HomeCtrl.$inject = ['$scope', '$state','homeService'];

  function HomeCtrl($scope, $state, homeService) {
  	$scope.tituloInicial = 'Bienvenido'

  	$scope.submit = function() {
  		homeService.logout();
  		$state.go('login');
  	}
  }

