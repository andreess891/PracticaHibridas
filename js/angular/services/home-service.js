youRadioApp.factory('homeService', homeService); 

homeService.$inject = ['localStorageService'];

function homeService(localStorageService) {

    var service = {
        logout: logout
    };
    return service;

    function logout() {
      localStorageService.removeItem("token");
      localStorageService.removeItem("username");
    };
}