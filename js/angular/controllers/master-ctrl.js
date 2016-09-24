youRadioApp.controller('MasterCtrl', MasterCtrl);


  MasterCtrl.$inject = ['$scope'];

  function MasterCtrl($scope) {
    $scope.titulo = 'Hi, hola'

    $scope.esbienbenido = true


    $scope.phones = [
     {'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.',
      'brand': 'Motorola'},
     {'name': 'Motorola XOOM™ with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.',
      'brand':'Motorola'},
     {'name': 'MOTOROLA XOOM™',
      'snippet': 'The Next, Next Generation tablet.',
      'brand': 'Motorola'}
    ];
  }