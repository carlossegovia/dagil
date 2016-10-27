'use strict';

/**
 * @ngdoc overview
 * @name desarrolloAgilApp
 * @description
 * # desarrolloAgilApp
 *
 * Main module of the application.
 */
angular
  .module('desarrolloAgilApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .factory ('Datos',function () {
    var token;
    var Datos={};
    var actual;
    Datos.setActual = function (user){
      actual=user;
    };
    Datos.getActual = function (){
      return actual;
    };
    Datos.setToken = function (item){
      token=item;
    };
    Datos.getToken = function (){
      return token;
    };
    return Datos;

  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
