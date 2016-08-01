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

  .controller('publishCtrl', function($scope, $stateParams) {
    $scope.oferta=[
    {
      text:"Venta",
      value: 1
    },
    {
      text:"Arriendo",
      value: 2
    },
    {
      text:"Remate",
      value: 3
    },
    {
      text:"Permuta",
      value: 4
    },  
    {
      text:"Arriendo y venta",
      value: 5
    }];


    $scope.inmueble=[
    {
      text:"Casa",
      value: 1
    },
    {
      text:"Apartamento",
      value: 2
    },
    {
      text:"Apartaestudio",
      value: 3
    },
    {
      text:"Bodega",
      value: 4
    },
    {
      text:"Casa Lote",
      value: 5
    },
    {
      text:"Edificio",
      value: 6
    },
    {
      text:"Habitación",
      value: 7
    },
    {
      text:"Local",
      value: 8
    }, 
    {
      text:"Lote",
      value: 9
    },
    {
      text:"Oficina",
      value: 10
    },
    {
      text:"Parqueadero",
      value:11
    },
    {
      text:"Consultorio",
      value: 12
    },
    {
      text:"Rural",
      value: 13
    },
    {
      text:"Cabaña",
      value: 14
    },
    {
      text:"Condominio",
      value: 15
    },
    {
      text:"Finca",
      value: 16
    },
    {
      text:"Casa Campestre",
      value: 17
    }];
  
    $scope.estado=[
    {
      text:"Usado",
      value: 1
    },    
    {
      text:"Nuevo Proyecto",
      value: 2
    }];

    $scope.etiqueta=[
    {
      text:'Nuevo Anuncio',
      value:1
    },
    {
      text:'Venta Directa',
      value:2
    },
    {
      text:'Inmobiliaria',
      value:3
    },
    {
      text:'Agente Independiente',
      value:4
    },
    {
      text:'Nuevo Proyecto',
      value:5
    }];

    $scope.antiguedad=[
    {
      text:'A Estrenar',
      value:1
    },
    {
      text:'En Contrucción',
      value:2
    },
    {
      text:'1 Año',
      value:3
    },
    {
      text:'2 Años',
      value:4
    },
    {
      text:'3 Años',
      value:5
    },
    {
      text:'4 Años',
      value:6
    },
    {
      text:'5 o mas Años',
      value:7
    }];

    $scope.pisos=[
    {
      text:'1 Piso',
      value:1
    },
    {
      text:'2 Pisos',
      value:2
    },
    {
      text:'3 Pisos',
      value:3
    },
    {
      text:'4 Pisos',
      value:4
    },
    {
      text:'5 o más Pisos',
      value:5
    }];

    $scope.habs=[
    {
      text:'1 Habitacion',
      value:1
    },
    {
      text:'2 Habitaciones',
      value:2
    },
    {
      text:'3 Habitaciones',
      value:3
    },
    {
      text:'4 Habitaciones',
      value:4
    },
    {
      text:'5 o más Habitaciones',
      value:5
    }];

        $scope.banios=[
    {
      text:'1 Baño',
      value:1
    },
    {
      text:'2 Baños',
      value:2
    },
    {
      text:'3 Baños',
      value:3
    },
    {
      text:'4 Baños',
      value:4
    },
    {
      text:'5 o más Baños',
      value:5
    }];

    $scope.paises=[
      {
        text:'Colombia',
        value:1
      },
      {
        text:'España',
        value:2
      }];


    $scope.deptos=[
      {
        text:'Amazonas',
        value:1
      },
      {
        text:'Antioquia',
        value:2
      },
      {
        text:'Arauca',
        value:3
      },
      {
        text:'Atlantico',
        value:4
      },      
      {
        text:'Bolivar',
        value:5
      },
      {
        text:'Boyaca',
        value:6
      },
      {
        text:'Caldas',
        value:7
      },
      {
        text:'Caqueta',
        value:8
      },
      {
        text:'Casanare',
        value:9
      },
      {
        text:'Cauca',
        value:10
      },
      {
        text:'Cesar',
        value:11
      },
      {
        text:'Choco',
        value:12
      },      
      {
        text:'Cordoba',
        value:13
      },
      {
        text:'Cundinamarca',
        value:14
      },
      {
        text:'Guainia',
        value:15
      },
      {
        text:'Guaviare',
        value:16
      },      
      {
        text:'Huila',
        value:17
      },
      {
        text:'La Guajira',
        value:18
      },
      {
        text:'Magdalena',
        value:19
      },
      {
        text:'Meta',
        value:20
      },      
      {
        text:'Nariño',
        value:21
      },
      {
        text:'Norte de Santander',
        value:22
      },
      {
        text:'Putumayo',
        value:23
      },
      {
        text:'Quindio',
        value:24
      },
            {
        text:'Risaralda',
        value:25
      },
      {
        text:'San Andres y Providencia',
        value:26
      },
      {
        text:'Santander',
        value:27
      },
      {
        text:'Sucre',
        value:28
      },      
      {
        text:'Tolima',
        value:29
      },
      {
        text:'Valle del Cauca',
        value:30
      },
      {
        text:'Vaupes',
        value:31
      },
      {
        text:'Vichada',
        value:32
      }];

    $scope.ciudades=[
    {
        text:'Amazonas',
        value:1
      },
      {
        text:'Antioquia',
        value:2
      },
      {
        text:'Arauca',
        value:3
      },
      {
        text:'Atlantico',
        value:4
      },      
      {
        text:'Bolivar',
        value:5
      },
      {
        text:'Boyaca',
        value:6
      },
      {
        text:'Caldas',
        value:7
      },
      {
        text:'Caqueta',
        value:8
      },
      {
        text:'Casanare',
        value:9
      },
      {
        text:'Cauca',
        value:10
      },
      {
        text:'Cesar',
        value:11
      },
      {
        text:'Choco',
        value:12
      },      
      {
        text:'Cordoba',
        value:13
      },
      {
        text:'Cundinamarca',
        value:14
      },
      {
        text:'Guainia',
        value:15
      },
      {
        text:'Guaviare',
        value:16
      },      
      {
        text:'Huila',
        value:17
      },
      {
        text:'La Guajira',
        value:18
      },
      {
        text:'Magdalena',
        value:19
      },
      {
        text:'Meta',
        value:20
      },      
      {
        text:'Nariño',
        value:21
      },
      {
        text:'Norte de Santander',
        value:22
      },
      {
        text:'Putumayo',
        value:23
      },
      {
        text:'Quindio',
        value:24
      },
            {
        text:'Risaralda',
        value:25
      },
      {
        text:'San Andres y Providencia',
        value:26
      },
      {
        text:'Santander',
        value:27
      },
      {
        text:'Sucre',
        value:28
      },      
      {
        text:'Tolima',
        value:29
      },
      {
        text:'Valle del Cauca',
        value:30
      },
      {
        text:'Vaupes',
        value:31
      },
      {
        text:'Vichada',
        value:32
      }];
  });
