angular.module('nuestracasa.controllers', [])

.controller('ncCtrl', function($scope, $rootScope, $window, $ionicModal, $http) {
  $scope.session = false;
  $scope.session = angular.isDefined(localStorage.getItem('name'));
  $scope.usuario = localStorage.getItem('name');
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
    var request = {
      method: 'POST',
      url: 'https://nuestracasa.com.co/pruebas_movil/login.php',
      headers: {
        'Content-Type': undefined
      },
      data: {
        email: $scope.loginData.email,
        password: $scope.loginData.password
      },
      timeout: 15000
    }

    $http(request)
      .then(function success(response) {
        console.log("Exito:" + response.data.msg);
        if (response.data.msg == "validacion correcta") {
          console.log("Exito:" + response.data.user.id);
          localStorage.setItem('id', response.data.user.id);
          localStorage.setItem('name', response.data.user.name);
          $scope.modal.hide();
          $window.location.href = '#/menu/home';

        } else {
          alert(response.data.msg);
        }
      }, function error(response) {
        console.log("Error: " + response.status);
        alert("No se pudo Conectar");
      });
  };
})

.controller('homeCtrl', function($scope) {
    $scope.$on('$ionicView.enter', function(event, data) {
      console.log(localStorage.getItem('id'));
      /* Act on the event */
    });
  })
  .controller('MapCtrl', function($scope, $ionicLoading) {
    $scope.$on("$ionicView.beforeEnter", function(event, data) {
      $scope.latitud = 0;
      $scope.longitud = 0;
      $scope.precision = 0;
      navigator.geolocation.getCurrentPosition(
        function(position) {

          $scope.latitud = position.coords.latitude;
          $scope.longitud = position.coords.longitude;
          $scope.precision = position.coords.accuracy;
        },
        function(error) {
          alert("Fallo al obtener la localización del dispositivo")
        }, {
          enableHighAccuracy: true
        }
      );
    });
    $scope.$on('$ionicView.enter', function(event, data) {
      console.log("AccountCtrl");
      $scope.initialise = function() {
        console.log("In Google.maps.event.addDomListener");
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        console.log(mapOptions);
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        navigator.geolocation.getCurrentPosition(function(pos) {
          console.log(pos);
          map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          var myLocation = new google.maps.Marker({
            position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            map: map,
            title: "My Location"
          });
        });

        $scope.map = map;
      };
      google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
    })
  })
  .controller('PlaylistCtrl', function($scope, $stateParams) {});
