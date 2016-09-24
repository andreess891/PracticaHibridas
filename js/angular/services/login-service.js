youRadioApp.factory('loginService', loginService); 

loginService.$inject = [];

function loginService() {

    var service = {
        login: login
    };
    return service;

    function login(username, password) {
    	if (username == 'andreess891' && password == '1233') {
  			return true;
  		} else {
  			return false;
  		}
    };
}