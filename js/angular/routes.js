youRadioApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/index");
  
  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "template/initial.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "template/register.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "template/login.html"
    })
    .state('home', {
      url: "/home",
      templateUrl: "template/home.html"
    })
    .state('contacts', {
      url: "/contacts",
      templateUrl: "template/contacts.html"
    });
});