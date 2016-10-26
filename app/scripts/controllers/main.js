'use strict';

/**
 * @ngdoc function
 * @name desarrolloAgilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the desarrolloAgilApp
 */
angular.module('desarrolloAgilApp')
  .controller('MainCtrl', function ($scope,User) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.username="rubenfig";
    $scope.password="mangekyou1";

    //Aca se generea el token de autenticacion
    var authToken = "Basic " + btoa($scope.username + ":" + $scope.password);

    //Aca se hace get de los datos, ahi dentro del then hay que asignar la variable que recibimos
    $scope.datos=User.get(authToken).query({'username': 'carlossegovia'}).$promise.then(function(data) {
      console.log(data);
    });
  });
