'use strict';

/**
 * @ngdoc function
 * @name desarrolloAgilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the desarrolloAgilApp
 */
angular.module('desarrolloAgilApp')
  .controller('AboutCtrl', ['$scope', '$location', 'Datos', 'User',function ($scope, $location, Datos, User) {

    $scope.actual=Datos.getActual();
    $scope.authToken=Datos.getToken();
    if($scope.authToken==="")
    { console.log("asdfasfasfd");
      window.alert("Ocurrio un error con la sesion del usuario");
      $location.path('/');
    }
    $scope.buscado="";
    $scope.buscar= function(){
      if ($scope.buscado!==""){
          User.get($scope.authToken).query({'username': $scope.buscado}).$promise.then(function(data) {
          console.log(data);
          $scope.actual=data;
        }, function (error) {
          if (error.status==404){
            window.alert("No se encuentra el usuario");
          }else{
            window.alert("Ocurrio un error con la sesion del usuario");
            $location.path('/');
          }
        });
      }
    }
  }]);
