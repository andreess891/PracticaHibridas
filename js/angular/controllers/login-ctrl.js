youRadioApp.controller('LoginCtrl', LoginCtrl);


LoginCtrl.$inject = ['$scope', '$state', '$cookies', 'loginService'];

function LoginCtrl($scope, $state, $cookies, loginService) {

  $scope.submit = function() {
    if ($scope.userForm.$invalid) {
      return;
    }
    if ($scope.userForm.$valid) {
     //alert('es valida');
      loginService.login($scope.username, $scope.password).then(function (authData) {
          if(authData){
            if(angular.isDefined(authData.code)){
              alert(authData.message);
            }else{
              alert("Perfecto");
              $cookies.put('username', $scope.username);
              $state.go('radioList');   
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