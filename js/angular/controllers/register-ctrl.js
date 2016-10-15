youRadioApp.controller('RegisterCtrl', ['$scope', '$state', 'registerService', 'loginService', RegisterCtrl]);


  function RegisterCtrl($scope, $state, registerService, loginService) {
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

    getUsers();

    function getUsers() {
      $scope.users = loginService.getSynchronizedUsers(); 
    }

    $scope.newUserSubmit = function() {
    if ($scope.userForm.$invalid) {
      return;
    }
    if ($scope.userForm.$valid) {

      if(!angular.equals($scope.password, $scope.password)){
        alert("El password no coincide");
        return;
      }

     //alert('es valida');
      loginService.register($scope.username, $scope.password).then(function (authData) {
          if(authData){
            if(angular.isDefined(authData.code)){
              alert(authData.message);
            }else{
               var jsonData={};
              jsonData["name"]="none";
              $scope.users.$set($scope.username,jsonData);
              alert("Perfecto ya puedes ingresar");
              $state.go('login');   
            }
            
          }
        }).catch(function (error) {
          if(error){
            alert("No fue posible el logueo");
          }
        });   
    }
  };

  }