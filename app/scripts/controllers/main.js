'use strict';

/**
 * @ngdoc function
 * @name desarrolloAgilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desarrolloAgilApp
 */
angular.module('desarrolloAgilApp')
  .controller('MainCtrl', ['$scope', '$location', 'User','Datos', function ($scope, $location, User, Datos) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.username= "";
    $scope.password= "";

    $scope.login = function () {
      //Aca se generea el token de autenticacion
    $scope.authToken = "Basic " + btoa($scope.username + ":" + $scope.password);

      //Aca se hace get de los datos, ahi dentro del then hay que asignar la variable que recibimos
    $scope.datos=User.get($scope.authToken).query({'username': $scope.username}).$promise.then(function(data) {
      console.log(data);
      Datos.setActual(data);
      Datos.setToken($scope.authToken);
      $location.path('/about');
    }, function (error) {
      window.alert("Usuario o Contraseña incorrectos");
    });
    }
  }]);
