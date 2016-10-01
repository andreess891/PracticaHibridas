youRadioApp.factory('loginService', loginService); 

loginService.$inject = ['localStorageService'];

function loginService(localStorageService) {

    var service = {
        login: login
    };
    return service;

    function login(username, password) {
    	if (username == 'andreess891' && password == '1233') {
        localStorageService.set("token", "ZKLKASLKASA9310NAS");
        localStorageService.set("username", username);
  			return true;
  		} else {
  			return false;
  		}
    };
}