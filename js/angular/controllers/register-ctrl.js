youRadioApp.controller('RegisterCtrl', ['$scope', '$state', 'registerService', RegisterCtrl]);


  function RegisterCtrl($scope, $state, registerService) {
  	$scope.submit = function() {
      if ($scope.userForm.$invalid) {
        return;
      } 
      if ($scope.userForm.$valid) {
        var response = registerService.register($scope.username, $scope.password, $scope.confirmPassword);
        if (response) {
          alert('Se ha registrado el usuario.')
        } else {
          alert('error');
        }
      }
  	}
  }