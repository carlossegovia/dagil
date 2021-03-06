'use strict';

/**
 * @ngdoc function
 * @name desarrolloAgilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the desarrolloAgilApp
 */
angular.module('desarrolloAgilApp')
  .controller('AboutCtrl', ['$scope', '$location', 'Datos', 'User','Repos',function ($scope, $location, Datos, User, Repos) {

    $scope.actual=Datos.getActual();
    $scope.authToken=Datos.getToken();
    $scope.repos = [];
	if($scope.authToken==='')
    {
      window.alert('Ocurrio un error con la sesion del usuario');
      $location.path('/');
    }else{
    $scope.repos = Repos.get($scope.authToken).query({'username': $scope.actual.login});}




    $scope.buscado='';
    $scope.buscar= function(){
      if ($scope.buscado!==''){
        User.get($scope.authToken).query({'username': $scope.buscado}).$promise.then(function(data) {
          Repos.get($scope.authToken).query({'username': $scope.buscado}).$promise.then(function(rep) {
            $scope.actual=data;
            $scope.repos=rep;
            $scope.buscado='';
          }, function () {
            window.alert('Ocurrio un error!');
          });

        }, function (error) {
          if (error.status===404){
            window.alert('No se encuentra el usuario');
          }else{
            window.alert('Ocurrio un error con la sesion del usuario');
            $location.path('/');
          }
        });
      }
    };

  }]);
