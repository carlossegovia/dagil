'use strict';

/**
 * @ngdoc service
 * @name desarrolloAgilApp.Api
 * @description
 * # Api
 * Service in the dagilApp.
 */
angular.module('desarrolloAgilApp')
  .factory('CurrentUser', function ($resource) {
    return {
      get: function (token) {
        return $resource('https://api.github.com/user',null,{
          query: {
            method: 'GET',
            headers: {
              'Authorization': token
            }
          }
        })
      }
    }})
  .factory('User', function ($resource) {
     return {
        get: function (token) {
          return $resource('https://api.github.com/users/:username/',null,{
            query: {
              method: 'GET',
              headers: {
                'Authorization': token
              }
            }
          })
        }
      }})
  .factory('Repos', function ($resource) {
    return {
      get: function (token) {
        return $resource('https://api.github.com/users/:username/repos/',null,{
          query: {
            method: 'GET',
            isArray: true,
            headers: {
              'Authorization': token
            }
          }
        })
      }
    }
  });
