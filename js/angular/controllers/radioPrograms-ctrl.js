youRadioApp.controller('RadioProgramsCtrl', ['$scope', '$stateParams', 'radioProgramsService', RadioProgramsCtrl]);


function RadioProgramsCtrl($scope, $stateParams, radioProgramsService) {
	

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
}