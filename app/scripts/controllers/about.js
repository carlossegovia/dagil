'use strict';

/**
 * @ngdoc function
 * @name desarrolloAgilApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the desarrolloAgilApp
 */
angular.module('desarrolloAgilApp')
  .controller('AboutCtrl', ['$scope', 'Datos',function ($scope, Datos) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log(Datos.getToken()+Datos.getActual());
  }]);
