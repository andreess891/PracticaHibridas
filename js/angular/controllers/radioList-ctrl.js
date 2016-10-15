youRadioApp.controller('RadioListCtrl', ['$scope', '$state', 'radioListService', RadioListCtrl]);


RadioListCtrl.$inject = ['$scope', '$state','radioListService'];

function RadioListCtrl($scope, $state, radioListService) {

  init();

  function init(){
   //$scope.radioLists=radioListService.getAll();
   radioListService.getAll().then(function(data){
    $scope.radioLists=data;
   }).catch(function(error){
    console.log(error);
   });
  }

  $scope.goToPrograms = function(radio) {
  	$state.go('radioPrograms', {"radioId":radio.$id});
  }

  $scope.submit = function(channel) {
  	//Imprime el json
    //alert(JSON.stringify(channel));
    $scope.radioLists.$add(channel);
  };

  $scope.deleteRadio = function(id) {
  	$scope.radioLists.$remove(id);
  }

}