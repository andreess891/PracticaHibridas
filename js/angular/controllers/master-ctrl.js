/*youRadioApp.controller('MasterCtrl', MasterCtrl);


  MasterCtrl.$inject = ['$scope'];

  function MasterCtrl($scope) {
    $scope.titulo = 'Hi, hola'

    $scope.esbienbenido = true


    $scope.phones = [
     {'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.',
      'brand': 'Motorola'},
     {'name': 'Motorola XOOM™ with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.',
      'brand':'Motorola'},
     {'name': 'MOTOROLA XOOM™',
      'snippet': 'The Next, Next Generation tablet.',
      'brand': 'Motorola'}
    ];
  }*/

  youRadioApp.controller('MasterCtrl', MasterCtrl);

MasterCtrl.$inject = ['$scope', '$state', 'loginService'];

function MasterCtrl($scope, $state, loginService) {

  $scope.goToregister = function(){
    //alert('Hola');
    $state.go('register');
  }

  $scope.goToLogin = function(){
    //alert('Hola');
    $state.go('login');
  }

  $scope.loginfacebook = function(){
    loginService.loginfacebook().then(function (authData) {
          if(authData){
            if(angular.isDefined(authData.code)){
              alert(authData.message);
            }else{
              alert("Perfecto");
              $state.go('channels');   
            }
            
          }
        }).catch(function (error) {
          if(error){
            alert("No fue posible el logueo");
          }
        });   
    
  }

}