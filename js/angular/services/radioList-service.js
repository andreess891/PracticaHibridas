youRadioApp.factory('radioListService', radioListService); 

radioListService.$inject = ['crudfactory'];

/*function radioListService() {

    var radio_list = [{"id":1,"name":"Radioacktiva"}, {"id":2,"name":"La FM"}, {"id":3,"name":"Caracol Radio"}];

    var service = {
        getAll:getAll
    };
    return service;

    function getAll() {
        return radio_list;
    };
}*/

function radioListService(crudfactory) {

  var channels=[{"id":1, "name":"RadioUno"}, {"id":2, "name":"RCNRadio"}];

    var service = {
        getAll:getAll
    };
    return service;

    function getAll() {
      return crudfactory.synchronizedModel("channels").$load().then(completeSuccess).catch(completeFail);

      function completeSuccess(data){
      return data;
      }

      function completeFail(error){
      return error;
      }
      //return channels;

    };
}