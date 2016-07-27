angular.module('nuestracasa.controllers', [])

.controller('ncCtrl', function($scope, $rootScope, $window, $ionicModal, $http) {

  $scope.session=angular.isDefined(localStorage.getItem('name'));
  $scope.usuario=localStorage.getItem('name');
  $scope.loginData = {};
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    var request= {
      method: 'POST',
      url: 'https://nuestracasa.com.co/pruebas_movil/login.php',
      headers: {
        'Content-Type': undefined
      },
      data: {email:$scope.loginData.email, password: $scope.loginData.password},
      timeout: 15000
    }

    $http(request)
      .then(function success(response){
        console.log("Exito:" +response.data.msg);
        if (response.data.msg=="validacion correcta") {
          console.log("Exito:" +response.data.user.id);
          localStorage.setItem('id',response.data.user.id);
          localStorage.setItem('name',response.data.user.name);
          $scope.modal.hide();
          $window.location.href='#/menu/home';

        }else {
          alert(response.data.msg);
        }
      }, function error(response) {
        console.log("Error: "+response.status);
        alert("No se pudo Conectar");
      });
  };
})

.controller('homeCtrl', function($scope,$rootScope) {
    $scope.$on('$ionicView.enter',function(event, data) {
      console.log(localStorage.getItem('id'));
      /* Act on the event */
    });
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
