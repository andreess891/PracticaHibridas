youRadioApp.controller('MessagesCtrl', ['$scope', '$stateParams', '$cookies', 'messagesService', MessagesCtrl]);


function MessagesCtrl($scope, $stateParams, $cookies, messagesService) {
	

  init();
  function init(){
  	var programId = $stateParams.programId;
    messagesService.getChatByProgram(programId).then(function(data){
	    $scope.messages=data;
	   }).catch(function(error){
	    console.log(error);
	});
    console.log($scope.messages);
  }

  $scope.submit = function(message) {
    //Imprime el json
    //alert(JSON.stringify(channel));
    var messageToAdd = {};
    messageToAdd.username = $cookies.get('username');
    messageToAdd.message = message;
    
    $scope.messages.$add(messageToAdd);
  };

}