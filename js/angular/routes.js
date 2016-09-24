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
    .state('list', {
      url: "/list",
      templateUrl: "template/list.html"
    });
});