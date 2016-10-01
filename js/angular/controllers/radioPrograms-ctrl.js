youRadioApp.controller('RadioProgramsCtrl', ['$scope', '$stateParams', 'radioProgramsService', RadioProgramsCtrl]);


function RadioProgramsCtrl($scope, $stateParams, radioProgramsService) {
	

  init();
  function init(){
  	var radioId = $stateParams.radioId;
    $scope.radioPrograms=radioProgramsService.getRadio(radioId);
    //console.log($scope.radioPrograms);
  }
}