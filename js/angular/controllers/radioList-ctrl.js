youRadioApp.controller('RadioListCtrl', ['$scope', '$state', 'radioListService', RadioListCtrl]);


RadioListCtrl.$inject = ['$scope', '$state','radioListService'];

function RadioListCtrl($scope, $state, radioListService) {

  init();

  function init(){
   $scope.radioLists=radioListService.getAll();
  }

  $scope.goToPrograms = function(radio) {
  	$state.go('radioPrograms', {"radioId":radio.id});
  }
}