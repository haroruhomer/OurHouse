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

.controller('homeCtrl', function($scope, $rootScope) {
    $scope.$on('$ionicView.enter', function(event, data) {
      console.log(localStorage.getItem('id'));
      /* Act on the event */
    });
  })
  .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
    function initialize() {
      var myLatlng = new google.maps.LatLng(43.07493, -89.381388);

      var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

      //Marker + infowindow + angularjs compiled ng-click
      var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
      var compiled = $compile(contentString)($scope);

      var infowindow = new google.maps.InfoWindow({
        content: compiled[0]
      });

      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Uluru (Ayers Rock)'
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });

      $scope.map = map;
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    $scope.centerOnMe = function() {
      if (!$scope.map) {
        return;
      }

      $scope.loading = $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: false
      });

      navigator.geolocation.getCurrentPosition(function(pos) {
        $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        $scope.loading.hide();
      }, function(error) {
        alert('Unable to get location: ' + error.message);
      });
    };

    $scope.clickTest = function() {
      alert('Example of infowindow with ng-click')
    };

  })
  .controller('PlaylistCtrl', function($scope, $stateParams) {});
