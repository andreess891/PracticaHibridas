youRadioApp.controller('RadioProgramsCtrl', ['$scope', '$stateParams', '$state', 'radioProgramsService', RadioProgramsCtrl]);


function RadioProgramsCtrl($scope, $stateParams, $state, radioProgramsService) {
	

  init();
  function init(){
  	var radioId = $stateParams.radioId;
    //$scope.radioPrograms=radioProgramsService.getRadio(radioId);
    radioProgramsService.getProgramsByChannelId(radioId).then(function(data){
	    $scope.radioPrograms=data;
	   }).catch(function(error){
	    console.log(error);
	});
    console.log($scope.radioPrograms);
  }

  $scope.goToMessages = function(program) {
    $state.go('messages', {"programId":program.$id});
  }

}