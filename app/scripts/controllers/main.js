'use strict';

/**
 * @ngdoc function
 * @name desarrolloAgilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desarrolloAgilApp
 */
angular.module('desarrolloAgilApp')
  .controller('MainCtrl', ['$scope', '$location', 'CurrentUser','Datos', function ($scope, $location,CurrentUser, Datos) {

    $scope.username= "";
    $scope.password= "";

    $scope.login = function () {
      //Aca se generea el token de autenticacion
    $scope.authToken = "Basic " + btoa($scope.username + ":" + $scope.password);

      //Aca se hace get de los datos, ahi dentro del then hay que asignar la variable que recibimos
    $scope.datos=CurrentUser.get($scope.authToken).query().$promise.then(function(data) {
      Datos.setActual(data);
      Datos.setToken($scope.authToken);
      $location.path('/repositories');
    }, function (error) {
      window.alert("Usuario o Contraseña incorrectos");
    });
    }
  }]);
