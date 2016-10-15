youRadioApp.factory('messagesService', messagesService); 

messagesService.$inject = ['crudfactory'];

function messagesService(crudfactory) {

    var service = {
        getChatByProgram:getChatByProgram
    };
    return service;

    function getChatByProgram(programId) {
      return crudfactory.synchronizedModel("messagesprogram", programId, "messages").$load().then(completeSuccess).catch(completeFail);

      function completeSuccess(data){
        return data;
      }

      function completeFail(error){
      return error;
      }
      //return programs;

    };
}