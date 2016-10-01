youRadioApp.factory('radioListService', radioListService); 

radioListService.$inject = [];

function radioListService() {

    var radio_list = [{"id":1,"name":"Radioacktiva"}, {"id":2,"name":"La FM"}, {"id":3,"name":"Caracol Radio"}];

    var service = {
        getAll:getAll
    };
    return service;

    function getAll() {
        return radio_list;
    };
}